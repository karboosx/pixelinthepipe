function Factory(name_, subname_, game_, x_, y_) {

    this.name = name_;
    this.subname = subname_;

    this.factoryID = game_.getFactoryLength() + 1;

    this.maxX = x_;
    this.maxY = y_;

    this.map = undefined;
    var objects = [];
    this.objectLimits = {};

    var effects = [];

    this.toJson = function () {
        return {
            name: this.name,
            factoryID: this.factoryID,
            maxX: this.maxX,
            maxY: this.maxY,
            objects: foreachToJson(objects)
        };
    };

    this.getGame = function () {
        return game_;
    };

    this.renderErrorOnMap = function (posX, posY, errorMessage, frame) {
        return game_.getRenderEngine().renderErrorOnMap(game_, posX, posY, errorMessage, frame);
    };
    this.renderWarningOnMap = function (posX, posY, errorMessage, frame) {
        return game_.getRenderEngine().renderWarningOnMap(game_, posX, posY, errorMessage, frame);
    };

    this.getObjects = function () {
        return objects;
    };

    this.getEffects = function () {
        return effects;
    };

    this.setObjectLimits = function (limits) {
        this.objectLimits = limits;
    };

    this.canPlaceObject = function (object) {
        if (this.objectLimits.hasOwnProperty(object)) {
            var count = 0;
            for (var id in objects) {
                var objectFor = objects[id];
                if (objectFor.getType() == object)
                    count ++;
            }
            return this.objectLimits[object] > count;

        }else{
            return true;
        }

    };

    this.placeEffect = function (object, name) {
        object.isRegisteredEffect = true;
        effects.push(new Effect(object,name));
    };

    this.deleteEffect = function (i) {
        effects[i].getObject().isRegisteredEffect = false;
        effects.splice(i,1);
    };



    this.loadByJson = function (json) {
        var objectsLength = json.objects.length;
        for (var i = 0; i < objectsLength; i++) {
            var obj = json.objects[i];

            this.placeObject(obj.x,obj.y,obj.type,true,false,obj.data);
        }

        var transportersLength = json.transporters.length;
        for (i = 0; i < transportersLength; i++) {
            obj = json.transporters[i];
            this.placePatch9byTool(obj.x,obj.y,obj.dir,false,obj.type);
        }

        var marksLength = json.marks.length;
        for (i = 0; i < marksLength; i++) {
            obj = json.marks[i];
            this.mark(obj.x,obj.y,'red');
        }

        var pinsLength = json.pins.length;
        for (i = 0; i < pinsLength; i++) {
            obj = json.pins[i];
            this.getObject(obj.x,obj.y).text = obj.text;
        }

    };

    this.placeObject = function (x, y, object, destructable, gravity, additionalData) {

        if (destructable == undefined) destructable = true;

        if (this.canPlaceObject(object)) {
            if (game_.subMoney(objectsData[object].hasOwnProperty('cost') ? objectsData[object].cost : 0)) {
                var obj = new GameObject(x, y, objectsData[object], this, objectsData[object].name || object, destructable, gravity);

                obj.additionalData = additionalData;
                if (obj.getData().randomFrame != undefined)
                    obj.randomFrame();
                objects.push(obj);

                return obj;
            }
        }else{
            game_.getRenderEngine().error('objectCountReached');
        }
        return undefined;

    };

    this.placePatch9 = function (x, y, direction, destroyable) {

        var behavior = game_.getBehavior();
        behavior.setTool('pipe', $('div[data-tool="pipe"]'));
        behavior.setPos(x, y);
        behavior.mouseDown(behavior)();

        if (direction == 'left')
            behavior.setPos(x - 1, y);
        else if (direction == 'right')
            behavior.setPos(x + 1, y);
        else if (direction == 'top' || direction == 'up')
            behavior.setPos(x, y - 1);
        else if (direction == 'bottom' || direction == 'down')
            behavior.setPos(x, y + 1);

        behavior.mouseUp(behavior, destroyable)({which: 1});

    };
    this.placePatch9byTool = function (x, y, direction, destroyable, tool) {

        var behavior = game_.getBehavior();
        behavior.setTool(tool, $('div[data-tool="' + tool + '"]'));
        behavior.setPos(x, y);
        behavior.mouseDown(behavior)();

        if (direction == 'left')
            behavior.setPos(x - 1, y);
        else if (direction == 'right')
            behavior.setPos(x + 1, y);
        else if (direction == 'top' || direction == 'up')
            behavior.setPos(x, y - 1);
        else if (direction == 'bottom' || direction == 'down')
            behavior.setPos(x, y + 1);

        behavior.mouseUp(behavior, destroyable)({which: 1});

    };

    this.mark = function (x, y, mark) {
        try {
            this.getObject(x, y).mark(mark);
        } catch (e) {

        }
    };

    this.deleteObject = function (x, y, force) {
        if (force == undefined) force = false;
        for (var id in objects) {
            var object = objects[id];


            if ((x == object.x && y == object.y) &&
                (
                    (
                        (object.getData().deletable == true || object.getData().deletable == undefined)
                        && (object.destructable == true || object.destructable == undefined)
                    ) || force
                )) {
                game_.addMoney(object.getData().cost);
                delete objects[id];

            }
        }
    };

    this.getSize = function () {
        return {x: this.maxX, y: this.maxY}
    };


    this.getObject = function (x, y) {
        for (var id in objects) {
            var object = objects[id];

            if (x == object.x && y == object.y) {
                return object;
            }
        }
        return undefined;
    };

    this.tick = function () {

        var map = {};

        for (var id in objects) {
            var object = objects[id];
            if (map[object.x] == undefined)
                map[object.x] = {};

            map[object.x][object.y] = object;

            object.markItems(false);
        }

        this.map = map;

        for (id in objects) {
            object = objects[id];

            if (object.gravity(map) && !gameOptions.pause) {
                object.y++;
            }

            object.checkIfFull(this);

            object.calculatePatch9(map);

            if (!gameOptions.pause) {

                if (!object.stop && object.powered()) {
                    if (object.canMveItemForward) {
                        object.moveItemsForward(map);
                    }
                }

            }


        }


        for (id in objects) {
            object = objects[id];
            if (!gameOptions.pause) {
                object.tickError();
                object.tickWarning();

                object.tickPower();

                if (!object.stop && object.powered()) {

                    object.onTick(object, map, game_, this);
                    object.onBuildInTick(object, map, game_, this);
                    object.tickObjects(object, map, game_, this);
                    object.deleteDeadObjects();
                }

            }
        }


    };

    this.createFloor = function (y, size, type) {
        type = type || 'floor';
        for (var i = 0; i < size; i++) {
            this.placeObject(i, y, 'floor');
        }
    };

    this.createBaseFloor = function () {
        this.createFloor(this.maxY - 1, this.maxX);
    }
}