function CookBook() {
    this.cookBookPage = 0;
    this.cookBookItemList = undefined;

    this.renderBookmarks = function () {
        var bookmark= $('#bookWindow > .bookmarks');
        bookmark.html('');

        for (var i = 0; i < this.cookBookItemList.length; i++) {
            var obj = this.cookBookItemList[i];
            bookmark.append('<div class="bookmark" data-page="'+i+'">'+items[obj].name+'</div>');
        }

    };
    this.initCookBook = function (itemList) {
        if (itemList == undefined){
            this.noCookbook();
            return;
        }

        this.cookBookItemList = itemList;
        this.renderCookBook();
        this.renderBookmarks();

        var leftClick = function (cookBook) {
            return function () {
                cookBook.cookBookPage -= 2;

                if (cookBook.cookBookPage < 0)
                    cookBook.cookBookPage = 0;
                cookBook.renderCookBook();
            }
        };



        var rightClick = function (cookBook) {
            return function () {
                if (cookBook.cookBookItemList.length - 2 > cookBook.cookBookPage)
                    cookBook.cookBookPage += 2;

                cookBook.renderCookBook();
            }
        };

        var bookmarkClick = function (cookBook) {
            return function () {
                cookBook.cookBookPage = Math.floor(parseInt($(this).data('page')) / 2)*2;
                cookBook.renderCookBook();
            }
        };

        $('.arrows .left.arrow').click(leftClick(this));
        $('.arrows .right.arrow').click(rightClick(this));
        $('.bookmark').click(bookmarkClick(this));

    };

    this.noCookbook = function () {

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
        if (page < this.cookBookItemList.length) {
            return '<h2 class="center">' + items[this.cookBookItemList[page]].name + '</h2>' +
                '<h3 class="center">Element type: ' + itemTypes[items[this.cookBookItemList[page]].type].name + '</h3>' +
                '<p class="small center">' + itemTypes[items[this.cookBookItemList[page]].type].desc + '</p>' +
                (items[this.cookBookItemList[page]].transportType != undefined ?
                '<p class="center">Transportation: ' + transportationItems[items[this.cookBookItemList[page]].transportType].name + '</p>'
                    :
                '<p class="center">Transportation: ' + transportationItems['pipe'].name + ', ' + transportationItems['line'].name + '</p>') +

                '<p class="center">Combined by: ' + this.renderItemList(items[this.cookBookItemList[page]].combine) + '</p>' +
                '<p class="center">Disassemble: ' + this.renderItemList(items[this.cookBookItemList[page]].separate) + '</p>'+
                (items[this.cookBookItemList[page]].combineDevice != undefined ?
                '<p class="center">Combine Device: ' + objectsData[items[this.cookBookItemList[page]].combineDevice].name + '</p>'
                    : '')+
                (items[this.cookBookItemList[page]].separateDevice != undefined ?
                '<p class="center">Separate Device: ' + objectsData[items[this.cookBookItemList[page]].separateDevice].name + '</p>'
                    : '')


                ;
        } else {
            return '';
        }
    };

    this.renderCookBook = function () {
        $('#bookWindow .left .text').html(this.renderPage(this.cookBookPage));
        $('#bookWindow .right .text').html(this.renderPage(this.cookBookPage + 1));
    };
}