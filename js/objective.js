var objectivesPrefabs = [
    function (item, x) {
        var needs = {};
        needs[item] = x;
        return {name: 'Make items ', reword: 50, needs: needs};
    },
    function (needs) {
        return {name: 'Make items', reword: 50, needs: needs};
    },
    function (needs,decTime) {
        var finalNeeds = {};
        var needsText = {};
        for (var obj in needs) {
            var need = needs[obj];
            finalNeeds[obj] = need.count;
            needsText[obj] = need.text;
        }
        return {name: 'Achieve temperature', reword: 50, needs: finalNeeds,itemsTitle:'Actual temperature', additionItemText:' °C',decTime:decTime,needsText:needsText};
    }
];

function Objective(data, animation) {

    this.name = data.name;
    this.description = data.desc || data.description || undefined;
    this.needs = data.needs;
    this.reword = data.reword;
    this.canComplete = false;
    this.collectedNeeds = {};
    this.calculated = false;
    this.animationInstance = undefined;
    this.animation = undefined;
    this.itemsTitle = data.itemsTitle || undefined;
    this.additionItemText = data.additionItemText || undefined;
    this.decTime = data.decTime || undefined;
    this.needsText = data.needsText || undefined;

    if (animation != undefined) {
        this.animation = animation;
    }

    var decTimeCounter = 0;
    this.toJson = function () {
        return {
            name: this.name,
            description: this.description,
            needs: this.needs,
            reword: this.reword,
            canComplete: this.canComplete,
            collectedNeeds: this.collectedNeeds,
            calculated: this.calculated
        };
    };

    this.onTick = function (game) {
        this.calculateNeeds(game);

        this.canComplete = true;
        for (var name in this.needs) {
            if (this.needs[name] > this.collectedNeeds[name]) {
                this.canComplete = false;
                break;
            }
        }

        if(this.decTime != undefined){
            decTimeCounter++;
        }

        if (this.decTime<=decTimeCounter){
            decTimeCounter=0;

            for (name in this.needs) {
                if (this.collectedNeeds[name] > 0) {
                    game.removeItemFromStorage(name);
                }
            }
        }
    };

    this.checkReqItem = function (name_) {
        for (var name in this.needs) {
            if (name == name_) {
                if (this.needs[name] > this.collectedNeeds[name]) {
                    return true;
                }
            }
        }
        return false;
    };

    this.calculateNeeds = function (game) {
        for (var name in this.needs) {
            this.collectedNeeds[name] = game.storageCount(name);
        }
        this.calculated = true;
    };



    this.complete = function (game) {
        for (var name in this.needs) {
            var count = 0;
            var storage = game.getStorage();
            for (var i in storage) {
                if (storage[i].getName() == name) {
                    delete storage[i];
                    count++;
                }

                if (count >= this.needs[name])
                    break;
            }
        }

        game.resetStorageKeys();

        game.getRenderEngine().rehasToRefreshObjectives = true;

        game.addMoney(this.reword);
    };


    this.tryToShowAnimation = function () {
        if (this.animationInstance == undefined && this.animation != undefined) {
            this.showAnimation(this.animation);
        }
    };

    this.showAnimation = function (aniamtion) {
        if (this.animationInstance == undefined)
            this.animationInstance = new IntroAnimation('#storyscreen', aniamtion);
    }

}