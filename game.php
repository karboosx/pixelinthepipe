<!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <title>Pixel in the Pipe</title>
    <script src="js/jquery.js"></script>
    <script src="js/jquery-ui.js"></script>

	<script src="js/effect.js"></script>
	<script src="js/save.js"></script>
	<script src="js/item.js"></script>
    <script src="js/levels.js"></script>
    <script src="js/animation.js"></script>
    <script src="js/helpers.js"></script>
    <script src="js/objective.js"></script>
    <script src="js/behavior.js"></script>
    <script src="js/factory.js"></script>
    <script src="js/gameobject.js"></script>
    <script src="js/render.js"></script>
    <script src="js/game.js"></script>
	<script src="js/cookbook.js"></script>
	<script src="js/manual.js"></script>
    <meta name="factory" content="<?php echo(isset($_GET['factory']) ? $_GET['factory'] : 'tutorial1'); ?>">
    <meta name="reset" content="<?php echo(isset($_GET['reset']) ? $_GET['reset'] : 'no'); ?>">
    <meta name="sizeX" content="<?php echo(isset($_GET['sizeX']) ? $_GET['sizeX'] : 'null'); ?>">
    <meta name="sizeY" content="<?php echo(isset($_GET['sizeY']) ? $_GET['sizeY'] : 'null'); ?>">
    <meta name="editor" content="<?php echo(isset($_GET['editor']) ? $_GET['editor'] : 'null'); ?>">
    <meta name="extraLevel" content="<?php echo(isset($_GET['extralevel']) ? $_GET['extralevel'] : 'null'); ?>">

    <!-- You want to cheat? or worse... steel my code?! You bastard! I tell my mom!! -->
    <!-- Just kidding :) Feel free to use whatever you want :) -->

    <script src="js/main.js"></script>
    <link rel="stylesheet" href="css/game.css">

    <!-- You want to cheat? or worse... steel my code?! You bastard! I tell my mam!! -->
    <!-- Just kidding :) Feel free to use whatever you want :) -->

    <link href='http://fonts.googleapis.com/css?family=VT323' rel='stylesheet' type='text/css'>
</head>
<body>
<div class="info-viewport overlay red" id="error-viewport" style="min-width: 600px;">
    <div class="info-screen" id="error-screen">
        <div class="info-text" id="error-text">

        </div>
        <div class="info-subtext" id="error-subtext">

        </div>
    </div>

</div>
<a id="nextday" style="top: -108px;">Next Day</a>
	<div id="top">
		<a href="index.html" class="button">
			Back to menu
		</a>
		<div class="pilot">
			<div class="text">Money </div>
			<div id="money" class="text" style="width: 87px; text-align: right;">-</div>
		</div>
		<div id="objective"></div>

	</div>

<div id="game">
    <div id="tools">
        <div class="gui-window">
            <div class="gui-title">Tools</div>
            <div class="gui-body">
                <div class="tool" title="Pin - Put text" data-tool="object" data-object="pin">
                    <div style="background: url(images/pin.png)"></div>
                </div>
                <div class="tool" title="Wrench - Change object settings" data-tool="info">
                    <div style="background: url(images/wrench.png)"></div>
                </div>
                <div class="tool" title="Mark as unbreakable" data-tool="mark" data-mark="red">
                    <div style="background: url(images/cursor-error.png)"></div>
                </div>
                <div class="tool" title="Plunger - Push items to pipe" data-tool="pusher">
                    <div style="background: url(images/pusher.png)"></div>
                </div>
                <div class="tool activeTool" title="Create pipe" data-tool="pipe">
                    <div style="background: url(images/plumb.png)"></div>
                </div>
                <div class="tool" title="Create transportation line" data-tool="line">
                    <div style="background: url(images/transporter.png)"></div>
                </div>
                <div class="tool" title="Create wire" data-tool="cable">
                    <div style="background: url(images/cable.png)"></div>
                </div>
                <div class="tool" title="Create wall block" data-tool="object" data-object="block">
                    <div style="background: url(images/block.png)"></div>
                </div>
                <div class="tool" title="Create fireplace" data-tool="object" data-object="fireplace">
                    <div style="background: url(images/fireplace1.png)"></div>
                </div>
                <div class="tool" title="Create trash" data-tool="object" data-object="deleter">
                    <div style="background: url(images/deleter1.png)"></div>
                </div>
                <div class="tool" title="Create combiner" data-tool="object" data-object="combiner">
                    <div style="background: url(images/asembly.png)"></div>
                </div>
                <div class="tool" title="Create filter" data-tool="object" data-object="filter">
                    <div style="background: url(images/aaa.png)"></div>
                </div>
                <div class="tool" title="Create storage container" data-tool="object" data-object="storage">
                    <div style="background: url(images/cos.png)"></div>
                </div>
                <div class="tool" title="Create item generator" data-tool="object" data-object="generator">
                    <div style="background: url(images/generator.png)"></div>
                </div>
                <div class="tool" title="Create separator" data-tool="object" data-object="separator">
                    <div style="background: url(images/separator.png)"></div>
                </div>
                <div class="tool" title="Create freezer" data-tool="object" data-object="freezer">
                    <div style="background: url(images/freezer.png)"></div>
                </div>
                <div class="tool" title="Create coffee machine" data-tool="object" data-object="coffeemachine">
                    <div style="background: url(images/coffeemachine.png)"></div>
                </div>
                <div class="tool" title="Create heater" data-tool="object" data-object="heater">
                    <div style="background: url(images/heater.png)"></div>
                </div>
                <div class="tool" title="Create Electricity generator" data-tool="object" data-object="electrogenerator">
                    <div style="background: url(images/electrogenerator.png)"></div>
                </div>
                <div class="tool" title="Create Fermenter" data-tool="object" data-object="fermenter">
                    <div style="background: url(images/ferm.png)"></div>
                </div>
                <div class="tool" title="Create Distiller" data-tool="object" data-object="distiller">
                    <div style="background: url(images/destyl.png)"></div>
                </div>
                <div class="tool" title="Create Computer Combiner" data-tool="object" data-object="computerCombiner">
                    <div style="background: url(images/computer_asembly.png)"></div>
                </div>
                <div class="tool" title="Create Refinery" data-tool="object" data-object="refinery">
                    <div style="background: url(images/refinery.png)"></div>
                </div>
            </div>
        </div>

    </div>
	<div id="cardpad">
		<div id="closecardpard" class="close"></div>
		<div id="storyscreen" class="hide">
			<div id="text">No text</div>
			<a id="nextFrame" href="#">NEXT</a>
		</div>
	</div>

    <div id="viewport2"></div>
    <div id="viewport">

        <canvas id="screen">

        </canvas>
    </div>

	<div class="books">
	    <div id="cookbook" title="Open / Close cookbook"></div>
		<div id="manual" title="Open / Close manual"></div>
		<div id="save" title="Save this factory"></div>
	</div>

    <div id="bookWindow" class="hide bookWindow">
        <div class="bookmarks">
        </div>
	    <div class="left">
            <div class="text"></div>
        </div>
        <div class="right">
            <div class="text"></div>
        </div>

		<div class="arrows">
			<div class="arrow left"></div>
			<div class="arrow right"></div>
		</div>
    </div>

	<div id="jsonShow" class="bookWindow">
        <textarea></textarea>
    </div>

    <div id="manualWindow" class="hide bookWindow">
        <div class="bookmarks">
        </div>
	    <div class="left">
            <div class="text"></div>
        </div>
        <div class="right">
            <div class="text"></div>
        </div>

		<div class="arrows">
			<div class="arrow left"></div>
			<div class="arrow right"></div>
		</div>
    </div>

    <div id="pinEditWindow" class="gui-window big gui-window-float hide">
        <div class="gui-title">Edit text
            <div id="pinClose" class="close"></div>
        </div>
        <div class="gui-body">
            <textarea id="pinEdit" data-x="-1" data-y="-1"></textarea>
        </div>
    </div>
    <div id="infoWindow" class="gui-window big gui-window-float hide">
        <div class="gui-title" id="infoText">
            <div id="infoTextVal"></div>
            <div id="infoClose" class="close"></div>
        </div>
        <div class="gui-body">
            <div id="infoSwitch" data-x="-1" data-y="-1" class="switch-on inline"></div>

            <div class="infoWindowInline">
	            <div class="infoWindowText">
		            <p id="infoWindowText"></p>
	            </div>
            </div>
	        <div id="autoPushSwitch" data-x="-1" data-y="-1" class="switch-on theme2 inline"></div>
	        <div id="pushSwitchInfo" class="infoWindowInline">
		        <div class="infoWindowText pushSwitch">
			        <p>Turn on if you want to immediately push all items to pipe</p>
		        </div>
	        </div>
            <table id="infoFilter" class="inline">
                <tr>
                    <td></td>
                    <td><select data-x="-1" data-y="-1" data-direction="left" id="info-top" class="gui-button gui-select"></select></td>
                    <td></td>
                </tr>
                <tr>
                    <td><select data-x="-1" data-y="-1" data-direction="left" id="info-left" class="gui-button gui-select"></select></td>
                    <td></td>
                    <td><select data-x="-1" data-y="-1" data-direction="left" id="info-right" class="gui-button gui-select"></select></td>
                </tr>
                <tr>
                    <td></td>
                    <td><select data-x="-1" data-y="-1" data-direction="left" id="info-bottom" class="gui-button gui-select"></select></td>
                    <td></td>
                </tr>

            </table>

			<div id="infoSelectItem" class="">
				<div class="windowHeader">Combine Item</div>
				<select id="info-item" class="gui-button gui-select gui-full" data-x="-1" data-y="-1"></select>

            </div>


        </div>
    </div>

    <div class="info-viewport overlay" id="info-viewport">
        <div class="info-screen" id="info-screen">
            <div class="info-text" id="info-text">

            </div>
            <div class="info-subtext" id="info-subtext">

            </div>
        </div>

    </div>
    <div class="info-viewport green" id="finish-viewport">
        <div class="info-screen" id="finish-screen">
            <div class="info-text" id="finish-text">

            </div>
            <div class="info-subtext" id="finish-subtext">

            </div>
        </div>

    </div>
    <div class="info-viewport red" id="fail-viewport">
        <div class="info-screen" id="fail-screen">
            <div class="info-text" id="fail-text">

            </div>
            <div class="info-message" id="fail-message">

            </div>
            <div class="info-subtext" id="fail-subtext">

            </div>
        </div>

    </div>
    <div class="info-viewport red" id="nocookbook-viewport">
        <div class="info-screen" id="nocookbook-screen">
            <div class="info-text" id="nocookbook-text">

            </div>
        </div>

    </div>
    <div id="call_log"></div>
</div>
<div id="loading">
    <div class="info-viewport">
        <div class="info-screen">
            <div class="info-text">
                Loading
            </div>
        </div>

    </div>
</div>
<?php echo include "analytics.php"; ?>
</body>
</html>