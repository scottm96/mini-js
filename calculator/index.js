//first we import the document elements and assign variables

const display = document.getElementById("display")
    
appendToDisplay = input => display.value += input;

clearDisplay = () => display.value = "";

calculate = () => {
    try{
        display.value = Number(eval(display.value)).toFixed(2);
    }
    catch(error){
        display.value = error.name;
    }
}
