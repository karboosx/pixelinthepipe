function Effect(x,y,name) {
    this.frame = 0;
    this.frameMax = imagesData[name].frame;
    this.size = imagesData[name].size;
    this.back = Math.floor(this.size/2);
    this.x = x;
    this.y = y;
    this.name = name;

    this.tick = function () {
        this.frame++;
    };

    this.isEnded = function () {
        return this.frame >= this.frameMax;
    };

}