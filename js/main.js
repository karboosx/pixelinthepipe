    var factoryID = $("meta[name='factory']").attr("content");
    var reset = $("meta[name='reset']").attr("content");
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
        else
            game = new Game();

        game.setMoney(1000);

        game.setupFactory(
            function () {
                return game.addFactory(game.newBasicFactory(factoryLevels[factoryID]['name'], factoryLevels[factoryID]['subname']), factoryLevels[factoryID]['itemsToGenerate']);
            },
            function (factory) {
                factoryLevels[factoryID]['map'](factory);
                if (factoryLevels[factoryID]['objectives'] != undefined)
                    factoryLevels[factoryID]['objectives'](this, factory);
            }
        );

        var cookBook = new CookBook();
        if (factoryLevels[factoryID]['cookbook'] != undefined) {
            cookBook.initCookBook(factoryLevels[factoryID]['cookbook']);
            game.allowedItems = factoryLevels[factoryID]['cookbook'];
            $('#cookbook').click(function () {
                if ($('#bookWindow').hasClass('hide'))
                    $('#bookWindow').removeClass('hide');
                else
                    $('#bookWindow').addClass('hide');
            });
            $('#bookWindow').draggable();
        }else{
            $('#cookbook').click(function () {
                cookBook.noCookbook();
            });
        }

        game.create();

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