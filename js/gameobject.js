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
    this.combineLoopCount = object.combineLoopCount || 1;
    this.transportType = (object.transportType!=undefined ? object.transportType : undefined);
    this.transportRestrict = (object.transportRestrict != undefined ? object.transportRestrict : false);
    this.electricityStrength = (object.electricityStrength != undefined ? object.electricityStrength : 30);
    this.requirePower = (object.requirePower != undefined ? object.requirePower : false);
    this.power = 0;
    this.additionalData = additionalData;
    this.vars = {};
    this.canMveItemForward = (data.itemForward != undefined) ? data.itemForward : false;
    this.maxItems = (object.maxItems != undefined) ? object.maxItems : 99;
    
    this.restrictAlphabet = (object.restrictAlphabet != undefined) ? object.restrictAlphabet : false;
    this.restrictSeparate = (object.restrictSeparate != undefined) ? object.restrictSeparate : false;
    this.restrictCombine = (object.restrictCombine != undefined) ? object.restrictCombine : false;
    
    var combineItemsKeys = globalCombineItemsKeys;
    var selectItemsKeys = globalCombineItemsKeys;

    this.canSelectItem = (object.canSelectItem != undefined) ? object.canSelectItem : false;

    var selectedItems = items;

    this.refreshSelectedItems = function () {
        selectedItems = {};
        if (this.canSelectItem){
            var selectedItem = this.getVar('item');
            if (selectedItem == '-')
                selectedItems = {};
            else if (selectedItem == '*')
                selectedItems = items;
            else
                selectedItems[selectedItem] = items[selectedItem];
        }else{
            selectedItems = items;
        }
    };


    this.setAlphabetVar = function (factory) {
        if (factory.getGame().allowedItems != undefined || this.restrictAlphabet) {
            var alphabet = {};
            if (this.restrictAlphabet){
                var allowedItems = selectItemsKeys;
            }else {
                allowedItems = factory.getGame().allowedItems;
            }
            for (var i = 0; i < allowedItems.length; i++) {
                var obj = allowedItems[i];
                alphabet[obj] = items[obj];
            }
            this.setVar('alfabet', $.extend({'*': {name: 'All'}, '-': {name: 'None'}}, alphabet));
        } else {
            this.setVar('alfabet', $.extend({'*': {name: 'All'}, '-': {name: 'None'}}, items));
        }
    };


    if (this.restrictCombine == true){
        combineItemsKeys = [];
        for (var obj in selectedItems) {
            var itemsObject = items[obj];
            if (itemsObject.combineDevice != undefined && itemsObject.combineDevice == object.type){
                combineItemsKeys.push(obj);
            }
        }
    }

    if (this.restrictAlphabet){
        selectItemsKeys = [];
        for (obj in selectedItems) {
            itemsObject = items[obj];
            if ((itemsObject.combineDevice != undefined && itemsObject.combineDevice == object.type) || (itemsObject.separateDevice != undefined && itemsObject.separateDevice == object.type)){
                selectItemsKeys.push(obj);
            }
        }
    }

    this.powered = function () {
        if (this.requirePower == undefined || this.requirePower == false){
            return true;
        }else if(this.requirePower == true){
            return this.checkPower();
        }
    };

    this.needPower= function () {
        return this.requirePower == true;
    };

    this.checkPower = function () {
        return this.power>0;
    };

    this.tickPower = function () {
        if (this.needPower() && this.checkPower()){
            this.power--;
        }

        if (this.needPower() && !this.checkPower()){
            var electricityItemId =this.getItemIdByName('electricity');
            if (electricityItemId != null) {
                this.deleteItem(electricityItemId);
                this.power = this.electricityStrength;
            }
        }

        if (!this.powered() && gameOptions.drawPowered) {
            this.registerError('Need power',2);
        }

    };

    this.getItemIdByName = function (checkitem){
        var objectLength = this.objects.length;
        for (var i = 0; i < objectLength; i++) {
            var item = this.objects[i];
            if (item.getName() == checkitem){
                return i;
            }

        }
        return null;
    };

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
        return this.isRegisteredError;
    };

    this.hasWarning = function () {
        return this.isRegisteredWarning;
    };


    this.tickError = function () {
        if (this.isRegisteredError) {

            if (this.errorDuration < 0) {
                this.removeError();
            }

            this.errorDuration--;

        }
    };

    this.tickWarning = function () {
        if (this.isRegisteredWarning) {

            if (this.warningDuration < 0) {
                this.removeWarning();
            }

            this.warningDuration--;

        }
    };

    this.removeWarning = function () {
        this.warningMessage = undefined;
        this.warningDuration = -1;
        this.isRegisteredWarning = false;
    };

    this.removeError = function () {
        this.errorMessage = undefined;
        this.errorDuration = -1;
        this.isRegisteredError = false;
    };


    this.combineItem = function (itemName, objects, requireCombineItem, only) {
        var item = selectedItems[itemName];//po tym itemie szukam combinacji

        if (only != undefined && itemName != only)
            return;

        if (item.combine == undefined)
            return;
        if (item.combineDevice != undefined && object.type != item.combineDevice)
            return;


        if (requireCombineItem != undefined) {
            var haveRequiredItem = false;
            for (var item_name in item.combine) {
                if (item_name == requireCombineItem) {
                    haveRequiredItem = true;
                }
            }

            if (!haveRequiredItem) {
                return;
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
    };

    this.combine = function (objects, requireCombineItem, only) {

        if (objects.length == 0)
            return;

        var itemName = undefined;

        if (object.randomCombine != undefined && object.randomCombine == true) {
            itemName = combineItemsKeys[combineItemsKeys.length * Math.random() << 0];
            if (itemName != undefined)
            this.combineItem(itemName, objects, requireCombineItem, only);

        }else{
            for (itemName in selectedItems) {

                this.combineItem(itemName, objects, requireCombineItem, only);
            }
        }
    };

    this.separateItem = function (itemName, objects) {
        var item = selectedItems[itemName];//po tym itemie szukam combinacji

        var newObjectsArray = [];

        if (item.separate == undefined)
            return;
        if (item.separateDevice != undefined && object.type != item.separateDevice)
            return;

        var newArray = false;
        for (var obj in objects) {
            var obj_item = objects[obj];

            if (obj_item.getName() == itemName) {
                newArray = true;
            }
        }

        if (newArray) {
            for (obj in objects) {
                obj_item = objects[obj];

                if (obj_item.getName() == itemName) {
                    for (var obj2 in item.separate) {
                        for (var i = 0; i < item.separate[obj2]; i++) {
                            this.addItem(obj2,
                                newObjectsArray);
                        }
                    }
                }else{
                    this.addItem(obj_item.getName(), newObjectsArray);
                }
            }


            this.objects = newObjectsArray;
        }
    };

    this.separate = function (objects) {

        if (objects.length == 0)
        return;
        for (var itemName in selectedItems) {
            var itemsObject = selectedItems[itemName];
            if (this.restrictSeparate != undefined && this.restrictSeparate == true && itemsObject.separateDevice != undefined && itemsObject.separateDevice == object.type){
                this.separateItem(itemName, objects);
            }
            if (this.restrictSeparate == undefined || this.restrictSeparate == false){
                this.separateItem(itemName, objects);
            }
        }


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