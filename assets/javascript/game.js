// We'll want information for every character: Attack power, counterattack power, and Health Points; we can store the characters as objects in an object
//Health Points will be denoted by HP, Attack power by ap, and counterattack power by cap

var chars = {
    obiwan: {
        hp: 500,
        baseap: 15,
        ap: 15,
        cap: 18,
        isAttacking: false,
        isDefending: false
    },

    grievous: {
        hp: 300,
        baseap: 10,
        ap: 10,
        cap: 30,
        isAttacking: false,
        isDefending: false
    },

    rey: {
        hp: 250,
        baseap: 18,
        ap: 18,
        cap: 12,
        isAttacking: false,
        isDefending: false
    },

    kylo: {
        hp: 400,
        baseap: 8,
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
            $('.slottwo').html($('<div class="stats">' + 'HP: ' + chars.obiwan.hp + '<br>' + 'AP: ' + chars.obiwan.ap + '<br>' + 'CAP: ' + chars.obiwan.cap + '</div>'));
            $('.slotone').html($('<div class="stats">' + 'HP: ' + chars.kylo.hp + '<br>' + 'AP: ' + chars.kylo.ap + '<br>' + 'CAP: ' + chars.kylo.cap + '</div>'));
            $('.slotthree').html($('<div class="stats">' + 'HP: ' + chars.rey.hp + '<br>' + 'AP: ' + chars.rey.ap + '<br>' + 'CAP: ' + chars.rey.cap + '</div>'));
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
            $('.slottwo').html($('<div class="stats">' + 'HP: ' + chars.obiwan.hp + '<br>' + 'AP: ' + chars.obiwan.ap + '<br>' + 'CAP: ' + chars.obiwan.cap + '</div>'));
            $('.slotone').html($('<div class="stats">' + 'HP: ' + chars.grievous.hp + '<br>' + 'AP: ' + chars.grievous.ap + '<br>' + 'CAP: ' + chars.grievous.cap + '</div>'));
            $('.slotthree').html($('<div class="stats">' + 'HP: ' + chars.rey.hp + '<br>' + 'AP: ' + chars.rey.ap + '<br>' + 'CAP: ' + chars.rey.cap + '</div>'));
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
            $('.slotone').html($('<div class="stats">' + 'HP: ' + chars.kylo.hp + '<br>' + 'AP: ' + chars.kylo.ap + '<br>' + 'CAP: ' + chars.kylo.cap + '</div>'));
            $('.slottwo').html($('<div class="stats">' + 'HP: ' + chars.grievous.hp + '<br>' + 'AP: ' + chars.grievous.ap + '<br>' + 'CAP: ' + chars.grievous.cap + '</div>'));
            $('.slotthree').html($('<div class="stats">' + 'HP: ' + chars.rey.hp + '<br>' + 'AP: ' + chars.rey.ap + '<br>' + 'CAP: ' + chars.rey.cap + '</div>'));
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
            $('.slottwo').html($('<div class="stats">' + 'HP: ' + chars.obiwan.hp + '<br>' + 'AP: ' + chars.obiwan.ap + '<br>' + 'CAP: ' + chars.obiwan.cap + '</div>'));
            $('.slotthree').html($('<div class="stats">' + 'HP: ' + chars.grievous.hp + '<br>' + 'AP: ' + chars.grievous.ap + '<br>' + 'CAP: ' + chars.grievous.cap + '</div>'));
            $('.slotone').html($('<div class="stats">' + 'HP: ' + chars.kylo.hp + '<br>' + 'AP: ' + chars.kylo.ap + '<br>' + 'CAP: ' + chars.kylo.cap + '</div>'));
            $('.warstats').append('<div>' + 'HP: ' + chars.rey.hp + '<br>' + 'AP: ' + chars.rey.ap + '<br>' + 'CAP: ' + chars.rey.cap + '</div>');
            chars.obiwan.isDefending = true;
            chars.kylo.isDefending = true;
            chars.grievous.isDefending = true;
        }
    })
});

//We want a button on click function that will allow the two characters to fight
$('#fight').on('click', function () {
    if (chars.grievous.isAttacking === true) {

        if (chars.kylo.hp >= 0) {
            chars.kylo.hp = (chars.kylo.hp - chars.grievous.ap); //change to defending - attacking
            chars.grievous.hp = (chars.grievous.hp - chars.kylo.cap);// change to attacking - defending
            chars.grievous.ap = chars.grievous.ap + chars.grievous.baseap;
            $('.slotone').html($('<div class="stats">' + 'HP: ' + chars.kylo.hp + '<br>' + 'AP: ' + chars.kylo.ap + '<br>' + 'CAP: ' + chars.kylo.cap + '</div>')); // change to defending char
            $('.warstats').html('<div>' + 'HP: ' + chars.grievous.hp + '<br>' + 'AP: ' + chars.grievous.ap + '<br>' + 'CAP: ' + chars.grievous.cap + '</div>'); // change to attacking character
            if (chars.kylo.hp <= 0) { //change to defending
                $('.fallen').append($('.kr')); //change to defending figure class
                $('.slotone').find('div').last().remove();


            }
            if (chars.grievous.hp <= 0) { // change to attacking 
                $('.fallen').append($('.gg')); //change to attacking figure class
                $('.slotone').find('div').last().remove(); //don't really need
                alert('You have fallen');
                location.reload();
            }
        }
        else if (chars.obiwan.hp >= 0) {
            chars.obiwan.hp = (chars.obiwan.hp - chars.grievous.ap);
            chars.grievous.hp = (chars.grievous.hp - chars.obiwan.cap);
            chars.grievous.ap = chars.grievous.ap + chars.grievous.baseap;
            $('.slottwo').html($('<div class="stats">' + 'HP: ' + chars.kylo.hp + '<br>' + 'AP: ' + chars.kylo.ap + '<br>' + 'CAP: ' + chars.kylo.cap + '</div>'));
            $('.warstats').html('<div>' + 'HP: ' + chars.grievous.hp + '<br>' + 'AP: ' + chars.grievous.ap + '<br>' + 'CAP: ' + chars.grievous.cap + '</div>');
            if (chars.obiwan.hp <= 0) {
                $('.fallen').append($('.ow'));
                $('.slottwo').find('div').last().remove();


            }
            if (chars.grievous.hp <= 0) {
                $('.fallen').append($('.gg'));
                $('.slotone').find('div').last().remove();
                alert('You have fallen');
                location.reload();
            }
        }
        else if (chars.rey.hp >= 0) {
            chars.rey.hp = (chars.rey.hp - chars.grievous.ap); //change to defending - attacking
            chars.grievous.hp = (chars.grievous.hp - chars.rey.cap);// change to attacking - defending
            chars.grievous.ap = chars.grievous.ap + chars.grievous.baseap;
            $('.slotthree').html($('<div class="stats">' + 'HP: ' + chars.rey.hp + '<br>' + 'AP: ' + chars.rey.ap + '<br>' + 'CAP: ' + chars.rey.cap + '</div>')); // change to defending char
            $('.warstats').html('<div>' + 'HP: ' + chars.grievous.hp + '<br>' + 'AP: ' + chars.grievous.ap + '<br>' + 'CAP: ' + chars.grievous.cap + '</div>'); // change to attacking character
            if (chars.rey.hp <= 0) { //change to defending
                $('.fallen').append($('.re')); //change to defending figure class
                $('.slotthree').find('div').last().remove();


            }
            if (chars.grievous.hp <= 0) { // change to attacking 
                $('.fallen').append($('.gg')); //change to attacking figure class
                $('.slotone').find('div').last().remove(); //don't really need
                alert('You have fallen');
                location.reload();
            }
        }
        else {
            alert('You are a champion!')
            location.reload();
        }
    }
    if (chars.kylo.isAttacking === true) {
        if (chars.grievous.hp >= 0) { // change to defending 
            chars.grievous.hp = (chars.grievous.hp - chars.kylo.ap); //change to defending - attacking
            chars.kylo.hp = (chars.kylo.hp - chars.grievous.cap);// change to attacking - defending
            chars.kylo.ap = chars.kylo.ap + chars.kylo.baseap; //change to attacking
            $('.slotone').html($('<div class="stats">' + 'HP: ' + chars.grievous.hp + '<br>' + 'AP: ' + chars.grievous.ap + '<br>' + 'CAP: ' + chars.grievous.cap + '</div>')); // change to defending char
            $('.warstats').html('<div>' + 'HP: ' + chars.kylo.hp + '<br>' + 'AP: ' + chars.kylo.ap + '<br>' + 'CAP: ' + chars.kylo.cap + '</div>'); // change to attacking character
            if (chars.grievous.hp <= 0) { //change to defending
                $('.fallen').append($('.gg')); //change to defending figure class
                $('.slotone').find('div').last().remove();


            }
            if (chars.kylo.hp <= 0) { // change to attacking 
                $('.fallen').append($('.kr')); //change to attacking figure class
                $('.slotone').find('div').last().remove(); //don't really need
                alert('You have fallen');
                location.reload();
            }
        }
        else if (chars.obiwan.hp >= 0) { // change to defending 
            chars.obiwan.hp = (chars.obiwan.hp - chars.kylo.ap); //change to defending - attacking
            chars.kylo.hp = (chars.kylo.hp - chars.obiwan.cap);// change to attacking - defending
            chars.kylo.ap = chars.kylo.ap + chars.kylo.baseap; //change to attacking
            $('.slottwo').html($('<div class="stats">' + 'HP: ' + chars.obiwan.hp + '<br>' + 'AP: ' + chars.obiwan.ap + '<br>' + 'CAP: ' + chars.obiwan.cap + '</div>')); // change to defending char and slot two
            $('.warstats').html('<div>' + 'HP: ' + chars.kylo.hp + '<br>' + 'AP: ' + chars.kylo.ap + '<br>' + 'CAP: ' + chars.kylo.cap + '</div>'); // change to attacking character
            if (chars.obiwan.hp <= 0) { //change to defending
                $('.fallen').append($('.ow')); //change to defending figure class
                $('.slottwo').find('div').last().remove(); //change to slottwo


            }
            if (chars.kylo.hp <= 0) { // change to attacking 
                $('.fallen').append($('.kr')); //change to attacking figure class
                $('.slotone').find('div').last().remove(); //don't really need
                alert('You have fallen');
                location.reload();
            }
        }
        else if (chars.rey.hp >= 0) { // change to defending 
            chars.rey.hp = (chars.rey.hp - chars.kylo.ap); //change to defending - attacking
            chars.kylo.hp = (chars.kylo.hp - chars.rey.cap);// change to attacking - defending
            chars.kylo.ap = chars.kylo.ap + chars.kylo.baseap; //change to attacking
            $('.slottwo').html($('<div class="stats">' + 'HP: ' + chars.rey.hp + '<br>' + 'AP: ' + chars.rey.ap + '<br>' + 'CAP: ' + chars.rey.cap + '</div>')); // change to defending char and slot three
            $('.warstats').html('<div>' + 'HP: ' + chars.kylo.hp + '<br>' + 'AP: ' + chars.kylo.ap + '<br>' + 'CAP: ' + chars.kylo.cap + '</div>'); // change to attacking character
            if (chars.rey.hp <= 0) { //change to defending
                $('.fallen').append($('.ow')); //change to defending figure class
                $('.slotthree').find('div').last().remove(); //change to slotthree


            }
            if (chars.kylo.hp <= 0) { // change to attacking 
                $('.fallen').append($('.kr')); //change to attacking figure class
                $('.slotone').find('div').last().remove(); //don't really need
                alert('You have fallen');
                location.reload();
            }
        }
        else {
            alert('You are a champion!')
            location.reload();
        }

    }
    if (chars.obiwan.isAttacking === true) {
        if (chars.kylo.hp >= 0) { // change to defending 
            chars.kylo.hp = (chars.kylo.hp - chars.obiwan.ap); //change to defending - attacking
            chars.obiwan.hp = (chars.obiwan.hp - chars.kylo.cap);// change to attacking - defending
            chars.obiwan.ap = chars.obiwan.ap + chars.obiwan.baseap; //change to attacking
            $('.slotone').html($('<div class="stats">' + 'HP: ' + chars.kylo.hp + '<br>' + 'AP: ' + chars.kylo.ap + '<br>' + 'CAP: ' + chars.kylo.cap + '</div>')); // change to defending char and slot two
            $('.warstats').html('<div>' + 'HP: ' + chars.obiwan.hp + '<br>' + 'AP: ' + chars.obiwan.ap + '<br>' + 'CAP: ' + chars.obiwan.cap + '</div>'); // change to attacking character
            if (chars.kylo.hp <= 0) { //change to defending
                $('.fallen').append($('.kr')); //change to defending figure class
                $('.slotone').find('div').last().remove(); //change to slottwo


            }
            if (chars.obiwan.hp <= 0) { // change to attacking 
                $('.fallen').append($('.kr')); //change to attacking figure class
                $('.slotone').find('div').last().remove(); //don't really need
                alert('You have fallen');
                location.reload();
            }
        } else if (chars.grievous.hp >= 0) { // change to defending 
            chars.grievous.hp = (chars.grievous.hp - chars.obiwan.ap); //change to defending - attacking
            chars.obiwan.hp = (chars.obiwan.hp - chars.grievous.cap);// change to attacking - defending
            chars.obiwan.ap = chars.obiwan.ap + chars.obiwan.baseap; //change to attacking
            $('.slottwo').html($('<div class="stats">' + 'HP: ' + chars.grievous.hp + '<br>' + 'AP: ' + chars.grievous.ap + '<br>' + 'CAP: ' + chars.grievous.cap + '</div>')); // change to defending char
            $('.warstats').html('<div>' + 'HP: ' + chars.obiwan.hp + '<br>' + 'AP: ' + chars.obiwan.ap + '<br>' + 'CAP: ' + chars.obiwan.cap + '</div>'); // change to attacking character
            if (chars.grievous.hp <= 0) { //change to defending
                $('.fallen').append($('.gg')); //change to defending figure class
                $('.slottwo').find('div').last().remove();


            }
            if (chars.obiwan.hp <= 0) { // change to attacking 
                $('.fallen').append($('.ow')); //change to attacking figure class
                $('.slotone').find('div').last().remove(); //don't really need
                alert('You have fallen');
                location.reload();
            }
        }

        else if (chars.rey.hp >= 0) { // change to defending 
            chars.rey.hp = (chars.rey.hp - chars.obiwan.ap); //change to defending - attacking
            chars.obiwan.hp = (chars.obiwan.hp - chars.rey.cap);// change to attacking - defending
            chars.obiwan.ap = chars.obiwan.ap + chars.obiwan.baseap; //change to attacking
            $('.slotthree').html($('<div class="stats">' + 'HP: ' + chars.rey.hp + '<br>' + 'AP: ' + chars.rey.ap + '<br>' + 'CAP: ' + chars.rey.cap + '</div>')); // change to defending char and slot three
            $('.warstats').html('<div>' + 'HP: ' + chars.obiwan.hp + '<br>' + 'AP: ' + chars.obiwan.ap + '<br>' + 'CAP: ' + chars.obiwan.cap + '</div>'); // change to attacking character
            if (chars.rey.hp <= 0) { //change to defending
                $('.fallen').append($('.re')); //change to defending figure class
                $('.slotthree').find('div').last().remove(); //change to slotthree


            }
            if (chars.obiwan.hp <= 0) { // change to attacking 
                $('.fallen').append($('.ow')); //change to attacking figure class
                $('.slotone').find('div').last().remove(); //don't really need
                alert('You have fallen');
                location.reload();
            }
        }
        else {
            alert('You are a champion!')
            location.reload();
        }


    }
    if (chars.rey.isAttacking === true) {
        if (chars.kylo.hp >= 0) { // change to defending 
            chars.kylo.hp = (chars.kylo.hp - chars.rey.ap); //change to defending - attacking
            chars.rey.hp = (chars.rey.hp - chars.kylo.cap);// change to attacking - defending
            chars.rey.ap = chars.rey.ap + chars.rey.baseap; //change to attacking
            $('.slotone').html($('<div class="stats">' + 'HP: ' + chars.kylo.hp + '<br>' + 'AP: ' + chars.kylo.ap + '<br>' + 'CAP: ' + chars.kylo.cap + '</div>')); // change to defending char and slot two
            $('.warstats').html('<div>' + 'HP: ' + chars.rey.hp + '<br>' + 'AP: ' + chars.rey.ap + '<br>' + 'CAP: ' + chars.rey.cap + '</div>'); // change to attacking character
            if (chars.kylo.hp <= 0) { //change to defending
                $('.fallen').append($('.kr')); //change to defending figure class
                $('.slotone').find('div').last().remove(); //change to slottwo


            }
            if (chars.rey.hp <= 0) { // change to attacking 
                $('.fallen').append($('.re')); //change to attacking figure class
                $('.slotone').find('div').last().remove(); //don't really need
                alert('You have fallen');
                location.reload();
            }
        } else if (chars.obiwan.hp >= 0) { // change to defending 
            chars.obiwan.hp = (chars.obiwan.hp - chars.rey.ap); //change to defending - attacking
            chars.rey.hp = (chars.rey.hp - chars.obiwan.cap);// change to attacking - defending
            chars.rey.ap = chars.rey.ap + chars.rey.baseap; //change to attacking
            $('.slottwo').html($('<div class="stats">' + 'HP: ' + chars.obiwan.hp + '<br>' + 'AP: ' + chars.obiwan.ap + '<br>' + 'CAP: ' + chars.obiwan.cap + '</div>')); // change to defending char
            $('.warstats').html('<div>' + 'HP: ' + chars.rey.hp + '<br>' + 'AP: ' + chars.rey.ap + '<br>' + 'CAP: ' + chars.rey.cap + '</div>'); // change to attacking character
            if (chars.obiwan.hp <= 0) { //change to defending
                $('.fallen').append($('.ow')); //change to defending figure class
                $('.slottwo').find('div').last().remove();


            }
            if (chars.rey.hp <= 0) { // change to attacking 
                $('.fallen').append($('.re')); //change to attacking figure class
                $('.slotone').find('div').last().remove(); //don't really need
                alert('You have fallen');
                location.reload();
            }
        }

        else if (chars.grievous.hp >= 0) { // change to defending 
            chars.grievous.hp = (chars.grievous.hp - chars.rey.ap); //change to defending - attacking
            chars.rey.hp = (chars.rey.hp - chars.grievous.cap);// change to attacking - defending
            chars.rey.ap = chars.rey.ap + chars.rey.baseap; //change to attacking
            $('.slotthree').html($('<div class="stats">' + 'HP: ' + chars.grievous.hp + '<br>' + 'AP: ' + chars.grievous.ap + '<br>' + 'CAP: ' + chars.grievous.cap + '</div>')); // change to defending char and slot three
            $('.warstats').html('<div>' + 'HP: ' + chars.rey.hp + '<br>' + 'AP: ' + chars.rey.ap + '<br>' + 'CAP: ' + chars.rey.cap + '</div>'); // change to attacking character
            if (chars.grievous.hp <= 0) { //change to defending
                $('.fallen').append($('.gg')); //change to defending figure class
                $('.slotthree').find('div').last().remove(); //change to slotthree


            }
            if (chars.rey.hp <= 0) { // change to attacking 
                $('.fallen').append($('.re')); //change to attacking figure class
                $('.slotone').find('div').last().remove(); //don't really need
                alert('You have fallen');
                location.reload();
            }
        }
        else {
            alert('You are a champion!')
            location.reload();
        }

    }
});





