var factoryLevels = {
    tutorial1: {
        map: function (factory) {
            factory.createBaseFloor();
            factory.placeObject(8, 13, 'generator', true, false);
            factory.mark(8, 13, 'red');
            factory.placeObject(9, 14, 'block', true, false);
            factory.mark(9, 14, 'red');
            factory.placeObject(9, 13, 'block', true, false);
            factory.mark(9, 13, 'red');
            factory.placeObject(9, 12, 'block', true, false);
            factory.mark(9, 12, 'red');
            factory.placeObject(9, 11, 'block', true, false);
            factory.mark(9, 11, 'red');
            factory.placeObject(9, 6, 'block', true, false);
            factory.mark(9, 6, 'red');
            factory.placeObject(9, 5, 'block', true, false);
            factory.mark(9, 5, 'red');
            factory.placeObject(9, 4, 'block', true, false);
            factory.mark(9, 4, 'red');
            factory.placeObject(9, 3, 'block', true, false);
            factory.mark(9, 3, 'red');
            factory.placeObject(8, 3, 'block', true, false);
            factory.mark(8, 3, 'red');
            factory.placeObject(7, 3, 'block', true, false);
            factory.mark(7, 3, 'red');
            factory.placeObject(7, 4, 'block', true, false);
            factory.mark(7, 4, 'red');
            factory.placeObject(7, 5, 'block', true, false);
            factory.mark(7, 5, 'red');
            factory.placeObject(7, 6, 'block', true, false);
            factory.mark(7, 6, 'red');
            factory.placeObject(7, 11, 'block', true, false);
            factory.mark(7, 11, 'red');
            factory.placeObject(7, 12, 'block', true, false);
            factory.mark(7, 12, 'red');
            factory.placeObject(7, 13, 'block', true, false);
            factory.mark(7, 13, 'red');
            factory.placeObject(7, 14, 'block', true, false);
            factory.mark(7, 14, 'red');
            factory.placeObject(8, 14, 'block', true, false);
            factory.mark(8, 14, 'red');
            factory.placeObject(8, 4, 'storage', true, false);
            factory.mark(8, 4, 'red');
            factory.placeObject(8, 5, 'pipe', true, false);
            factory.mark(8, 5, 'red');
            factory.placeObject(8, 12, 'pipe', true, false);
            factory.mark(8, 12, 'red');
            factory.placeObject(8, 6, 'pipe', true, false);
            factory.placeObject(8, 11, 'pipe', true, false);
            factory.placeObject(10, 13, 'pin').text = 'Hydrogen generator';
            factory.placeObject(10, 4, 'pin').text = 'Collector';
            factory.placePatch9(8, 5, 'top');
            factory.placePatch9(8, 5, 'bottom');
            factory.mark(8, 5, 'red');
            factory.placePatch9(8, 12, 'top');
            factory.placePatch9(8, 12, 'bottom');
            factory.mark(8, 12, 'red');
            factory.placePatch9(8, 6, 'top');
            factory.placePatch9(8, 11, 'bottom');


        },
        name: 'Tutorial 1',
        difficult:'tutorial',
        subname: 'Basics',
        itemsToGenerate: ['H'],
        objectives: function (game, factory) {
            game.addObjective(objectivesPrefabs[0]('H', 5));
        },
        nextFactory: 'tutorial2',
        tools: ['pipe', 'info'],
        		offset:{x:5,y:0},
        animation: [
            {
                text: 'Hello worker. Before you go to work, you have to pass this training.<br>' +
                'On our first lesson we will learn how to build a pipe!'
            },
            {text: 'On left side of our screen, in Objects window, you can see objects that you can build.'},
            {text: 'Now, there is only a pipe, but don\'t worry. Next objects and tools will be appear later :)'},
            {text: 'OK. Look on the factory map. I pinned some text for you, for better understanding where everything is.'},
            {
                text: 'Look at Hydrogen generator. It produce Hydrogen, you can check that by hovering mouse on\n' +
                'bubbles are coming from it.'
            },
            {text: 'Now, using pipe, connect generator to collector above. Some pipe was already made.'},
            {
                text: 'Your goal is to collect 5 hydrogen in collector. As soon as you reach it, you can click\n' +
                '"Next Day" button in Objectives window to go to next training factory.'
            },
			{text:'Quick instruction: Construct selected object - Left mouse button'},
			{text:'Remove object/Disconnect pipe - Right mouse button'},
			{text:'Move map - Middle mouse button'},
			{text:'Good luck!'},
        ]
    },
    tutorial2: {
        map: function (factory) {
            factory.createBaseFloor();
            factory.placeObject(17, 14, 'generator', true, false, {items:['O']});
            factory.mark(17, 14, 'red');
            factory.placeObject(18, 15, 'block', true, false);
            factory.mark(18, 15, 'red');
            factory.placeObject(17, 15, 'block', true, false);
            factory.mark(17, 15, 'red');
            factory.placeObject(16, 15, 'block', true, false);
            factory.mark(16, 15, 'red');
            factory.placeObject(14, 7, 'block', true, false);
            factory.mark(14, 7, 'red');
            factory.placeObject(13, 7, 'block', true, false);
            factory.mark(13, 7, 'red');
            factory.placeObject(12, 7, 'block', true, false);
            factory.mark(12, 7, 'red');
            factory.placeObject(10, 15, 'block', true, false);
            factory.mark(10, 15, 'red');
            factory.placeObject(9, 15, 'block', true, false);
            factory.mark(9, 15, 'red');
            factory.placeObject(8, 15, 'block', true, false);
            factory.mark(8, 15, 'red');
            factory.placeObject(9, 14, 'generator', true, false, {items:['H']});
            factory.mark(9, 14, 'red');
            factory.placeObject(11, 8, 'pipe', true, false);
            factory.mark(11, 8, 'red');
            factory.placeObject(12, 8, 'pipe', true, false);
            factory.mark(12, 8, 'red');
            factory.placeObject(13, 8, 'pipe', true, false);
            factory.mark(13, 8, 'red');
            factory.placeObject(13, 9, 'pipe', true, false);
            factory.placeObject(11, 7, 'pipe', true, false);
            factory.mark(11, 7, 'red');
            factory.placeObject(11, 6, 'pipe', true, false);
            factory.mark(11, 6, 'red');
            factory.placeObject(12, 6, 'pipe', true, false);
            factory.mark(12, 6, 'red');
            factory.placeObject(14, 6, 'pipe', true, false);
            factory.mark(14, 6, 'red');
            factory.placeObject(15, 6, 'pipe', true, false);
            factory.mark(15, 6, 'red');
            factory.placeObject(16, 6, 'pipe', true, false);
            factory.mark(16, 6, 'red');
            factory.placeObject(17, 6, 'pipe', true, false);
            factory.mark(17, 6, 'red');
            factory.placeObject(15, 7, 'block', true, false);
            factory.mark(15, 7, 'red');
            factory.placeObject(16, 7, 'block', true, false);
            factory.mark(16, 7, 'red');
            factory.placeObject(17, 7, 'block', true, false);
            factory.mark(17, 7, 'red');
            factory.placeObject(18, 7, 'block', true, false);
            factory.mark(18, 7, 'red');
            factory.placeObject(9, 13, 'pipe', true, false);
            factory.mark(9, 13, 'red');
            factory.placeObject(9, 12, 'pipe', true, false);
            factory.placeObject(17, 13, 'pipe', true, false);
            factory.mark(17, 13, 'red');
            factory.placeObject(17, 12, 'pipe', true, false);
            factory.placeObject(10, 13, 'block', true, false);
            factory.mark(10, 13, 'red');
            factory.placeObject(10, 12, 'block', true, false);
            factory.mark(10, 12, 'red');
            factory.placeObject(10, 11, 'block', true, false);
            factory.mark(10, 11, 'red');
            factory.placeObject(11, 11, 'block', true, false);
            factory.mark(11, 11, 'red');
            factory.placeObject(12, 11, 'block', true, false);
            factory.mark(12, 11, 'red');
            factory.placeObject(12, 9, 'block', true, false);
            factory.mark(12, 9, 'red');
            factory.placeObject(11, 9, 'block', true, false);
            factory.mark(11, 9, 'red');
            factory.placeObject(10, 9, 'block', true, false);
            factory.mark(10, 9, 'red');
            factory.placeObject(9, 9, 'block', true, false);
            factory.mark(9, 9, 'red');
            factory.placeObject(8, 9, 'block', true, false);
            factory.mark(8, 9, 'red');
            factory.placeObject(8, 10, 'block', true, false);
            factory.mark(8, 10, 'red');
            factory.placeObject(8, 11, 'block', true, false);
            factory.mark(8, 11, 'red');
            factory.placeObject(8, 12, 'block', true, false);
            factory.mark(8, 12, 'red');
            factory.placeObject(8, 13, 'block', true, false);
            factory.mark(8, 13, 'red');
            factory.placeObject(8, 14, 'block', true, false);
            factory.mark(8, 14, 'red');
            factory.placeObject(10, 14, 'block', true, false);
            factory.mark(10, 14, 'red');
            factory.placeObject(13, 11, 'block', true, false);
            factory.mark(13, 11, 'red');
            factory.placeObject(14, 11, 'block', true, false);
            factory.mark(14, 11, 'red');
            factory.placeObject(15, 11, 'block', true, false);
            factory.mark(15, 11, 'red');
            factory.placeObject(16, 11, 'block', true, false);
            factory.mark(16, 11, 'red');
            factory.placeObject(16, 12, 'block', true, false);
            factory.mark(16, 12, 'red');
            factory.placeObject(16, 13, 'block', true, false);
            factory.mark(16, 13, 'red');
            factory.placeObject(16, 14, 'block', true, false);
            factory.mark(16, 14, 'red');
            factory.placeObject(18, 14, 'block', true, false);
            factory.mark(18, 14, 'red');
            factory.placeObject(18, 13, 'block', true, false);
            factory.mark(18, 13, 'red');
            factory.placeObject(18, 12, 'block', true, false);
            factory.mark(18, 12, 'red');
            factory.placeObject(18, 11, 'block', true, false);
            factory.mark(18, 11, 'red');
            factory.placeObject(18, 10, 'block', true, false);
            factory.mark(18, 10, 'red');
            factory.placeObject(18, 9, 'block', true, false);
            factory.mark(18, 9, 'red');
            factory.placeObject(17, 9, 'block', true, false);
            factory.mark(17, 9, 'red');
            factory.placeObject(16, 9, 'block', true, false);
            factory.mark(16, 9, 'red');
            factory.placeObject(15, 9, 'block', true, false);
            factory.mark(15, 9, 'red');
            factory.placeObject(14, 9, 'block', true, false);
            factory.mark(14, 9, 'red');
            factory.placeObject(10, 8, 'block', true, false);
            factory.mark(10, 8, 'red');
            factory.placeObject(10, 7, 'block', true, false);
            factory.mark(10, 7, 'red');
            factory.placeObject(10, 6, 'block', true, false);
            factory.mark(10, 6, 'red');
            factory.placeObject(10, 5, 'block', true, false);
            factory.mark(10, 5, 'red');
            factory.placeObject(11, 5, 'block', true, false);
            factory.mark(11, 5, 'red');
            factory.placeObject(12, 5, 'block', true, false);
            factory.mark(12, 5, 'red');
            factory.placeObject(13, 5, 'block', true, false);
            factory.mark(13, 5, 'red');
            factory.placeObject(14, 5, 'block', true, false);
            factory.mark(14, 5, 'red');
            factory.placeObject(15, 5, 'block', true, false);
            factory.mark(15, 5, 'red');
            factory.placeObject(16, 5, 'block', true, false);
            factory.mark(16, 5, 'red');
            factory.placeObject(17, 5, 'block', true, false);
            factory.mark(17, 5, 'red');
            factory.placeObject(18, 5, 'block', true, false);
            factory.mark(18, 5, 'red');
            factory.placeObject(18, 6, 'block', true, false);
            factory.mark(18, 6, 'red');
            factory.placeObject(17, 6, 'storage', true, false);
            factory.placeObject(9, 16, 'pin').text = 'Hydrogen Generator ';
            factory.placeObject(17, 16, 'pin').text = 'Oxygen Generator';
            factory.placeObject(13, 4, 'pin').text = 'Combiner';
            factory.placeObject(19, 6, 'pin').text = 'Collector';
            factory.placeObject(13, 6, 'combiner', true, false);
            factory.mark(13, 6, 'red');
            factory.placePatch9(11, 8, 'right');
            factory.placePatch9(11, 8, 'top');
            factory.mark(11, 8, 'red');
            factory.placePatch9(12, 8, 'left');
            factory.placePatch9(12, 8, 'right');
            factory.mark(12, 8, 'red');
            factory.placePatch9(13, 8, 'left');
            factory.placePatch9(13, 8, 'bottom');
            factory.mark(13, 8, 'red');
            factory.placePatch9(13, 9, 'top');
            factory.placePatch9(11, 7, 'top');
            factory.placePatch9(11, 7, 'bottom');
            factory.mark(11, 7, 'red');
            factory.placePatch9(11, 6, 'right');
            factory.placePatch9(11, 6, 'bottom');
            factory.mark(11, 6, 'red');
            factory.placePatch9(12, 6, 'left');
            factory.placePatch9(12, 6, 'right');
            factory.mark(12, 6, 'red');
            factory.placePatch9(14, 6, 'left');
            factory.placePatch9(14, 6, 'right');
            factory.mark(14, 6, 'red');
            factory.placePatch9(15, 6, 'left');
            factory.placePatch9(15, 6, 'right');
            factory.mark(15, 6, 'red');
            factory.placePatch9(16, 6, 'left');
            factory.placePatch9(16, 6, 'right');
            factory.mark(16, 6, 'red');
            factory.placePatch9(17, 6, 'left');
            factory.mark(17, 6, 'red');
            factory.placePatch9(9, 13, 'top');
            factory.placePatch9(9, 13, 'bottom');
            factory.mark(9, 13, 'red');
            factory.placePatch9(9, 12, 'bottom');
            factory.placePatch9(17, 13, 'top');
            factory.placePatch9(17, 13, 'bottom');
            factory.mark(17, 13, 'red');
            factory.placePatch9(17, 12, 'bottom');

        },
        name: 'Tutorial 2',
        difficult:'tutorial',
        subname: 'Combining items',
        itemsToGenerate: ['H', 'O'],
        objectives: function (game, factory) {
            game.addObjective(objectivesPrefabs[0]('water', 5));
        },
        nextFactory: 'tutorial3',
        tools: ['pipe', 'info','pusher'],
		offset:{x:5,y:0},
        animation: [
            {text: 'Second lesson! Yey! Today, we will learn how to combine different elements.'},
            {text: 'Look at the factory map. As you can see, there are two generators. One is produce hydrogen and another oxygen.'},
            {text: 'As probably everyone knows, water is H2O. So, let\'s combine two elements of hydrogen and one element of oxygen.'},
            {text: 'To do that, we provide you super advanced Element Combiner!'},
            {text: 'Connect both generators to combiner and look how water is made :)'},
            {text: 'After collecting 10 elements of water, click "Next Day" for next tutorial.'},
            {text: 'And remember! Items remain in combiner until it can by combine to something new.'},
            {text: 'You can use plunger to push remaining items from combiner to pipe.'},
        ],
        cookbook:['H','O','water']
    },
    tutorial3: {
        map: function (factory) {
            factory.createBaseFloor();
            factory.placeObject(10, 14, 'generator', true, false);
            factory.mark(10, 14, 'red');
            factory.placeObject(14, 5, 'storage', true, false);
            factory.mark(14, 5, 'red');
            factory.placeObject(9, 15, 'block', true, false);
            factory.mark(9, 15, 'red');
            factory.placeObject(10, 15, 'block', true, false);
            factory.mark(10, 15, 'red');
            factory.placeObject(11, 15, 'block', true, false);
            factory.mark(11, 15, 'red');
            factory.placeObject(10, 13, 'pipe', true, false);
            factory.mark(10, 13, 'red');
            factory.placeObject(10, 12, 'pipe', true, false);
            factory.placeObject(14, 9, 'fireplace', true, false);
            factory.mark(14, 9, 'red');
            factory.placeObject(15, 10, 'block', true, false);
            factory.mark(15, 10, 'red');
            factory.placeObject(14, 10, 'block', true, false);
            factory.mark(14, 10, 'red');
            factory.placeObject(13, 10, 'block', true, false);
            factory.mark(13, 10, 'red');
            factory.placeObject(12, 15, 'block', true, false);
            factory.mark(12, 15, 'red');
            factory.placeObject(12, 14, 'block', true, false);
            factory.mark(12, 14, 'red');
            factory.placeObject(12, 13, 'block', true, false);
            factory.mark(12, 13, 'red');
            factory.placeObject(12, 12, 'block', true, false);
            factory.mark(12, 12, 'red');
            factory.placeObject(12, 11, 'block', true, false);
            factory.mark(12, 11, 'red');
            factory.placeObject(12, 10, 'block', true, false);
            factory.mark(12, 10, 'red');
            factory.placeObject(8, 15, 'block', true, false);
            factory.mark(8, 15, 'red');
            factory.placeObject(8, 14, 'block', true, false);
            factory.mark(8, 14, 'red');
            factory.placeObject(8, 13, 'block', true, false);
            factory.mark(8, 13, 'red');
            factory.placeObject(8, 12, 'block', true, false);
            factory.mark(8, 12, 'red');
            factory.placeObject(8, 11, 'block', true, false);
            factory.mark(8, 11, 'red');
            factory.placeObject(8, 10, 'block', true, false);
            factory.mark(8, 10, 'red');
            factory.placeObject(8, 9, 'block', true, false);
            factory.mark(8, 9, 'red');
            factory.placeObject(8, 8, 'block', true, false);
            factory.mark(8, 8, 'red');
            factory.placeObject(8, 7, 'block', true, false);
            factory.mark(8, 7, 'red');
            factory.placeObject(8, 6, 'block', true, false);
            factory.mark(8, 6, 'red');
            factory.placeObject(9, 6, 'block', true, false);
            factory.mark(9, 6, 'red');
            factory.placeObject(10, 6, 'block', true, false);
            factory.mark(10, 6, 'red');
            factory.placeObject(11, 6, 'block', true, false);
            factory.mark(11, 6, 'red');
            factory.placeObject(12, 6, 'block', true, false);
            factory.mark(12, 6, 'red');
            factory.placeObject(16, 6, 'block', true, false);
            factory.mark(16, 6, 'red');
            factory.placeObject(17, 6, 'block', true, false);
            factory.mark(17, 6, 'red');
            factory.placeObject(18, 6, 'block', true, false);
            factory.mark(18, 6, 'red');
            factory.placeObject(19, 6, 'block', true, false);
            factory.mark(19, 6, 'red');
            factory.placeObject(19, 7, 'block', true, false);
            factory.mark(19, 7, 'red');
            factory.placeObject(19, 8, 'block', true, false);
            factory.mark(19, 8, 'red');
            factory.placeObject(19, 9, 'block', true, false);
            factory.mark(19, 9, 'red');
            factory.placeObject(19, 10, 'block', true, false);
            factory.mark(19, 10, 'red');
            factory.placeObject(18, 10, 'block', true, false);
            factory.mark(18, 10, 'red');
            factory.placeObject(17, 10, 'block', true, false);
            factory.mark(17, 10, 'red');
            factory.placeObject(16, 10, 'block', true, false);
            factory.mark(16, 10, 'red');
            factory.placeObject(12, 5, 'block', true, false);
            factory.mark(12, 5, 'red');
            factory.placeObject(16, 5, 'block', true, false);
            factory.mark(16, 5, 'red');
            factory.placeObject(14, 6, 'pipe', true, false);
            factory.mark(14, 6, 'red');
            factory.placeObject(14, 8, 'pipe', true, false);
            factory.mark(14, 8, 'red');
            factory.placeObject(14, 7, 'pipe', true, false);
            factory.mark(14, 7, 'red');
            factory.placeObject(13, 9, 'pipe', true, false);
            factory.placeObject(14, 11, 'pin').text = 'Fireplace burn or boil elements\nFor example: water is converting to steam';
            factory.placeObject(10, 16, 'pin').text = 'Water pump';
            factory.placeObject(14, 4, 'pin').text = 'Collect steam';
            factory.placeObject(9, 8, 'pin').text = 'TODO: Connect pipe';
            factory.placePatch9(10, 13, 'top');
            factory.placePatch9(10, 13, 'bottom');
            factory.mark(10, 13, 'red');
            factory.placePatch9(10, 12, 'bottom');
            factory.placePatch9(14, 6, 'top');
            factory.placePatch9(14, 6, 'bottom');
            factory.mark(14, 6, 'red');
            factory.placePatch9(14, 8, 'top');
            factory.placePatch9(14, 8, 'bottom');
            factory.mark(14, 8, 'red');
            factory.placePatch9(14, 7, 'top');
            factory.placePatch9(14, 7, 'bottom');
            factory.mark(14, 7, 'red');
            factory.placePatch9(13, 9, 'right');


        },
        name: 'Tutorial 3',
        subname: 'Fireplace',
        difficult:'tutorial',
        itemsToGenerate: ['water'],
        objectives: function (game, factory) {
            game.addObjective(objectivesPrefabs[0]('steam', 5));
        },
        nextFactory: 'tutorial4',
        tools: ['pipe', 'info'],
		offset:{x:5,y:0},
        animation: [
            {text: 'Ohh! This will be good! Finally, we put some hot staff to system :)'},
            {text: 'How to make a steam? By boiling water of course! So, let\'s do that.'},
            {
                text: 'There is a water generator, or water pump as you will.\n' +
                'Connect it to fireplace to boil water.'
            },
            {text: 'That\'s all! Collect only 5 steam element and go to next day.'},
        ],
        cookbook: ['water', 'H', 'O', 'steam','hotwater']
    },
    tutorial4: {
        map: function (factory) {
            factory.createBaseFloor();
            factory.placeObject(8, 14, 'generator', true, false, {items:['H']});
            factory.mark(8, 14, 'red');
            factory.placeObject(18, 14, 'generator', true, false, {items:['O']});
            factory.mark(18, 14, 'red');
            factory.placeObject(8, 13, 'pipe', true, false);
            factory.mark(8, 13, 'red');
            factory.placeObject(18, 13, 'pipe', true, false);
            factory.mark(18, 13, 'red');
            factory.placeObject(8, 11, 'pipe', true, false);
            factory.mark(8, 11, 'red');
            factory.placeObject(8, 10, 'pipe', true, false);
            factory.mark(8, 10, 'red');
            factory.placeObject(18, 11, 'pipe', true, false);
            factory.mark(18, 11, 'red');
            factory.placeObject(18, 10, 'pipe', true, false);
            factory.mark(18, 10, 'red');
            factory.placeObject(7, 10, 'block', true, false);
            factory.mark(7, 10, 'red');
            factory.placeObject(7, 11, 'block', true, false);
            factory.mark(7, 11, 'red');
            factory.placeObject(7, 12, 'block', true, false);
            factory.mark(7, 12, 'red');
            factory.placeObject(7, 13, 'block', true, false);
            factory.mark(7, 13, 'red');
            factory.placeObject(7, 14, 'block', true, false);
            factory.mark(7, 14, 'red');
            factory.placeObject(7, 15, 'block', true, false);
            factory.mark(7, 15, 'red');
            factory.placeObject(8, 15, 'block', true, false);
            factory.mark(8, 15, 'red');
            factory.placeObject(9, 15, 'block', true, false);
            factory.mark(9, 15, 'red');
            factory.placeObject(10, 15, 'block', true, false);
            factory.mark(10, 15, 'red');
            factory.placeObject(11, 15, 'block', true, false);
            factory.mark(11, 15, 'red');
            factory.placeObject(12, 15, 'block', true, false);
            factory.mark(12, 15, 'red');
            factory.placeObject(13, 15, 'block', true, false);
            factory.mark(13, 15, 'red');
            factory.placeObject(14, 15, 'block', true, false);
            factory.mark(14, 15, 'red');
            factory.placeObject(15, 15, 'block', true, false);
            factory.mark(15, 15, 'red');
            factory.placeObject(16, 15, 'block', true, false);
            factory.mark(16, 15, 'red');
            factory.placeObject(17, 15, 'block', true, false);
            factory.mark(17, 15, 'red');
            factory.placeObject(18, 15, 'block', true, false);
            factory.mark(18, 15, 'red');
            factory.placeObject(19, 15, 'block', true, false);
            factory.mark(19, 15, 'red');
            factory.placeObject(19, 14, 'block', true, false);
            factory.mark(19, 14, 'red');
            factory.placeObject(19, 13, 'block', true, false);
            factory.mark(19, 13, 'red');
            factory.placeObject(19, 12, 'block', true, false);
            factory.mark(19, 12, 'red');
            factory.placeObject(19, 11, 'block', true, false);
            factory.mark(19, 11, 'red');
            factory.placeObject(19, 10, 'block', true, false);
            factory.mark(19, 10, 'red');
            factory.placeObject(2, 3, 'deleter', true, false);
            factory.mark(2, 3, 'red');
            factory.placeObject(25, 3, 'storage', true, false, {item: 'steam', restrict: true});
            factory.mark(25, 3, 'red');
            factory.placeObject(2, 4, 'pipe', true, false);
            factory.mark(2, 4, 'red');
            factory.placeObject(3, 4, 'pipe', true, false);
            factory.mark(3, 4, 'red');
            factory.placeObject(4, 4, 'pipe', true, false);
            factory.placeObject(25, 4, 'pipe', true, false);
            factory.mark(25, 4, 'red');
            factory.placeObject(24, 4, 'pipe', true, false);
            factory.mark(24, 4, 'red');
            factory.placeObject(23, 4, 'pipe', true, false);
            factory.placeObject(3, 3, 'block', true, false);
            factory.mark(3, 3, 'red');
            factory.placeObject(3, 2, 'block', true, false);
            factory.mark(3, 2, 'red');
            factory.placeObject(2, 2, 'block', true, false);
            factory.mark(2, 2, 'red');
            factory.placeObject(1, 2, 'block', true, false);
            factory.mark(1, 2, 'red');
            factory.placeObject(1, 3, 'block', true, false);
            factory.mark(1, 3, 'red');
            factory.placeObject(1, 4, 'block', true, false);
            factory.placeObject(1, 5, 'block', true, false);
            factory.mark(1, 5, 'red');
            factory.placeObject(2, 5, 'block', true, false);
            factory.mark(2, 5, 'red');
            factory.placeObject(3, 5, 'block', true, false);
            factory.mark(3, 5, 'red');
            factory.placeObject(24, 3, 'block', true, false);
            factory.mark(24, 3, 'red');
            factory.placeObject(24, 2, 'block', true, false);
            factory.mark(24, 2, 'red');
            factory.placeObject(25, 2, 'block', true, false);
            factory.mark(25, 2, 'red');
            factory.placeObject(26, 2, 'block', true, false);
            factory.mark(26, 2, 'red');
            factory.placeObject(26, 3, 'block', true, false);
            factory.mark(26, 3, 'red');
            factory.placeObject(26, 4, 'block', true, false);
            factory.mark(26, 4, 'red');
            factory.placeObject(26, 5, 'block', true, false);
            factory.mark(26, 5, 'red');
            factory.placeObject(25, 5, 'block', true, false);
            factory.mark(25, 5, 'red');
            factory.placeObject(24, 5, 'block', true, false);
            factory.mark(24, 5, 'red');
            factory.placeObject(8, 9, 'pipe', true, false);
            factory.placeObject(18, 9, 'pipe', true, false);
            factory.mark(18, 9, 'red');
            factory.placeObject(17, 10, 'block', true, false);
            factory.mark(17, 10, 'red');
            factory.placeObject(16, 10, 'block', true, false);
            factory.mark(16, 10, 'red');
            factory.placeObject(15, 10, 'block', true, false);
            factory.mark(15, 10, 'red');
            factory.placeObject(14, 10, 'block', true, false);
            factory.mark(14, 10, 'red');
            factory.placeObject(13, 10, 'block', true, false);
            factory.mark(13, 10, 'red');
            factory.placeObject(12, 10, 'block', true, false);
            factory.mark(12, 10, 'red');
            factory.placeObject(11, 10, 'block', true, false);
            factory.mark(11, 10, 'red');
            factory.placeObject(10, 10, 'block', true, false);
            factory.mark(10, 10, 'red');
            factory.placeObject(9, 10, 'block', true, false);
            factory.mark(9, 10, 'red');
            factory.placeObject(9, 13, 'pipe', true, false);
            factory.mark(9, 13, 'red');
            factory.placeObject(10, 13, 'pipe', true, false);
            factory.mark(10, 13, 'red');
            factory.placeObject(11, 13, 'pipe', true, false);
            factory.mark(11, 13, 'red');
            factory.placeObject(11, 12, 'pipe', true, false);
            factory.mark(11, 12, 'red');
            factory.placeObject(12, 12, 'pipe', true, false);
            factory.mark(12, 12, 'red');
            factory.placeObject(13, 12, 'pipe', true, false);
            factory.mark(13, 12, 'red');
            factory.placeObject(13, 13, 'pipe', true, false);
            factory.mark(13, 13, 'red');
            factory.placeObject(13, 14, 'pipe', true, false);
            factory.mark(13, 14, 'red');
            factory.placeObject(14, 14, 'pipe', true, false);
            factory.mark(14, 14, 'red');
            factory.placeObject(14, 13, 'pipe', true, false);
            factory.mark(14, 13, 'red');
            factory.placeObject(14, 12, 'pipe', true, false);
            factory.mark(14, 12, 'red');
            factory.placeObject(14, 11, 'pipe', true, false);
            factory.mark(14, 11, 'red');
            factory.placeObject(13, 11, 'pipe', true, false);
            factory.mark(13, 11, 'red');
            factory.placeObject(12, 11, 'pipe', true, false);
            factory.mark(12, 11, 'red');
            factory.placeObject(11, 11, 'pipe', true, false);
            factory.mark(11, 11, 'red');
            factory.placeObject(10, 11, 'pipe', true, false);
            factory.mark(10, 11, 'red');
            factory.placeObject(10, 12, 'pipe', true, false);
            factory.mark(10, 12, 'red');
            factory.placeObject(9, 12, 'pipe', true, false);
            factory.mark(9, 12, 'red');
            factory.placeObject(8, 12, 'pipe', true, false);
            factory.mark(8, 12, 'red');
            factory.placeObject(17, 12, 'pipe', true, false);
            factory.mark(17, 12, 'red');
            factory.placeObject(17, 13, 'pipe', true, false);
            factory.mark(17, 13, 'red');
            factory.placeObject(17, 14, 'pipe', true, false);
            factory.mark(17, 14, 'red');
            factory.placeObject(16, 14, 'pipe', true, false);
            factory.mark(16, 14, 'red');
            factory.placeObject(16, 13, 'pipe', true, false);
            factory.mark(16, 13, 'red');
            factory.placeObject(15, 13, 'pipe', true, false);
            factory.mark(15, 13, 'red');
            factory.placeObject(15, 12, 'pipe', true, false);
            factory.mark(15, 12, 'red');
            factory.placeObject(15, 11, 'pipe', true, false);
            factory.mark(15, 11, 'red');
            factory.placeObject(16, 11, 'pipe', true, false);
            factory.mark(16, 11, 'red');
            factory.placeObject(16, 12, 'pipe', true, false);
            factory.mark(16, 12, 'red');
            factory.placeObject(17, 11, 'pipe', true, false);
            factory.mark(17, 11, 'red');
            factory.placeObject(10, 14, 'pipe', true, false);
            factory.mark(10, 14, 'red');
            factory.placeObject(11, 14, 'pipe', true, false);
            factory.mark(11, 14, 'red');
            factory.placeObject(12, 14, 'pipe', true, false);
            factory.mark(12, 14, 'red');
            factory.placeObject(12, 13, 'pipe', true, false);
            factory.mark(12, 13, 'red');
            factory.placeObject(18, 12, 'pipe', true, false);
            factory.mark(18, 12, 'red');
            factory.placeObject(4, 2, 'pin').text = 'Trash';
            factory.placeObject(16, 6, 'fireplace', true, false);
            factory.mark(16, 6, 'red');
            factory.placeObject(9, 6, 'pipe', true, false);
            factory.placeObject(11, 6, 'pipe', true, false);
            factory.placeObject(16, 7, 'pipe', true, false);
            factory.placeObject(16, 5, 'pipe', true, false);
            factory.placeObject(13, 2, 'filter', true, false);
            factory.mark(13, 2, 'red');
            factory.placeObject(13, 3, 'pipe', true, false);
            factory.placeObject(27, 3, 'pin').text = 'Accept only steam';
            factory.placeObject(18, 16, 'pin').text = 'Oxygen generator';
            factory.placeObject(8, 16, 'pin').text = 'Hydrogen generator';
            factory.placeObject(10, 7, 'block', true, false);
            factory.mark(10, 7, 'red');
            factory.placeObject(11, 7, 'block', true, false);
            factory.mark(11, 7, 'red');
            factory.placeObject(9, 7, 'block', true, false);
            factory.mark(9, 7, 'red');
            factory.placeObject(10, 6, 'combiner', true, false);
            factory.mark(10, 6, 'red');
            factory.placeObject(17, 6, 'pin').text = 'Make steam from water';
            factory.placeObject(10, 8, 'pin').text = 'Combine Hydrogen\nand Oxygen into water';
            factory.placeObject(13, 1, 'pin').text = 'Filter elements';
            factory.placeObject(14, 2, 'pipe', true, false);
            factory.placeObject(12, 2, 'pipe', true, false);
            factory.placeObject(19, 9, 'block', true, false);
            factory.placeObject(19, 8, 'block', true, false);
            factory.placeObject(18, 8, 'block', true, false);
            factory.placeObject(17, 8, 'block', true, false);
            factory.placeObject(16, 8, 'block', true, false);
            factory.placeObject(7, 9, 'block', true, false);
            factory.placeObject(7, 8, 'block', true, false);
            factory.placeObject(7, 7, 'block', true, false);
            factory.placeObject(7, 6, 'block', true, false);
            factory.placeObject(7, 5, 'block', true, false);
            factory.placeObject(8, 5, 'block', true, false);
            factory.placeObject(9, 5, 'block', true, false);
            factory.placeObject(4, 3, 'block', true, false);
            factory.placeObject(5, 3, 'block', true, false);
            factory.placeObject(6, 3, 'block', true, false);
            factory.placeObject(7, 3, 'block', true, false);
            factory.placeObject(8, 3, 'block', true, false);
            factory.placeObject(9, 3, 'block', true, false);
            factory.placeObject(10, 3, 'block', true, false);
            factory.placeObject(11, 1, 'block', true, false);
            factory.placeObject(14, 3, 'block', true, false);
            factory.placeObject(15, 3, 'block', true, false);
            factory.placeObject(10, 5, 'block', true, false);
            factory.placeObject(11, 5, 'block', true, false);
            factory.placeObject(12, 5, 'block', true, false);
            factory.placeObject(13, 5, 'block', true, false);
            factory.placeObject(14, 5, 'block', true, false);
            factory.placeObject(15, 5, 'block', true, false);
            factory.placeObject(15, 6, 'block', true, false);
            factory.placeObject(18, 7, 'block', true, false);
            factory.placeObject(18, 5, 'block', true, false);
            factory.placeObject(17, 5, 'block', true, false);
            factory.placeObject(17, 4, 'block', true, false);
            factory.placeObject(17, 3, 'block', true, false);
            factory.placeObject(16, 3, 'block', true, false);
            factory.placeObject(24, 1, 'block', true, false);
            factory.placeObject(23, 1, 'block', true, false);
            factory.placeObject(22, 1, 'block', true, false);
            factory.placeObject(21, 1, 'block', true, false);
            factory.placeObject(20, 1, 'block', true, false);
            factory.placeObject(19, 1, 'block', true, false);
            factory.placeObject(18, 1, 'block', true, false);
            factory.placeObject(18, 0, 'block', true, false);
            factory.placeObject(12, 7, 'block', true, false);
            factory.placeObject(13, 7, 'block', true, false);
            factory.placeObject(17, 9, 'pipe', true, false);
            factory.mark(17, 9, 'red');
            factory.placeObject(16, 9, 'pipe', true, false);
            factory.mark(16, 9, 'red');
            factory.placeObject(15, 9, 'pipe', true, false);
            factory.placeObject(12, 3, 'block', true, false);
            factory.placeObject(12, 4, 'block', true, false);
            factory.placeObject(10, 1, 'block', true, false);
            factory.placeObject(10, 2, 'block', true, false);
            factory.placeObject(12, 1, 'block', true, false);
            factory.placeObject(12, 6, 'pipe', true, false);
            factory.placeObject(13, 6, 'pipe', true, false);
            factory.placeObject(14, 6, 'pipe', true, false);
            factory.placeObject(14, 7, 'pipe', true, false);
            factory.placeObject(15, 7, 'pipe', true, false);
            factory.placeObject(14, 9, 'pipe', true, false);
            factory.placeObject(13, 9, 'pipe', true, false);
            factory.placeObject(12, 9, 'pipe', true, false);
            factory.placeObject(11, 9, 'pipe', true, false);
            factory.placeObject(10, 9, 'pipe', true, false);
            factory.placeObject(9, 9, 'pipe', true, false);
            factory.placeObject(8, 8, 'pipe', true, false);
            factory.placeObject(11, 2, 'pipe', true, false);
            factory.placeObject(11, 3, 'pipe', true, false);
            factory.placeObject(11, 4, 'pipe', true, false);
            factory.placeObject(10, 4, 'pipe', true, false);
            factory.placeObject(9, 4, 'pipe', true, false);
            factory.placeObject(15, 2, 'pipe', true, false);
            factory.placeObject(16, 2, 'pipe', true, false);
            factory.placeObject(17, 2, 'pipe', true, false);
            factory.placeObject(18, 2, 'pipe', true, false);
            factory.placeObject(19, 2, 'pipe', true, false);
            factory.placeObject(16, 4, 'pipe', true, false);
            factory.placeObject(15, 4, 'pipe', true, false);
            factory.placePatch9(8, 13, 'right');
            factory.placePatch9(8, 13, 'bottom');
            factory.mark(8, 13, 'red');
            factory.placePatch9(18, 13, 'left');
            factory.placePatch9(18, 13, 'bottom');
            factory.mark(18, 13, 'red');
            factory.placePatch9(8, 11, 'top');
            factory.placePatch9(8, 11, 'bottom');
            factory.mark(8, 11, 'red');
            factory.placePatch9(8, 10, 'top');
            factory.placePatch9(8, 10, 'bottom');
            factory.mark(8, 10, 'red');
            factory.placePatch9(18, 11, 'left');
            factory.placePatch9(18, 11, 'top');
            factory.mark(18, 11, 'red');
            factory.placePatch9(18, 10, 'top');
            factory.placePatch9(18, 10, 'bottom');
            factory.mark(18, 10, 'red');
            factory.placePatch9(2, 4, 'right');
            factory.placePatch9(2, 4, 'top');
            factory.mark(2, 4, 'red');
            factory.placePatch9(3, 4, 'left');
            factory.placePatch9(3, 4, 'right');
            factory.mark(3, 4, 'red');
            factory.placePatch9(4, 4, 'left');
            factory.placePatch9(25, 4, 'left');
            factory.placePatch9(25, 4, 'top');
            factory.mark(25, 4, 'red');
            factory.placePatch9(24, 4, 'left');
            factory.placePatch9(24, 4, 'right');
            factory.mark(24, 4, 'red');
            factory.placePatch9(23, 4, 'right');
            factory.placePatch9(8, 9, 'right');
            factory.placePatch9(8, 9, 'top');
            factory.placePatch9(8, 9, 'bottom');
            factory.placePatch9(18, 9, 'left');
            factory.placePatch9(18, 9, 'bottom');
            factory.mark(18, 9, 'red');
            factory.placePatch9(9, 13, 'left');
            factory.placePatch9(9, 13, 'right');
            factory.mark(9, 13, 'red');
            factory.placePatch9(10, 13, 'left');
            factory.placePatch9(10, 13, 'bottom');
            factory.mark(10, 13, 'red');
            factory.placePatch9(11, 13, 'right');
            factory.placePatch9(11, 13, 'top');
            factory.mark(11, 13, 'red');
            factory.placePatch9(11, 12, 'right');
            factory.placePatch9(11, 12, 'bottom');
            factory.mark(11, 12, 'red');
            factory.placePatch9(12, 12, 'left');
            factory.placePatch9(12, 12, 'right');
            factory.mark(12, 12, 'red');
            factory.placePatch9(13, 12, 'left');
            factory.placePatch9(13, 12, 'bottom');
            factory.mark(13, 12, 'red');
            factory.placePatch9(13, 13, 'top');
            factory.placePatch9(13, 13, 'bottom');
            factory.mark(13, 13, 'red');
            factory.placePatch9(13, 14, 'right');
            factory.placePatch9(13, 14, 'top');
            factory.mark(13, 14, 'red');
            factory.placePatch9(14, 14, 'left');
            factory.placePatch9(14, 14, 'top');
            factory.mark(14, 14, 'red');
            factory.placePatch9(14, 13, 'top');
            factory.placePatch9(14, 13, 'bottom');
            factory.mark(14, 13, 'red');
            factory.placePatch9(14, 12, 'top');
            factory.placePatch9(14, 12, 'bottom');
            factory.mark(14, 12, 'red');
            factory.placePatch9(14, 11, 'left');
            factory.placePatch9(14, 11, 'bottom');
            factory.mark(14, 11, 'red');
            factory.placePatch9(13, 11, 'left');
            factory.placePatch9(13, 11, 'right');
            factory.mark(13, 11, 'red');
            factory.placePatch9(12, 11, 'left');
            factory.placePatch9(12, 11, 'right');
            factory.mark(12, 11, 'red');
            factory.placePatch9(11, 11, 'left');
            factory.placePatch9(11, 11, 'right');
            factory.mark(11, 11, 'red');
            factory.placePatch9(10, 11, 'right');
            factory.placePatch9(10, 11, 'bottom');
            factory.mark(10, 11, 'red');
            factory.placePatch9(10, 12, 'left');
            factory.placePatch9(10, 12, 'top');
            factory.mark(10, 12, 'red');
            factory.placePatch9(9, 12, 'left');
            factory.placePatch9(9, 12, 'right');
            factory.mark(9, 12, 'red');
            factory.placePatch9(8, 12, 'right');
            factory.placePatch9(8, 12, 'top');
            factory.mark(8, 12, 'red');
            factory.placePatch9(17, 12, 'left');
            factory.placePatch9(17, 12, 'right');
            factory.placePatch9(17, 12, 'top');
            factory.mark(17, 12, 'red');
            factory.placePatch9(17, 13, 'right');
            factory.placePatch9(17, 13, 'bottom');
            factory.mark(17, 13, 'red');
            factory.placePatch9(17, 14, 'left');
            factory.placePatch9(17, 14, 'top');
            factory.mark(17, 14, 'red');
            factory.placePatch9(16, 14, 'right');
            factory.placePatch9(16, 14, 'top');
            factory.mark(16, 14, 'red');
            factory.placePatch9(16, 13, 'left');
            factory.placePatch9(16, 13, 'bottom');
            factory.mark(16, 13, 'red');
            factory.placePatch9(15, 13, 'right');
            factory.placePatch9(15, 13, 'top');
            factory.mark(15, 13, 'red');
            factory.placePatch9(15, 12, 'top');
            factory.placePatch9(15, 12, 'bottom');
            factory.mark(15, 12, 'red');
            factory.placePatch9(15, 11, 'right');
            factory.placePatch9(15, 11, 'bottom');
            factory.mark(15, 11, 'red');
            factory.placePatch9(16, 11, 'left');
            factory.placePatch9(16, 11, 'bottom');
            factory.mark(16, 11, 'red');
            factory.placePatch9(16, 12, 'right');
            factory.placePatch9(16, 12, 'top');
            factory.mark(16, 12, 'red');
            factory.placePatch9(17, 11, 'right');
            factory.placePatch9(17, 11, 'bottom');
            factory.mark(17, 11, 'red');
            factory.placePatch9(10, 14, 'right');
            factory.placePatch9(10, 14, 'top');
            factory.mark(10, 14, 'red');
            factory.placePatch9(11, 14, 'left');
            factory.placePatch9(11, 14, 'right');
            factory.mark(11, 14, 'red');
            factory.placePatch9(12, 14, 'left');
            factory.placePatch9(12, 14, 'top');
            factory.mark(12, 14, 'red');
            factory.placePatch9(12, 13, 'left');
            factory.placePatch9(12, 13, 'bottom');
            factory.mark(12, 13, 'red');
            factory.placePatch9(18, 12, 'left');
            factory.mark(18, 12, 'red');
            factory.placePatch9(9, 6, 'right');
            factory.placePatch9(11, 6, 'left');
            factory.placePatch9(11, 6, 'right');
            factory.placePatch9(16, 7, 'left');
            factory.placePatch9(16, 7, 'top');
            factory.placePatch9(16, 5, 'top');
            factory.placePatch9(16, 5, 'bottom');
            factory.placePatch9(13, 3, 'top');
            factory.placePatch9(14, 2, 'left');
            factory.placePatch9(14, 2, 'right');
            factory.placePatch9(12, 2, 'left');
            factory.placePatch9(12, 2, 'right');
            factory.placePatch9(17, 9, 'left');
            factory.placePatch9(17, 9, 'right');
            factory.mark(17, 9, 'red');
            factory.placePatch9(16, 9, 'left');
            factory.placePatch9(16, 9, 'right');
            factory.mark(16, 9, 'red');
            factory.placePatch9(15, 9, 'left');
            factory.placePatch9(15, 9, 'right');
            factory.placePatch9(12, 6, 'left');
            factory.placePatch9(12, 6, 'right');
            factory.placePatch9(13, 6, 'left');
            factory.placePatch9(13, 6, 'right');
            factory.placePatch9(14, 6, 'left');
            factory.placePatch9(14, 6, 'bottom');
            factory.placePatch9(14, 7, 'right');
            factory.placePatch9(14, 7, 'top');
            factory.placePatch9(15, 7, 'left');
            factory.placePatch9(15, 7, 'right');
            factory.placePatch9(14, 9, 'left');
            factory.placePatch9(14, 9, 'right');
            factory.placePatch9(13, 9, 'left');
            factory.placePatch9(13, 9, 'right');
            factory.placePatch9(12, 9, 'left');
            factory.placePatch9(12, 9, 'right');
            factory.placePatch9(11, 9, 'left');
            factory.placePatch9(11, 9, 'right');
            factory.placePatch9(10, 9, 'left');
            factory.placePatch9(10, 9, 'right');
            factory.placePatch9(9, 9, 'left');
            factory.placePatch9(9, 9, 'right');
            factory.placePatch9(8, 8, 'bottom');
            factory.placePatch9(11, 2, 'right');
            factory.placePatch9(11, 2, 'bottom');
            factory.placePatch9(11, 3, 'top');
            factory.placePatch9(11, 3, 'bottom');
            factory.placePatch9(11, 4, 'left');
            factory.placePatch9(11, 4, 'top');
            factory.placePatch9(10, 4, 'left');
            factory.placePatch9(10, 4, 'right');
            factory.placePatch9(9, 4, 'right');
            factory.placePatch9(15, 2, 'left');
            factory.placePatch9(15, 2, 'right');
            factory.placePatch9(16, 2, 'left');
            factory.placePatch9(16, 2, 'right');
            factory.placePatch9(17, 2, 'left');
            factory.placePatch9(17, 2, 'right');
            factory.placePatch9(18, 2, 'left');
            factory.placePatch9(18, 2, 'right');
            factory.placePatch9(19, 2, 'left');
            factory.placePatch9(16, 4, 'left');
            factory.placePatch9(16, 4, 'bottom');
            factory.placePatch9(15, 4, 'right');


        },
        name: 'Tutorial 4',
        subname: 'Filter',
        difficult:'tutorial',
        itemsToGenerate: ['H', 'O'],
        objectives: function (game, factory) {
            game.addObjective(objectivesPrefabs[1]({
                steam: 4
            }));
        },
        nextFactory: 'tutorial5',
        tools: ['pipe', 'info'],
		offset:{x:5,y:0},
        animation: [
            {text: 'It\'s time for our last lesson! Finally, we will learn how to use filters!'},
            {text: 'Filter can block some elements, and pass elements that you want to go on specific direction.'},
            {text: 'Select "Wrench" tool from tools window on left side and click on the filter.'},
            {text: 'It\'s that weirdly blinking thing on top of the map.'},
            {text: 'To limit some output of filter for example to steam, select it from the list.'},
            {
                text: 'Just remember! This collectors accept only specific items! If you put wrong item into it,\n' +
                'objective will fail and you have to start over again.'
            },
        ],
        cookbook: ['water', 'H', 'O', 'steam','hotwater']
    },
    tutorial5: {
        map: function (factory) {
            factory.createBaseFloor();
            factory.placeObject(14, 2, 'storage', true, false, {item: 'steam', restrict: true});
            factory.mark(14, 2, 'red');
            factory.placeObject(14, 3, 'pipe', true, false);
            factory.mark(14, 3, 'red');
            factory.placeObject(15, 3, 'block', true, false);
            factory.mark(15, 3, 'red');
            factory.placeObject(15, 2, 'block', true, false);
            factory.mark(15, 2, 'red');
            factory.placeObject(15, 1, 'block', true, false);
            factory.mark(15, 1, 'red');
            factory.placeObject(14, 1, 'block', true, false);
            factory.mark(14, 1, 'red');
            factory.placeObject(13, 1, 'block', true, false);
            factory.mark(13, 1, 'red');
            factory.placeObject(13, 2, 'block', true, false);
            factory.mark(13, 2, 'red');
            factory.placeObject(13, 3, 'block', true, false);
            factory.mark(13, 3, 'red');
            factory.placeObject(14, 4, 'pipe', true, false);
            factory.placeObject(3, 10, 'pipe', true, false);
            factory.mark(3, 10, 'red');
            factory.placeObject(4, 10, 'pipe', true, false);
            factory.placeObject(2, 8, 'pin').text = 'Generate Hydrogen and Oxygen';
            factory.placeObject(16, 2, 'pin').text = 'Collector will accept ONLY steam';
            factory.placeObject(2, 11, 'generator', true, false);
            factory.mark(2, 11, 'red');
            factory.placeObject(3, 11, 'block', true, false);
            factory.mark(3, 11, 'red');
            factory.placeObject(3, 12, 'block', true, false);
            factory.mark(3, 12, 'red');
            factory.placeObject(2, 12, 'block', true, false);
            factory.mark(2, 12, 'red');
            factory.placeObject(1, 12, 'block', true, false);
            factory.mark(1, 12, 'red');
            factory.placeObject(1, 11, 'block', true, false);
            factory.mark(1, 11, 'red');
            factory.placeObject(1, 10, 'block', true, false);
            factory.mark(1, 10, 'red');
            factory.placeObject(1, 9, 'block', true, false);
            factory.mark(1, 9, 'red');
            factory.placeObject(2, 9, 'block', true, false);
            factory.mark(2, 9, 'red');
            factory.placeObject(3, 9, 'block', true, false);
            factory.mark(3, 9, 'red');
            factory.placeObject(2, 10, 'pipe', true, false);
            factory.mark(2, 10, 'red');
            factory.placePatch9(14, 3, 'top');
            factory.placePatch9(14, 3, 'bottom');
            factory.mark(14, 3, 'red');
            factory.placePatch9(14, 4, 'top');
            factory.placePatch9(3, 10, 'left');
            factory.placePatch9(3, 10, 'right');
            factory.mark(3, 10, 'red');
            factory.placePatch9(4, 10, 'left');
            factory.placePatch9(2, 10, 'right');
            factory.placePatch9(2, 10, 'bottom');
            factory.mark(2, 10, 'red');

        },
        name: 'Tutorial 5',
        subname: 'Final test!',
        difficult:'tutorial',
        objectives: function (game, factory) {
            game.addObjective(objectivesPrefabs[0]('steam', 5));
        },
        nextFactory: 'stage1',
        itemsToGenerate: ['H', 'O'],
        tools: ['pipe', 'info', 'filter', 'fireplace', 'generator', 'combiner', 'block'],
		offset:{x:5,y:0},
        animation: [
            {text: 'This is your final test! Now, you\'re on your own.'},
            {text: 'But don\'t worry, it\'s not gonna be hard. In fact, you did exactly the same last time :)'},
            {text: 'So, show me that you know everything about making steam!'},
            {text: 'Shall we?'},
            {
                text: 'Quick tips: Generators produce randomly oxygen and hydrogen.<br>' +
                'Object have input ond output. Remember to put a pipe on appropriate side.<br>' +
                'Cookbook can be very helpful. If you have any trouble, answer is probably there :)'
            },
            {text: '[whisper] One more tip: Spacebar is pause!'},
            {text: 'Good luck!'},

        ],
        cookbook: ['water', 'H', 'O', 'steam','hotwater']

    },
    empty: {
        map: function (factory) {
            factory.createBaseFloor();
        },
        name: 'Editor Factory',
        subname: 'Feel free to create',
        //nextFactory: 'empty',
        money:-1,
        allowSave:true,
        objectives: function (game, factory) {
            game.addObjective(objectivesPrefabs[1]({steam:1}));
            game.addObjective(objectivesPrefabs[1]({water:1}));
        },
        itemsToGenerate: ['steam','water'],
    },
    stage1: {
        map: function (factory) {
            factory.createBaseFloor();
            factory.placeObject(3, 5, 'generator', true, false);
            factory.mark(3, 5, 'red');
            factory.placeObject(3, 4, 'pipe', true, false);
            factory.mark(3, 4, 'red');
            factory.placeObject(4, 4, 'pipe', true, false);
            factory.mark(4, 4, 'red');
            factory.placeObject(5, 4, 'pipe', true, false);
            factory.placeObject(4, 5, 'block', true, false);
            factory.mark(4, 5, 'red');
            factory.placeObject(4, 6, 'block', true, false);
            factory.mark(4, 6, 'red');
            factory.placeObject(3, 6, 'block', true, false);
            factory.mark(3, 6, 'red');
            factory.placeObject(2, 6, 'block', true, false);
            factory.mark(2, 6, 'red');
            factory.placeObject(2, 5, 'block', true, false);
            factory.mark(2, 5, 'red');
            factory.placeObject(2, 4, 'block', true, false);
            factory.mark(2, 4, 'red');
            factory.placeObject(2, 3, 'block', true, false);
            factory.mark(2, 3, 'red');
            factory.placeObject(3, 3, 'block', true, false);
            factory.mark(3, 3, 'red');
            factory.placeObject(4, 3, 'block', true, false);
            factory.mark(4, 3, 'red');
            factory.placeObject(19, 4, 'storage', true, false, {item: 'water', restrict: true});
            factory.mark(19, 4, 'red');
            factory.placeObject(17, 4, 'pipe', true, false);
            factory.placeObject(18, 4, 'pipe', true, false);
            factory.mark(18, 4, 'red');
            factory.placeObject(18, 5, 'block', true, false);
            factory.mark(18, 5, 'red');
            factory.placeObject(19, 5, 'block', true, false);
            factory.mark(19, 5, 'red');
            factory.placeObject(20, 5, 'block', true, false);
            factory.mark(20, 5, 'red');
            factory.placeObject(20, 4, 'block', true, false);
            factory.mark(20, 4, 'red');
            factory.placeObject(20, 3, 'block', true, false);
            factory.mark(20, 3, 'red');
            factory.placeObject(19, 3, 'block', true, false);
            factory.mark(19, 3, 'red');
            factory.placeObject(18, 3, 'block', true, false);
            factory.mark(18, 3, 'red');
            factory.placeObject(11, 9, 'deleter', true, false);
            factory.mark(11, 9, 'red');
            factory.placeObject(11, 8, 'pipe', true, false);
            factory.mark(11, 8, 'red');
            factory.placeObject(11, 7, 'pipe', true, false);
            factory.placeObject(12, 8, 'block', true, false);
            factory.mark(12, 8, 'red');
            factory.placeObject(12, 9, 'block', true, false);
            factory.mark(12, 9, 'red');
            factory.placeObject(12, 10, 'block', true, false);
            factory.mark(12, 10, 'red');
            factory.placeObject(11, 10, 'block', true, false);
            factory.mark(11, 10, 'red');
            factory.placeObject(10, 10, 'block', true, false);
            factory.mark(10, 10, 'red');
            factory.placeObject(10, 9, 'block', true, false);
            factory.mark(10, 9, 'red');
            factory.placeObject(10, 8, 'block', true, false);
            factory.mark(10, 8, 'red');
            factory.placeObject(19, 6, 'pin').text = 'Collector accept ONLY water';
            factory.placeObject(11, 11, 'pin').text = 'Trash';
            factory.placeObject(3, 7, 'pin').text = 'Produce water and oxygen';
            factory.placePatch9(3, 4, 'right');
            factory.placePatch9(3, 4, 'bottom');
            factory.mark(3, 4, 'red');
            factory.placePatch9(4, 4, 'left');
            factory.placePatch9(4, 4, 'right');
            factory.mark(4, 4, 'red');
            factory.placePatch9(5, 4, 'left');
            factory.placePatch9(17, 4, 'right');
            factory.placePatch9(18, 4, 'left');
            factory.placePatch9(18, 4, 'right');
            factory.mark(18, 4, 'red');
            factory.placePatch9(11, 8, 'top');
            factory.placePatch9(11, 8, 'bottom');
            factory.mark(11, 8, 'red');
            factory.placePatch9(11, 7, 'bottom');

        },
        name: 'Day 1',
        subname: 'Your first day',
        difficult:'easy',
        itemsToGenerate: ['water', 'O'],
        objectives: function (game, factory) {
            game.addObjective(objectivesPrefabs[0]('water', 5));
        },
        nextFactory: 'stage2',
        tools: ['pipe', 'info', 'block'],
		offset:{x:5,y:0},
        animation: [
            {text: 'Hello again worker! Welcome in your first day of work.'},
            {text: 'Glad you\'ve completed final exam!'},
            {text: 'From now on, I\'m your manager.'},
            {text: 'Here is your task for today:'},
            {text: 'Our water pump was damaged, and some oxygen is getting into pipe.'},
            {text: 'You have to filter water and destroy oxygen.'},
            {text: 'Unfortunately we don\'t have any filters.'},
            {text: 'Maybe use somehow gravity or look to cookbook on right top corner of the screen. It\'s very helpful.'},
            {text: 'Hope you can make it :)'},
            {text: 'See you tomorrow!'},

        ],
        cookbook: ['water', 'O']

    },
    stage2: {
        map: function (factory) {
            factory.createBaseFloor();
            factory.placeObject(3, 8, 'generator', true, false, {items:['orange']});
            factory.mark(3, 8, 'red');
            factory.placeObject(3, 7, 'pipe', true, false);
            factory.mark(3, 7, 'red');
            factory.placeObject(4, 7, 'pipe', true, false);
            factory.mark(4, 7, 'red');
            factory.placeObject(5, 7, 'pipe', true, false);
            factory.placeObject(4, 8, 'block', true, false);
            factory.mark(4, 8, 'red');
            factory.placeObject(4, 9, 'block', true, false);
            factory.mark(4, 9, 'red');
            factory.placeObject(3, 9, 'block', true, false);
            factory.mark(3, 9, 'red');
            factory.placeObject(2, 9, 'block', true, false);
            factory.mark(2, 9, 'red');
            factory.placeObject(2, 8, 'block', true, false);
            factory.mark(2, 8, 'red');
            factory.placeObject(2, 7, 'block', true, false);
            factory.mark(2, 7, 'red');
            factory.placeObject(2, 6, 'block', true, false);
            factory.mark(2, 6, 'red');
            factory.placeObject(3, 6, 'block', true, false);
            factory.mark(3, 6, 'red');
            factory.placeObject(4, 6, 'block', true, false);
            factory.mark(4, 6, 'red');
            factory.placeObject(3, 10, 'pin').text = 'Oranges';
            factory.placeObject(4, 12, 'block', true, false);
            factory.mark(4, 12, 'red');
            factory.placeObject(3, 12, 'block', true, false);
            factory.mark(3, 12, 'red');
            factory.placeObject(2, 12, 'block', true, false);
            factory.mark(2, 12, 'red');
            factory.placeObject(2, 13, 'block', true, false);
            factory.mark(2, 13, 'red');
            factory.placeObject(2, 14, 'block', true, false);
            factory.mark(2, 14, 'red');
            factory.placeObject(2, 15, 'block', true, false);
            factory.mark(2, 15, 'red');
            factory.placeObject(3, 15, 'block', true, false);
            factory.mark(3, 15, 'red');
            factory.placeObject(4, 15, 'block', true, false);
            factory.mark(4, 15, 'red');
            factory.placeObject(4, 14, 'block', true, false);
            factory.mark(4, 14, 'red');
            factory.placeObject(3, 14, 'generator', true, false, {items:['water']});
            factory.mark(3, 14, 'red');
            factory.placeObject(3, 13, 'pipe', true, false);
            factory.mark(3, 13, 'red');
            factory.placeObject(4, 13, 'pipe', true, false);
            factory.mark(4, 13, 'red');
            factory.placeObject(5, 13, 'pipe', true, false);
            factory.placeObject(3, 16, 'pin').text = 'Water';
            factory.placeObject(26, 9, 'storage', true, false, {item: 'icecream', restrict: true});
            factory.mark(26, 9, 'red');
            factory.placeObject(25, 9, 'pipe', true, false);
            factory.mark(25, 9, 'red');
            factory.placeObject(24, 9, 'pipe', true, false);
            factory.placeObject(25, 10, 'block', true, false);
            factory.mark(25, 10, 'red');
            factory.placeObject(26, 10, 'block', true, false);
            factory.mark(26, 10, 'red');
            factory.placeObject(27, 10, 'block', true, false);
            factory.mark(27, 10, 'red');
            factory.placeObject(27, 9, 'block', true, false);
            factory.mark(27, 9, 'red');
            factory.placeObject(27, 8, 'block', true, false);
            factory.mark(27, 8, 'red');
            factory.placeObject(26, 8, 'block', true, false);
            factory.mark(26, 8, 'red');
            factory.placeObject(25, 8, 'block', true, false);
            factory.mark(25, 8, 'red');
            factory.placeObject(26, 11, 'pin').text = 'Accept only ice cream';
            factory.placePatch9(3, 7, 'right');
            factory.placePatch9(3, 7, 'bottom');
            factory.mark(3, 7, 'red');
            factory.placePatch9(4, 7, 'left');
            factory.placePatch9(4, 7, 'right');
            factory.mark(4, 7, 'red');
            factory.placePatch9(5, 7, 'left');
            factory.placePatch9(3, 13, 'right');
            factory.placePatch9(3, 13, 'bottom');
            factory.mark(3, 13, 'red');
            factory.placePatch9(4, 13, 'left');
            factory.placePatch9(4, 13, 'right');
            factory.mark(4, 13, 'red');
            factory.placePatch9(5, 13, 'left');
            factory.placePatch9(25, 9, 'left');
            factory.placePatch9(25, 9, 'right');
            factory.mark(25, 9, 'red');
            factory.placePatch9(24, 9, 'right');

        },
        name: 'Day 2',
        subname: 'No ice cream!',
        difficult:'easy',
        tools: ['pipe', 'info', 'block', 'filter', 'combiner', 'separator', 'freezer'],
		offset:{x:5,y:0},
        itemsToGenerate: ['water', 'orange'],
        objectives: function (game, factory) {
            game.addObjective(objectivesPrefabs[0]('icecream', 15));
        },
        nextFactory: 'stage3',
        animation: [
            {text: 'Crisis alert! Our ice cream machine is broken, and there are kids waiting for their ice-cream!!'},
            {text: 'We have to fix this quickly!'},
            {text: 'Here! Make some useful thing using separator and freezer!'},
            {text: 'Quick info: Separator tears items on parts. Useful for making juice ;)'},
            {text: 'And freezer, well... freeze staff :)'},
            {text: 'Hurry up!'},

        ],
        cookbook: ['orange', 'water', 'ice', 'icecream', 'juice', 'pulp']
    },
    stage3: {
        map: function (factory) {
            factory.createBaseFloor();
            factory.placeObject(4, 6, 'line', true, false);
            factory.mark(4, 6, 'red');
            factory.placeObject(5, 6, 'line', true, false);
            factory.mark(5, 6, 'red');
            factory.placeObject(6, 6, 'line', true, false);
            factory.placeObject(5, 7, 'block', true, false);
            factory.mark(5, 7, 'red');
            factory.placeObject(5, 8, 'block', true, false);
            factory.mark(5, 8, 'red');
            factory.placeObject(4, 8, 'block', true, false);
            factory.mark(4, 8, 'red');
            factory.placeObject(3, 8, 'block', true, false);
            factory.mark(3, 8, 'red');
            factory.placeObject(3, 7, 'block', true, false);
            factory.mark(3, 7, 'red');
            factory.placeObject(3, 6, 'block', true, false);
            factory.mark(3, 6, 'red');
            factory.placeObject(3, 5, 'block', true, false);
            factory.mark(3, 5, 'red');
            factory.placeObject(4, 5, 'block', true, false);
            factory.mark(4, 5, 'red');
            factory.placeObject(5, 5, 'block', true, false);
            factory.mark(5, 5, 'red');
            factory.placeObject(21, 7, 'block', true, false);
            factory.mark(21, 7, 'red');
            factory.placeObject(21, 5, 'block', true, false);
            factory.mark(21, 5, 'red');
            factory.placeObject(20, 6, 'line', true, false);
            factory.placeObject(21, 6, 'line', true, false);
            factory.mark(21, 6, 'red');
            factory.placeObject(22, 6, 'line', true, false);
            factory.mark(22, 6, 'red');
            factory.placeObject(23, 6, 'storage', true, false);
            factory.mark(23, 6, 'red');
            factory.placeObject(22, 7, 'block', true, false);
            factory.mark(22, 7, 'red');
            factory.placeObject(23, 7, 'block', true, false);
            factory.mark(23, 7, 'red');
            factory.placeObject(24, 7, 'block', true, false);
            factory.mark(24, 7, 'red');
            factory.placeObject(24, 6, 'block', true, false);
            factory.mark(24, 6, 'red');
            factory.placeObject(24, 5, 'block', true, false);
            factory.mark(24, 5, 'red');
            factory.placeObject(23, 5, 'block', true, false);
            factory.mark(23, 5, 'red');
            factory.placeObject(22, 5, 'block', true, false);
            factory.mark(22, 5, 'red');
            factory.placeObject(12, 2, 'pipe', true, false);
            factory.placeObject(13, 2, 'pipe', true, false);
            factory.mark(13, 2, 'red');
            factory.placeObject(14, 2, 'pipe', true, false);
            factory.mark(14, 2, 'red');
            factory.placeObject(14, 3, 'pipe', true, false);
            factory.mark(14, 3, 'red');
            factory.placeObject(13, 3, 'pipe', true, false);
            factory.mark(13, 3, 'red');
            factory.placeObject(13, 4, 'pipe', true, false);
            factory.mark(13, 4, 'red');
            factory.placeObject(14, 4, 'pipe', true, false);
            factory.mark(14, 4, 'red');
            factory.placeObject(14, 5, 'pipe', true, false);
            factory.mark(14, 5, 'red');
            factory.placeObject(13, 5, 'pipe', true, false);
            factory.mark(13, 5, 'red');
            factory.placeObject(12, 5, 'pipe', true, false);
            factory.mark(12, 5, 'red');
            factory.placeObject(12, 4, 'pipe', true, false);
            factory.mark(12, 4, 'red');
            factory.placeObject(11, 4, 'pipe', true, false);
            factory.mark(11, 4, 'red');
            factory.placeObject(11, 5, 'pipe', true, false);
            factory.mark(11, 5, 'red');
            factory.placeObject(11, 6, 'pipe', true, false);
            factory.mark(11, 6, 'red');
            factory.placeObject(12, 6, 'pipe', true, false);
            factory.mark(12, 6, 'red');
            factory.placeObject(13, 6, 'pipe', true, false);
            factory.mark(13, 6, 'red');
            factory.placeObject(14, 6, 'pipe', true, false);
            factory.mark(14, 6, 'red');
            factory.placeObject(15, 6, 'pipe', true, false);
            factory.mark(15, 6, 'red');
            factory.placeObject(15, 7, 'pipe', true, false);
            factory.mark(15, 7, 'red');
            factory.placeObject(14, 7, 'pipe', true, false);
            factory.mark(14, 7, 'red');
            factory.placeObject(13, 7, 'pipe', true, false);
            factory.mark(13, 7, 'red');
            factory.placeObject(13, 8, 'pipe', true, false);
            factory.mark(13, 8, 'red');
            factory.placeObject(14, 8, 'pipe', true, false);
            factory.mark(14, 8, 'red');
            factory.placeObject(14, 9, 'pipe', true, false);
            factory.mark(14, 9, 'red');
            factory.placeObject(13, 9, 'pipe', true, false);
            factory.mark(13, 9, 'red');
            factory.placeObject(13, 10, 'pipe', true, false);
            factory.mark(13, 10, 'red');
            factory.placeObject(14, 10, 'pipe', true, false);
            factory.mark(14, 10, 'red');
            factory.placeObject(13, 11, 'pipe', true, false);
            factory.mark(13, 11, 'red');
            factory.placeObject(12, 11, 'pipe', true, false);
            factory.mark(12, 11, 'red');
            factory.placeObject(12, 10, 'pipe', true, false);
            factory.mark(12, 10, 'red');
            factory.placeObject(15, 10, 'pipe', true, false);
            factory.placeObject(14, 11, 'pipe', true, false);
            factory.placeObject(13, 12, 'block', true, false);
            factory.mark(13, 12, 'red');
            factory.placeObject(13, 13, 'block', true, false);
            factory.mark(13, 13, 'red');
            factory.placeObject(13, 14, 'block', true, false);
            factory.mark(13, 14, 'red');
            factory.placeObject(13, 15, 'block', true, false);
            factory.mark(13, 15, 'red');
            factory.placeObject(13, 16, 'block', true, false);
            factory.mark(13, 16, 'red');
            factory.placeObject(13, 17, 'block', true, false);
            factory.mark(13, 17, 'red');
            factory.placeObject(13, 18, 'block', true, false);
            factory.mark(13, 18, 'red');
            factory.placeObject(13, 1, 'block', true, false);
            factory.mark(13, 1, 'red');
            factory.placeObject(13, 0, 'block', true, false);
            factory.mark(13, 0, 'red');
            factory.placeObject(4, 7, 'generator', true, false, {items:['phone']});
            factory.mark(4, 7, 'red');
            factory.placeObject(11, 10, 'pipe', true, false);
            factory.placeObject(15, 2, 'pipe', true, false);
            factory.placePatch9byTool(4, 6, 'right', true, 'line');
            factory.placePatch9byTool(4, 6, 'bottom', true, 'line');
            factory.mark(4, 6, 'red');
            factory.placePatch9byTool(5, 6, 'left', true, 'line');
            factory.placePatch9byTool(5, 6, 'right', true, 'line');
            factory.mark(5, 6, 'red');
            factory.placePatch9byTool(6, 6, 'left', true, 'line');
            factory.placePatch9byTool(20, 6, 'right', true, 'line');
            factory.placePatch9byTool(21, 6, 'left', true, 'line');
            factory.placePatch9byTool(21, 6, 'right', true, 'line');
            factory.mark(21, 6, 'red');
            factory.placePatch9byTool(22, 6, 'left', true, 'line');
            factory.placePatch9byTool(22, 6, 'right', true, 'line');
            factory.mark(22, 6, 'red');
            factory.placePatch9(12, 2, 'right');
            factory.placePatch9(13, 2, 'left');
            factory.placePatch9(13, 2, 'right');
            factory.mark(13, 2, 'red');
            factory.placePatch9(14, 2, 'left');
            factory.placePatch9(14, 2, 'right');
            factory.placePatch9(14, 2, 'bottom');
            factory.mark(14, 2, 'red');
            factory.placePatch9(14, 3, 'left');
            factory.placePatch9(14, 3, 'top');
            factory.mark(14, 3, 'red');
            factory.placePatch9(13, 3, 'right');
            factory.placePatch9(13, 3, 'bottom');
            factory.mark(13, 3, 'red');
            factory.placePatch9(13, 4, 'right');
            factory.placePatch9(13, 4, 'top');
            factory.mark(13, 4, 'red');
            factory.placePatch9(14, 4, 'left');
            factory.placePatch9(14, 4, 'bottom');
            factory.mark(14, 4, 'red');
            factory.placePatch9(14, 5, 'left');
            factory.placePatch9(14, 5, 'top');
            factory.mark(14, 5, 'red');
            factory.placePatch9(13, 5, 'left');
            factory.placePatch9(13, 5, 'right');
            factory.mark(13, 5, 'red');
            factory.placePatch9(12, 5, 'right');
            factory.placePatch9(12, 5, 'top');
            factory.mark(12, 5, 'red');
            factory.placePatch9(12, 4, 'left');
            factory.placePatch9(12, 4, 'bottom');
            factory.mark(12, 4, 'red');
            factory.placePatch9(11, 4, 'right');
            factory.placePatch9(11, 4, 'bottom');
            factory.mark(11, 4, 'red');
            factory.placePatch9(11, 5, 'top');
            factory.placePatch9(11, 5, 'bottom');
            factory.mark(11, 5, 'red');
            factory.placePatch9(11, 6, 'right');
            factory.placePatch9(11, 6, 'top');
            factory.mark(11, 6, 'red');
            factory.placePatch9(12, 6, 'left');
            factory.placePatch9(12, 6, 'right');
            factory.mark(12, 6, 'red');
            factory.placePatch9(13, 6, 'left');
            factory.placePatch9(13, 6, 'right');
            factory.mark(13, 6, 'red');
            factory.placePatch9(14, 6, 'left');
            factory.placePatch9(14, 6, 'right');
            factory.mark(14, 6, 'red');
            factory.placePatch9(15, 6, 'left');
            factory.placePatch9(15, 6, 'bottom');
            factory.mark(15, 6, 'red');
            factory.placePatch9(15, 7, 'left');
            factory.placePatch9(15, 7, 'top');
            factory.mark(15, 7, 'red');
            factory.placePatch9(14, 7, 'left');
            factory.placePatch9(14, 7, 'right');
            factory.mark(14, 7, 'red');
            factory.placePatch9(13, 7, 'right');
            factory.placePatch9(13, 7, 'bottom');
            factory.mark(13, 7, 'red');
            factory.placePatch9(13, 8, 'right');
            factory.placePatch9(13, 8, 'top');
            factory.mark(13, 8, 'red');
            factory.placePatch9(14, 8, 'left');
            factory.placePatch9(14, 8, 'bottom');
            factory.mark(14, 8, 'red');
            factory.placePatch9(14, 9, 'left');
            factory.placePatch9(14, 9, 'top');
            factory.mark(14, 9, 'red');
            factory.placePatch9(13, 9, 'right');
            factory.placePatch9(13, 9, 'bottom');
            factory.mark(13, 9, 'red');
            factory.placePatch9(13, 10, 'left');
            factory.placePatch9(13, 10, 'right');
            factory.placePatch9(13, 10, 'top');
            factory.mark(13, 10, 'red');
            factory.placePatch9(14, 10, 'left');
            factory.placePatch9(14, 10, 'right');
            factory.mark(14, 10, 'red');
            factory.placePatch9(13, 11, 'left');
            factory.placePatch9(13, 11, 'right');
            factory.mark(13, 11, 'red');
            factory.placePatch9(12, 11, 'right');
            factory.placePatch9(12, 11, 'top');
            factory.mark(12, 11, 'red');
            factory.placePatch9(12, 10, 'left');
            factory.placePatch9(12, 10, 'right');
            factory.placePatch9(12, 10, 'bottom');
            factory.mark(12, 10, 'red');
            factory.placePatch9(15, 10, 'left');
            factory.placePatch9(14, 11, 'left');
            factory.placePatch9(11, 10, 'right');
            factory.placePatch9(15, 2, 'left');


        },
        name: 'Day 3',
        subname: 'Blocked by pipe',
        difficult:'easy',
        tools: ['pipe', 'line', 'info', 'block', 'filter', 'combiner', 'separator', 'pusher'],
		offset:{x:5,y:0},
        itemsToGenerate: ['phone'],
        objectives: function (game, factory) {
            game.addObjective(objectivesPrefabs[0]('phone', 15));
        },
        nextFactory: 'stage4',
        animation: [
            {text: 'Hello there worker! We have here some bad situation...'},
            {text: 'As you can see, our transportation line can\'t go through this pipe!'},
            {text: 'And nobody can destroy it.'},
            {text: 'But we must transport this little phones to warehouse!'},
            {text: 'Please, figure out how to do it and do it!'},

        ],
        cookbook: ['phone', 'electronic', 'plastic', 'silicon', 'copper']
    },
    stage4: {
        map: function (factory) {
            factory.createBaseFloor();
            factory.placeObject(1, 17, 'pin').text = 'Wheat';
            factory.placeObject(5, 17, 'pin').text = 'Water';
            factory.placeObject(9, 17, 'pin').text = ' Eggs';
            factory.placeObject(2, 16, 'block', true, false);
            factory.mark(2, 16, 'red');
            factory.placeObject(6, 16, 'block', true, false);
            factory.mark(6, 16, 'red');
            factory.placeObject(10, 16, 'block', true, false);
            factory.mark(10, 16, 'red');
            factory.placeObject(2, 15, 'generator', true, false, {items:['wheat']});
            factory.mark(2, 15, 'red');
            factory.placeObject(6, 15, 'generator', true, false, {items:['water']});
            factory.mark(6, 15, 'red');
            factory.placeObject(10, 15, 'generator', true, false, {items:['egg']});
            factory.mark(10, 15, 'red');
            factory.placeObject(3, 16, 'block', true, false);
            factory.mark(3, 16, 'red');
            factory.placeObject(3, 15, 'block', true, false);
            factory.mark(3, 15, 'red');
            factory.placeObject(3, 14, 'block', true, false);
            factory.mark(3, 14, 'red');
            factory.placeObject(1, 16, 'block', true, false);
            factory.mark(1, 16, 'red');
            factory.placeObject(1, 15, 'block', true, false);
            factory.mark(1, 15, 'red');
            factory.placeObject(1, 14, 'block', true, false);
            factory.mark(1, 14, 'red');
            factory.placeObject(5, 16, 'block', true, false);
            factory.mark(5, 16, 'red');
            factory.placeObject(5, 15, 'block', true, false);
            factory.mark(5, 15, 'red');
            factory.placeObject(5, 14, 'block', true, false);
            factory.mark(5, 14, 'red');
            factory.placeObject(7, 14, 'block', true, false);
            factory.mark(7, 14, 'red');
            factory.placeObject(7, 15, 'block', true, false);
            factory.mark(7, 15, 'red');
            factory.placeObject(7, 16, 'block', true, false);
            factory.mark(7, 16, 'red');
            factory.placeObject(9, 14, 'block', true, false);
            factory.mark(9, 14, 'red');
            factory.placeObject(9, 15, 'block', true, false);
            factory.mark(9, 15, 'red');
            factory.placeObject(9, 16, 'block', true, false);
            factory.mark(9, 16, 'red');
            factory.placeObject(11, 16, 'block', true, false);
            factory.mark(11, 16, 'red');
            factory.placeObject(11, 15, 'block', true, false);
            factory.mark(11, 15, 'red');
            factory.placeObject(11, 14, 'block', true, false);
            factory.mark(11, 14, 'red');
            factory.placeObject(2, 14, 'pipe', true, false);
            factory.mark(2, 14, 'red');
            factory.placeObject(2, 13, 'pipe', true, false);
            factory.placeObject(6, 14, 'pipe', true, false);
            factory.mark(6, 14, 'red');
            factory.placeObject(6, 13, 'pipe', true, false);
            factory.placeObject(10, 14, 'line', true, false);
            factory.mark(10, 14, 'red');
            factory.placeObject(10, 13, 'line', true, false);
            factory.placeObject(25, 15, 'storage', true, false);
            factory.mark(25, 15, 'red');
            factory.placeObject(24, 16, 'block', true, false);
            factory.mark(24, 16, 'red');
            factory.placeObject(25, 16, 'block', true, false);
            factory.mark(25, 16, 'red');
            factory.placeObject(26, 16, 'block', true, false);
            factory.mark(26, 16, 'red');
            factory.placeObject(26, 15, 'block', true, false);
            factory.mark(26, 15, 'red');
            factory.placeObject(26, 14, 'block', true, false);
            factory.mark(26, 14, 'red');
            factory.placeObject(25, 14, 'block', true, false);
            factory.mark(25, 14, 'red');
            factory.placeObject(24, 14, 'block', true, false);
            factory.mark(24, 14, 'red');
            factory.placeObject(24, 15, 'line', true, false);
            factory.mark(24, 15, 'red');
            factory.placeObject(23, 15, 'line', true, false);
            factory.placeObject(24, 17, 'pin').text = 'Tasty bread go here :)';
            factory.placePatch9(2, 14, 'top');
            factory.placePatch9(2, 14, 'bottom');
            factory.mark(2, 14, 'red');
            factory.placePatch9(2, 13, 'bottom');
            factory.placePatch9(6, 14, 'top');
            factory.placePatch9(6, 14, 'bottom');
            factory.mark(6, 14, 'red');
            factory.placePatch9(6, 13, 'bottom');
            factory.placePatch9byTool(10, 14, 'top', true, 'line');
            factory.placePatch9byTool(10, 14, 'bottom', true, 'line');
            factory.mark(10, 14, 'red');
            factory.placePatch9byTool(10, 13, 'bottom', true, 'line');
            factory.placePatch9byTool(24, 15, 'left', true, 'line');
            factory.placePatch9byTool(24, 15, 'right', true, 'line');
            factory.mark(24, 15, 'red');
            factory.placePatch9byTool(23, 15, 'right', true, 'line');


        },
        name: 'Day 4',
        subname: 'Baking time!',
        difficult:'easy',
        tools: ['pipe', 'line', 'info', 'block', 'filter', 'combiner', 'separator', 'pusher', 'fireplace'],
		offset:{x:5,y:0},
        itemsToGenerate: [],
        objectives: function (game, factory) {
            game.addObjective(objectivesPrefabs[0]('bread', 15));
            game.addObjective(objectivesPrefabs[0]('goodbread', 15), [
                {text: 'Damn! This bread taste like mud!'},
                {text: 'Add to your muddy dough another egg and water, then bake!'},
                {text: 'Here 50$ for upgrade bakery.'},
                {text: 'Don\'t disappoint me this time!'},
            ]);
        },
        nextFactory: 'stage5',
        animation: [
            {text: 'Hmmm... Is\'t very odd... It seams that we don\'t have any issue. Hmm...'},
            {text: 'Well, never mind! Task for you:'},
            {text: 'Today you will cook!'},
            {text: 'Our client require 15 bread. And you have amazing opportunity to do it :)'},
            {text: 'Here is your cook cap. Back to work!'},
            {text: 'Aaaaa! Now I find missing issue! We don\'t a lot of money.'},
            {text: 'I\'m sure you can make it :)'},

        ],
        cookbook: ['water', 'egg', 'flour', 'dough', 'wheat','bread'],
        money: 200
    },
    stage5: {
        map: function (factory) {
            factory.createBaseFloor();
            factory.placeObject(4, 9, 'generator', true, false, {items:['bread', 'goodbread']});
            factory.mark(4, 9, 'red');
            factory.placeObject(4, 8, 'line', true, false);
            factory.mark(4, 8, 'red');
            factory.placeObject(4, 7, 'line', true, false);
            factory.placeObject(5, 8, 'block', true, false);
            factory.mark(5, 8, 'red');
            factory.placeObject(5, 9, 'block', true, false);
            factory.mark(5, 9, 'red');
            factory.placeObject(5, 10, 'block', true, false);
            factory.mark(5, 10, 'red');
            factory.placeObject(4, 10, 'block', true, false);
            factory.mark(4, 10, 'red');
            factory.placeObject(3, 10, 'block', true, false);
            factory.mark(3, 10, 'red');
            factory.placeObject(3, 9, 'block', true, false);
            factory.mark(3, 9, 'red');
            factory.placeObject(3, 8, 'block', true, false);
            factory.mark(3, 8, 'red');
            factory.placeObject(3, 11, 'pin').text = 'Bread';
            factory.placeObject(7, 8, 'block', true, false);
            factory.mark(7, 8, 'red');
            factory.placeObject(7, 9, 'block', true, false);
            factory.mark(7, 9, 'red');
            factory.placeObject(7, 10, 'block', true, false);
            factory.mark(7, 10, 'red');
            factory.placeObject(8, 10, 'block', true, false);
            factory.mark(8, 10, 'red');
            factory.placeObject(9, 10, 'block', true, false);
            factory.mark(9, 10, 'red');
            factory.placeObject(9, 9, 'block', true, false);
            factory.mark(9, 9, 'red');
            factory.placeObject(9, 8, 'block', true, false);
            factory.mark(9, 8, 'red');
            factory.placeObject(8, 9, 'generator', true, false, {items:['ham', 'tomato', 'cheese']});
            factory.mark(8, 9, 'red');
            factory.placeObject(8, 8, 'pipe', true, false);
            factory.mark(8, 8, 'red');
            factory.placeObject(8, 7, 'pipe', true, false);
            factory.placeObject(7, 11, 'pin').text = 'Ingredients';
            factory.placeObject(26, 8, 'storage', true, false, {item: 'goodsandwich', restrict: true});
            factory.mark(26, 8, 'red');
            factory.placeObject(25, 8, 'line', true, false);
            factory.mark(25, 8, 'red');
            factory.placeObject(24, 8, 'line', true, false);
            factory.placeObject(25, 7, 'block', true, false);
            factory.mark(25, 7, 'red');
            factory.placeObject(26, 7, 'block', true, false);
            factory.mark(26, 7, 'red');
            factory.placeObject(27, 7, 'block', true, false);
            factory.mark(27, 7, 'red');
            factory.placeObject(27, 8, 'block', true, false);
            factory.mark(27, 8, 'red');
            factory.placeObject(27, 9, 'block', true, false);
            factory.mark(27, 9, 'red');
            factory.placeObject(26, 9, 'block', true, false);
            factory.mark(26, 9, 'red');
            factory.placeObject(25, 9, 'block', true, false);
            factory.mark(25, 9, 'red');
            factory.placeObject(25, 10, 'pin').text = 'Put sandwiches here';
            factory.placePatch9byTool(4, 8, 'top', true, 'line');
            factory.placePatch9byTool(4, 8, 'bottom', true, 'line');
            factory.mark(4, 8, 'red');
            factory.placePatch9byTool(4, 7, 'bottom', true, 'line');
            factory.placePatch9(8, 8, 'top');
            factory.placePatch9(8, 8, 'bottom');
            factory.mark(8, 8, 'red');
            factory.placePatch9(8, 7, 'bottom');
            factory.placePatch9byTool(25, 8, 'left', true, 'line');
            factory.placePatch9byTool(25, 8, 'right', true, 'line');
            factory.mark(25, 8, 'red');
            factory.placePatch9byTool(24, 8, 'right', true, 'line');


        },
        name: 'Day 5',
        subname: 'Yammi Yammi',
        difficult:'easy',
        tools: ['pipe', 'line', 'info', 'block', 'filter', 'combiner', 'separator', 'pusher', 'deleter'],
		offset:{x:5,y:0},
        itemsToGenerate: ['bread', 'goodbread'],
        objectives: function (game, factory) {
            game.addObjective(objectivesPrefabs[0]('goodsandwich', 15));
        },
        nextFactory: 'home1',
        animation: [
            {text: 'Hey! Tomorrow is your first 2 day vacation!'},
            {text: 'I hope you are exiting for this little break!'},
            {text: 'Ok, back to business. Last time you baked bread, right?', linkText: 'Right! My bread was awesome!'},
            {text: 'Sure, sure... no one remembers that muddy bread you did.'},
            {text: 'But anyway, since we have fully operational bakery, our company wants to start selling sandwiches!'},
            {text: 'Once again, you will be responsible for that.'},
            {text: 'And remember: it\'s hard to make a good sandwich.'},
            {text: 'Try your best!'},

        ],
        cookbook: ['bread', 'goodbread', 'slicebread', 'goodslicebread', 'ham', 'sliceham', 'tomato', 'slicetomato', 'cheese', 'slicecheese'],
        money: 500,
        failMessage: 'That again tastes like mud! Try again! Remember to use good bread.'
    },
    home1: {
        map: function (factory) {
            $('#storyscreen').addClass('home');
            factory.getGame().getRenderEngine().changeBackground('background2');
            factory.createBaseFloor();
            factory.placeObject(5, 9, 'generator', true, false, {items:['coffeebeans', 'sugar']});
            factory.placeObject(10, 9, 'generator', true, false, {items:['water']});
            factory.mark(5,9,'red');
            factory.placeObject(6,9,'block',true,false);
            factory.mark(6,9,'red');
            factory.placeObject(6,10,'block',true,false);
            factory.mark(6,10,'red');
            factory.placeObject(5,10,'block',true,false);
            factory.mark(5,10,'red');
            factory.placeObject(4,10,'block',true,false);
            factory.mark(4,10,'red');
            factory.placeObject(4,9,'block',true,false);
            factory.mark(4,9,'red');
            factory.placeObject(4,8,'block',true,false);
            factory.mark(4,8,'red');
            factory.placeObject(6,8,'block',true,false);
            factory.mark(6,8,'red');
            factory.placeObject(5,8,'pipe',true,false);
            factory.mark(5,8,'red');
            factory.placeObject(5,7,'pipe',true,false);
            factory.placeObject(4,11,'pin').text = 'Pantry';
            factory.placeObject(10,8,'pipe',true,false);
            factory.mark(10,8,'red');
            factory.placeObject(10,7,'pipe',true,false);
            factory.mark(10,9,'red');
            factory.placeObject(11,8,'block',true,false);
            factory.mark(11,8,'red');
            factory.placeObject(11,9,'block',true,false);
            factory.mark(11,9,'red');
            factory.placeObject(11,10,'block',true,false);
            factory.mark(11,10,'red');
            factory.placeObject(10,10,'block',true,false);
            factory.mark(10,10,'red');
            factory.placeObject(9,10,'block',true,false);
            factory.mark(9,10,'red');
            factory.placeObject(9,9,'block',true,false);
            factory.mark(9,9,'red');
            factory.placeObject(9,8,'block',true,false);
            factory.mark(9,8,'red');
            factory.placeObject(24,11,'storage',true,false);
            factory.mark(24,11,'red');
            factory.placeObject(23,10,'block',true,false);
            factory.mark(23,10,'red');
            factory.placeObject(24,10,'block',true,false);
            factory.mark(24,10,'red');
            factory.placeObject(25,10,'block',true,false);
            factory.mark(25,10,'red');
            factory.placeObject(25,11,'block',true,false);
            factory.mark(25,11,'red');
            factory.placeObject(25,12,'block',true,false);
            factory.mark(25,12,'red');
            factory.placeObject(24,12,'block',true,false);
            factory.mark(24,12,'red');
            factory.placeObject(23,12,'block',true,false);
            factory.mark(23,12,'red');
            factory.placeObject(23,11,'pipe',true,false);
            factory.mark(23,11,'red');
            factory.placeObject(22,11,'pipe',true,false);
            factory.placeObject(9,11,'pin').text = 'Water';
            factory.placePatch9(5,8,'top');
            factory.placePatch9(5,8,'bottom');
            factory.mark(5,8,'red');
            factory.placePatch9(5,7,'bottom');
            factory.placePatch9(10,8,'top');
            factory.placePatch9(10,8,'bottom');
            factory.mark(10,8,'red');
            factory.placePatch9(10,7,'bottom');
            factory.placePatch9(23,11,'left');
            factory.placePatch9(23,11,'right');
            factory.mark(23,11,'red');
            factory.placePatch9(22,11,'right');
        },
        name: 'Day 6',
        subname: 'Home, sweet home',
        difficult:'easy',
        tools: ['pipe', 'info', 'block', 'filter', 'combiner', 'separator', 'pusher', 'deleter','coffeemachine'],
		offset:{x:5,y:0},
        itemsToGenerate: ['water', 'coffeebeans', 'sugar'],
        objectives: function (game, factory) {
            game.addObjective(objectivesPrefabs[0]('coffee', 2));
            game.addObjective(objectivesPrefabs[0]('coffeesugar', 2), [
                {text: 'Could you add some sugar to my coffee, please?'}
            ]);
        },
        nextFactory: 'home2',
        setup:'home',
        animation: [
            {text: 'Wakie Wakie honey!'},
            {text: 'I see you brought some staff from work...'},
            {text: 'So, maybe you make my coffee?', linkText: 'Sure!'},

        ],
        cookbook: ['water', 'coffeebeans', 'coffeepowder', 'coffee', 'sugar', 'coffeesugar'],
        money: 500,
        failMessage: 'No. I\' pretty sure this isn\'t a coffee.'
    },
    home2: {
        map: function (factory) {
            factory.createBaseFloor();
            $('#storyscreen').addClass('home');
            factory.getGame().getRenderEngine().changeBackground('background2');
            factory.placeObject(5,13,'generator',true,false,{items:['water'],random:10});
            factory.placeObject(10,10,'block',true,false);
            factory.mark(10,10,'red');
            factory.placeObject(10,9,'block',true,false);
            factory.mark(10,9,'red');
            factory.placeObject(10,8,'block',true,false);
            factory.mark(10,8,'red');
            factory.placeObject(10,7,'block',true,false);
            factory.mark(10,7,'red');
            factory.placeObject(10,6,'block',true,false);
            factory.mark(10,6,'red');
            factory.placeObject(10,5,'block',true,false);
            factory.mark(10,5,'red');
            factory.placeObject(10,4,'block',true,false);
            factory.mark(10,4,'red');
            factory.placeObject(10,3,'block',true,false);
            factory.mark(10,3,'red');
            factory.placeObject(10,2,'block',true,false);
            factory.mark(10,2,'red');
            factory.placeObject(10,1,'block',true,false);
            factory.mark(10,1,'red');
            factory.placeObject(10,0,'block',true,false);
            factory.mark(10,0,'red');

            factory.mark(5,13,'red');
            factory.placeObject(6,12,'block',true,false);
            factory.mark(6,12,'red');
            factory.placeObject(6,13,'block',true,false);
            factory.mark(6,13,'red');
            factory.placeObject(6,14,'block',true,false);
            factory.mark(6,14,'red');
            factory.placeObject(5,14,'block',true,false);
            factory.mark(5,14,'red');
            factory.placeObject(4,14,'block',true,false);
            factory.mark(4,14,'red');
            factory.placeObject(4,13,'block',true,false);
            factory.mark(4,13,'red');
            factory.placeObject(4,12,'block',true,false);
            factory.mark(4,12,'red');
            factory.placeObject(5,12,'pipe',true,false);
            factory.mark(5,12,'red');
            factory.placeObject(5,11,'pipe',true,false);
            factory.placeObject(14,13,'heater',true,false,{item: 'hotwater', restrict: true});
            factory.mark(14,13,'red');
            factory.placeObject(14,14,'block',true,false);
            factory.mark(14,14,'red');
            factory.placeObject(14,12,'block',true,false);
            factory.mark(14,12,'red');
            factory.placeObject(13,12,'block',true,false);
            factory.mark(13,12,'red');
            factory.placeObject(15,12,'block',true,false);
            factory.mark(15,12,'red');
            factory.placeObject(15,14,'block',true,false);
            factory.mark(15,14,'red');
            factory.placeObject(13,14,'block',true,false);
            factory.mark(13,14,'red');
            factory.placeObject(16,13,'pipe',true,false);
            factory.placeObject(15,13,'pipe',true,false);
            factory.mark(15,13,'red');
            factory.placeObject(13,13,'pipe',true,false);
            factory.mark(13,13,'red');
            factory.placeObject(12,13,'pipe',true,false);
            factory.mark(12,13,'red');
            factory.placeObject(4,15,'pin').text = 'Water pump';
            factory.placeObject(13,15,'pin').text = 'Heater';
            factory.placeObject(11,13,'fireplace',true,false,{random:5});
            factory.mark(11,13,'red');
            factory.placeObject(12,14,'block',true,false);
            factory.mark(12,14,'red');
            factory.placeObject(11,14,'block',true,false);
            factory.mark(11,14,'red');
            factory.placeObject(10,14,'block',true,false);
            factory.mark(10,14,'red');
            factory.placeObject(10,13,'pipe',true,false);
            factory.mark(10,13,'red');
            factory.placeObject(9,13,'pipe',true,false);
            factory.placeObject(11,12,'pipe',true,false);
            factory.mark(11,12,'red');
            factory.placeObject(12,12,'pipe',true,false);
            factory.mark(12,12,'red');
            factory.placeObject(13,11,'block',true,false);
            factory.mark(13,11,'red');
            factory.placeObject(12,11,'block',true,false);
            factory.mark(12,11,'red');
            factory.placeObject(10,11,'block',true,false);
            factory.mark(10,11,'red');
            factory.placeObject(10,12,'block',true,false);
            factory.mark(10,12,'red');
            factory.placeObject(5,10,'pipe',true,false);
            factory.placeObject(5,9,'pipe',true,false);
            factory.placeObject(11,11,'pipe',true,false);
            factory.mark(11,11,'red');
            factory.placeObject(11,10,'pipe',true,false);
            factory.placePatch9(5,12,'top');
            factory.placePatch9(5,12,'bottom');
            factory.mark(5,12,'red');
            factory.placePatch9(5,11,'top');
            factory.placePatch9(5,11,'bottom');
            factory.placePatch9(16,13,'left');
            factory.placePatch9(15,13,'left');
            factory.placePatch9(15,13,'right');
            factory.mark(15,13,'red');
            factory.placePatch9(13,13,'left');
            factory.placePatch9(13,13,'right');
            factory.mark(13,13,'red');
            factory.placePatch9(12,13,'right');
            factory.placePatch9(12,13,'top');
            factory.mark(12,13,'red');
            factory.placePatch9(10,13,'left');
            factory.placePatch9(10,13,'right');
            factory.mark(10,13,'red');
            factory.placePatch9(9,13,'right');
            factory.placePatch9(11,12,'right');
            factory.placePatch9(11,12,'top');
            factory.placePatch9(11,12,'bottom');
            factory.mark(11,12,'red');
            factory.placePatch9(12,12,'left');
            factory.placePatch9(12,12,'bottom');
            factory.mark(12,12,'red');
            factory.placePatch9(5,10,'top');
            factory.placePatch9(5,10,'bottom');
            factory.placePatch9(5,9,'bottom');
            factory.placePatch9(11,11,'top');
            factory.placePatch9(11,11,'bottom');
            factory.mark(11,11,'red');
            factory.placePatch9(11,10,'bottom');
        },
        name: 'Day 7',
        subname: 'Freeze!',
        difficult:'easy',
        itemsToGenerate: ['water'],
        objectives: function (game, factory) {
            game.addObjective(objectivesPrefabs[2]({hotwater:{count:21,text:'Temperature'}},10));
        },
        nextFactory: 'new1_d',
        animation: [
            {text: 'Honey! It\'s really cold in here!'},
            {text: 'I think heater was broken.'},
            {text: 'Could you check it and fix it?', linkText: 'Sure!'},
            {text: 'Just heat some water and put it into heater'},
            {text: 'Oh! Remember that steam in heater may cause explosion!', linkText: 'OK....'},
            {text: 'Well, everything except hot water in heater will cause explosion.', linkText: 'OK! I get it!'},

        ],
        tools:['pipe','info', 'block','deleter','filter'],
		offset:{x:5,y:0},
        cookbook: ['water', 'ice', 'hotwater'],
        money: 250,
        failMessage: 'Heater damaged!'
    },
    rep1: {
        map: function (factory) {
            factory.createBaseFloor();
            factory.getGame().getRenderEngine().changeBackground('background2');
            factory.placeObject(4,13,'generator',true,false);
            factory.mark(4,13,'red');
            factory.placeObject(4,12,'line',true,false);
            factory.mark(4,12,'red');
            factory.placeObject(5,12,'line',true,false);
            factory.mark(5,12,'red');
            factory.placeObject(6,12,'line',true,false);
            factory.mark(6,12,'red');
            factory.placeObject(8,12,'line',true,false);
            factory.mark(8,12,'red');
            factory.placeObject(9,12,'line',true,false);
            factory.mark(9,12,'red');
            factory.placeObject(10,12,'line',true,false);
            factory.mark(10,12,'red');
            factory.placeObject(7,12,'combiner',true,false);
            factory.mark(7,12,'red');
            factory.placeObject(11,12,'combiner',true,false);
            factory.mark(11,12,'red');
            factory.placeObject(17,12,'combiner',true,false);
            factory.mark(17,12,'red');
            factory.placeObject(21,12,'combiner',true,false);
            factory.mark(21,12,'red');
            factory.placeObject(12,12,'line',true,false);
            factory.mark(12,12,'red');
            factory.placeObject(13,12,'line',true,false);
            factory.mark(13,12,'red');
            factory.placeObject(14,12,'line',true,false);
            factory.mark(14,12,'red');
            factory.placeObject(15,12,'line',true,false);
            factory.mark(15,12,'red');
            factory.placeObject(16,12,'line',true,false);
            factory.mark(16,12,'red');
            factory.placeObject(18,12,'line',true,false);
            factory.mark(18,12,'red');
            factory.placeObject(19,12,'line',true,false);
            factory.mark(19,12,'red');
            factory.placeObject(20,12,'line',true,false);
            factory.mark(20,12,'red');
            factory.placeObject(22,12,'line',true,false);
            factory.mark(22,12,'red');
            factory.placeObject(23,12,'line',true,false);
            factory.mark(23,12,'red');
            factory.placeObject(24,12,'storage',true,false);
            factory.mark(24,12,'red');
            factory.placeObject(5,13,'block',true,false);
            factory.mark(5,13,'red');
            factory.placeObject(6,13,'block',true,false);
            factory.mark(6,13,'red');
            factory.placeObject(7,13,'block',true,false);
            factory.mark(7,13,'red');
            factory.placeObject(8,13,'block',true,false);
            factory.mark(8,13,'red');
            factory.placeObject(9,13,'block',true,false);
            factory.mark(9,13,'red');
            factory.placeObject(10,13,'block',true,false);
            factory.mark(10,13,'red');
            factory.placeObject(11,13,'block',true,false);
            factory.mark(11,13,'red');
            factory.placeObject(12,13,'block',true,false);
            factory.mark(12,13,'red');
            factory.placeObject(13,13,'block',true,false);
            factory.mark(13,13,'red');
            factory.placeObject(14,13,'block',true,false);
            factory.mark(14,13,'red');
            factory.placeObject(15,13,'block',true,false);
            factory.mark(15,13,'red');
            factory.placeObject(16,13,'block',true,false);
            factory.mark(16,13,'red');
            factory.placeObject(17,13,'block',true,false);
            factory.mark(17,13,'red');
            factory.placeObject(18,13,'block',true,false);
            factory.mark(18,13,'red');
            factory.placeObject(19,13,'block',true,false);
            factory.mark(19,13,'red');
            factory.placeObject(20,13,'block',true,false);
            factory.mark(20,13,'red');
            factory.placeObject(21,13,'block',true,false);
            factory.mark(21,13,'red');
            factory.placeObject(22,13,'block',true,false);
            factory.mark(22,13,'red');
            factory.placeObject(23,13,'block',true,false);
            factory.mark(23,13,'red');
            factory.placeObject(24,13,'block',true,false);
            factory.mark(24,13,'red');
            factory.placeObject(4,14,'block',true,false);
            factory.mark(4,14,'red');
            factory.placeObject(5,14,'block',true,false);
            factory.mark(5,14,'red');
            factory.placeObject(3,14,'block',true,false);
            factory.mark(3,14,'red');
            factory.placeObject(3,13,'block',true,false);
            factory.mark(3,13,'red');
            factory.placePatch9byTool(4,12,'right',true,'line');
            factory.placePatch9byTool(4,12,'bottom',true,'line');
            factory.mark(4,12,'red');
            factory.placePatch9byTool(5,12,'left',true,'line');
            factory.placePatch9byTool(5,12,'right',true,'line');
            factory.mark(5,12,'red');
            factory.placePatch9byTool(6,12,'left',true,'line');
            factory.placePatch9byTool(6,12,'right',true,'line');
            factory.mark(6,12,'red');
            factory.placePatch9byTool(8,12,'left',true,'line');
            factory.placePatch9byTool(8,12,'right',true,'line');
            factory.mark(8,12,'red');
            factory.placePatch9byTool(9,12,'left',true,'line');
            factory.placePatch9byTool(9,12,'right',true,'line');
            factory.mark(9,12,'red');
            factory.placePatch9byTool(10,12,'left',true,'line');
            factory.placePatch9byTool(10,12,'right',true,'line');
            factory.mark(10,12,'red');
            factory.placePatch9byTool(12,12,'left',true,'line');
            factory.placePatch9byTool(12,12,'right',true,'line');
            factory.mark(12,12,'red');
            factory.placePatch9byTool(13,12,'left',true,'line');
            factory.placePatch9byTool(13,12,'right',true,'line');
            factory.mark(13,12,'red');
            factory.placePatch9byTool(14,12,'left',true,'line');
            factory.placePatch9byTool(14,12,'right',true,'line');
            factory.mark(14,12,'red');
            factory.placePatch9byTool(15,12,'left',true,'line');
            factory.placePatch9byTool(15,12,'right',true,'line');
            factory.mark(15,12,'red');
            factory.placePatch9byTool(16,12,'left',true,'line');
            factory.placePatch9byTool(16,12,'right',true,'line');
            factory.mark(16,12,'red');
            factory.placePatch9byTool(18,12,'left',true,'line');
            factory.placePatch9byTool(18,12,'right',true,'line');
            factory.mark(18,12,'red');
            factory.placePatch9byTool(19,12,'left',true,'line');
            factory.placePatch9byTool(19,12,'right',true,'line');
            factory.mark(19,12,'red');
            factory.placePatch9byTool(20,12,'left',true,'line');
            factory.placePatch9byTool(20,12,'right',true,'line');
            factory.mark(20,12,'red');
            factory.placePatch9byTool(22,12,'left',true,'line');
            factory.placePatch9byTool(22,12,'right',true,'line');
            factory.mark(22,12,'red');
            factory.placePatch9byTool(23,12,'left',true,'line');
            factory.placePatch9byTool(23,12,'right',true,'line');
            factory.mark(23,12,'red');

        },
        name: 'Day 8',
        subname: 'Boring work...',
        difficult:'extraeasy',
        itemsToGenerate: ['phone'],
        objectives: function (game, factory) {
            game.addObjective(objectivesPrefabs[0]('phone',10));
            game.addObjective(objectivesPrefabs[0]('phone',10));
            game.addObjective(objectivesPrefabs[0]('phone',10));
        },
        nextFactory: 'rep2',
        animation: [
            {text: 'Welcome! I have bad news.', linkText:'What\'s going on?'},
            {text: 'My boss didn\'t like your last decision.'},
            {text: 'He said that you have to work on production line, checking phones.'},
            {text: 'Sorry for that. That\'s not my call.'},
        ],
        tools:['pusher'],
		offset:{x:5,y:0},
        cookbook: ['phone'],
        money: 0,
    },
    rep2: {
        map: 'rep1',
        name: 'Another day',
        difficult:'extraeasy',
        subname: 'Boring work. Again.',
        itemsToGenerate: ['phone'],
        objectives: function (game, factory) {
            game.addObjective(objectivesPrefabs[0]('phone',10));
            game.addObjective(objectivesPrefabs[0]('phone',10));
            game.addObjective(objectivesPrefabs[0]('phone',10));
        },
        nextFactory: 'rep2_d',
        animation: [
            {text: 'Your production line is waiting for you. Move it!', linkText:'Yes, yes...'},
        ],
        tools:['pusher'],
		offset:{x:5,y:0},
        cookbook: ['phone'],
        money: 0,
        listing:false
    },
    rep3: {
        map: 'rep1',
        name: 'Another day',
        difficult:'extraeasy',
        subname: 'Boring work. Again.',
        itemsToGenerate: ['phone'],
        objectives: function (game, factory) {
            game.addObjective(objectivesPrefabs[0]('phone',10));
            game.addObjective(objectivesPrefabs[0]('phone',10));
            game.addObjective(objectivesPrefabs[0]('phone',10));
        },
        nextFactory: 'rep3',
        animation: [
            {text: 'Your production line is waiting for you. Move it!', linkText:'Yes, yes...'},
        ],
        tools:['pusher'],
		offset:{x:5,y:0},
        cookbook: ['phone'],
        money: 0,
        listing:false
    },
    new1: {
        map: function (factory) {
            factory.getGame().getRenderEngine().changeBackground('background3');
            factory.createBaseFloor();
            factory.placeObject(2,5,'block',true,false);
            factory.mark(2,5,'red');
            factory.placeObject(2,6,'block',true,false);
            factory.mark(2,6,'red');
            factory.placeObject(2,7,'block',true,false);
            factory.mark(2,7,'red');
            factory.placeObject(3,7,'block',true,false);
            factory.mark(3,7,'red');
            factory.placeObject(4,7,'block',true,false);
            factory.mark(4,7,'red');
            factory.placeObject(2,12,'block',true,false);
            factory.mark(2,12,'red');
            factory.placeObject(2,13,'block',true,false);
            factory.mark(2,13,'red');
            factory.placeObject(2,14,'block',true,false);
            factory.mark(2,14,'red');
            factory.placeObject(3,14,'block',true,false);
            factory.mark(3,14,'red');
            factory.placeObject(4,14,'block',true,false);
            factory.mark(4,14,'red');
            factory.placeObject(4,5,'block',true,false);
            factory.mark(4,5,'red');
            factory.placeObject(4,6,'block',true,false);
            factory.mark(4,6,'red');
            factory.placeObject(4,13,'block',true,false);
            factory.mark(4,13,'red');
            factory.placeObject(4,12,'block',true,false);
            factory.mark(4,12,'red');
            factory.placeObject(3,13,'generator',true,false,{items:['water','smoke']});
            factory.mark(3,13,'red');
            factory.placeObject(3,6,'generator',true,false,{items:['oil']});
            factory.mark(3,6,'red');
            factory.placeObject(3,12,'pipe',true,false);
            factory.mark(3,12,'red');
            factory.placeObject(3,11,'pipe',true,false);
            factory.placeObject(3,5,'pipe',true,false);
            factory.mark(3,5,'red');
            factory.placeObject(3,4,'pipe',true,false);
            factory.placeObject(5,6,'pin').text = 'Oil';
            factory.placeObject(5,13,'pin').text = 'Water';
            factory.placeObject(22,8,'block',true,false);
            factory.mark(22,8,'red');
            factory.placeObject(23,8,'block',true,false);
            factory.mark(23,8,'red');
            factory.placeObject(24,8,'block',true,false);
            factory.mark(24,8,'red');
            factory.placeObject(24,9,'block',true,false);
            factory.mark(24,9,'red');
            factory.placeObject(24,10,'block',true,false);
            factory.mark(24,10,'red');
            factory.placeObject(23,10,'block',true,false);
            factory.mark(23,10,'red');
            factory.placeObject(22,10,'block',true,false);
            factory.mark(22,10,'red');
            factory.placeObject(23,9,'storage',true,false);
            factory.mark(23,9,'red');
            factory.placeObject(22,9,'cable',true,false);
            factory.mark(22,9,'red');
            factory.placeObject(21,9,'cable',true,false);
            factory.placePatch9(3,12,'top');
            factory.placePatch9(3,12,'bottom');
            factory.mark(3,12,'red');
            factory.placePatch9(3,11,'bottom');
            factory.placePatch9(3,5,'top');
            factory.placePatch9(3,5,'bottom');
            factory.mark(3,5,'red');
            factory.placePatch9(3,4,'bottom');
            factory.placePatch9byTool(22,9,'left',undefined,'cable');
            factory.placePatch9byTool(22,9,'right',undefined,'cable');
            factory.mark(22,9,'red');
            factory.placePatch9byTool(21,9,'right',undefined,'cable');

        },
        name: 'Day 2-1',
        subname: 'New job',
        difficult:'normal',
        itemsToGenerate: ['oil','water','smoke'],
        objectives: function (game, factory) {
            game.addObjective(objectivesPrefabs[0]('electricity',15));
        },
        nextFactory: 'new2',
        animation: [
            {text: 'Hello there! Welcome to "We make everything" factory!', linkText:'Hello!'},
            {text: 'OK. Let\'s start your today\'s work.'},
            {text: 'Today, you will get an easy task.'},
            {text: 'Since yesterday we can make electricity!'},
            {text: 'So, today you have to make generator!'},
            {text: 'Here you have oil and water provider.'},
            {text: 'Just connect everything right and all will be fine :)'},
            {text: 'Well, first you have to make gasoline.'},
            {text: 'Be aware that we have only one filter. Use it wisely.'},
        ],
        tools:['pusher','pipe','cable','block','electrogenerator','separator','fireplace','refinery','info','filter'],
		offset:{x:5,y:0},
        cookbook: ['gasoline','O','H','electricity','oil','water','smoke','heat','lowheat','steam','hotwater'],
        money: 500,
        objectLimits:{filter:1}
    },
    new2: {
        map: function (factory) {
            factory.getGame().getRenderEngine().changeBackground('background3');
            factory.createBaseFloor();

        },
        name: 'Day 2-2',
        subname: 'Alcohol',
        difficult:'normal',
        itemsToGenerate: ['oil','water','wheat'],
        objectives: function (game, factory) {
            game.addObjective(objectivesPrefabs[0]('beer',15));
        },
        nextFactory: 'new3',
        animation: [
            {text: 'Hi! How you doing?', linkText:'Great!'},
            {text: 'Glad to hear that.'},
            {text: 'Here is your task for today: You have to build distillery!'},
            {text: 'You have full freedom to do that.'},
            {text: 'We required only once: you have to produce beer. Nothing else :)'},

        ],
        tools:['info','pusher','pipe','cable','block','electrogenerator','fermenter','distiller','filter','storage','generator','pin','combiner','deleter'],
		offset:{x:5,y:0},
        cookbook: ['gasoline','O','H','wheat','electricity','alcohol','water','beer'],
        money: 500
    },
    new3: {
        map: function (factory) {
            factory.getGame().getRenderEngine().changeBackground('background3');
            factory.createBaseFloor();

        },
        name: 'Day 2-3',
        subname: 'Computer Science',
        difficult:'hard',
        itemsToGenerate: ['aluminium','copper','gasoline','O','software','silicon'],
        objectives: function (game, factory) {
            game.addObjective(objectivesPrefabs[0]('computer',1));
        },
        nextFactory: 'end',
        animation: [
            {text: 'Welcome back! Today we have very exiting task.'},
            {text: 'We have to build a computer!'},
            {text: 'It\'s great to play games :)'},
            {text: 'I suggest to study a cookbook first.'},
            {text: 'Just like yesterday, you are free to do it.'},
            {text: 'Good luck!'},

        ],
        tools:['info','pusher','pipe','line','cable','block','electrogenerator','computerCombiner','filter','storage','generator','pin','combiner','deleter'],
		offset:{x:5,y:0},
        cookbook: ['aluminium','motherboard','graphicCard','ram','computerCase','computer','software','copper','silicon','gasoline','O','electricity','electronic'],
        money: -1
    },
};
