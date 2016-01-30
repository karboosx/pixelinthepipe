<!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <title>Pixel in the Pipe</title>
    <script src="js/jquery.js"></script>
    <script src="js/jquery-ui.js"></script>

    <script src="js/item.js"></script>
    <script src="js/levels.js"></script>

    <link rel="stylesheet" href="css/intro.css">
    <link rel="stylesheet" href="css/stages.css">

    <link href='http://fonts.googleapis.com/css?family=VT323' rel='stylesheet' type='text/css'>
</head>
<body class="main">
<div class="ornament left"></div>
<div class="ornament right"></div>
<h1><a href="index.html">Pixel in the Pipe!</a></h1>

<div id="viewport-big" class="no-background">
    <div id="screen">
	    <?php

	    include "connect.php";

	    if (isset($_GET['page']))
	        $page = (int) $_GET['page'];
	    else
		    $page = 0;

	    $itemsPerPage = 10;

	    $file = $pdo->prepare('select * FROM levels order by id limit :startID,:limit;');

	    $startID = $page*$itemsPerPage;

	    $file->bindParam(':startID', $startID, PDO::PARAM_INT);
	    $file->bindParam(':limit', $itemsPerPage, PDO::PARAM_INT);
	    $file->execute();

	    $difficult = [
		    'supereasy' => 'Super easy',
		    'easy' => 'Easy',
		    'normal' => 'Normal',
		    'hard' => 'Hard',
	    ];

	    foreach ($file->fetchAll() as $level){
		    ?>
		    <a href="extra_<?php echo $level['filename'] ?>.html" class="level">
			    <h3><?php echo $level['name'] ?></h3>
			    <h4><?php echo $level['subname'] ?></h4>
			    <p class="<?php echo $level['difficult'] ?>-color">[<?php echo $difficult[$level['difficult']] ?>]</p>
			    <p></p>
		    </a>
	        <?php
	    }

	    ?>
    </div>
</div>
<a class="back" href="index.html">Back to menu</a>

<?php echo include "analytics.php"; ?>
</body>
</html>