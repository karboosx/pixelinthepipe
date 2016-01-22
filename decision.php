<!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <title>Pixel in the Pipe</title>
    <script src="js/jquery.js"></script>
    <script src="js/jquery-ui.js"></script>

    <script src="js/helpers.js"></script>
    <script src="js/decisions.js"></script>
    <script src="js/decision.js"></script>
    <link rel="stylesheet" href="css/intro.css">
	<meta name="factory" content="<?php echo(isset($_GET['factory']) ? $_GET['factory'] : 'tutorial1'); ?>">
    <link href='http://fonts.googleapis.com/css?family=VT323' rel='stylesheet' type='text/css'>
</head>
<body>
<h1><a href="index.html">Pixel in the Pipe!</a></h1>

<h2>Make a decision!</h2>

<div id="viewport">
    <div id="screen">
        <div id="text"></div>
        <a id="nextFrame" href="#">NEXT</a>
    </div>
    <div id="decision" style="display: none">

    </div>
</div>

<?php echo include "analytics.php"; ?>
</body>
</html>