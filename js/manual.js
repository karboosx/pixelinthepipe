function Manual(game) {
    this.manualPage = 0;
    this.manualObjectList = undefined;

    this.renderBookmarks = function () {
        var bookmark= $('#manualWindow > .bookmarks');
        bookmark.html('');

        for (var i = 0; i < this.manualObjectList.length; i++) {
            var obj = this.manualObjectList[i];
            if (objectsData[obj].hasOwnProperty('abbr')){
                bookmark.append('<div class="bookmark" data-page="'+i+'">'+objectsData[obj].abbr+'</div>');
            }else{
                bookmark.append('<div class="bookmark" data-page="'+i+'">'+objectsData[obj].name+'</div>');
            }
        }

    };
    this.initManual = function (itemList) {
        if (itemList == undefined){
            this.noManual();
            return;
        }

        this.manualObjectList = itemList;
        this.renderManual();
        this.renderBookmarks();

        var leftClick = function (cookBook) {
            return function () {
                cookBook.manualPage -= 2;

                if (cookBook.manualPage < 0)
                    cookBook.manualPage = 0;
                cookBook.renderManual();
            }
        };



        var rightClick = function (cookBook) {
            return function () {
                if (cookBook.manualObjectList.length - 2 > cookBook.manualPage)
                    cookBook.manualPage += 2;

                cookBook.renderManual();
            }
        };

        var bookmarkClick = function (cookBook) {
            return function () {
                cookBook.manualPage = Math.floor(parseInt($(this).data('page')) / 2)*2;
                cookBook.renderManual();
            }
        };

        $('.arrows .left.arrow').click(leftClick(this));
        $('.arrows .right.arrow').click(rightClick(this));
        $('.bookmark').click(bookmarkClick(this));

    };

    this.noManual = function () {

        $('#fail-message').hide();
        $('#fail-text').html('Cookbook not available');

        var finishViewport = $('#fail-viewport');

        finishViewport.fadeIn(500, function () {
        });
        setInterval(function () {
            finishViewport.fadeOut(1000);
        },1500);
    };


    this.renderItemList = function (itemsList) {

        if (itemsList == undefined || itemsList.length == 0)
            return '<span class="red-color">No available</span>';

        var array = [];
        for (var obj in itemsList) {
            array.push(objectsData[obj].name+'('+itemsList[obj]+')');
        }

        return '<span class="green-color">'+array.join('<br> ')+'</span>';
    };

    this.renderPage = function (page) {
        if (page < this.manualObjectList.length) {
            var typeTool = game.getBehavior().tools[this.manualObjectList[page]] != undefined;

            return '<h2 class="center">' + objectsData[this.manualObjectList[page]].name + '</h2>' +
                '<p class="center">' + objectsData[this.manualObjectList[page]].desc + '</p>' +

                //(typeTool ? '<h5 class="center">Tool</h5>' : '<h5 class="center">Object</h5>') +

                (objectsData[this.manualObjectList[page]].canStop != undefined ?
                '<p class="center">Can be stop</p>' : '') +
                (objectsData[this.manualObjectList[page]].gravity != undefined ?
                '<p class="center">Gravity</p>' : '') +
                (objectsData[this.manualObjectList[page]].cost != undefined ?
                '<p class="center">Cost: '+objectsData[this.manualObjectList[page]].cost+' $</p>' : '') +
                (objectsData[this.manualObjectList[page]].restrictCombine != undefined && objectsData[this.manualObjectList[page]].restrictCombine == true ?
                '<p class="center">Combine only specific objects</p>' : '') +
                (objectsData[this.manualObjectList[page]].restrictSeparate != undefined && objectsData[this.manualObjectList[page]].restrictSeparate == true ?
                '<p class="center">Separate only specific objects</p>' : '') +
                (objectsData[this.manualObjectList[page]].requirePower != undefined && objectsData[this.manualObjectList[page]].requirePower == true ?
                '<p class="center">Require power</p>' : '') +
                (objectsData[this.manualObjectList[page]].requirePowerItem != undefined ?
                '<p class="center">Power source: '+items[objectsData[this.manualObjectList[page]].requirePowerItem].name+'</p>' : '')+
                (objectsData[this.manualObjectList[page]].transportRestrict != undefined ?
                '<p class="center">Transport only specific items</p>' : '') +
                (objectsData[this.manualObjectList[page]].maxItems != undefined ?
                '<p class="center">Hold maximum '+objectsData[this.manualObjectList[page]].maxItems+' items</p>' : '') +
                (objectsData[this.manualObjectList[page]].canAutoPush != undefined ?
                '<p class="center">Can automatically push every items</p>' : '') +
                (objectsData[this.manualObjectList[page]].canSelectItem != undefined ?
                '<p class="center">Can select item to produce</p>' : '')


                ;
        } else {
            return '';
        }
    };

    this.renderManual = function () {
        $('#manualWindow .left .text').html(this.renderPage(this.manualPage));
        $('#manualWindow .right .text').html(this.renderPage(this.manualPage + 1));
    };
}