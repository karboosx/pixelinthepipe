    var factoryID = $("meta[name='factory']").attr("content");
    var reset = $("meta[name='reset']").attr("content");
    var sizeX = $("meta[name='sizeX']").attr("content");
    var sizeY = $("meta[name='sizeY']").attr("content");

var startFunction = function () {

    if (factoryLevels[factoryID] == undefined) {

        $('#error-text').html('Factory not found');
        $('#error-subtext').html('<a href="index.html">GO TO MENU</a>');

        var finishViewport = $('#error-viewport');

        finishViewport.fadeIn(500, function () {
        }).show().zIndex(1000);

    } else {
        if (factoryLevels[factoryID].hasOwnProperty('x') && factoryLevels[factoryID].hasOwnProperty('y'))
            var game = new Game(factoryLevels[factoryID]['x'], factoryLevels[factoryID]['y']);
        else if (sizeX != 'null' && sizeY != 'null')
            game = new Game(parseInt(sizeX),parseInt(sizeY));
        else
            game = new Game();

        game.setMoney(1000);

        game.setupFactory(
            function () {
                return game.addFactory(game.newBasicFactory(factoryLevels[factoryID]['name'], factoryLevels[factoryID]['subname']), factoryLevels[factoryID]['itemsToGenerate']);
            },
            function (factory) {
                if (typeof factoryLevels[factoryID]['map'] == 'string'){
                    factoryLevels[factoryLevels[factoryID]['map']]['map'](factory);
                }else {
                    factoryLevels[factoryID]['map'](factory);
                }
                if (factoryLevels[factoryID]['objectives'] != undefined)
                    factoryLevels[factoryID]['objectives'](this, factory);

                if (factoryLevels[factoryID]['objectLimits'] != undefined)
                factory.setObjectLimits(factoryLevels[factoryID]['objectLimits']);

            }
        );

        if (factoryLevels[factoryID]['objectives'] == undefined)
            game.noObjectives();

        game.create();

        var cookBook = new CookBook();
        if (factoryLevels[factoryID]['cookbook'] != undefined) {
            cookBook.initManual(factoryLevels[factoryID]['cookbook']);
            game.allowedItems = factoryLevels[factoryID]['cookbook'];

            var $bookWindow = $('#bookWindow');
            $('#cookbook').click(function () {
                if ($bookWindow.hasClass('hide'))
                    $bookWindow.fadeIn(100, function(){
                        $(this).removeClass('hide');
                    });
                else
                    $bookWindow.fadeOut(100, function(){
                        $(this).addClass('hide');
                    });
            });
            $bookWindow.draggable();
        }else{
            $('#cookbook').click(function () {
                cookBook.noManual();
            });
        }

        var manual = new Manual(game);
        if (factoryLevels[factoryID]['tools'] != undefined) {
            manual.initManual(factoryLevels[factoryID]['tools']);
            game.allowedItems = factoryLevels[factoryID]['tools'];

            var $manualWindow = $('#manualWindow');
            $('#manual').click(function () {
                if ($manualWindow.hasClass('hide'))
                    $manualWindow.fadeIn(100, function(){
                        $(this).removeClass('hide');
                    });
                else
                    $manualWindow.fadeOut(100, function(){
                        $(this).addClass('hide');
                    });
            });
            $manualWindow.draggable();
        }else{
            $('#manual').click(function () {
                manual.noManual();
            });
        }

        if (factoryLevels[factoryID]['nextFactory'] != undefined)
            game.nextFactory = factoryLevels[factoryID]['nextFactory'];

        if (factoryLevels[factoryID].hasOwnProperty('tools')) {
            $('.tool').each(function () {
                var tool = $(this).data('tool');
                var object = $(this).data('object');

                var allow = false;
                for (var i in factoryLevels[factoryID]['tools']) {
                    var toolAllowed = factoryLevels[factoryID]['tools'][i];

                    if (toolAllowed == tool || toolAllowed == object) {
                        allow = true;
                        break;
                    }
                }

                if (!allow) {
                    $(this).hide();
                }
            });
        }

        game.start();

        if (factoryLevels[factoryID]['money'] != undefined) {
            game.setMoney(factoryLevels[factoryID]['money']);
        }

        if (factoryLevels[factoryID]['animation'] != undefined && reset != 'yes') {
            var intro = new IntroAnimation('#storyscreen', factoryLevels[factoryID]['animation']);
        }

        if (factoryLevels[factoryID]['failMessage'] != undefined) {
            game.setFailMessage(factoryLevels[factoryID]['failMessage']);
        }


    }

    $('.ui-helper-hidden-accessible').hide();
};


$(startFunction);