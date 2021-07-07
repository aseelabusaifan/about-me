'use strict' 

function question1() {
    if (edu === 'yes' || edu === 'y') {

        alert('yes you got it');
        score++;
    }

    else if (edu === 'no' || edu === 'n') {
        alert('try again');
    }
}

question1();

let favouritedrinks = prompt('is acofee my favourite drinks');


function question2() {
    if (favouritedrinks === 'yes' || favouritedrinks === 'y') {
        // console log(favouritedrinks:, favouritedrinks);

        alert('good chooes');
        score++;
    }
    else if (favouritedrinks === 'no' || favouritedrinks === 'n') {

        alert('its not my favourite ');

    }

    else {
        alert('pleas only write yes/y or no/n');

    }

}


question2();
