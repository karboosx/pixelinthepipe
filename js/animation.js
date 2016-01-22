function IntroAnimation(selector,animation,fadeIn,fadeOut){

    if (fadeIn == undefined) fadeIn = 100;
    if (fadeOut == undefined) fadeOut = 200;

    var screen = $(selector);

    screen.removeClass('hide');
    screen.show();

    var animationLength = animation.length;

    var currentFrame = 0;

    this.getAnimation = function () {
        return animation;
    };

    this.nextFrame = function(){
        currentFrame++;

        if (currentFrame<animationLength){
            this.renderFrame(animation[currentFrame], fadeOut, fadeIn);
        }else{
            screen.fadeOut(fadeOut);
        }
    };

    function renderNextFrameButton() {
        if (currentFrame == animationLength - 1) {
            $('#nextFrame').text('END');
        }
    }

    this.renderFrame = function (data,fadeOut,fadeIn){

        screen.fadeOut(fadeOut,function() {
            renderNextFrameButton();

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
            }else{
                $('#nextFrame').html('NEXT').removeClass('active');
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
