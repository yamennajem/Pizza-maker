console.log("connected")

// De knoppen zijn constant, omdat ze niet veranderen.
const pepperoniKnop = document.querySelector("#pepperoniknop");
const mashroomKnop = document.querySelector("#mashroomknop");
const oliveKnop = document.querySelector("#oliveknop");

// boolean is om aan te tonen of de element al geplaatst is
let pepperoniZien = false;
let mashroomZien = false;
let oliveZien = false;

// functies aan events koppelen door middel van parameter "event" en if else states om elementen in en uit beeld te brengen.
function showElement(event) {
    let knop = event.target.id 
    // bij de "!" voor de variabelen heb ik van Laurens gekregen, omdat het bij mij niet werkte.
    if (knop == 'pepperoniknop' && !pepperoniZien){
       document.querySelector('#pepperoni').style.opacity = '100%';
        //bron: https://www.w3schools.com/js/js_htmldom_css.asp
       pepperoniZien = true;
       console.log("pepperoni added");
    } else if (knop == 'pepperoniknop') {
        document.querySelector('#pepperoni').style.opacity = '0%';
        pepperoniZien = false;
        console.log('pepperoni removed');
    } if (knop == 'mashroomknop' && !mashroomZien){
        document.querySelector('#mashroom').style.opacity = '100%';
        mashroomZien = true;
        console.log("mashroom added");
    } else if (knop == 'mashroomknop') {
         document.querySelector('#mashroom').style.opacity = '0%';
         mashroomZien = false;
         console.log('mashroom removed');
    } if (knop == 'oliveknop' && !oliveZien){
        document.querySelector('#olive').style.opacity = '100%';
        oliveZien = true;
        console.log("olive added");
    } else if (knop == 'oliveknop') {
         document.querySelector('#olive').style.opacity = '0%';
         oliveZien = false;
         console.log('olive removed');
    }
}

// eventlistener om de knoppen te koppelen aan de functies
pepperoniKnop.addEventListener('click', showElement);
mashroomKnop.addEventListener('click', showElement);
oliveKnop.addEventListener('click', showElement);