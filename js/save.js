function Save(factory) {

    this.generateJson = function () {
        var jsonMap = {objects:[],marks:[],transporters:[],pins:[]};

        var objects = factory.getObjects();

        for (var obj in objects) {
            var object = objects[obj];
            if (object['type'] == 'floor') continue;

            else if (object['type'] == 'pin') {
                //console.log('objects.placeObject(' + object['x'] + ',' + object['y'] + ',\'' + object['type'] + '\').text = \'' + object.text + '\';');
                jsonMap.objects.push({x:object['x'],y:object['y'],type:object['type'],data:{}});
                jsonMap.pins.push({x:object['x'],y:object['y'],text:object.text});

            } else {
                //console.log('objects.placeObject(' + object['x'] + ',' + object['y'] + ',\'' + object['type'] + '\',true,true);');
                jsonMap.objects.push({x:object['x'],y:object['y'],type:object['type']});
            }
            if (!object.destructable) {
                //console.log('objects.mark(' + object['x'] + ',' + object['y'] + ',\'red\');');
                jsonMap.marks.push({x:object['x'],y:object['y']});

            }
        }
        for (var obj in objects) {
            var object = objects[obj];
            if (object['type'] == 'floor') continue;

            if (object['type'] == 'pipe' || object['type'] == 'line' || object['type'] == 'cable' ) {

                for (var dir_ in object.patch9) {
                    if (object.patch9[dir_]) {
                        //console.log('objects.placePatch9byTool(' + object['x'] + ',' + object['y'] + ',\'' + dir_ + '\',true,\''+object['type']+'\');');
                        jsonMap.transporters.push({x:object['x'],y:object['y'],dir:dir_,type:object['type']});
                    }
                }
            }
        }

        return jsonMap;
    };
    this.initSave = function () {
        $('#jsonShow').draggable().addClass('hide');

        var that = this;
        $('#save').click(function () {

            var jsonMap = that.generateJson();

            $('#jsonShow textarea').val(JSON.stringify(jsonMap));

            var $jsonWindow = $('#jsonShow');
            if ($jsonWindow.hasClass('hide')){
                $jsonWindow.removeClass('hide');

            }else{
                $jsonWindow.addClass('hide');
            }
        });
    };

    this.noSave = function () {
            $('#save').addClass('hide');
            $('#jsonShow').addClass('hide');
    }
}