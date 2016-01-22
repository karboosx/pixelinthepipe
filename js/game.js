var imagesData = {};

var imagesPath = [

    /*
     User Interface
     */
    {name: 'cursor', src: 'images/cursor.png'},
    {name: 'cursor-error', src: 'images/cursor-error.png'},
    {name: 'cursor-warning', src: 'images/cursor-warning.png'},
    {name: 'io', src: 'images/io.png'},
    {name: 'number99', src: 'images/number99.png'},
    {name: 'warning', src: 'images/warning.png'},
    {name: 'stop', src: 'images/stop.png'},
    {name: 'nodestruct', src: 'images/nodestruct.png'},

    /*
     Backgrounds
     */
    {name: 'background1', src: 'images/background1.png', frame: 1},
    {name: 'background2', src: 'images/background2.png', frame: 1},
    {name: 'background3', src: 'images/background3.png', frame: 1},

    /*
     Objects
     */
    {name: 'pin', src: 'images/pin.png', frame: 1},
    {name: 'fireplace1', src: 'images/fireplace1.png', frame: 3},
    {name: 'explosion1', src: 'images/explosion1.png', frame: 6},
    {name: 'cos', src: 'images/cos.png', frame: 2},
    {name: 'combiner', src: 'images/asembly.png', frame: 5},
    {name: 'floor', src: 'images/block.png', frame: 1},
    {name: 'floor2', src: 'images/floor2.png', frame: 1},
    {name: 'pipe', src: 'images/plumb.png', frame: 1, patch9: true},
    {name: 'line', src: 'images/transporter.png', frame: 1, patch9: true},
    {name: 'cable', src: 'images/cable.png', frame: 1, patch9: true},
    {name: 'block', src: 'images/block.png', frame: 1},
    {name: 'deleter1', src: 'images/deleter1.png', frame: 3},
    {name: 'addater', src: 'images/addater.png', frame: 4},
    {name: 'filter', src: 'images/aaa.png', frame: 4},
    {name: 'generator', src: 'images/generator.png', frame: 5},
    {name: 'separator', src: 'images/separator.png', frame: 4},
    {name: 'freezer', src: 'images/freezer.png', frame: 3},
    {name: 'coffeemachine', src: 'images/coffeemachine.png', frame: 5},
    {name: 'heater', src: 'images/heater.png', frame: 3},
];

var gameOptions = {
    drawItemsCounts: true,
    drawWarnings: true,
    pause: false,
    drawIO: true,
    drawStops: true,
    drawItemsNames: true
};

var objectsData = {
    pipe: {
        type: 'pipe',
        image: 'pipe',
        gravity: false,
        itemForward: true,
        cost: 1,
        canStop: true,
        maxItems: 99,
        desc: 'Pipe transport elements to machines. Pipe can connect to each other',
        name: 'Transport pipe',
        transportType: 'pipe'
    },
    line: {
        type: 'line',
        image: 'line',
        gravity: false,
        itemForward: true,
        cost: 2,
        canStop: true,
        maxItems: 99,
        desc: 'Pipe transport elements to machines. Pipe can connect to each other',
        name: 'Transport pipe',
        transportType: 'line'

    },
    cable: {
        type: 'cable',
        image: 'cable',
        gravity: false,
        itemForward: true,
        cost: 1,
        canStop: true,
        maxItems: 10,
        desc: 'Cable transport electricity',
        name: 'Cable',
        transportType: 'cable',
        transportRestrict:true

    },
    block: {
        type: 'block',
        image: 'block',
        gravity: false,
        itemForward: false,
        cost: 1,
        input: io('none'),
        output: io('none')
    },
    floor: {
        type: 'floor',
        image: 'floor',
        gravity: false,
        input: io('none'),
        output: io('none'),
        deletable: false
    },
    deleter: {
        type: 'deleter',
        image: 'deleter1',
        gravity: true,
        randomFrame: true,
        input: io('all'),
        output: io('none'),
        cost: 10,
        canStop: true,
        onTick: function (object, map) {
            if (object.objectCount() > 0) {
                if (object.row == 0)
                    object.frame = 0;
                object.row = 1;
            }

            object.clearObjects();
        },
        desc: 'Destroy all elements who gets to it',
        name: 'Trash'
    },
    fireplace: {
        type: 'fireplace',
        image: 'fireplace1',
        randomFrame: true,
        input: io('all'),
        output: io('top'),
        cost: 20,
        canStop: true,
        restrictCombine:true,
        randomCombine:true,
        onTick: function (object, map) {

            var rand = 30;
            if (object.additionalData != undefined) {
                if (object.additionalData.hasOwnProperty('random')){
                    rand = object.additionalData.random;
                }
            }

            var random = Math.floor(Math.random() * rand);

            if (random < 2) {
                object.addItem('heat');
            }else if (random < 4) {
                object.addItem('lowheat');
            }

            object.combine(object.objects);

        },
        desc: 'Burn or boil elements',
        name: 'Fireplace'
    },
    coffeemachine: {
        type: 'coffeemachine',
        image: 'coffeemachine',
        randomFrame: true,
        input: io('left'),
        output: io('left'),
        cost: 20,
        canStop: true,
        frameDelay: 3,
        onTick: function (object, map) {

            object.combine(object.objects, undefined, 'coffee');

        },
        desc: 'This machine brewing coffee',
        name: 'Coffee Machine'
    },

    freezer: {
        type: 'freezer',
        image: 'freezer',
        randomFrame: true,
        frameDelay: 4,
        input: io('left-right'),
        output: io('top'),
        cost: 20,
        canStop: true,
        onTick: function (object) {

            var random = Math.floor(Math.random() * 30);

            if (random < 2) {
                object.addItem('cold');
            }

            object.combine(object.objects, 'cold');

        },
        desc: 'Burn or boil elements',
        name: 'Fireplace'
    },
    generator: {
        type: 'generator',
        image: 'generator',
        input: io('none'),
        output: io('top'),
        cost: 20,
        frameDelay: 4,
        canStop: true,
        onTick: function (object, map, game, factory) {

            var item = factory.itemsToGenerate;

            var rand = 30;
            if (object.additionalData != undefined) {
                item = object.additionalData.items;
                if (object.additionalData.hasOwnProperty('random')){
                    rand = object.additionalData.random;
                }
            }

            var random = Math.floor(Math.random() * rand);

            if (random < 2) {
                var itemRandom = Math.floor(Math.random() * item.length);
                object.addItem(item[itemRandom]);
            }

            if (random < 5)
                object.moveItemsForward(map);
        },
        desc: 'Generate items depends on actual factory can produce one element or more',
        name: 'Generator'
    },
    storage: {
        type: 'storage',
        image: 'cos',
        randomFrame: true,
        input: io('not-top'),
        output: io('none'),
        cost: 20,
        frameDelay: 4,
        canStop: true,
        onTick: function (object, map, game) {
            var objectsToReturn = [];
            if (game.getObjective() != undefined) {


                for (var i in object.objects) {
                    var itemName = object.objects[i].getName();

                    if (object.additionalData != undefined && object.additionalData.hasOwnProperty('restrict') && object.additionalData.restrict == true && itemName != object.additionalData.item) {
                        game.fail();
                    }

                    if ((
                            object.additionalData != undefined &&
                            object.additionalData.hasOwnProperty('item') &&
                            itemName == object.additionalData.item
                        )
                        || object.additionalData == undefined) {

                        if (game.getObjective().checkReqItem(itemName)) {
                            game.addItemToStorage(object, i);
                            objectsToReturn.push(itemName);
                        }else {
                            object.moveItemForward(i, map);
                        }
                    }
                }
            }
            game.getRenderEngine().hasToRefreshObjectives = true;
            return objectsToReturn;
        },
        desc: 'Collect elements to achieve objectives',
        name: 'Collector'
    },
    heater: {
        type: 'heater',
        image: 'heater',
        randomFrame: true,
        input: io('left'),
        output: io('right'),
        cost: 20,
        frameDelay: 4,
        canStop: true,
        onTick: function (object, map, game) {
            var objects = objectsData.storage.onTick(object,map,game);
            if (objects.length>0){
                for (var i = 0; i < objects.length; i++) {
                    object.addItem('water');

                }

                object.moveItemsForward(map);

            }

        },
        desc: 'Collect elements to achieve objectives',
        name: 'Collector'
    },
    explosion: {
        type: 'explosion',
        image: 'explosion1',
        gravity: false,
        input: io('none'),
        output: io('none'),
        onTick: function (object) {
            if (object.frame >= 5)
                object.factory.deleteObject(object.x, object.y);
        }
    },
    pin: {
        type: 'pin',
        image: 'pin',
        gravity: false,
        input: io('none'),
        output: io('none'),
        drawText: true,
        cost: 0,
        windowOnCreate: 'editPin',
        onTick: function (object) {

        },
        name: 'Pin text'
    },
    hidepin: {
        type: 'hidepin',
        image: null,
        gravity: false,
        input: io('none'),
        output: io('none'),
        drawText: true,
        cost: 0
    },
    combiner: {
        type: 'combiner',
        image: 'combiner',
        frameDelay: 1,
        randomFrame: true,
        gravity: true,
        input: io('left-top'),
        output: io('right-bottom'),
        canStop: true,
        cost: 20,
        onTick: function (object, map) {

            object.combine(object.objects);

        },
        desc: 'Combine elements to more complex items',
        name: 'Element combiner'
    },

    separator: {
        type: 'separator',
        image: 'separator',
        randomFrame: true,
        gravity: true,
        input: io('left'),
        output: io('not-left'),
        canStop: true,
        cost: 20,
        onTick: function (object, map) {

            object.separate(object.objects);

        },
        desc: 'Separate element for more basic items',
        name: 'Element separator'
    },

    filter: {
        type: 'filter',
        image: 'filter',
        gravity: true,
        input: io('all'),
        output: io('none'),
        cost: 10,
        canStop: true,
        canFilter: true,
        onInit: function (object, factory) {
            object.setVar('left', '-');
            object.setVar('top', '-');
            object.setVar('bottom', '-');
            object.setVar('right', '-');

            if (factory.getGame().allowedItems != undefined) {
                var alphabet = {};
                var allowedItems = factory.getGame().allowedItems;
                for (var i = 0; i < allowedItems.length; i++) {
                    var obj = allowedItems[i];
                    alphabet[obj] = items[obj];
                }
                object.setVar('alfabet', $.extend({'*': {name: 'All'}, '-': {name: 'None'}}, alphabet));
            } else {
                object.setVar('alfabet', $.extend({'*': {name: 'All'}, '-': {name: 'None'}}, items));
            }
        },
        onTick: function (object, map) {


            for (var i in object.objects) {
                var item = object.objects[i];

                object.output = {
                    left: checkAtom(object.getVar('left'), item.getName()),
                    top: checkAtom(object.getVar('top'), item.getName()),
                    right: checkAtom(object.getVar('right'), item.getName()),
                    bottom: checkAtom(object.getVar('bottom'), item.getName())
                };


                object.moveItemForward(i, map);
            }

        },
        desc: 'Filter can block or pass different elements based on it own settings',
        name: 'Filter'
    }
};


function Game(x_, y_, engine_) {
    x_ = x_ || 50;
    y_ = y_ || 20;

    this.scale = 1;
    this.sizeX = 32 * this.scale;
    this.sizeY = 32 * this.scale;

    this.mainInterval = undefined;
    this.isLockDestroyable = false;
    this.nextFactory = undefined;

    this.failMessage = undefined;
    var objectives = [];

    var defaultInterval = 100;

    var factors = [];

    var money = 0;

    var behavior;

    var storageItems = [];

    var renderEngine = engine_ || new Render('#screen', '#cursor');

    var type = {
        type: 'factory',
        id: 0
    };

    this.toJson = function () {
        return {
            scale: this.scale,
            sizeX: this.sizeX,
            sizeY: this.sizeY,
            objectives: foreachToJson(objectives),
            defaultInterval: defaultInterval,
            factors: foreachToJson(factors),
            money: money,
            behavior: behavior.toJson(),
            storageItems: foreachToJson(storageItems),
            renderEngine: renderEngine.toJson(),
            type: type
        };
    };

    this.fail = function () {
        this.stop();
        renderEngine.failWindow(this.failMessage);
    };

    this.setFailMessage = function (message) {
        this.failMessage = message;
    };

    this.stop = function () {
        clearInterval(this.mainInterval);
    };

    this.lockDestroyable = function () {
        this.isLockDestroyable = true;
    };

    this.getObjective = function (i) {
        i = i || 0;
        if (objectives[i] != undefined) {
            return objectives[i];
        } else {
            return null;
        }
    };

    this.addObjective = function (objective, animation) {
        this.hasToRefreshObjectives = true;
        objectives.push(new Objective(objective, animation));
        objectives[objectives.length - 1].calculateNeeds(this);
    };

    this.completeObjective = function (objective, id) {
        if (objective.canComplete) {
            objective.complete(this);
            objectives.splice(id, 1);
        }
    };

    this.getRenderEngine = function () {
        return renderEngine;
    };

    this.storageCount = function (name) {
        var count = 0;
        for (var i in storageItems) {
            var item = storageItems[i];

            if (item.getName() == name)
                count++;
        }

        return count;
    };


    this.addItemToStorage = function (object, i) {
        storageItems.push(object.objects[i]);
        object.objects.splice(i, 1);
        renderEngine.hasToRefreshObjectives = true;
    };

    this.removeItemFromStorage = function (name) {
        var count = 0;
        for (var i in storageItems) {
            var item = storageItems[i];

            if (item.getName() == name) {
                storageItems.splice(i, 1);
                return;
            }
        }
    };

    this.getStorage = function () {
        return storageItems;
    };

    this.resetStorageKeys = function () {
        storageItems.filter(function () {
            return true;
        });
    };

    this.getType = function () {
        return type;
    };

    this.getFactoryLength = function () {
        return factors.length;
    };

    this.addMoney = function (amount) {

        if (amount == undefined)
            return;
        if (amount < 0)
            amount *= -1;

        money += amount;

        renderEngine.info('money', money);
        renderEngine.info('addMoney', money, amount);

    };
    this.setMoney = function (amount) {
        money = amount;
        renderEngine.info('money', money);
    };

    this.subMoney = function (amount) {

        if (amount == undefined)
            return;
        if (amount < 0)
            amount *= -1;

        var allow = false;
        if (money - amount >= 0) {
            money -= amount;
            allow = true;
        } else {
            renderEngine.error('money');
        }

        renderEngine.info('money', money);

        return allow;

    };

    this.addNewFactory = function (factory) {
        factors.push(factory);
    };

    this.getFactory = function (id) {
        if (id == undefined)
            return factors[type.id];
        return factors[id];
    };

    this.removeFactory = function (id) {
        delete factors[id];
    };

    this.changeType = function (type_) {
        type = type_;
    };

    this.render = function (type) {
        var activeFactory = factors[type.id];

        var width = activeFactory.maxX * this.sizeX;
        var height = activeFactory.maxY * this.sizeY;


        renderEngine.getTarget().attr('width', width).attr('height', height);

        var marginLeft = width - $('#viewport').width();
        var marginTop = height - $('#viewport').height();

        if (marginLeft < 0) marginLeft = 0;
        if (marginTop < 0) marginTop = 0;


        renderEngine.getTarget().draggable({
            drag: function () {
                if (behavior.isBlock())
                    return false;
            },
            which: 2,
            containment: [-marginLeft + 308, -marginTop, 308, 0]
        });


        renderEngine.render(this, type, true);
    };

    this.tick = function () {

        for (var i in objectives) {
            objectives[i].onTick(this);
        }
        for (var factoryID in factors) {
            var factory = factors[factoryID];
            factory.tick();

        }
    };

    this.startRendering = function (game, interval) {
        interval = interval || defaultInterval;
        this.mainInterval = setInterval(function () {
            game.tick();
            game.render(game.getType());
        }, interval);
        renderEngine.loadData();
    };

    this.preJSCode = function () {
        $(document).tooltip({
            using: function () {
                (this).addClass("tooltip");
            },
            hide: {
                duration: 0,
                delay: 0
            }
        });

    };

    this.setupFactory = function (creatingFunc, buildingFunc) {
        this.creatingFunc = creatingFunc;
        this.buildingFunc = buildingFunc;
    };

    this.start = function () {

        this.lockDestroyable();

        $(window).bind('load', function () {
            $('#loading').css('display', 'none');
            $('#game').css('display', 'block');
        });


        $('#save').click(function () {


            var factory = factors[0].getObjects();

            for (var obj in factory) {
                var object = factory[obj];
                if (object['type'] == 'floor') continue;

                else if (object['type'] == 'pin') {
                    console.log('factory.placeObject(' + object['x'] + ',' + object['y'] + ',\'' + object['type'] + '\').text = \'' + object.text + '\';');

                } else {
                    console.log('factory.placeObject(' + object['x'] + ',' + object['y'] + ',\'' + object['type'] + '\',true,false);');
                }
                if (!object.destructable) {
                    console.log('factory.mark(' + object['x'] + ',' + object['y'] + ',\'red\');');

                }
            }
            for (var obj in factory) {
                var object = factory[obj];
                if (object['type'] == 'floor') continue;

                else if (object['type'] == 'pipe') {

                    for (var dir_ in object.patch9) {
                        if (object.patch9[dir_]) {
                            console.log('factory.placePatch9(' + object['x'] + ',' + object['y'] + ',\'' + dir_ + '\');');
                        }
                    }

                    if (!object.destructable) {
                        console.log('factory.mark(' + object['x'] + ',' + object['y'] + ',\'red\');');

                    }
                } else if (object['type'] == 'line') {

                    for (var dir_ in object.patch9) {
                        if (object.patch9[dir_]) {
                            console.log('factory.placePatch9byTool(' + object['x'] + ',' + object['y'] + ',\'' + dir_ + '\',true,\'line\');');
                        }
                    }

                    if (!object.destructable) {
                        console.log('factory.mark(' + object['x'] + ',' + object['y'] + ',\'red\');');

                    }
                }
            }
        });
    };

    this.create = function (interval) {

        this.preJSCode();
        interval = interval || defaultInterval;
        this.startRendering(this, interval);

        $(window).resize(function () {

            renderEngine.getTarget().css('left', 0).css('top', 0);
        });

        renderEngine.startTimer();

        renderEngine.changeBackground('background1');

        //pierwsza fabryka
        this.creatingFunc(factors);

        factors.push(new Factory('Episode 1', 'Learning basics', this, x_, y_));

        if (reset != 'yes')
        renderEngine.renderFactoryInfo(this, type);

        behavior = new GameBehavior(this, this.getFactory(type.id));

        behavior.init();

        this.buildingFunc(this.returnFactory);

    };

    this.newBasicFactory = function (name, subname, x, y) {
        if (x == undefined) x = x_;
        if (y == undefined) y = y_;
        return new Factory(name, subname, this, x, y);
    };

    this.addFactory = function (factory, itemsToGenerate) {
        factory.itemsToGenerate = itemsToGenerate;
        factors.push(factory);
        this.returnFactory = factory;
    };


    this.getBehavior = function () {
        return behavior;
    }
}
