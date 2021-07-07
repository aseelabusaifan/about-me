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


let study = prompt(' Did I study public adminstration??');
// console.log ( 'befor', edu );
study = study.toLowerCase();

function question3() {
    if (study === 'yes' || study === 'y') {

        alert('yes you got it');
        score++;
    }

    else if (study === 'no' || study === 'n') {
        alert('try again');
    }
}
    question3();


    let work = prompt(' Did I work for Amazon before?');
    // console.log ( 'befor', edu );
    work = work.toLowerCase();
    
    function question4() {
        if (work === 'yes' || work === 'y') {
    
            alert('try again');
        }
    
        else if (work === 'no' || work === 'n') {
    
            alert('yes you got it');
            score++;
        }
    }

    question4();

    let exp = prompt(' Did I have experience in markting');
    // console.log ( 'befor', edu );
    exp = exp.toLowerCase();


    function question5(){

    if (exp === 'yes' || exp === 'y') {

        alert('yes you got it');
        score++;
    }

    else if (exp === 'no' || exp === 'n') {
        alert('try again');
    }
}


question5();