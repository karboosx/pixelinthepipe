<!DOCTYPE html>
<html>
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

	<h2>Editor</h2>

	<div id="viewport">
		<div class="centerBlock">
		    <div id="screen" class="cell">
		        <div id="text">Input factory size</div>
			    <form action="game.php">
				    <input type="hidden" name="factory" value="empty">
				    <input type="hidden" name="editor" value="empty">
			        <div>
				        <label for="sizeX">X size</label>
				        <input type="number" class="input" name="sizeX" id="sizeX" value="30">
			        </div>
			        <div>
				        <label for="sizeY">Y size</label>
				        <input type="number" class="input" name="sizeY" id="sizeY" value="20">
			        </div>
				    <button id="startEditor" class="input input-button">Start Editor</button>
			    </form>
		    </div>
		</div>
	</div>
	<a class="back" href="index.html">Back to menu</a>

<?php echo include "analytics.php"; ?>
</body>
</html>