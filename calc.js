//calculator program

const display = document.getElementById("display");

function appendToDisplay(input){
    if(display.value == "error"){
        display.value ="";
    }
    display.value += input;
}

function clearDisplay(){ //dont use just clear() as name as it is a method name
    display.value = "";
}

function calculate(){
    try{
       display.value = new Function('return ' + display.value)();
       // leave space after return 
       //create constructor Function that returns expression
    }
    catch(error){
        display.value ="error";
    }
}