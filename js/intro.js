$(function () {
    var animation = [
        {
            background: '1.png',
            text: 'Oh. Hello. Are you looking for some good game? If yes, you came to right place.',
            align: 'center'
        },
        {
            background: '1.png',
            text: 'So, how about I will tell you about game backstory?\nShall we?',
            align: 'center'
        },
        {
            background: '1.png',
            text: 'A long time ago, in a galaxy far, far away....',
            align: 'center'
        },
        {
            background: '1.png',
            text: 'Eee... I think that is not right story. You now what, maybe I skip that part and go straight to the point.',
            align: 'center'
        },
        {
            background: '1.png',
            text: 'It was apocalypse. Some people survived and started a new civilisation based on industry.. Again...',
            align: 'center'
        },
        {
            background: '1.png',
            text: 'And you are one of the many people who working in factor\'s!',
            align: 'center'
        },
        {
            background: '1.png',
            text: 'So let\'s get to work! Yey!',
            align: 'center',
            link: 'game.html',
            linkText: 'Let\'s play :)'
        }
    ];

    var intro = new IntroAnimation('#screen', animation);
});
