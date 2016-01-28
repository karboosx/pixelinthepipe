    var factoryID = $("meta[name='factory']").attr("content");
    var extraLevel = $("meta[name='extraLevel']").attr("content");
    var reset = $("meta[name='reset']").attr("content");
    var sizeX = $("meta[name='sizeX']").attr("content");
    var sizeY = $("meta[name='sizeY']").attr("content");

    var startFunction = function () {

        $('.info-viewport').hide();
        if (factoryLevels[factoryID] == undefined) {

            $('#error-text').html('Factory not found');
            $('#error-subtext').html('<a href="index.html">GO TO MENU</a>');

            var finishViewport = $('#error-viewport');

            finishViewport.fadeIn(500, function () {
            }).show().zIndex(1000);

        } else {
            try {
                if (factoryLevels[factoryID].hasOwnProperty('x') && factoryLevels[factoryID].hasOwnProperty('y'))
                    var game = new Game(factoryLevels[factoryID]['x'], factoryLevels[factoryID]['y']+1);
                else if (sizeX != 'null' && sizeY != 'null')
                    game = new Game(parseInt(sizeX), parseInt(sizeY));
                else
                    game = new Game();

                game.setMoney(1000);

                if (factoryLevels[factoryID]['offset'] != undefined)
                    game.setFactoryOffset(factoryLevels[factoryID]['offset']);

                game.setupFactory(
                    function () {
                        return game.addFactory(game.newBasicFactory(factoryLevels[factoryID]['name'], factoryLevels[factoryID]['subname']), factoryLevels[factoryID]['itemsToGenerate']);
                    },
                    function (factory) {
                        if (typeof factoryLevels[factoryID]['map'] == 'string') {
                            factoryLevels[factoryLevels[factoryID]['map']]['map'](factory);
                        } else if (typeof factoryLevels[factoryID]['map'] == 'object') {
                            factory.createBaseFloor();
                            factory.loadByJson(factoryLevels[factoryID]['map']);
                        } else {
                            factoryLevels[factoryID]['map'](factory);
                        }
                        if (factoryLevels[factoryID]['objectives'] != undefined) {

                            if (typeof factoryLevels[factoryID]['objectives'] == 'object') {
                                for (var i = 0; i < factoryLevels[factoryID]['objectives'].length; i++) {
                                    var objective = factoryLevels[factoryID]['objectives'][i];

                                    game.addObjective(objective.objective, objective.animation);
                                }
                            } else {
                                factoryLevels[factoryID]['objectives'](this, factory);
                            }
                        }


                        if (factoryLevels[factoryID]['objectLimits'] != undefined)
                            factory.setObjectLimits(factoryLevels[factoryID]['objectLimits']);

                    }
                );

                if (factoryLevels[factoryID]['objectives'] == undefined)
                    game.noObjectives();

                game.create();

                var cookBook = new CookBook();
                if (factoryLevels[factoryID]['cookbook'] != undefined) {
                    cookBook.initCookBook(factoryLevels[factoryID]['cookbook']);
                    game.allowedItems = factoryLevels[factoryID]['cookbook'];

                    var $bookWindow = $('#bookWindow');
                    $('#cookbook').click(function () {
                        if ($bookWindow.hasClass('hide'))
                            $bookWindow.fadeIn(100, function () {
                                $(this).removeClass('hide');
                            });
                        else
                            $bookWindow.fadeOut(100, function () {
                                $(this).addClass('hide');
                            });
                    });
                    $bookWindow.draggable();
                } else {
                    cookBook.noCookbook();
                }

                var manual = new Manual(game);
                if (factoryLevels[factoryID]['tools'] != undefined) {
                    manual.initManual(factoryLevels[factoryID]['tools']);

                    var $manualWindow = $('#manualWindow');
                    $('#manual').click(function () {
                        if ($manualWindow.hasClass('hide'))
                            $manualWindow.fadeIn(100, function () {
                                $(this).removeClass('hide');
                            });
                        else
                            $manualWindow.fadeOut(100, function () {
                                $(this).addClass('hide');
                            });
                    });
                    $manualWindow.draggable();
                } else {
                    manual.noManual();
                }

                var save = new Save(game.getFactory(0));

                if (factoryLevels[factoryID]['allowSave'] != undefined && factoryLevels[factoryID]['allowSave'] == true) {
                    save.initSave();
                } else {
                    save.noSave();
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
                    intro.setParent($('#cardpad'));
                    intro.setDraggable($('#cardpad'));
                }else{
                    $('#cardpad').hide();
                }

                if (factoryLevels[factoryID]['failMessage'] != undefined) {
                    game.setFailMessage(factoryLevels[factoryID]['failMessage']);
                }
            }catch (e){
                $('#error-text').html('Corrupted level!');
                $('#error-subtext').html('<a href="index.html">GO TO MENU</a>');

                var finishViewport = $('#error-viewport');

                finishViewport.fadeIn(500, function () {
                }).show().zIndex(1000);

            }


        }

        $('.ui-helper-hidden-accessible').hide();

    };

    if (extraLevel == 'null') {
        $(startFunction);
    }else{
        $.get('levels/'+extraLevel+'.json', function (data) {
            factoryID = extraLevel;
            factoryLevels = {};
            factoryLevels[extraLevel] = data;
            $(startFunction);
        }).fail(function () {
            factoryID = undefined;
            $(startFunction);
        })
    }