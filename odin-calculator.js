function operate(operator, number1, number2){
    if(operator === "+"){
       return add(number1,number2);
    }else if(operator === '-'){
       return subtract(number1,number2);
    }else if(operator === '*'){
       return multiply(number1, number2);
    }else{
        console.log('here');
       if(isNaN(divide(number1,number2))){
           return "AGH?! You can't divide by zero!";
       }else{
           return divide(number1, number2);
       }
    }
};

function add(a,b){
    return a + b;
};

function subtract(a,b){
    return a-b;
};

function multiply(a,b){
    return a*b;
};

function divide(a, b){
    return a/b;
};