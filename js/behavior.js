function GameBehavior(game, factory) {

    var engine = game.getRenderEngine();

    var toolTarget = $('.activeTool');
    var tool = toolTarget.data('tool');

    var click = false;
    var x = 0;
    var y = 0;
    var posX = null;
    var posY = null;
    var lastPosX = null;
    var lastPosY = null;
    var startPosX = null;
    var startPosY = null;
    var block = false;

    this.windows = {};

    this.toJson = function () {
        return {
            click: click,
            x: x,
            y: y,
            posX: posX,
            posY: posY,
            lastPosX: lastPosX,
            lastPosY: lastPosY,
            block: block
        };
    };

    this.getGame = function () {
        return game;
    };

    this.init = function () {
        engine.getTarget().on("mousedown", this.mouseDown(this))
            .on("mouseup", this.mouseUp(this))
            .on("mousemove", this.mouseOver(this))
            .bind('contextmenu', function (e) {
                return false;
            });

        $('.tool').click(this.changeTool(this));

        for (var i in this.windows) {
            this.windows[i].init();
        }

        $('#pinEditWindow').center();
        $('#infoWindow').center();
        $('#info-viewport').click(function () {
            $(this).fadeOut(500);
        });

        $(window).keypress(function (e) {
            if (e.keyCode == 0 || e.keyCode == 32) {
                gameOptions.pause = !gameOptions.pause;
                gameOptions.pauseForce = gameOptions.pause;
            }
        });

    };

    this.windows.editPin = {
        init: function () {

            $('#pinEditWindow').center().draggable();
            $('#pinEdit').bind('input propertychange', function () {
                var pin = $(this);

                if (pin.data('x') >= 0 && pin.data('y') >= 0) {
                    var object = game.getFactory().getObject(pin.data('x'), pin.data('y'));

                    if (object != undefined)
                        object.setText(pin.val());
                }
            });
            $('#pinClose').click(function () {
                $('#pinEditWindow').addClass('hide');
            });
        },
        show: function (x, y) {
            $('#pinEditWindow').removeClass('hide');
            var object = game.getFactory().getObject(x, y);

            $('#pinEdit').data('x', x).data('y', y).val(object.text);


        }
    };

    this.windows.info = {
        init: function () {

            $('#infoWindow').center().draggable();
            $('#infoSwitch').click(function () {
                var pin = $(this);

                if (pin.data('x') >= 0 && pin.data('y') >= 0) {
                    var object = game.getFactory().getObject(pin.data('x'), pin.data('y'));

                    if (object != undefined) {
                        object.stop = !object.stop;

                        $('#infoSwitch').removeClass('switch-on').removeClass('switch-off');

                        if (!object.stop) {
                            $('#infoSwitch').addClass('switch-on');
                        } else {
                            $('#infoSwitch').addClass('switch-off');
                        }
                    }
                }
            });
            $('#infoClose').click(function () {
                $('#infoWindow').addClass('hide');
            });

            var select_click = function () {
                var select = $(this);

                if (select.data('x') >= 0 && select.data('y') >= 0) {
                    var object = game.getFactory().getObject(select.data('x'), select.data('y'));

                    object.setVar(select.data('direction'), select.val());
                }
            };
            var select_click_item = function () {
                var select = $(this);

                if (select.data('x') >= 0 && select.data('y') >= 0) {
                    var object = game.getFactory().getObject(select.data('x'), select.data('y'));
                    object.setVar('item', select.val());
                    object.refreshSelectedItems();
                }
            };
            var $item = $('#info-item').change(select_click_item);
            var $left = $('#info-left').change(select_click);
            var $right = $('#info-right').change(select_click);
            var $top = $('#info-top').change(select_click);
            var $bottom = $('#info-bottom').change(select_click);
        },
        show: function (x, y) {
            var object = game.getFactory().getObject(x, y);

            if (object != undefined && object.desc != undefined) {

                var showWindow = false;


                $('#infoTextVal').html(object.fullName);
                $('#infoWindowText').html(object.desc);

                $('#infoSwitch').removeClass('switch-on').removeClass('switch-off').data('x', x).data('y', y);

                if (object.getData().canStop) {
                    $('#infoSwitch').show();
                    if (!object.stop) {
                        $('#infoSwitch').addClass('switch-on');
                    } else {
                        $('#infoSwitch').addClass('switch-off');
                    }
                    showWindow = true;
                } else {
                    $('#infoSwitch').hide();
                }

                if (object.getData().canFilter) {
                    $('#infoFilter').show();
                    var left = object.getVar('left');
                    var right = object.getVar('right');
                    var top = object.getVar('top');
                    var bottom = object.getVar('bottom');
                    var item = object.getVar('item');
                    var alfabet = object.getVar('alfabet');

                    if (left && right && top && bottom && alfabet) {
                        var $left = $('#info-left').html('').data('x', x).data('y', y).data('direction', 'left');
                        var $right = $('#info-right').html('').data('x', x).data('y', y).data('direction', 'right');
                        var $top = $('#info-top').html('').data('x', x).data('y', y).data('direction', 'top');
                        var $bottom = $('#info-bottom').html('').data('x', x).data('y', y).data('direction', 'bottom');

                        for (var i in alfabet) {
                            $left.append('<option value="' + i + '" ' + (i == left ? ' selected="selected"' : '') + '>' + alfabet[i].name + '</option>');
                            $right.append('<option value="' + i + '" ' + (i == right ? ' selected="selected"' : '') + '>' + alfabet[i].name + '</option>');
                            $top.append('<option value="' + i + '" ' + (i == top ? ' selected="selected"' : '') + '>' + alfabet[i].name + '</option>');
                            $bottom.append('<option value="' + i + '" ' + (i == bottom ? ' selected="selected"' : '') + '>' + alfabet[i].name + '</option>');

                        }
                    }

                    showWindow = true;
                } else {
                    $('#infoFilter').hide();
                }

                if (object.getData().canSelectItem) {
                    $('#infoSelectItem').show();
                    var selectedItem = object.getVar('item');
                    alfabet = object.getVar('alfabet');

                    if (selectedItem && alfabet) {
                        var $item = $('#info-item').html('').data('x', x).data('y', y);

                        for (var i2 in alfabet) {
                            if (alfabet[i2].hasOwnProperty('name')) {
                                $item.append('<option value="' + i2 + '" ' + (i2 == selectedItem ? ' selected="selected"' : '') + '>' + alfabet[i2].name + '</option>');
                            }
                        }
                    }

                    showWindow = true;
                } else {
                    $('#infoSelectItem').hide();
                }


                if (showWindow) {
                    $('#infoWindow').removeClass('hide');
                }
            }


        }
    };

    this.completeObjective = function (behavior) {
        return function () {
            var tool = $(this);
            var objective_id = tool.data('objective');
            var objective = behavior.getGame().getObjective(objective_id);


            behavior.getGame().completeObjective(objective, objective_id);

            $('.objective-complete').remove();

        };
    };

    this.changeTool = function (behavior) {
        return function () {
            var tool = $(this);
            $('.tool').removeClass('activeTool');

            tool.addClass('activeTool');
            behavior.setTool(tool.data('tool'), tool);
        };
    };

    this.setPos = function (x, y) {
        posX = x;
        posY = y;
    };


    this.setTool = function (tool_, toolTarget_) {
        tool = tool_;
        toolTarget = toolTarget_;
    };


    this.mouseDown = function (behavior) {
        return function (event) {
            event.preventDefault();
            game.pause();
            lastPosX = posX;
            lastPosY = posY;
            startPosX = x;
            startPosY = y;
            click = true;

            if (event != undefined)
                behavior.mouseOver(event);

        };
    };

    this.mouseOver = function (behavior) {
        return function (event) {
            event.preventDefault();

            var rightClick = (event.buttons === 2 || (event.which === 3));
            var leftClick = (event.buttons === 1 || (event.which === 1 && event.buttons == undefined));

            x = event.pageX - this.offsetLeft;
            y = event.pageY - this.offsetTop;
            posX = Math.floor(x / game.sizeX);
            posY = Math.floor(y / game.sizeY);


            engine.setPos(posX, posY);

            if (lastPosX == null)
                lastPosX = posX;

            if (lastPosY == null)
                lastPosY = posY;


            if (click) {
                if (tool != undefined && behavior.tools.hasOwnProperty(tool)) {
                    if (!rightClick && leftClick)
                        behavior.tools[tool].left();
                    else if (!leftClick && rightClick)
                        behavior.tools[tool].right();
                }
            }

            lastPosX = posX;
            lastPosY = posY;

            engine.render(game, game.getType());
        };
    };

    this.mouseUp = function (behavior, destroyable) {
        return function (event) {
            event.preventDefault();
            var rightClick = (event.which === 3);
            var leftClick = (event.which === 1);

            game.resume();
            click = false;

            if (!rightClick && leftClick) {
                var returnedObject = behavior.tools[tool].left(destroyable);

                /*if (returnedObject == undefined || returnedObject == false){
                 behavior_.windows['info'].show(posX,posY);
                 }*/
            } else if (!leftClick && rightClick) {
                behavior.tools[tool].right(destroyable);
            }

            var object = factory.getObject(posX, posY);

            if (object != undefined && object.type != undefined) {
                if (objectsData[object.type].hasOwnProperty('windowOnCreate')) {
                    behavior_.windows[objectsData[object.type]['windowOnCreate']].show(posX, posY);
                }
            }

            /*if (tool != 'pipe') {
             behavior.setTool('info', $('div[data-tool="info"]'));

             $('.tool').removeClass('activeTool');

             $('div[data-tool="info"]').addClass('activeTool');
             }*/
            lastPosX = posX;
            lastPosY = posY;
        };
    };

    var patch9 = {
        create: function (type, destroyable) {

            var obj = factory.getObject(posX, posY) || factory.placeObject(posX, posY, type, destroyable);
            var objLast = factory.getObject(lastPosX, lastPosY) || factory.placeObject(lastPosX, lastPosY, type);

            if (game.isLockDestroyable && ((obj != undefined && !obj.destructable) || (objLast != undefined && !objLast.destructable)))
                return;

            if (obj != undefined && obj.getType() != type) {
                if (imagesData[obj.image].patch9 != undefined) {
                    return false;
                }
            }

            if (objLast != undefined && objLast.getType() != type) {
                if (imagesData[objLast.image].patch9 != undefined) {
                    return false;
                }
            }


            if (posX - lastPosX == 1 && posY - lastPosY == 0) {
                //x+1
                if (obj != undefined) obj.patch9.left = true;
                if (objLast != undefined) objLast.patch9.right = true;
            } else if (posX - lastPosX == -1 && posY - lastPosY == 0) {
                //x-1
                if (obj != undefined) obj.patch9.right = true;
                if (objLast != undefined) objLast.patch9.left = true;

            } else if (posX - lastPosX == 0 && posY - lastPosY == 1) {
                //y+1
                if (obj != undefined) obj.patch9.top = true;
                if (objLast != undefined) objLast.patch9.bottom = true;

            } else if (posX - lastPosX == 0 && posY - lastPosY == -1) {
                //y-1
                if (obj != undefined) obj.patch9.bottom = true;
                if (objLast != undefined) objLast.patch9.top = true;

            }

            if (obj != undefined) obj.calculatePatch9(factory.map);
            if (objLast != undefined) objLast.calculatePatch9(factory.map);

            return true;
        },
        destroy: function (type) {


            var obj = factory.getObject(posX, posY);
            var objLast = factory.getObject(lastPosX, lastPosY);

            if (game.isLockDestroyable && ((obj != undefined && !obj.destructable) || (objLast != undefined && !objLast.destructable)))
                return;

            try {
                var objType = obj.getType();
            } catch (e) {
                objType = undefined;
            }

            try {
                var objLastType = objLast.getType();
            } catch (e) {
                objLastType = undefined;
            }

            //if (objType != type)
            //    obj = undefined;
            //if (objLastType != type)
            //    objLast = undefined;

            if (posX - lastPosX == 1 && posY - lastPosY == 0) {
                //x+1
                if (obj != undefined) obj.patch9.left = false;
                if (objLast != undefined) objLast.patch9.right = false;
            } else if (posX - lastPosX == -1 && posY - lastPosY == 0) {
                //x-1
                if (obj != undefined) obj.patch9.right = false;
                if (objLast != undefined) objLast.patch9.left = false;

            } else if (posX - lastPosX == 0 && posY - lastPosY == 1) {
                //y+1
                if (obj != undefined) obj.patch9.top = false;
                if (objLast != undefined) objLast.patch9.bottom = false;

            } else if (posX - lastPosX == 0 && posY - lastPosY == -1) {
                //y-1
                if (obj != undefined) obj.patch9.bottom = false;
                if (objLast != undefined) objLast.patch9.top = false;

            }

            if (obj != undefined && !obj.isConnected()) {
                factory.deleteObject(posX, posY);
            } else if (obj != undefined) {
                obj.calculatePatch9(factory.map);
            }
            if (objLast != undefined && !objLast.isConnected()) {
                factory.deleteObject(lastPosX, lastPosY);
            } else if (objLast != undefined) {
                objLast.calculatePatch9(factory.map);
            }

            return true;
        }
    };
    this.tools = {};

    var behavior_ = this;

    this.tools['pipe'] = {
        left: function (destroyable) {
            return patch9.create('pipe', destroyable);
        },
        right: function () {
            return patch9.destroy('pipe');
        }
    };
    this.tools['line'] = {
        left: function (destroyable) {
            return patch9.create('line', destroyable);
        },
        right: function () {
            return patch9.destroy('line');
        }
    };
    this.tools['cable'] = {
        left: function (destroyable) {
            return patch9.create('cable', destroyable);
        },
        right: function () {
            return patch9.destroy('cable');
        }
    };

    this.tools['pusher'] = {
        left: function () {
            var object_ = factory.getObject(posX, posY);
            if (object_ != undefined) {
                object_.moveItemsForward(factory.map);
                return true;
            }
        },
        right: function () {

        }
    };

    this.tools['info'] = {
        left: function () {
            behavior_.windows['info'].show(posX, posY);
            return true;
        },
        right: function () {
        }
    };

    this.tools['block'] = {
        left: function () {
            return patch9.create('block');
        },
        right: function () {
            return patch9.destroy('block');
        }
    };

    this.tools['mark'] = {
        left: function () {
            var mark = toolTarget.data('mark');
            var object_ = factory.getObject(posX, posY);
            if (object_ != undefined) {
                object_.mark(mark);
            }
        },
        right: function () {
            var mark = toolTarget.data('mark');
            var object_ = factory.getObject(posX, posY);
            if (object_ != undefined) {
                object_.unmark(mark);
            }
        }
    };

    this.tools['object'] = {
        left: function () {
            var object = toolTarget.data('object');
            var object_ = factory.getObject(posX, posY);
            if (object_ == undefined) {
                return factory.placeObject(posX, posY, object);
            }
            return false;
        },
        right: function () {
            if (factory.getObject(posX, posY) != undefined) {
                return factory.deleteObject(posX, posY);

            }
            return false;
        }
    };

    this.isBlock = function () {
        return block;
    }
}