function IntroAnimation(selector,animationData,fadeIn,fadeOut){

    var animation = animationData.animation;
    var decisions = animationData.decisions;

    if (fadeIn == undefined) fadeIn = 100;
    if (fadeOut == undefined) fadeOut = 200;

    var screen = $(selector);

    screen.removeClass('hide');
    screen.show();

    var animationLength = animation.length+1;

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

    function renderNextFrameButton(that) {
        if (currentFrame == animationLength-1) {
            that.renderDecision();
        }
    }

    this.renderDecision = function () {
        var $decision = $('#decision');
        for (var obj in decisions) {
            var decision = decisions[obj];
            $decision.append('<a href="'+decision.link+'">'+decision.text+'</a>');
        }
        $decision.fadeIn(fadeIn);
    };

    this.renderFrame = function (data,fadeOut,fadeIn){
        var that = this;
        screen.fadeOut(fadeOut,function() {
            renderNextFrameButton(that);

            if (data.hasOwnProperty('background'))
            $(this).css('background', data.background);

            if (data.hasOwnProperty('text')) {
                $('#text').html(data.text);
            }

            if (data.hasOwnProperty('align'))
                $('#text').css('text-align',data.align);
            else
                $('#text').css('text-align','center');

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
