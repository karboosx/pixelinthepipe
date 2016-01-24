jQuery.fn.center = function (parent, top, left) {

    this.css("top", Math.max(0, (($((parent ? this.parent() : window)).height() - $(this).outerHeight()) / 2) +
            $((parent ? this.parent() : window)).scrollTop()) + "px");
    this.css("left", Math.max(0, (($((parent ? this.parent() : window)).width() - $(this).outerWidth()) / 2) +
            $((parent ? this.parent() : window)).scrollLeft()) + "px");
    return this;
};

function io(type) {
    if (type == 'left-right')
        return {
            left: true,
            right: true,
            top: false,
            bottom: false
        };
    if (type == 'left-top')
        return {
            left: true,
            right: false,
            top: true,
            bottom: false
        };
    if (type == 'left-bottom')
        return {
            left: true,
            right: false,
            top: false,
            bottom: true
        };
    if (type == 'right-top')
        return {
            left: false,
            right: true,
            top: true,
            bottom: false
        };
    if (type == 'right-bottom')
        return {
            left: false,
            right: true,
            top: false,
            bottom: true
        };
    if (type == 'top-bottom')
        return {
            left: false,
            right: false,
            top: true,
            bottom: true
        };

    if (type == 'none')
        return {
            left: false,
            right: false,
            top: false,
            bottom: false
        };
    if (type == 'all')
        return {
            left: true,
            right: true,
            top: true,
            bottom: true
        };
    if (type == 'left')
        return {
            left: true,
            right: false,
            top: false,
            bottom: false
        };
    if (type == 'right')
        return {
            left: false,
            right: true,
            top: false,
            bottom: false
        };
    if (type == 'top')
        return {
            left: false,
            right: false,
            top: true,
            bottom: false
        };
    if (type == 'bottom')
        return {
            left: false,
            right: false,
            top: false,
            bottom: true
        };
    if (type == 'not-left')
        return {
            left: false,
            right: true,
            top: true,
            bottom: true
        };
    if (type == 'not-right')
        return {
            left: true,
            right: false,
            top: true,
            bottom: true
        };
    if (type == 'not-top')
        return {
            left: true,
            right: true,
            top: false,
            bottom: true
        };
    if (type == 'not-bottom')
        return {
            left: true,
            right: true,
            top: true,
            bottom: false
        };

}

function bindIO(input, output) {
    var left = input.left || output.left;
    var right = input.right || output.right;
    var top = input.top || output.top;
    var bottom = input.bottom || output.bottom;

    return {
        left: left,
        right: right,
        top: top,
        bottom: bottom
    }
}

function toHHMMSS(sec_num) {
    var hours = Math.floor(sec_num / 3600);
    var minutes = Math.floor((sec_num - (hours * 3600)) / 60);
    var seconds = sec_num - (hours * 3600) - (minutes * 60);

    if (hours < 10) {
        hours = "0" + hours;
    }
    if (minutes < 10) {
        minutes = "0" + minutes;
    }
    if (seconds < 10) {
        seconds = "0" + seconds;
    }
    var time = hours + ':' + minutes + ':' + seconds;
    return time;
}

function rand(from, to) {
    return Math.floor(Math.random() * (to - from + 1) + from);
}


function foreachToJson(array) {
    var out = {};
    for (var obj in array) {
        if (array[obj].hasOwnProperty('toJson'))
            out[obj] = array[obj].toJson();
    }
    return out;
}


function checkAtom(atom, mixture, allowAll) {
    if (atom == '*' && allowAll == true)
        return true;
    if (atom == '-')
        return false;

    return atom == mixture;
}

function drawTextBG(ctx, txt, font, x, y) {

    /// lets save current state as we make a lot of changes
    ctx.save();

    /// set font
    ctx.font = font;

    /// draw text from top - makes life easier at the moment
    ctx.textBaseline = 'top';

    /// color for background
    ctx.fillStyle = '#f50';

    /// get width of text
    var width = ctx.measureText(txt).width;

    /// draw background rect assuming height of font
    ctx.fillRect(x, y, width, parseInt(font, 10));

    /// text color
    ctx.fillStyle = '#000';

    /// draw text on top
    ctx.fillText(txt, x, y);

    /// restore original state
    ctx.restore();
}