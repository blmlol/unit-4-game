// We'll want information for every character: Attack power, counterattack power, and Health Points; we can store the characters as objects in an object
//Health Points will be denoted by HP, Attack power by ap, and counterattack power by cap

var chars = {
    obiwan: {
        hp: 500,
        ap: 15,
        cap: 18,
        isClicked: false
    },

    grievous: {
        hp: 300,
        ap: 10,
        cap: 30,
        isClicked: false
    },

    rey: {
        hp: 250,
        ap: 18,
        cap: 12,
        isClicked: false
    },

    kylo: {
        hp: 400,
        ap: 8,
        cap: 20,
        isClicked: false
    }


};



$(document).ready(function () {
    //These hover functions will show the statline of each character (Their HP, AP, and CAP) when hovered over
    $('.gg').hover(function () {
        $('.ggcap').append($('<div>' + 'HP: ' + chars.grievous.hp + '<br>' + 'AP: ' + chars.grievous.ap + '<br>' + 'CAP: ' + chars.grievous.cap + '</div>'));
    }, function () {
        $(this).find('div').last().remove();
    })

    $('.kr').hover(function () {
        $('.krcap').append($('<div>' + 'HP: ' + chars.kylo.hp + '<br>' + 'AP: ' + chars.kylo.ap + '<br>' + 'CAP: ' + chars.kylo.cap + '</div>'));
    }, function () {
        $(this).find('div').last().remove();
    })

    $('.re').hover(function () {
        $('.recap').append($('<div>' + 'HP: ' + chars.rey.hp + '<br>' + 'AP: ' + chars.rey.ap + '<br>' + 'CAP: ' + chars.rey.cap + '</div>'));
    }, function () {
        $(this).find('div').last().remove();
    })

    $('.ow').hover(function () {
        $('.owcap').append($('<div>' + 'HP: ' + chars.obiwan.hp + '<br>' + 'AP: ' + chars.obiwan.ap + '<br>' + 'CAP: ' + chars.obiwan.cap + '</div>'));
    }, function () {
        $(this).find('div').last().remove();
    })

    //Next we will want a click event listener to allow the user to choose a character and put chosen character in attacker div
    $('.gg').on('click', function () {
        $('.attacker').append($(this));
        chars.grievous.isClicked = true;
        $('.defender').append($('.kr'), $('.ow'), $('.re'));
    })

    $('.kr').on('click', function () {
        $('.attacker').append($(this));
        chars.kylo.isClicked = true;
    })

    $('.ow').on('click', function () {
        $('.attacker').append($(this));
        chars.obiwan.isClicked = true;
    })

    $('.re').on('click', function () {
        $('.attacker').append($(this));
        chars.rey.isClicked = true;
    })
});






