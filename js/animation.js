function IntroAnimation(selector,animation,fadeIn,fadeOut){

    if (fadeIn == undefined) fadeIn = 100;
    if (fadeOut == undefined) fadeOut = 200;

    var parent = undefined;
    var screen = $(selector);

    screen.removeClass('hide');
    screen.show();

    var animationLength = animation.length;

    var currentFrame = 0;

    this.getAnimation = function () {
        return animation;
    };

    this.setParent = function ($parent) {
        parent = $parent;
    };

    this.setDraggable = function ($selector) {
        $selector.draggable();
    };

    this.nextFrame = function(){
        currentFrame++;

        if (currentFrame<animationLength){
            this.renderFrame(animation[currentFrame], fadeOut, fadeIn);
        }else{
            screen.fadeOut(fadeOut);
            if (parent != undefined)
            parent.fadeOut(fadeOut);
        }
    };


    this.renderFrame = function (data,fadeOut,fadeIn){

        screen.fadeOut(fadeOut,function() {

            if (data.hasOwnProperty('background'))
            $(this).css('background', data.background);

            if (data.hasOwnProperty('text'))
            $('#text').html(data.text);

            if (data.hasOwnProperty('align'))
            $('#text').css('text-align',data.align);

            $(this).fadeIn(fadeIn,function(){

            });

            if (data.hasOwnProperty('link')) {
                $('#nextFrame').attr('href', data.link);
            }


            if (data.hasOwnProperty('linkText')){
                $('#nextFrame').html(data.linkText).addClass('active');
            }else if (currentFrame < animationLength - 1){
                $('#nextFrame').html('NEXT').removeClass('active');
            }else if (currentFrame == animationLength - 1) {
                $('#nextFrame').text('END');
            }
        });
    };


    console.log(this.getAnimation());

    var functionNextFrame = function (introAnimation){
        return function(){
            introAnimation.nextFrame();
        }
    };

    $('#nextFrame').unbind('click').click(functionNextFrame(this));

    this.renderFrame(animation[0],0,500);
}
