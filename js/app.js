'use strict' 
let score = 0;
 let edu=prompt('did i study  at yarmouk uni ')
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




let num= prompt(' what my luck num is');
for ( let y=0; y<4 ; y++){


if (num==='4'){
    alert('yes you got it');
    score++;
 break   

} 
  
    if (y==3){
        alert('okay you are out of attempts,my favorite number 4 ')
        break
    }
    alert('try again');
    num= prompt(' what my luck num is');

}




let hr = prompt(' Did I study the hr??');

study = study.toLowerCase();

function question6() {
    if (hr === 'yes' || hr === 'y') {

        alert('yes you got it');
        score++;
    }

    else if ( hr === 'no' || hr === 'n') {
        alert('try again');
    }
}
    question6();



    
let  sport = prompt('Is my favorite sport walking? ??');

sport  =  sport.toLowerCase();

function question7() {
    if (sport === 'yes' || sport  === 'y') {

        alert('yes you got it');
        score++;
    }

    else if (  sport === 'no' ||  sport=== 'n') {
        alert('try again');
    }
}
    question7();



    let  car = prompt('Is my favorite car doge charger? ??');

    car  =  car.toLowerCase();
    
    function question7() {
        if (car === 'yes' || car  === 'y') {
    
            alert('yes you got it');
            score++;
        }
    
        else if (  car=== 'no' ||car=== 'n') {
            alert('try again');
        }




