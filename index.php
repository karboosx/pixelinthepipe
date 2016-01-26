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
<body>
<h1><a href="index.html">Pixel in the Pipe!</a></h1>

<div id="viewport" class="centerBlock">
    <div id="screen" class="cell">
        <div id="text">
            <a href="intro.html">New Game</a>
            <a href="stages.html">Select level</a>
	        <a href="editor.html">Editor</a>
        </div>
    </div>
    <div id="screen" class="cell">
        <div id="text">
            <a href="save.html">Save Level</a>
            <a href="extra.html">Select extra level</a>
            <a href="credits.html">Credits</a>
        </div>
    </div>
</div>
<a href="https://twitter.com/karboosx">Created by Michał Karbowiak</a>

<?php echo include "analytics.php"; ?>
</body>
</html>