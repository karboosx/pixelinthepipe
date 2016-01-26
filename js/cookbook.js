function CookBook() {
    this.manualPage = 0;
    this.manualObjectList = undefined;

    this.renderBookmarks = function () {
        var bookmark= $('#bookWindow > .bookmarks');
        bookmark.html('');

        for (var i = 0; i < this.manualObjectList.length; i++) {
            var obj = this.manualObjectList[i];
            bookmark.append('<div class="bookmark" data-page="'+i+'">'+items[obj].name+'</div>');
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
            array.push(items[obj].name+'('+itemsList[obj]+')');
        }

        return '<span class="green-color">'+array.join('<br> ')+'</span>';
    };

    this.renderPage = function (page) {
        if (page < this.manualObjectList.length) {
            return '<h2 class="center">' + items[this.manualObjectList[page]].name + '</h2>' +
                '<h3 class="center">Element type: ' + itemTypes[items[this.manualObjectList[page]].type].name + '</h3>' +
                '<p class="small center">' + itemTypes[items[this.manualObjectList[page]].type].desc + '</p>' +
                (items[this.manualObjectList[page]].transportType != undefined ?
                '<p class="center">Transportation: ' + transportationItems[items[this.manualObjectList[page]].transportType].name + '</p>'
                    :
                '<p class="center">Transportation: ' + transportationItems['pipe'].name + ', ' + transportationItems['line'].name + '</p>') +

                '<p class="center">Combined by: ' + this.renderItemList(items[this.manualObjectList[page]].combine) + '</p>' +
                '<p class="center">Disassemble: ' + this.renderItemList(items[this.manualObjectList[page]].separate) + '</p>'+
                (items[this.manualObjectList[page]].combineDevice != undefined ?
                '<p class="center">Combine Device: ' + objectsData[items[this.manualObjectList[page]].combineDevice].name + '</p>'
                    : '')+
                (items[this.manualObjectList[page]].separateDevice != undefined ?
                '<p class="center">Separate Device: ' + objectsData[items[this.manualObjectList[page]].separateDevice].name + '</p>'
                    : '')


                ;
        } else {
            return '';
        }
    };

    this.renderManual = function () {
        $('#bookWindow .left .text').html(this.renderPage(this.manualPage));
        $('#bookWindow .right .text').html(this.renderPage(this.manualPage + 1));
    };
}