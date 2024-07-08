const body = document.body;
//Create the logic for application
let count = 0;  //initialize a variable count to 0
let s2;  //thousand
let s3;  //hundred
let s4;  //ten
let s5; //unit

//Create function for Dom element

function createDomElement(tagName, innerHtml, className){
    const element = document.createElement(tagName);
    element.innerHTML = innerHtml;
    element.className = className;
    return element;
}

//Create Title
const title = createDomElement('h1', 'Il mio counter', 'title');
body.prepend(title);

//Create Sbutitle
const subtitle = createDomElement('h2', 'Questo è un progetto di Sandali Francesco', 'subtitle');
title.after(subtitle);

//Create Counter Structure
const counterContainer = createDomElement('div', '', 'container');
subtitle.after(counterContainer);


//Create Display
const counterDisplay = createDomElement('div', '', 'display');
counterContainer.append(counterDisplay);

//Create DisplaySlot
const displaySlot = {};
for (let i=0; i<5; i++){
    displaySlot[i] = createDomElement('div', (i==0) ? '+' : '0', `slot slot${i}`);
    counterDisplay.append(displaySlot[i]);
}

//Create Control
const counterControl = createDomElement('div', '', 'control');
counterContainer.append(counterControl);

//Create ControlSlot
const counterControlSlot = {};
for(let k=0; k<3;k++){
    counterControlSlot[k] = createDomElement('div', '', 'control-slot');
    counterControl.append(counterControlSlot[k]);
}

//Reset button
const buttonReset = createDomElement('button', 'Reset', 'btn');
counterControlSlot[0].append(buttonReset);

//Operation in general
const operation = ['1','10','100','1000'];
//Create button Up 
const buttonPlus = {};
for(let j=0; j < operation.length; j++){
    buttonPlus[j] = createDomElement('button',`+${operation[j]}`, 'btn');
    counterControlSlot[1].append(buttonPlus[j]);
    buttonPlus[j].dataset.action = operation[j];
    buttonPlus[j].addEventListener('click',counterUp);
}


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
    buttonDown[q] = createDomElement('button',`-${operation[q]}`, 'btn');
    counterControlSlot[2].append(buttonDown[q]);
    buttonDown[q].dataset.action = operation[q];
    buttonDown[q].addEventListener('click',counterDown);
}

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
