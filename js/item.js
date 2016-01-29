var items = {
    ice: {name: 'Ice', type: 'solid', combine: {water: 1, cold: 1}, separate: {water: 1}, combineDevice: 'freezer'},
    water: {name: 'Water', type: 'liquid', combine: {H: 2, O: 1}, separate: {H: 2, O: 1}, transportType: 'pipe'},
    hotwater: {name: 'Hot Water', type: 'liquid', combine: {lowheat: 1, water: 1}, combineAdditionalItem: {}, transportType: 'pipe', combineDevice: 'fireplace',lifetime:200,lifetimeItem:'water'},
    H: {name: 'Hydrogen', type: 'gas', transportType: 'pipe'},
    electricity: {name: 'Electricity', type: 'electricity',transportType:'cable',combine:{gasoline:1,O:1},combineDevice:'electrogenerator'},
    gasoline: {name: 'Gasoline', type: 'liquid', transportType: 'pipe',combine:{oil:1,heat:1,lowheat:1},separate:{oil:1},combineDevice:'refinery'},
    oil: {name: 'Oil', type: 'liquid', transportType: 'pipe'},
    smoke: {name: 'Smoke', type: 'gas', transportType: 'pipe'},
    alcohol: {name: 'Alcohol', type: 'liquid', transportType: 'pipe',combine:{wheat:1,water:2},combineDevice:'fermenter',separate:{water:1,beer:1},separateDevice:'distiller'},
    beer: {name: 'Beer', type: 'liquid', transportType: 'pipe'},
    cold: {name: 'Cold', type: 'gas',lifetime:10, transportType: 'pipe'},
    O: {name: 'Oxygen', type: 'gas', transportType: 'pipe'},
    juice: {name: 'Juice', type: 'liquid'},
    pulp: {name: 'Pulp', type: 'solid'},
    heat: {name: 'Heat', type: 'gas',lifetime:10, transportType: 'pipe'},
    lowheat: {name: 'Low Heat', type: 'gas',lifetime:10, transportType: 'pipe'},
    steam: {name: 'Steam', type: 'gas', combine: {water: 1, heat: 1}, combineAdditionalItem: {}, combineDevice: 'fireplace',lifetime:200,lifetimeItem:'hotwater'},
    orange: {name: 'Orange', type: 'solid', combine: {juice: 1, pulp: 1}, separate: {juice: 1, pulp: 1}},
    icecream: {name: 'Ice cream', type: 'solid', combine: {juice: 1, ice: 1}, separate: {juice: 1, water: 1}},
    phone: {name: 'Phone', type: 'solid', combine: {electronic: 1, plastic: 1}, separate: {electronic: 1, plastic: 1}, transportType: 'line'},
    electronic: {name: 'Electronic', type: 'solid', combine: {silicon: 1, copper: 1}, separate: {silicon: 1, copper: 1}, transportType: 'line'},
    plastic: {name: 'Plastic', type: 'solid'},
    silicon: {name: 'Silicon', type: 'solid'},
    copper: {name: 'Copper', type: 'solid'},
    wheat: {name: 'Wheat', type: 'solid', separate: {flour: 3}, transportType: 'pipe'},
    dough: {name: 'Dough', type: 'solid', combine: {water: 1, flour: 1, egg: 1}},
    flour: {name: 'Flour', type: 'solid', transportType: 'pipe'},
    egg: {name: 'Egg', type: 'solid', transportType: 'line'},
    bread: {name: 'Bread', type: 'solid', combine: {dough: 1, heat: 1}, separate: {slicebread: 4}, combineDevice: 'fireplace'},
    gooddough: {name: 'Good Dough', type: 'solid', combine: {water: 1, dough: 1, egg: 1}},
    goodbread: {name: 'Good Bread', type: 'solid', combine: {gooddough: 1, heat: 1}, separate: {goodslicebread: 4}, combineDevice: 'fireplace'},
    goodslicebread: {name: 'Slice of bread', type: 'solid'},
    slicebread: {name: 'Slice of bread', type: 'solid'},
    ham: {name: 'Ham', type: 'solid', separate: {sliceham: 3}},
    sliceham: {name: 'Slice of Ham', type: 'solid'},
    cheese: {name: 'Cheese', type: 'solid', separate: {slicecheese: 3}},
    slicecheese: {name: 'Slice of Cheese', type: 'solid'},
    tomato: {name: 'Tomato', type: 'solid', separate: {slicetomato: 3}},
    slicetomato: {name: 'Slice of tomato', type: 'solid'},
    goodsandwich: {name: 'Sandwich', type: 'solid', combine: {goodslicebread: 1, slicetomato: 1, slicecheese: 1, sliceham: 1}},
    badsandwich1: {name: 'Sandwich', type: 'solid', combine: {slicebread: 1, sliceham: 1}},
    badsandwich2: {name: 'Sandwich', type: 'solid', combine: {slicebread: 1, slicecheese: 1}},
    badsandwich3: {name: 'Sandwich', type: 'solid', combine: {slicebread: 1, slicetomato: 1}},
    badsandwich4: {name: 'Sandwich', type: 'solid', combine: {slicebread: 1, slicetomato: 1, sliceham: 1}},
    badsandwich5: {name: 'Sandwich', type: 'solid', combine: {slicebread: 1, slicecheese: 1, sliceham: 1}},
    badsandwich6: {name: 'Sandwich', type: 'solid', combine: {slicebread: 1, slicetomato: 1, slicecheese: 1}},
    coffeebeans: {name: 'Coffee beans', type: 'solid', separate: {coffeepowder: 1}},
    coffeepowder: {name: 'Coffee powder', type: 'solid'},
    coffee: {name: 'Coffee', type: 'solid', combine: {coffeepowder: 1, water: 1}, combineDevice: 'coffeemachine'},
    sugar: {name: 'Sugar', type: 'solid'},
    coffeesugar: {name: 'Coffee with sugar', type: 'solid', combine: {coffee: 1, sugar: 1}},

    aluminium:{name:'Aluminium',type:'solid'},
    motherboard:{name:'Motherboard',type:'solid',combine:{electronic:3,copper:1,software:1}, transportType: 'line', combineDevice: 'computerCombiner'},
    graphicCard:{name:'Graphic Card',type:'solid',combine:{electronic:2,copper:1,software:2}, transportType: 'line', combineDevice: 'computerCombiner'},
    ram:{name:'RAM Memory',type:'solid',combine:{electronic:1,software:1}, transportType: 'line', combineDevice: 'computerCombiner'},
    computerCase:{name:'Computer Case',type:'solid',combine:{aluminium:3,copper:1}, transportType: 'line', combineDevice: 'computerCombiner'},
    computer:{name:'Computer',type:'solid',combine:{motherboard:1,graphicCard:1,software:2,ram:1,computerCase:1}, transportType: 'line', combineDevice: 'computerCombiner'},
    software:{name:'Software',type:'electricity', transportType: 'cable'},
};

var globalCombineItemsKeys = Object.keys(items);

var itemTypes = {
    gas: {name: 'Gas', desc: 'In pipe or transportation line, gas at first trying to go up, next from side to side, and at the end go down'},
    solid: {name: 'Solid', desc: 'In pipe or transportation line, solid at first trying to go down, next from side to side, and at the end go up'},
    liquid: {name: 'Liquid', desc: 'In pipe or transportation line, liquid at first trying to go down, next from side to side, and at the end go up'},
    electricity: {name: 'Electricity', desc: 'Electricity go everywhere'},
};

var itemTypesDirections = {
    gas: ['up', ['left', 'right'], 'down'],
    solid: ['down', ['left', 'right'], 'up'],
    liquid: ['down', ['left', 'right'], 'up'],
    electricity: 'random'
};

var transportationItems = {
    line: {name: 'Line'},
    pipe: {name: 'Pipe'},
    cable: {name: 'Wire'},
};

function Item(object, item) {

    var itemData = items[item];

    this.types = itemTypesDirections;

    this.lifetimeItem = itemData.lifetimeItem;
    var movedInThisTick = false;
    var container = object;
    this.lifetime = 0;

    var lastDirection = '';

    var type = itemData.type;

    this.toJson = function () {
        return {
            name: 'Item'
        };
    };

    this.onTick = (item.onTick != undefined) ? item.onTick : function () {
    };

    this.markItem = function (mark) {
        movedInThisTick = mark;
    };

    this.getMark = function () {
        return movedInThisTick;
    };

    this.getName = function () {
        return item;
    };

    this.clearLastDirection = function () {
        lastDirection = '';
    };

    this.moveForwardOnTick = function (i, object, map) {
        this.moveForward(i,object, map);

    };

    this.incLifeTime = function () {
        this.lifetime++;
    };

    this.checkIfDead = function () {
        if (itemData.hasOwnProperty('lifetime'))
            return this.lifetime >= itemData['lifetime'];
        else
            return false;
    };

    this.shuffle = function (o){
        for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
        return o;
    };

    this.go = function (left, right, up, down) {
        var behavior = this.types[type];

        if (typeof behavior == 'string' &&  behavior == 'random'){
            var temp_behavior = ['up', 'left', 'right', 'down'];
            behavior=this.shuffle(temp_behavior);
        }

        for (var i in behavior) {
            var direction = behavior[i];

            if ($.isArray(direction)) {
                var availableDirection = [];
                for (var j in direction) {
                    if (direction[j] == 'left' && left) availableDirection.push('left');
                    else if (direction[j] == 'right' && right) availableDirection.push('right');
                    else if (direction[j] == 'up' && up) availableDirection.push('up');
                    else if (direction[j] == 'down' && down)availableDirection.push('down');
                }

                if (availableDirection.length > 0)
                    return availableDirection[Math.floor(Math.random() * availableDirection.length)];

            } else {
                if (direction == 'left' && left) return 'left';
                else if (direction == 'right' && right) return 'right';
                else if (direction == 'up' && up) return 'up';
                else if (direction == 'down' && down) return 'down';
            }
        }

        return 'none';

    };

    this.move = function (i, target, direction) {
        if (!movedInThisTick) {
            movedInThisTick = true;
            lastDirection = direction;

            target.objects.push(container.objects[i]);
            container.objects.splice(i, 1);
            container = target;
        }
    };


    this.delete = function () {
        for (var i in container.objects) {
            if (container.objects[i] == this) {
                container.objects.splice(i, 1);
            }
        }
    };
    this.moveForward = function (i,object, map) {
        try {
            var top = map[object.x][object.y - 1];
            var canGoTop = top.input.bottom && !top.stop && top.patch9.bottom &&
                ((itemData.hasOwnProperty('transportType') && top.transportType != undefined && top.transportType == itemData.transportType) ||
                itemData.transportType == undefined ||
                top.transportType == undefined) &&
                (top.hasOwnProperty('transportRestrict') && ((top.transportRestrict == true && itemData.transportType!=undefined && itemData.transportType == top.transportType ) || top.transportRestrict == false));
        } catch (e) {
            canGoTop = false;
        }

        try {
            var left = map[object.x - 1][object.y];
            var canGoLeft = left.input.right && !left.stop && left.patch9.right &&
                ((itemData.hasOwnProperty('transportType') && left.transportType != undefined &&
                left.transportType == itemData.transportType) || itemData.transportType == undefined || left.transportType == undefined) &&
                (left.hasOwnProperty('transportRestrict') && ((left.transportRestrict == true && itemData.transportType!=undefined && itemData.transportType == left.transportType ) || left.transportRestrict == false));
        } catch (e) {
            canGoLeft = false;
        }

        try {
            var right = map[object.x + 1][object.y];
            var canGoRight = right.input.left && !right.stop && right.patch9.left &&
                ((itemData.hasOwnProperty('transportType') && right.transportType != undefined &&
                right.transportType == itemData.transportType) || itemData.transportType == undefined || right.transportType == undefined) &&
                (right.hasOwnProperty('transportRestrict') && ((right.transportRestrict == true && itemData.transportType!=undefined && itemData.transportType == right.transportType ) || right.transportRestrict == false));
        } catch (e) {
            canGoRight = false;
        }
        try {
            var bottom = map[object.x][object.y + 1];
            var canGoBottom = bottom.input.top && !bottom.stop && bottom.patch9.top &&
                ((itemData.hasOwnProperty('transportType') && bottom.transportType != undefined &&
                bottom.transportType == itemData.transportType) || itemData.transportType == undefined || bottom.transportType == undefined) &&
                (bottom.hasOwnProperty('transportRestrict') && ((bottom.transportRestrict == true && itemData.transportType!=undefined && itemData.transportType == bottom.transportType ) || bottom.transportRestrict == false));
        } catch (e) {
            canGoBottom = false;
        }

        canGoTop = canGoTop && object.output.top && object.patch9.top && (lastDirection != 'top');
        canGoLeft = canGoLeft && object.output.left && object.patch9.left && (lastDirection != 'left');
        canGoRight = canGoRight && object.output.right && object.patch9.right && (lastDirection != 'right');
        canGoBottom = canGoBottom && object.output.bottom && object.patch9.bottom && (lastDirection != 'bottom');

        var direction = this.go(canGoLeft, canGoRight, canGoTop, canGoBottom);

        if (direction == 'left') this.move(i, left, 'right');
        if (direction == 'right') this.move(i, right, 'left');
        if (direction == 'up') this.move(i, top, 'bottom');
        if (direction == 'down') this.move(i, bottom, 'top');
        if (direction == 'none') object.registerWarning('');
        else object.removeWarning();
    }
}