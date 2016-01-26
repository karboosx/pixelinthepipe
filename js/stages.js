$(function () {
    var screen = $('#screen');
    var difficultyLevels = {
        easy:{name:'Easy',addClass:'easy-color'},
        extraeasy:{name:'Extra easy',addClass:'extraeasy-color'},
        tutorial:{name:'Tutorial',addClass:'tutorial-color'},
        normal:{name:'Normal',addClass:'normal-color'},
        hard:{name:'Hard',addClass:'hard-color'},
    };

    for (var i in factoryLevels) {
        var level = factoryLevels[i];
        if (i == 'empty' || i == 'emptyhouse' || (level['listing']!=undefined && level['listing'] == false))
            continue;

        var difficult = (level['difficult'] || 'easy');

        screen.append('<a href="factory_' + i + '.html" class="level">' +
            '<h3>' + level['name'] + '</h3>' +
            '<h4>' + level['subname'] + '</h4>' +
            '<p class="'+difficultyLevels[difficult].addClass+'">[' + difficultyLevels[difficult].name + ']</p>' +
            '</a>')
    }
});