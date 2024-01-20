//Calculator Program

const display = document.getElementById("display");

//Display the value
function appendToDisplay(input){
display.value += input;
}

//Clear the value
function clearDisplay(){
display.value= ""
}

//Calculate the values
function calculate(){
    try{
        display.value= eval(display.value);
    }
    //Display error in case that and operation is incomplete
    catch(error){
        display.value = "Error"
    }

}



