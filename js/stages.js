$(function () {
    var screen = $('#screen');
    for (var i in factoryLevels) {
        var level = factoryLevels[i];
        if (i == 'empty' || i == 'emptyhouse')
            continue;
        screen.append('<a href="factory_' + i + '.html" class="level">' +
            '<h3>' + level['name'] + '</h3>' +
            '<h4>' + level['subname'] + '</h4>' +
            '</a>')
    }
});