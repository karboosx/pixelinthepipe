function Effect(object,name) {
    this.frame = 0;
    this.frameMax = imagesData[name].frame;
    this.size = imagesData[name].size;
    this.back = Math.floor(this.size/2);
    this.x = object.x;
    this.y = object.y;
    this.name = name;

    this.tick = function () {
        this.frame++;
    };

    this.getObject = function () {
        return object;
    };

    this.isEnded = function () {
        return this.frame >= this.frameMax;
    };

}