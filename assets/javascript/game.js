// We'll want information for every character: Attack power, counterattack power, and Health Points; we can store the characters as objects in an object
//Health Points will be denoted by HP, Attack power by ap, and counterattack power by cap

var chars = {
    obiwan: {
        hp: 500,
        ap: 15,
        cap: 18,
        isAttacking: false,
        isDefending: false
    },

    grievous: {
        hp: 300,
        ap: 10,
        cap: 30,
        isAttacking: false,
        isDefending: false
    },

    rey: {
        hp: 250,
        ap: 18,
        cap: 12,
        isAttacking: false,
        isDefending: false
    },

    kylo: {
        hp: 400,
        ap: 8,
        cap: 20,
        isAttacking: false,
        isDefending: false
    }


};



$(document).ready(function () {
    //These hover functions will show the statline of each character (Their HP, AP, and CAP) when hovered over
    $('.gg').hover(function () {
        if (chars.grievous.isDefending !== true) {
            $('.ggcap').append($('<div>' + 'HP: ' + chars.grievous.hp + '<br>' + 'AP: ' + chars.grievous.ap + '<br>' + 'CAP: ' + chars.grievous.cap + '</div>'));
        }

    }, function () {
        $(this).find('div').last().remove();
    })

    $('.kr').hover(function () {
        if (chars.kylo.isDefending !== true) {
            $('.krcap').append($('<div>' + 'HP: ' + chars.kylo.hp + '<br>' + 'AP: ' + chars.kylo.ap + '<br>' + 'CAP: ' + chars.kylo.cap + '</div>'));
        }

    }, function () {
        $(this).find('div').last().remove();
    })

    $('.re').hover(function () {
        if (chars.rey.isDefending !== true) {
            $('.recap').append($('<div>' + 'HP: ' + chars.rey.hp + '<br>' + 'AP: ' + chars.rey.ap + '<br>' + 'CAP: ' + chars.rey.cap + '</div>'));
        }

    }, function () {
        $(this).find('div').last().remove();
    })

    $('.ow').hover(function () {
        if (chars.obiwan.isDefending !== true) {
            $('.owcap').append($('<div>' + 'HP: ' + chars.obiwan.hp + '<br>' + 'AP: ' + chars.obiwan.ap + '<br>' + 'CAP: ' + chars.obiwan.cap + '</div>'));
        }

    }, function () {
        $(this).find('div').last().remove();
    })

    //Next we will want a click event listener to allow the user to choose a character and put chosen character in attacker div
    $('.gg').one('click', function () {
        if (chars.grievous.isDefending !== true) {


            $('.attacker').append($(this));
            chars.grievous.isAttacking = true;
            $('.defender').append($('.kr'), $('.ow'), $('.re'));
            $('#defstats').append($('<div class="stats">' + 'HP: ' + chars.kylo.hp + '<br>' + 'AP: ' + chars.kylo.ap + '<br>' + 'CAP: ' + chars.kylo.cap + '</div>'), $('<div class="stats">' + 'HP: ' + chars.obiwan.hp + '<br>' + 'AP: ' + chars.obiwan.ap + '<br>' + 'CAP: ' + chars.obiwan.cap + '</div>'), $('<div class="stats">' + 'HP: ' + chars.rey.hp + '<br>' + 'AP: ' + chars.rey.ap + '<br>' + 'CAP: ' + chars.rey.cap + '</div>').html());
            $('.warstats').append('<div>' + 'HP: ' + chars.grievous.hp + '<br>' + 'AP: ' + chars.grievous.ap + '<br>' + 'CAP: ' + chars.grievous.cap + '</div>');
            chars.obiwan.isDefending = true;
            chars.kylo.isDefending = true;
            chars.rey.isDefending = true;

        }
    })

    $('.kr').one('click', function () {
        if (chars.kylo.isDefending !== true) {
            $('.attacker').append($(this));
            chars.kylo.isAttacking = true;
            $('.defender').append($('.gg'), $('.ow'), $('.re'));
            $('#defstats').append($('<div class="stats">' + 'HP: ' + chars.grievous.hp + '<br>' + 'AP: ' + chars.grievous.ap + '<br>' + 'CAP: ' + chars.grievous.cap + '</div>'), $('<div class="stats">' + 'HP: ' + chars.obiwan.hp + '<br>' + 'AP: ' + chars.obiwan.ap + '<br>' + 'CAP: ' + chars.obiwan.cap + '</div>'), $('<div class="stats">' + 'HP: ' + chars.rey.hp + '<br>' + 'AP: ' + chars.rey.ap + '<br>' + 'CAP: ' + chars.rey.cap + '</div>').html());
            $('.warstats').append('<div>' + 'HP: ' + chars.kylo.hp + '<br>' + 'AP: ' + chars.kylo.ap + '<br>' + 'CAP: ' + chars.kylo.cap + '</div>');
            chars.obiwan.isDefending = true;
            chars.grievous.isDefending = true;
            chars.rey.isDefending = true;
        }
    })

    $('.ow').one('click', function () {
        if (chars.obiwan.isDefending !== true) {
            $('.attacker').append($(this));
            chars.obiwan.isAttacking = true;
            $('.defender').append($('.kr'), $('.gg'), $('.re'));
            $('#defstats').append($('<div class="stats">' + 'HP: ' + chars.kylo.hp + '<br>' + 'AP: ' + chars.kylo.ap + '<br>' + 'CAP: ' + chars.kylo.cap + '</div>'), $('<div class="stats">' + 'HP: ' + chars.grievous.hp + '<br>' + 'AP: ' + chars.grievous.ap + '<br>' + 'CAP: ' + chars.grievous.cap + '</div>'), $('<div class="stats">' + 'HP: ' + chars.rey.hp + '<br>' + 'AP: ' + chars.rey.ap + '<br>' + 'CAP: ' + chars.rey.cap + '</div>').html());
            $('.warstats').append('<div>' + 'HP: ' + chars.obiwan.hp + '<br>' + 'AP: ' + chars.obiwan.ap + '<br>' + 'CAP: ' + chars.obiwan.cap + '</div>');
            chars.grievous.isDefending = true;
            chars.kylo.isDefending = true;
            chars.rey.isDefending = true;
        }
    })

    $('.re').one('click', function () {
        if (chars.rey.isDefending !== true) {
            $('.attacker').append($(this));
            chars.rey.isAttacking = true;
            $('.defender').append($('.kr'), $('.ow'), $('.gg'));
            $('#defstats').append($('<div class="stats">' + 'HP: ' + chars.kylo.hp + '<br>' + 'AP: ' + chars.kylo.ap + '<br>' + 'CAP: ' + chars.kylo.cap + '</div>'), $('<div class="stats">' + 'HP: ' + chars.obiwan.hp + '<br>' + 'AP: ' + chars.obiwan.ap + '<br>' + 'CAP: ' + chars.obiwan.cap + '</div>'), $('<div class="stats">' + 'HP: ' + chars.grievous.hp + '<br>' + 'AP: ' + chars.grievous.ap + '<br>' + 'CAP: ' + chars.grievous.cap + '</div>').html());
            $('.warstats').append('<div>' + 'HP: ' + chars.rey.hp + '<br>' + 'AP: ' + chars.rey.ap + '<br>' + 'CAP: ' + chars.rey.cap + '</div>');
            chars.obiwan.isDefending = true;
            chars.kylo.isDefending = true;
            chars.grievous.isDefending = true;
        }
    })
});






