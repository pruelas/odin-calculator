function solve(expression){
    const operators = expression.split(/[\d]+|\s/);
    const operands = expression.split(/\D/);
    var currentTotal = 0;
    console.log(operators, operands);
    for(var i = 0; i< operators.length; i++){
        if(i == 0 && operands.length > 2){
            currentTotal = Number(operands[i]);

        }else{
            currentTotal  += operate(operators[i],currentTotal,Number(operands[i]));
    
        }
        console.log(currentTotal);
    }
    
}

function operate(operator, number1, number2){
    if(operator == "+"){
       return add(number1,number2);
    }else if(operator == '-'){
       return subtract(number1,number2);
    }else if(operator == '*'){
       return multiply(number1, number2);
    }else{
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

var expression = "";
window.addEventListener('click', function(e, expresssion){
    console.log(e.target.textContent);
    var displayContent = document.getElementById("display");
    if(e.target.id == "key"){
        if(e.target.textContent == 0){
            displayContent.textContent += "0";
            expression += "0";

        }else if(e.target.textContent == 1){
            displayContent.textContent += "1";
            expression += "1";

        }else if(e.target.textContent == 2){
            displayContent.textContent += "2";
            expression += "2";

        }else if(e.target.textContent == 3){
            displayContent.textContent += "3";
            expression += "3";

        }else if(e.target.textContent == 4){
            displayContent.textContent += "4";
            expression += "4";

        }else if(e.target.textContent == 5){
            displayContent.textContent += "5";
            expression += "5";

        }else if(e.target.textContent == 6){
            displayContent.textContent += "6";
            expression += "6";

        }else if(e.target.textContent == 7){
            displayContent.textContent += "7";
            expression += "7";

        }else if(e.target.textContent == 8){
            displayContent.textContent += "8";
            expression += "8";

        }else if(e.target.textContent == 9){
            displayContent.textContent += "9";
            expression += "9";

        }else if(e.target.textContent == "/"){
            displayContent.textContent += "/";
            expression += " / ";

        }else if(e.target.textContent == "*"){
            displayContent.textContent += "*";
            expression += " * ";

        }else if(e.target.textContent == "+"){
            displayContent.textContent += "+";
            expression += " + ";

        }else if(e.target.textContent == "-"){
            displayContent.textContent += "-";
            expression += " - ";

        }else if(e.target.textContent == "="){
            solve(displayContent.textContent);

        }else if(e.target.textContent == "clear"){
            displayContent.textContent = "";
            expression = "";
        }else{

        }
    }
    console.log(displayContent.textContent);

});