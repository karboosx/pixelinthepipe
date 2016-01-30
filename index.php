<!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <title>Pixel in the Pipe</title>
    <script src="js/jquery.js"></script>
    <script src="js/jquery-ui.js"></script>

    <script src="js/helpers.js"></script>
    <link rel="stylesheet" href="css/intro.css">

    <!-- You want to cheat? or worse... steel my code?! You bastard! I tell my mom!! -->
    <!-- Just kidding :) Feel free to use whatever you want :) -->

    <link href='http://fonts.googleapis.com/css?family=VT323' rel='stylesheet' type='text/css'>
</head>
<body class="main">
<div class="ornament left"></div>
<div class="ornament right"></div>
	<h1><a href="index.html">Pixel in the Pipe!</a></h1>
	<div id="viewport">
		<div class="newgame">
			<a href="intro.html">New Game</a>
		</div>
		<div class="centerBlock">
			<div id="screen" class="cell" style="width: 50%">
				<div class="text">
					<a class="stage-border" href="stages.html">Select level</a>
					<a class="stage-border" href="editor.html">Editor</a>
				</div>
			</div>
			<div id="screen" class="cell" style="width: 50%">
				<div class="text">
					<a class="stage-border" href="extra.html">Select extra level</a>
					<a class="stage-border" href="save.html">Save Level</a>
				</div>
			</div>
		</div>
		<div class="text">
			<a class="stage-border" href="credits.html">Credits</a>
		</div>

	</div>
	<a  href="https://twitter.com/karboosx">Created by Michał Karbowiak</a>
</div>

<?php echo include "analytics.php"; ?>
</body>
</html>