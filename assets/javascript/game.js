// We'll want information for every character: Attack power, counterattack power, and Health Points; we can store the characters as objects in an object
//Health Points will be denoted by HP, Attack power by ap, and counterattack power by cap

var chars = {
    obiwan: {
        hp: 500,
        ap: 15,
        cap: 18
    },

    grievous: {
        hp: 300,
        ap: 10,
        cap: 30
    },

    rey: {
        hp: 250,
        ap: 18,
        cap: 12
    },

    kylo: {
        hp: 400,
        ap: 8,
        cap: 20
    }


};

$('.gg').hover(function () {
    $(this).append($('<div>' + 'HP: ' + chars.grievous.hp + '</div>'));
})







