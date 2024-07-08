const body = document.body;
//Create the logic for application
let count = 0;  //initialize a variable count to 0

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
const counterControl = createDomElement('div','','control');
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
buttonReset.dataset.action = "Reset";

//Operation in general
const operation = ['1','10','100','1000'];
//Create button Up and buttonDown
const buttonPlus = {};

const buttonDown = {};

for(let j=0; j < operation.length; j++){
    buttonPlus[j] = createDomElement('button',`+${operation[j]}`, 'btn');
    counterControlSlot[1].append(buttonPlus[j]);
    buttonPlus[j].dataset.action = `+${operation[j]}`;

    buttonDown[j] = createDomElement('button',`-${operation[j]}`, 'btn');
    counterControlSlot[2].append(buttonDown[j]);
    buttonDown[j].dataset.action = `-${operation[j]}`;
}

counterControl.addEventListener('click', function(event){
    const action = event.target.dataset.action;
    if(action === undefined){
        alert("You didn't click a button, click better");
    } else if(action.startsWith('+')){
        counterUp(event);
    } else if(action.startsWith('-')){
        counterDown(event);
    } else if(action == "Reset"){
        resetDisplay();
    }
});

//Create function Up
function counterUp(event){
    if(count<9999){
        const number = event.target.dataset.action;
        switch(number){
            case '+1':
                count++;
                updateDisplay();
            break;
            case '+10':
                count=count+10;
                updateDisplay();
            break;
            case '+100':
                count=count+100;
                updateDisplay();
            break;
            case '+1000':
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

//Create function Down
function counterDown(event){
    if(count>-9999){
        const number = event.target.dataset.action;
        switch(number){
            case '-1':
                count--;
                updateDisplay();
            break;
            case '-10':
                count=count-10;
                updateDisplay();
            break;
            case '-100':
                count=count-100;
                updateDisplay();
            break;
            case '-1000':
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

//Create function reset
function resetDisplay(){
    count = 0;
    s2 =0;  //thousand
    s3 =0;  //hundred
    s4 =0;  //ten
    s5 =0;  //unit
    updateDisplay(); 
}

//create refesh of Display
function updateDisplay(){
    console.log(count);
    //Logic for display Number
    count / 1000  ;
    let stringCounter = Math.abs(count).toString().padStart(4,'0');
    let arrayStringCounter = stringCounter.split('');
    console.log(arrayStringCounter);
    
    //What display show?
      if(count >= 0){
        displaySlot[0].innerHTML = ('+'); //symbol
        logicDisplay();
    }else{
        displaySlot[0].innerHTML = ('-'); //symbol
        logicDisplay();
    }
    function logicDisplay(){
        displaySlot[4].innerHTML= arrayStringCounter[3];  //unit
        displaySlot[3].innerHTML= arrayStringCounter[2];  //ten
        displaySlot[2].innerHTML= arrayStringCounter[1];  //hundred
        displaySlot[1].innerHTML = arrayStringCounter[0];  //thousand
    }
}
