function GameObject(x, y, object, factory, name, destructable, gravity, additionalData) {
    var data = object;
    this.x = x;
    this.y = y;
    this.frame = 0;
    this.stop = false;
    this.row = 0;
    this.objects = [];
    this.factory = factory;
    this.name = name;
    this.desc = (object.hasOwnProperty('desc') ? object.desc : '');
    this.fullName = (object.hasOwnProperty('name') ? object.name : name);
    this.text = 'Put text here';
    this.frameDelay = 0;
    this.destructable = destructable;
    this.gravity = gravity;
    this.isRenderedError = false;

    this.transportType = (object.hasOwnProperty('transportType') ? object.transportType : undefined);

    this.additionalData = additionalData;

    this.vars = {};

    this.canMveItemForward = (data.itemForward != undefined) ? data.itemForward : false;

    this.maxItems = (object.maxItems != undefined) ? object.maxItems : 99;

    this.setVar = function (name, value) {
        this.vars[name] = value;
    };

    this.getVar = function (name) {
        return this.vars[name] || false;
    };

    this.toJson = function () {
        return {
            data: data,
            x: this.x,
            y: this.y,
            frame: this.frame,
            stop: this.stop,
            row: this.row,
            objects: foreachToJson(this.objects),
            factory: this.factory.factoryID,
            name: this.name,
            text: this.text
        };
    };
    this.registerError = function (errorMessage, duration) {
        if (!this.isRegisteredError) {
            this.isRegisteredError = true;
            if (duration == undefined) duration = 100;
            this.errorMessage = errorMessage;
            this.errorDuration = duration;
        }
    };

    this.registerWarning = function (errorMessage, duration) {
        if (!this.isRegisteredWarning) {
            this.isRegisteredWarning = true;
            if (duration == undefined) duration = 100;
            this.warningMessage = errorMessage;
            this.warningDuration = duration;
        }
    };

    this.hasError = function () {
        return this.errorMessage != undefined;
    };

    this.hasWarning = function () {
        return this.warningMessage != undefined;
    };


    this.renderErrorOnMap = function () {
        if (this.isRegisteredError) {
            factory.renderErrorOnMap(this.x, this.y, this.errorMessage, 0);

            this.errorDuration--;

            if (this.errorDuration <= 0) {
                this.errorMessage = undefined;
                this.errorDuration = 0;
                this.isRegisteredError = false;
            }
        }
    };

    this.renderWarningOnMap = function () {
        if (this.isRegisteredWarning) {
            factory.renderWarningOnMap(this.x, this.y, this.warningMessage, 0);

            this.warningDuration--;

            if (this.warningDuration <= 0) {
                this.warningMessage = undefined;
                this.warningDuration = 0;
                this.isRegisteredWarning = false;
            }
        }
    };

    this.combine = function (objects, requireCombineItem, only) {
        for (var itemName in items) {

            var item = items[itemName];//po tym itemie szukam combinacji

            if (only != undefined && itemName != only)
                continue;

            if (item.combine == undefined)
                continue;
            if (item.combineDevice != undefined && object.type != item.combineDevice)
                continue;


            if (requireCombineItem != undefined) {
                var haveRequiredItem = false;
                for (var item_name in item.combine) {
                    if (item_name == requireCombineItem) {
                        haveRequiredItem = true;
                    }
                }

                if (!haveRequiredItem) {
                    continue;
                }
            }

            var temp_data = $.extend({}, item.combine);

            for (var obj in objects) {
                var obj_item = objects[obj];

                if (temp_data[obj_item.getName()] != undefined)
                    temp_data[obj_item.getName()]--;

            }

            var skip = false;
            for (obj in temp_data) {
                if (temp_data[obj] > 0)
                    skip = true;
            }

            if (!skip) {
                temp_data = $.extend({}, item.combine);

                var newData = [];
                for (obj in objects) {
                    obj_item = objects[obj];

                    if (temp_data[obj_item.getName()] != undefined && temp_data[obj_item.getName()] > 0) {
                        temp_data[obj_item.getName()]--;
                    } else {
                        newData.push(obj_item);
                    }
                }
                this.objects = newData;
                this.addItem(itemName);

                var item_count = 1;
                if (item.combineAdditionalItem != undefined) {
                    for (var obj2 in item.combineAdditionalItem) {
                        for (var i = 0; i < item.combineAdditionalItem[obj2]; i++) {
                            this.addItem(obj2);
                            item_count++;
                        }
                    }
                }

                for (; item_count > 0; item_count--) {
                    this.moveItemForward(this.objects.length - 1, factory.map);
                }

            }

        }
    };

    this.separate = function (objects) {

        var newObjects = [];

        for (var itemName in items) {
            var item = items[itemName];//po tym itemie szukam combinacji

            if (item.separate == undefined)
                continue;
            if (item.separateDevice != undefined && object.type != item.separateDevice)
                continue;


            for (var obj in objects) {
                var obj_item = objects[obj];

                if (obj_item.getName() == itemName) {

                    for (var obj2 in item.separate) {
                        for (var i = 0; i < item.separate[obj2]; i++) {
                            this.addItem(obj2, newObjects);
                        }
                    }
                }
            }
        }

        this.objects = newObjects;

        this.moveItemsForward(factory.map);

    };


    this.setText = function (text) {
        this.text = text;
    };

    this.getObjects = function () {
        return this.objects;
    };

    this.markItems = function (mark) {
        for (var i in this.objects) {
            this.objects[i].markItem(mark);
        }
    };

    this.mark = function (mark) {
        if (mark == 'red')
            this.destructable = false;
    };

    this.unmark = function (mark) {
        if (mark == 'red')
            this.destructable = true;
    };


    this.deleteItem = function (i) {
        this.objects.splice(i, 1);
    };

    this.clearObjects = function () {
        this.objects.splice(0, this.objects.length);
    };

    this.objectCount = function () {
        return this.objects.length;
    };

    this.moveItemsForward = function (map) {
        for (var i = this.objects.length - 1; i >= 0; i--) {
            this.objects[i].moveForwardOnTick(this.objects[i], this, map);
            ;

        }
    };

    this.moveItemForward = function (i, map) {
        this.objects[i].moveForwardOnTick(this.objects[i], this, map);
    };

    this.tickObjects = function (map) {
        for (var i in this.objects) {
            this.objects[i].onTick(this.objects[i], this, map);
            this.objects[i].incLifeTime();
        }

    };
    this.deleteDeadObjects = function () {
        for (var i in this.objects) {
            if (this.objects[i].checkIfDead()){
                this.deleteItem(i);
            }
        }
    };

    this.addItem = function (item, ref) {
        if (ref == undefined) ref = this.objects;
        ref.push(new Item(this, item));
    };

    this.checkIfFull = function (factory) {
        if (this.objects.length >= this.maxItems) {
            factory.deleteObject(this.x, this.y, true);
            factory.placeObject(this.x, this.y, 'explosion');
        }

    };

    this.onTick = (object.onTick != undefined) ? object.onTick : function () {
    };
    this.onInit = (object.onInit != undefined) ? object.onInit : function () {
    };

    this.onInit(this, factory);

    this.patch9 = (object.input != undefined) ? bindIO(object.input, object.output) :
    {
        left: false,
        right: false,
        top: false,
        bottom: false
    };

    this.input = (object.input != undefined) ? object.input :
    {
        left: true,
        right: true,
        top: true,
        bottom: true
    };

    this.output = (object.output != undefined) ? object.output :
    {
        left: true,
        right: true,
        top: true,
        bottom: true
    };

    this.getData = function () {
        return data;
    };

    if (object.gravity != undefined)
        this.allowGravity = data.gravity;
    else
        this.allowGravity = true;

    if (this.gravity != undefined)
        this.allowGravity = this.gravity;

    this.type = data.type;
    this.image = data.image;

    this.getType = function () {
        return this.type;
    };

    this.gravity = function (map) {
        return map[this.x][this.y + 1] == undefined && this.allowGravity;

    };

    this.nextFrame = function (map) {
        if (this.image != null && this.image != undefined) {
            if (imagesData[this.image].patch9 == undefined) {
                if (this.frameDelay == 0) {
                    if (data.frameDelay != undefined)
                        this.frameDelay = data.frameDelay;

                    this.frame++;
                    if (this.frame >= imagesData[this.image].frame) {
                        this.frame = 0;
                        this.row = 0;
                    }
                } else {
                    this.frameDelay--;
                }
            }
        }
    };

    this.calculatePatch9 = function (map) {
        if (this.image != null && this.image != undefined) {
            if (imagesData[this.image].patch9 != undefined) {
                var left = this.patch9.left;
                var right = this.patch9.right;
                var top = this.patch9.top;
                var bottom = this.patch9.bottom;

                if (!left && !right && !top && !bottom) {
                    this.frame = 2;
                    this.row = 3;
                } else if (left && right && !top && !bottom) {
                    this.frame = 0;
                    this.row = 3;
                } else if (!left && !right && top && bottom) {
                    this.frame = 1;
                    this.row = 3;
                } else if (!left && right && !top && bottom) {
                    this.frame = 0;
                    this.row = 0;
                } else if (left && right && !top && bottom) {
                    this.frame = 1;
                    this.row = 0;
                } else if (left && !right && !top && bottom) {
                    this.frame = 2;
                    this.row = 0;
                } else if (!left && right && top && bottom) {
                    this.frame = 0;
                    this.row = 1;
                } else if (!left && right && top && bottom) {//
                    this.frame = 0;
                    this.row = 1;
                } else if (left && !right && top && bottom) {
                    this.frame = 2;
                    this.row = 1;
                } else if (!left && right && top && !bottom) {//
                    this.frame = 0;
                    this.row = 2;
                } else if (left && right && top && !bottom) {
                    this.frame = 1;
                    this.row = 2;
                } else if (left && !right && top && !bottom) {
                    this.frame = 2;
                    this.row = 2;

                } else if (left && !right && !top && !bottom) {
                    this.frame = 0;
                    this.row = 5;
                } else if (!left && right && !top && !bottom) {
                    this.frame = 0;
                    this.row = 4;
                } else if (!left && !right && top && !bottom) {
                    this.frame = 1;
                    this.row = 5;
                } else if (!left && !right && !top && bottom) {
                    this.frame = 1;
                    this.row = 4;


                } else {
                    this.frame = 1;
                    this.row = 1;
                }
            }
        }
    };

    this.isConnected = function () {
        return !!(this.patch9.left || this.patch9.top || this.patch9.right || this.patch9.bottom);

    };

    this.randomFrame = function () {
        this.frame = Math.floor((Math.random() * imagesData[this.image].frame));
    }

}