<!DOCTYPE html>
<head lang="en">
	<meta charset="UTF-8">
	<title>Pixel in the Pipe</title>
	<script src="js/jquery.js"></script>
	<script src="js/jquery-ui.js"></script>

	<script src="js/helpers.js"></script>
	<link rel="stylesheet" href="css/intro.css">

	<link href='http://fonts.googleapis.com/css?family=VT323' rel='stylesheet' type='text/css'>
</head>
<body>
<h1><a href="index.html">Pixel in the Pipe!</a></h1>

<h2>Save level</h2>

<div id="viewport" class="centerBlock">
	<div id="screen" class="cell">
		<div id="text">Input factory data</div>
		<?php if (!is_null($success)) { ?>
			<div class="success"><?php echo $success ?></div>
		<?php } ?>
		<?php if (!is_null($error)) { ?>
			<div class="error"><?php echo $error ?></div>
		<?php } ?>

		<form action="savelevel.php" method="post">
			<div>
				<label for="sizeX">X size</label>
				<textarea class="input" name="data"></textarea>
			</div>
			<div>
				<label for="name">Name</label>
				<input type="text" class="input" name="name" id="name">
			</div>
			<div>
				<label for="password">Password</label>
				<input type="password" class="input" name="password" id="password">
			</div>
			<button id="startEditor" class="input input-button">Save level</button>
		</form>
	</div>
</div>
<a class="back" href="index.html">Back to menu</a>

<?php echo include "analytics.php"; ?>
</body>
</html>