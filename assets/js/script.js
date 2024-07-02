const body = document.body;

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

//Create Counter
const counterContainer = document.createElement('div');
subtitle.after(counterContainer);
counterContainer.className = "container";

//Create Display
const counterDisplay = document.createElement('div');
counterContainer.append(counterDisplay);
counterDisplay.className = "display";

//Create Slot Display with +/-
const displaySlot1 = document.createElement('div');
counterDisplay.append(displaySlot1);
displaySlot1.className = "slot slot1";
displaySlot1.innerHTML = '+';

//Create Slot Display numeric figures
const displaySlot2 = document.createElement('div');
counterDisplay.append(displaySlot2);
displaySlot2.className = "slot slot2";
displaySlot2.innerHTML = '0';

//Create Slot Display numeric figures
const displaySlot3 = document.createElement('div');
counterDisplay.append(displaySlot3);
displaySlot3.className = "slot slot3";
displaySlot3.innerHTML = '0';

//Create Slot Display numeric figures
const displaySlot4 = document.createElement('div');
counterDisplay.append(displaySlot4);
displaySlot4.className = "slot slot4";
displaySlot4.innerHTML = '0';

//Create Slot Display numeric figures
const displaySlot5 = document.createElement('div');
counterDisplay.append(displaySlot5);
displaySlot5.className = "slot slot5";
displaySlot5.innerHTML = '0';


//Create Control
const counterControl = document.createElement('div');
counterContainer.append(counterControl);
counterControl.className = "control";

//Create Reset Div with reset button
const counterControlReset = document.createElement('div');
counterControl.append(counterControlReset);
counterControlReset.className = "control-slot control-slot--w100";

//Reset button
const buttonReset = document.createElement('button');
counterControlReset.append(buttonReset);
buttonReset.className = "btn";
buttonReset.innerHTML = 'Reset';

//Create Up Div with command for up the counter
const counterControlUp = document.createElement('div');
counterControl.append(counterControlUp);
counterControlUp.className = "control-slot";

//Up 1
const buttonPlus = document.createElement('button');
counterControlUp.append(buttonPlus);
buttonPlus.className = "btn";
buttonPlus.innerHTML = '+1';

//Up 10
const buttonPlus10 = document.createElement('button');
counterControlUp.append(buttonPlus10);
buttonPlus10.className = "btn";
buttonPlus10.innerHTML = '+10';

//Up 100
const buttonPlus100 = document.createElement('button');
counterControlUp.append(buttonPlus100);
buttonPlus100.className = "btn";
buttonPlus100.innerHTML = '+100';

//Up 1000
const buttonPlus1000 = document.createElement('button');
counterControlUp.append(buttonPlus1000);
buttonPlus1000.className = "btn";
buttonPlus1000.innerHTML = '+1000';



//Create Up Div with command for down the counter
const counterControlDown = document.createElement('div');
counterControl.append(counterControlDown);
counterControlDown.className = "control-slot";

//Down 1
const buttonDown = document.createElement('button');
counterControlDown.append(buttonDown);
buttonDown.className = "btn";
buttonDown.innerHTML = '-1';

//Down 10
const buttonDown10 = document.createElement('button');
counterControlDown.append(buttonDown10);
buttonDown10.className = "btn";
buttonDown10.innerHTML = '-10';

//Down 100
const buttonDown100 = document.createElement('button');
counterControlDown.append(buttonDown100);
buttonDown100.className = "btn";
buttonDown100.innerHTML = '-100';

//Down 1000
const buttonDown1000 = document.createElement('button');
counterControlDown.append(buttonDown1000);
buttonDown1000.className = "btn";
buttonDown1000.innerHTML = '-1000';




//Create the logic for application

let count = 0;  //initialize a variable count to 0

let s2;  //thousand
let s3;  //hundred
let s4;  //ten
let s5; //unit

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

//Create function up 1
buttonPlus.addEventListener('click', ()=>{
        if(count<9999){
            count++;
            updateDisplay();
        }else{
            count=0;
            resetDisplay()
        }
});

//Create function up 10
buttonPlus10.addEventListener('click', ()=>{
    if(count<9999){
        count=count+10;
        updateDisplay();
    }else{
        count=0;
        resetDisplay();
    }
});

//Create function up 100
buttonPlus100.addEventListener('click', ()=>{
    if(count<9999){
        count=count+100;
        updateDisplay();
    }else{
        count=0;
        resetDisplay();
    }
});

//Create function up 1000
buttonPlus1000.addEventListener('click', ()=>{
    if(count<9999){
        count=count+1000;
        updateDisplay();
    }else{
        count=0;
        resetDisplay();
    }
});



//Create function down 1
buttonDown.addEventListener('click', ()=>{
    if(count> -9999){
        count--;
        updateDisplay();
    }else{
        count=0;
        resetDisplay();
    }
});


//Create function down 10
buttonDown10.addEventListener('click', ()=>{
    if(count> -9999){
        count=count-10;
        updateDisplay();
    }else{
        count=0;
        resetDisplay();
    }
});


//Create function down 100
buttonDown100.addEventListener('click', ()=>{
    if(count> -9999){
        count=count-100;
        updateDisplay();
    }else{
        count=0;
        resetDisplay();
    }
});

//Create function down 1000
buttonDown1000.addEventListener('click', ()=>{
    if(count> -9999){
        count=count-1000;
        updateDisplay();
    }else{
        count=0;
        resetDisplay();
    }
});



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
        displaySlot1.innerHTML = ('+'); //symbol
        displaySlot2.innerHTML =s2;  //thousand
        displaySlot3.innerHTML =s3;  //hundred
        displaySlot4.innerHTML =s4;  //ten
        displaySlot5.innerHTML =s5;  //unit
    }else{
        displaySlot1.innerHTML = ('-');//symbol
        displaySlot2.innerHTML =s2;  //thousand
        displaySlot3.innerHTML =s3;  //hundred
        displaySlot4.innerHTML =s4;  //ten
        displaySlot5.innerHTML =s5;  //unit

    }
}





