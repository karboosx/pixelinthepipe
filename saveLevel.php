<?php

/*
 * WARNING!!
 * This script is terrible, and I know that :(
 * Please, don't look at it!
 */
$error = null;
$success = null;

include 'connect.php';

if (isset($_POST['data']) && isset($_POST['data']) && isset($_POST['password'])) {
	$json = json_decode($_POST['data'], true);
	$password = $_POST['password'];

	function saveFile($filename, $password, $data, $savePassword)
	{
		global $mapBaseDir, $success, $pdo, $error;

		file_put_contents($mapBaseDir . $filename.'.json', json_encode($data));

		if (isset($data['name'])){
			$name = $data['name'];
		}else{
			$name = $filename;
		}

		if (isset($data['subname'])){
			$subname = $data['subname'];
		}else{
			$subname = '';
		}

		if (isset($data['difficult'])){
			$difficult = $data['difficult'];
		}else{
			$difficult = 'easy';
		}


		if ($savePassword) {
			try {
				$file = $pdo->prepare('insert into levels(filename,password,name,subname,difficult) VALUES (:filename,:password,:name,:subname,:difficult);');

				$hash = sha1($password);

				$file->bindParam(':filename', $filename, PDO::PARAM_STR);
				$file->bindParam(':name', $name, PDO::PARAM_STR);
				$file->bindParam(':subname', $subname, PDO::PARAM_STR);
				$file->bindParam(':difficult', $difficult, PDO::PARAM_STR);
				$file->bindParam(':password', $hash, PDO::PARAM_STR);
				$file->execute();
			}catch (Exception $e){
				$error = 'Error!';
			}
		}else{
			try {
				$file = $pdo->prepare('update levels set filename = :filename, name = :name, subname = :subname,difficult = :difficult WHERE filename = :filename;');

				$file->bindParam(':filename', $filename, PDO::PARAM_STR);
				$file->bindParam(':name', $name, PDO::PARAM_STR);
				$file->bindParam(':subname', $subname, PDO::PARAM_STR);
				$file->bindParam(':difficult', $difficult, PDO::PARAM_STR);
				$file->execute();
			}catch (Exception $e){
				$error = 'Error!';
			}
		}

		$success = 'Level saved!';
	}


	if (preg_match('/^[a-zA-Z0-9]+$/', $_POST['name'])) {

		$name = $_POST['name'];
		$data = [];
		//TODO validation
		if (isset($json['objects'])){
			$data = ['map'=>$json, 'name'=> $name,'money'=>-1];
		}else {
			$data = $json;//temporary
		}

		$file = $pdo->prepare('SELECT * FROM levels WHERE `filename` LIKE :name LIMIT 1');

		$file->bindParam(':name',$name,PDO::PARAM_STR);
		$file->execute();

		$result = $file->fetch();


		if (!$result) {
			saveFile($name, $password, $data, true);
		} else {

			if ($result['password'] == sha1($password)) {
				saveFile($name, $password, $data, false);

			} else {
				$error = 'Wrong password';
			}
		}
	} else {
		$error = 'Level name must contain only digits and letters.';
	}

}

include 'save.php';