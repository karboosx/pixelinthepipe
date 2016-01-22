$(function () {
    var factoryID = $("meta[name='factory']").attr("content");

    var animation = {
        new1: {
            animation:[
                {text:'Hello worker! Welcome back! How your little vacation?', linkText:'Good!'},
                {text:'Fantastic! Here is some news for you:'},
                {text:'Our factory was upgraded! Finally we have electricity!'},
                {text:'So from now on you have full access to wire!'},
                {text:'I hope you are as excited as I am!'},
                {text:'OK. Another news: On last weekend I received letter from headquarter. Long story short, we have to fire someone.'},
                {text:'Now! Here is difficult question:'},
                {text:'Do I have fire you or your colleague who have sick children?'},
            ],
            decisions:[
                {text:'Fire me! ', link: 'factory_new1.html'},
                {text:'Fire him!', link: 'factory_rep1.html'},
            ]
        }
    };

    var intro = new IntroAnimation('#screen', animation[factoryID]);
});
