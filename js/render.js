function Render(target_, cursor_) {

    var target = $(target_);

    var cursor = $(cursor_);

    this.rendering = false;

    var storage = $('#storage');

    this.hasToRefreshObjectives = true;
    this.stopRenderObjective = false;

    var timeouts = {
        errorMoney: undefined,
        timer: undefined,
        infoFactory: undefined,
        errorObjectCountReached:undefined,
        moneyAnimation:undefined
    };

    this.finishSetup = 'basic';

    var finishSetup = {
        basic:{
            text:'Earned salary!',
            subtext:'Your family can survive!',
            image:'money.png'
        },
        home:{
            text:'Earned kisses!',
            subtext:'Your wife is pleased',
            image:'gift.png'
        }
    };

    var data = {
        timerSec: 0
    };

    var errorMessage = '';

    this.posX = null;
    this.posY = null;

    var $objective = $('#objective');
    var $objectiveWindow = $('#top');
    var $objectiveComplete = $('.objective-complete');

    var canvas = target[0].getContext('2d');

    canvas.imageSmoothingEnabled = false;

    var images = {};
    var loadedImages = 0;

    this.getImage = function (name) {
        return images[name];
    };

    this.toJson = function () {
        return {
            name: 'Render'
        };
    };

    this.loadData = function () {
        for (var id in imagesPath) {
            images[imagesPath[id].name] = new Image();
            images[imagesPath[id].name].src = imagesPath[id].src;

            imagesData[imagesPath[id].name] = imagesPath[id];

            images[imagesPath[id].name].onload = function () {
                loadedImages++;
            };
        }

    };

    this.getTarget = function () {
        return target;
    };

    this.changeBackground = function (name) {
        target.css('background', 'url(' + images[name].src + ')');
    };

    this.ifLoadedImages = function () {
        return loadedImages >= imagesPath.length;

    };

    this.loading = function () {

    };

    this.error = function (type) {
        if (type == 'money') {
            $('#money').css('background', 'url(images/gui-text-error.png)');
            errorMessage = 'Not enough money';
            if (timeouts.errorMoney != undefined) clearTimeout(timeouts.errorMoney);

            timeouts.errorMoney = setTimeout(function () {
                $('#money').css('background', '');
                errorMessage = '';
            }, 800);
        }else if (type == 'objectCountReached') {
            errorMessage = 'Can\'t place that many object of this type!';
            if (timeouts.errorObjectCountReached != undefined) clearTimeout(timeouts.errorObjectCountReached);

            timeouts.errorObjectCountReached = setTimeout(function () {
                errorMessage = '';
            }, 1800);
        }
    };

    this.startTimer = function () {
        timeouts.timer = setInterval(function () {
            data.timerSec++;
            $('#timer').html(toHHMMSS(data.timerSec));
        }, 1000);
    };

    this.info = function (type, data, addData) {
        if (type == 'money') {
            $('#money').html(data + ' $');


        } else if (type == 'addMoney') {
            $('#money').append(' (+' + addData + ' $)').parent().addClass('green');

            if (timeouts.errorMoney != undefined) clearTimeout(timeouts.errorMoney);

            timeouts.errorMoney = setTimeout(function () {
                $('#money').html(data + ' $').parent().removeClass('green');;
                errorMessage = '';

            }, 800);
        }
    };


    this.render = function (game, type, nextFrame) {

        canvas.clearRect (0, 0, target.width(), target.height());
        if (!this.ifLoadedImages())
            return this.loading();

        if (type.type == 'factory') {
            this.renderFactory(game, type.id, nextFrame);
            if (gameOptions.drawItemsCounts)
                this.renderItemsCounts(game, type.id);

        }

        if (this.posX != null && this.posY != null) {
            if (errorMessage != '')
                this.renderCursor(game, 'cursor-error', 0);
            else
                this.renderCursor(game, 'cursor', 0);
        }


        if (gameOptions.drawIO)
            this.drawIO(game, type.id);

        if (gameOptions.drawItemsNames)
            this.drawItemsMixtures(game, type.id);

        if (this.hasToRefreshObjectives)
            this.renderObjective(game, 0);

    };

    this.renderFactoryInfo = function (game, type) {
        var factory = game.getFactory(type.id);

        $('#info-text').html(factory.name);
        $('#info-subtext').html(factory.subname);

        var infoViewport = $('#info-viewport');
        var infoViewportScreen = $('#info-viewport .info-screen');
        
        infoViewport.show();

        infoViewportScreen.fadeIn(500, function () {
            timeouts.infoFactory = setTimeout(function () {
                infoViewport.fadeOut(500);
            }, 3000);
        });
    };


    this.showFinishWindow = function (name) {

        $('#finish-text').html('Objective complete');
        $('#finish-subtext').html(name);

        var finishViewport = $('#finish-viewport');

        finishViewport.fadeIn(500, function () {
            timeouts.infoFactory = setTimeout(function () {
                finishViewport.fadeOut(500);
            }, 3000);
        });

        finishViewport.click(function () {
            $(this).fadeOut(500);
            timeouts.infoFactory = undefined;
        });
    };

    this.showSalaryWindow = function () {
        clearTimeout(timeouts.infoFactory);
        $('#finish-text').html(finishSetup[this.finishSetup].text);
        $('#finish-subtext').html(finishSetup[this.finishSetup].subtext);

        var finishViewport = $('#finish-viewport');

        finishViewport.fadeIn(500, function () {
            timeouts.infoFactory = setTimeout(function () {
                finishViewport.fadeOut(500, function () {
                });
            }, 3000);
        });

        finishViewport.unbind('click').click(function () {
            $(this).fadeOut(500, function () {
            });
            clearTimeout(timeouts.infoFactory);
        });
    };

    this.setFinishSetup = function (setup) {
        if (typeof setup  == 'object'){
            finishSetup['basic'] = setup;
        }else {
            this.finishSetup = setup;
        }
    };

    this.failWindow = function (message) {

        $('#fail-message').hide();
        $('#fail-text').html('Objective failed');

        if (message != undefined) {
            $('#fail-message').html(message).show();
        }

        $('#fail-subtext').html('<a href="factory_by_reset_' +
            $("meta[name='factory']").attr("content") + '.html' +
            '">RESTART</a>');

        var finishViewport = $('#fail-viewport');

        finishViewport.fadeIn(500, function () {
        });
    };

    this.noticeWindow = function (window_, timer, time) {

        if (timer == undefined) timer = 'noticeWindow' + window_;
        if (time == undefined) time = 1000;

        window_ = $(window_);

        var returnFunction = function (window_) {
            return function () {
                if (window_.hasClass('green')) {
                    window_.removeClass('green');
                } else {
                    window_.addClass('green');
                }
            }
        };

        timeouts[timer] = setInterval(returnFunction(window_), time);
    };

    this.stopNoticeWindow = function (timer) {
        if (timer == undefined) timer = 'noticeWindow';
        clearInterval(timeouts[timer]);
    };


    this.renderObjective = function (game, objective_id) {


        if (!this.hasToRefreshObjectives || this.stopRenderObjective)
            return;

        this.hasToRefreshObjectives = false;


        var objective = game.getObjective(objective_id);


        if (objective == undefined) {

            this.noticeWindow('#objectiveWindow');
            if (game.nextFactory != undefined) {
                $objective.html('<div class="text">You can no go to next day!</div>' +
                    '<a href="factory_' + game.nextFactory + '.html" class="button objective-complete">Next Day</a>');
                    $objectiveWindow.addClass('green');

                $('#nextday').attr('href','factory_' + game.nextFactory + '.html').animate({top:0},1500,'easeOutBounce');
                this.startMoneyAnimation();
            } else {
                $objective.html('<div class="text">No objectives</div>');
                this.startMoneyAnimation();
            }
            this.stopRenderObjective = true;
            return;
        }

        if (objective != undefined && objective.calculated != undefined && objective.calculated) {//TODO
            objective.tryToShowAnimation();

            if (!$objectiveComplete.length) {
                $objective.html('<div class="text">' + objective.name + '</div> ');
                if (objective.description != undefined)
                $objective.append('<div class="text">' + objective.description + '</div> ');
                $objectiveWindow.removeClass('green');
            } else {
                this.hasToRefreshObjectives = true;
            }

            if (!objective.canComplete) {
                if (objective.itemsTitle != undefined){
                    $objective.append('<div class="text">'+objective.itemsTitle+'</div> ');
                }

                for (var name in objective.needs) {
                    $objective.append(' <div class="pilot ' + (objective.collectedNeeds[name] >= objective.needs[name] ? 'green' : 'red') + '"> ' +
                        '<div class="text"> ' +
                        (objective.needsText != undefined ? objective.needsText[name] : items[name].name) +
                        ' </div>' +
                        ' <div class="text">' +
                        + objective.collectedNeeds[name] + '/' + objective.needs[name] +
                        (objective.additionItemText != undefined ? objective.additionItemText : '')
                        +'</div> </div> ');
                }

            } else if (!$objectiveComplete.length) {

                //$objective.append('<div class="center"><a href="#" class="gui-button objective-complete" data-objective="' + objective_id + '">Complete</a></div>');
                //$objectiveComplete = $('.objective-complete');
                game.getBehavior().completeObjective(game.getBehavior())();

                if (game.noObjectives()){
                    this.showSalaryWindow(objective.name);
                }else{
                    this.showFinishWindow(objective.name);
                }

            } else {
                this.hasToRefreshObjectives = true;
            }
        } else {
            this.hasToRefreshObjectives = true;
        }
    };


    this.renderCursor = function (game, cursor, frame) {
        canvas.drawImage(images[cursor],//image
            frame * game.sizeX / game.scale,//posX skad bierze obrazek
            0,//posY skad bierze obrazek
            game.sizeX / game.scale,
            game.sizeY / game.scale,
            this.posX * game.sizeX,//posX
            this.posY * game.sizeY,//posY
            game.sizeX,
            game.sizeY
        );

        canvas.fillStyle = "#fa1a1a";
        canvas.font = "18px VT323";
        canvas.textAlign = "center";
        canvas.fillText(errorMessage, this.posX * game.sizeX + game.sizeX / 2, (this.posY + 1) * game.sizeY + game.sizeY / 2);
    };

    function drawIO(game, posX, posY, image, frame, row) {
        canvas.drawImage(images[image],//image
            frame * game.sizeX / game.scale,//posX skad bierze obrazek
            row * game.sizeY / game.scale,//posY skad bierze obrazek
            game.sizeX / game.scale,
            game.sizeY / game.scale,
            posX * game.sizeX,//posX
            posY * game.sizeY,//posY
            game.sizeX,
            game.sizeY
        );
    }


    this.renderErrorOnMap = function (game, posX, posY, errorMessage, frame) {
        if (frame == undefined) frame = 0;

        canvas.drawImage(images['cursor-error'],//image
            frame * game.sizeX / game.scale,//posX skad bierze obrazek
            0,//posY skad bierze obrazek
            game.sizeX / game.scale,
            game.sizeY / game.scale,
            posX * game.sizeX,//posX
            posY * game.sizeY,//posY
            game.sizeX,
            game.sizeY
        );

        canvas.fillStyle = "#fa1a1a";
        canvas.font = "18px VT323";
        canvas.textAlign = "center";
        canvas.fillText(errorMessage, posX * game.sizeX + game.sizeX / 2, (posY + 1) * game.sizeY + game.sizeY / 2);
    };

    this.renderWarningOnMap = function (game, posX, posY, errorMessage, frame) {
        if (frame == undefined) frame = 0;

        canvas.drawImage(images['cursor-warning'],//image
            frame * game.sizeX / game.scale,//posX skad bierze obrazek
            0,//posY skad bierze obrazek
            game.sizeX / game.scale,
            game.sizeY / game.scale,
            posX * game.sizeX,//posX
            posY * game.sizeY,//posY
            game.sizeX,
            game.sizeY
        );

        canvas.fillStyle = "#a56000";
        canvas.font = "18px VT323";
        canvas.textAlign = "center";
        canvas.fillText(errorMessage, posX * game.sizeX + game.sizeX / 2, (posY + 1) * game.sizeY + game.sizeY / 2);
    };

    this.drawWarning = function (obj, game) {

        if (obj != undefined) {
            if (Math.round(obj.objects.length / obj.maxItems * 100) >= 60) {
                drawIO(game, obj.x, obj.y, 'warning', 0, 0);
            }
        }
    };

    this.drawIO = function (game, id) {


        var factory = game.getFactory(id);

        var obj = factory.getObject(this.posX, this.posY);

        if (obj != undefined) {
            var image = 'io';

            if (obj.input.left && obj.output.left) drawIO(game, this.posX - 1, this.posY, image, 0, 0);
            if (obj.input.left && !obj.output.left) drawIO(game, this.posX - 1, this.posY, image, 0, 1);
            if (!obj.input.left && obj.output.left) drawIO(game, this.posX - 1, this.posY, image, 0, 2);

            if (obj.input.right && obj.output.right) drawIO(game, this.posX + 1, this.posY, image, 1, 0);
            if (obj.input.right && !obj.output.right) drawIO(game, this.posX + 1, this.posY, image, 1, 1);
            if (!obj.input.right && obj.output.right) drawIO(game, this.posX + 1, this.posY, image, 1, 2);

            if (obj.input.top && obj.output.top) drawIO(game, this.posX, this.posY - 1, image, 3, 0);
            if (obj.input.top && !obj.output.top) drawIO(game, this.posX, this.posY - 1, image, 3, 1);
            if (!obj.input.top && obj.output.top) drawIO(game, this.posX, this.posY - 1, image, 3, 2);

            if (obj.input.bottom && obj.output.bottom) drawIO(game, this.posX, this.posY + 1, image, 2, 0);
            if (obj.input.bottom && !obj.output.bottom) drawIO(game, this.posX, this.posY + 1, image, 2, 1);
            if (!obj.input.bottom && obj.output.bottom) drawIO(game, this.posX, this.posY + 1, image, 2, 2);

        }

    };
    this.drawItemsMixtures = function (game, id) {

        var factory = game.getFactory(id);

        var obj = factory.getObject(this.posX, this.posY);

        if (obj != undefined) {
            var out = {};

            var objects = obj.getObjects();
            for (var i in objects) {
                var mixture = objects[i].getName();
                if (out[mixture] == undefined) {
                    out[mixture] = 1;
                } else {
                    out[mixture]++;
                }
            }

            var text = [];
            for (var j in out) {
                text.push(items[j].name + ' -> ' + out[j]);
            }

            canvas.fillStyle = "#59a0ff";
            canvas.font = "14px VT323";
            canvas.textAlign = "center";

            for (var obj1 in text) {

                canvas.fillText(text[obj1], (this.posX + 1) * game.sizeX + game.sizeX / 2, (this.posY + 1) * game.sizeY + game.sizeY / 2 + (obj1 * 16));
            }

        }

    };

    this.renderFactory = function (game, id, method) {

        var factory = game.getFactory(id);

        var maxX = factory.getSize().x;
        var maxY = factory.getSize().y;

        var objects = factory.getObjects();
        var effects = factory.getEffects();

        for (var id in objects) {

            var object = objects[id];


            if (object.getData().drawText != undefined && object.getData().drawText) {
                canvas.fillStyle = "#fafafa";
                canvas.font = "16px VT323";
                canvas.textAlign = "left";
                var text = object.text.split("\n");
                var textLength = text.length;
                for (var i = 0; i < textLength; i++) {
                    var obj = text[i];

                    canvas.fillText(obj, (object.x + 1) * game.sizeX, (object.y + i / 2) * game.sizeY + 19);
                }

            }

            if (object.destructable == false) {
                canvas.drawImage(images['nodestruct'],//image
                    0 * game.sizeX / game.scale,//posX skad bierze obrazek
                    0 * game.sizeX / game.scale,//posY skad bierze obrazek
                    game.sizeX / game.scale,
                    game.sizeY / game.scale,
                    object.x * game.sizeX,//posX
                    object.y * game.sizeY,//posY
                    game.sizeX,
                    game.sizeY
                );

            }


            if (object.image != null && object.image != undefined)
                canvas.drawImage(images[object.image],//image
                    object.frame * game.sizeX / game.scale,//posX skad bierze obrazek
                    object.row * game.sizeX / game.scale,//posY skad bierze obrazek
                    game.sizeX / game.scale,
                    game.sizeY / game.scale,
                    object.x * game.sizeX,//posX
                    object.y * game.sizeY,//posY
                    game.sizeX,
                    game.sizeY
                );

            if (object.stop && gameOptions.drawStops) {
                canvas.drawImage(images['stop'],//image
                    0 * game.sizeX / game.scale,//posX skad bierze obrazek
                    0 * game.sizeX / game.scale,//posY skad bierze obrazek
                    game.sizeX / game.scale,
                    game.sizeY / game.scale,
                    object.x * game.sizeX,//posX
                    object.y * game.sizeY,//posY
                    game.sizeX,
                    game.sizeY
                );

            }




            if (method != undefined && !gameOptions.pause && !object.stop)
                object.nextFrame();
        }

        for (var id in objects) {

            var object = objects[id];

            if (object.hasError()) {
                this.renderErrorOnMap(game,object.x,object.y,object.errorMessage,0);
            }
            if (object.hasWarning()) {
                this.renderWarningOnMap(game,object.x,object.y,object.warningMessage,0);
            }
        }

        if (gameOptions.renderEffects) {
            for (id in effects) {

                var effect = effects[id];

                if (effect.isEnded()) {
                    factory.deleteEffect(id);
                }
            }

            for (id in effects) {

                effect = effects[id];

                this.renderEffect(game, effect);
            }
        }
    };

    this.renderEffect = function (game,effect) {
        canvas.drawImage(images[effect.name],//image
            effect.frame * game.sizeX*effect.size / game.scale,//posX skad bierze obrazek
            0,//posY skad bierze obrazek
            game.sizeX*effect.size / game.scale,
            game.sizeY*effect.size / game.scale,
            (effect.x-effect.back) * game.sizeX,//posX
            (effect.y-effect.back) * game.sizeY,//posY
            game.sizeX*effect.size,
            game.sizeY*effect.size
        );

    };

    this.setPos = function (posX, posY) {
        this.posX = posX;
        this.posY = posY;
    };

    this.renderItemsCounts = function (game, id) {
        var factory = game.getFactory(id);

        var objects = factory.getObjects();

        for (var id in objects) {

            var object = objects[id];

            if (object.objects.length > 0) {

                drawIO(game, object.x, object.y, 'number99', 0, 0);
                canvas.fillStyle = "#fafafa";
                canvas.font = "10px VT323";
                canvas.textAlign = "left";
                canvas.fillText(object.objects.length, object.x * game.sizeX + 10, object.y * game.sizeY + 19);

            }

            if (gameOptions.drawWarnings)
                this.drawWarning(object, game);
        }


    };

    this.moneyAnimationShowStatus = false;
    this.moneyAnimationShowTime = 1000;
    this.moneyAnimationShowTimeStart = 500;

    this.moneyAnimationShow = function ($div,dir,up) {
        var that = this;
        var data = {};
        data[dir] = -30+parseInt($($div).data('offset'));
        $($div).animate(data,this.moneyAnimationShowTime, this.moneyAnimationFunc());

        $($div+' .money').each(function () {
            $(this).animate({rotate:20*parseInt($(this).data('deg'))}, {
                step: function(now,fx) {
                    $(this).css('-webkit-transform','rotate('+now+'deg)');
                    $(this).css('-moz-transform','rotate('+now+'deg)');
                    $(this).css('transform','rotate('+now+'deg)');
                }
                ,
                duration:that.moneyAnimationShowTime});
        });
    };

    this.moneyAnimationHide = function ($div,dir) {
        var that = this;
        var data = {};
        data[dir] = -50+parseInt($($div).data('offset'));

        $($div).animate(data,this.moneyAnimationShowTime, this.moneyAnimationFunc());
        $($div+' .money').each(function () {
            $(this).animate({rotate:5*parseInt($(this).data('deg'))}, {
                step: function(now,fx) {
                    $(this).css('-webkit-transform','rotate('+now+'deg)');
                    $(this).css('-moz-transform','rotate('+now+'deg)');
                    $(this).css('transform','rotate('+now+'deg)');
                }
                ,
                duration:that.moneyAnimationShowTime});
        });
    };

    this.moneyAnimationFunc = function () {
        var that = this;
        return function (){
            that.moneyAnimation();
        }
    };

    this.moneyAnimation = function () {
        if (this.moneyAnimationShowStatus){//is show
            this.moneyAnimationHide('#moneyLeft','left');
            this.moneyAnimationHide('#moneyRight','right');
        }else{
            this.moneyAnimationShow('#moneyLeft','left');
            this.moneyAnimationShow('#moneyRight','right');
        }
        this.moneyAnimationShowStatus = !this.moneyAnimationShowStatus;
    };

    this.startMoneyAnimation = function () {
        $('.money').css({background:'url("images/'+finishSetup[this.finishSetup].image+'")'});
        this.moneyAnimation();

    }

}