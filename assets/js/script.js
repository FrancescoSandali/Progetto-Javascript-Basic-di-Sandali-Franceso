const body = document.body;
//Create the logic for application
let count = 0;  //initialize a variable count to 0
let s2;  //thousand
let s3;  //hundred
let s4;  //ten
let s5; //unit

//Create Title
const title = document.createElement('h1');
body.prepend(title);
title.innerHTML ='Il mio counter';
title.className = "title";

//Create Sbutitle
const subtitle = document.createElement('h2');
title.after(subtitle);
subtitle.innerHTML ='Questo è un progetto di Sandali Francesco';
subtitle.className = "subtitle";

//Create Counter Structure
const counterContainer = document.createElement('div');
subtitle.after(counterContainer);
counterContainer.className = "container";

//Create Display
const counterDisplay = document.createElement('div');
counterContainer.append(counterDisplay);
counterDisplay.className = "display";


//Create DisplaySlot
const displaySlot = {};
for (let i=0; i<5; i++){
    displaySlot[i] = document.createElement('div');
    counterDisplay.append(displaySlot[i]);
    displaySlot[i].className = `slot slot${i}`;
    displaySlot[i].innerHTML = (i==0) ? '+' : '0';
}

//Create Control
const counterControl = document.createElement('div');
counterContainer.append(counterControl);
counterControl.className = "control";

//Create ControlSlot
const counterControlSlot = {};
for(let k=0; k<3;k++){
    counterControlSlot[k] = document.createElement('div');
    counterControl.append(counterControlSlot[k]);
    counterControlSlot[k].className = "control-slot";
}
/*
    counterControlSlot[1] Container Reset
    counterControlSlot[2] Container up
    counterControlSlot[3] Container down
*/

//Reset button
const buttonReset = document.createElement('button');
counterControlSlot[0].append(buttonReset);
buttonReset.className = "btn";
buttonReset.innerHTML = 'Reset';

//Operation in general

const operation = ['1','10','100','1000'];

//Create button Up 
const buttonPlus = {};
for(let j=0; j < operation.length; j++){
    buttonPlus[j] = document.createElement('button');
    counterControlSlot[1].append(buttonPlus[j]);
    buttonPlus[j].className = "btn";
    buttonPlus[j].innerHTML =`+${operation[j]}`;
    buttonPlus[j].dataset.action = operation[j];
    buttonPlus[j].addEventListener('click',counterUp);
}
/*
    buttonPlus[0] +1;
    buttonPlus[1] +10;
    buttonPlus[2] +100;
    buttonPlus[3] +1000;
*/

//Create function Up
function counterUp(event){
    if(count<9999){
        const number = event.target.dataset.action;
        switch(number){
            case '1':
                count++;
                updateDisplay();
            break;
            case '10':
                count=count+10;
                updateDisplay();
            break;
            case '100':
                count=count+100;
                updateDisplay();
            break;
            case '1000':
                count=count+1000;
                updateDisplay();
            break;
            default:
                count=0;
                updateDisplay(); 
        }
    }else{
        resetDisplay();
    }
}

//Create button Down
const buttonDown = {};
for(let q=0;q < operation.length; q++){
    buttonDown[q] = document.createElement('button');
    counterControlSlot[2].append(buttonDown[q]);
    buttonDown[q].className = "btn";
    buttonDown[q].innerHTML =`-${operation[q]}`;
    buttonDown[q].dataset.action = operation[q];
    buttonDown[q].addEventListener('click',counterDown);
}
/*
    buttonDown[0] -1;
    buttonDown[1] -10;
    buttonDown[2] -100;
    buttonDown[3] -1000;
*/

//Create function Down
function counterDown(event){
    if(count>-9999){
        const number = event.target.dataset.action;
        switch(number){
            case '1':
                count--;
                updateDisplay();
            break;
            case '10':
                count=count-10;
                updateDisplay();
            break;
            case '100':
                count=count-100;
                updateDisplay();
            break;
            case '1000':
                count=count-1000;
                updateDisplay();
            break;
            default:
                count=0;
                updateDisplay(); 
        }
    }else{
        resetDisplay();
    }
}

//Create function Reset
buttonReset.addEventListener('click', ()=>{
    resetDisplay();
    updateDisplay();
});

function resetDisplay(){
    count = 0;
    s2 =0;  //thousand
    s3 =0;  //hundred
    s4 =0;  //ten
    s5 =0;  //unit
}


//create refesh of Display
function updateDisplay(){
    console.log(count);
    //Logic for display Number
    count / 1000  ;
    let stringCounter = count.toFixed(4).replace('.', '').replace('-','');
    let arrayStringCounter = stringCounter.split('');
    console.log(arrayStringCounter);
    if(count>=0){
        logicDisplayUp();
    }else{
        logicDisplayDown();
    }
    
    // Logic for positive number

    function logicDisplayUp(){
        switch(count>=0){

            case count <=9 :
                s5 = arrayStringCounter[0];  //unit
                s4 = arrayStringCounter[1];  //ten
                s3 = arrayStringCounter[2];  //hundred
                s2 = arrayStringCounter[3];  //thousand
            break;

            case count >= 10 && count <100 :
                s5 = arrayStringCounter[1];  //unit
                s4 = arrayStringCounter[0];  //ten
                s3 = arrayStringCounter[2];  //hundred
                s2 = arrayStringCounter[3];  //thousand
            break;

            case count >= 100 && count <1000 :
                s5 = arrayStringCounter[2];  //unit
                s4 = arrayStringCounter[1];  //ten
                s3 = arrayStringCounter[0];  //hundred
                s2 = arrayStringCounter[3];  //thousand
            break;

            case count >= 1000:
                s5 = arrayStringCounter[3];  //unit
                s4 = arrayStringCounter[2];  //ten
                s3 = arrayStringCounter[1];  //hundred
                s2 = arrayStringCounter[0];  //thousand
            break;

            default:
                s5 = 0;  //unit
                s4 = 0;  //ten
                s3 = 0;  //hundred
                s2 = 0;  //thousand
        }
    }

    // Logic for negative number
    function logicDisplayDown(){
        switch(count<0){
            case count <0 && count>= -9:
                s5 = arrayStringCounter[0];  //unit
                s4 = arrayStringCounter[1];  //ten
                s3 = arrayStringCounter[2];  //hundred
                s2 = arrayStringCounter[3];  //thousand
            break;

            case count <= -10 && count > -100 :
                s5 = arrayStringCounter[1];  //unit
                s4 = arrayStringCounter[0];  //ten
                s3 = arrayStringCounter[2];  //hundred
                s2 = arrayStringCounter[3];  //thousand
            break;

            case count <= -100 && count > -1000 :
                s5 = arrayStringCounter[2];  //unit
                s4 = arrayStringCounter[1];  //ten
                s3 = arrayStringCounter[0];  //hundred
                s2 = arrayStringCounter[3];  //thousand
            break;

            case count <= -1000:
                s5 = arrayStringCounter[3];  //unit
                s4 = arrayStringCounter[2];  //ten
                s3 = arrayStringCounter[1];  //hundred
                s2 = arrayStringCounter[0];  //thousand
            break;
            default:
                s5 = 0;  //unit
                s4 = 0;  //ten
                s3 = 0;  //hundred
                s2 = 0;  //thousand
        }
    }

    //What display show?
      if(count >= 0){
        displaySlot[0].innerHTML = ('+'); //symbol
        displaySlot[1].innerHTML =s2;  //thousand
        displaySlot[2].innerHTML =s3;  //hundred
        displaySlot[3].innerHTML =s4;  //ten
        displaySlot[4].innerHTML =s5;  //unit
    }else{
        displaySlot[0].innerHTML = ('-');//symbol
        displaySlot[1].innerHTML =s2;  //thousand
        displaySlot[2].innerHTML =s3;  //hundred
        displaySlot[3].innerHTML =s4;  //ten
        displaySlot[4].innerHTML =s5;  //unit
    }
}
