function solve(expression){
    var operators = expression.split(/[\d]+/);
    operators.shift();
    operators.pop();
    const operands = expression.split(/\D/);
    var currentTotal = Number(operands[0]);
    console.log(operators, operands);
    for(var i = 0; i < operators.length; i++){

        currentTotal  = operate(operators[i],currentTotal,Number(operands[i+1]));
    
        console.log(currentTotal, i);
    }

    return currentTotal;
    
}

function operate(operator, number1, number2){
    if(number1 == ""){
        return number2;
    }else if(operator == "+"){
        console.log('add');
        return Number(number1) + Number(number2);
    }else if(operator == '-'){
        return Number(number1)-Number(number2);
    }else if(operator == '*'){
        return multiply(Number(number1), Number(number2));
    }else if(operator == ""){
        return number1;
    }else{
        if(isNaN(divide(Number(number1),Number(number2)))){
            return "You can't divide by zero!";
       }else{
            return divide(Number(number1), Number(number2));
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
    if(Number(b) == 0){
        return "AGH?! You can't divide by zero!";
    }

    return a/b;
};

var expression = "";
var prevOperand = "0";
var currOperand = "";
var prevOperator = "";
window.addEventListener('click', function(e, expresssion){
    console.log(e.target.textContent);
    var displayContent = document.getElementById("display");
    var solution = 0;
    if(e.target.id == "key"){
        if(e.target.textContent == 0){
            currOperand += "0";
            displayContent.textContent = currOperand;

        }else if(e.target.textContent == 1){
            currOperand += "1";
            displayContent.textContent = currOperand;

        }else if(e.target.textContent == 2){
            currOperand += "2";
            displayContent.textContent = currOperand;

        }else if(e.target.textContent == 3){
            currOperand += "3";
            displayContent.textContent = currOperand;

        }else if(e.target.textContent == 4){
            currOperand += "4";
            displayContent.textContent = currOperand;

        }else if(e.target.textContent == 5){
            currOperand += "5";
            displayContent.textContent = currOperand;

        }else if(e.target.textContent == 6){
            currOperand += "6";
            displayContent.textContent = currOperand;

        }else if(e.target.textContent == 7){
            currOperand += "7";
            displayContent.textContent = currOperand;

        }else if(e.target.textContent == 8){
            currOperand += "8";
            displayContent.textContent = currOperand;

        }else if(e.target.textContent == 9){
            currOperand += "9";
            displayContent.textContent = currOperand;

        }else if(e.target.textContent == "/"){
            prevOperand = operate(prevOperator, prevOperand, currOperand);
            displayContent.textContent = prevOperand;
            currOperand = "";
            prevOperator = "/";

        }else if(e.target.textContent == "*"){
            prevOperand = operate(prevOperator, prevOperand, currOperand);
            displayContent.textContent = prevOperand;
            currOperand = "";
            prevOperator = "*";

        }else if(e.target.textContent == "+"){
            console.log(prevOperand, currOperand);
            prevOperand = operate(prevOperator, prevOperand, currOperand);
            displayContent.textContent = prevOperand;
            currOperand = "";
            prevOperator = "+";

        }else if(e.target.textContent == "-"){
            prevOperand = operate(prevOperator, prevOperand, currOperand);
            displayContent.textContent = prevOperand;
            currOperand = "";
            prevOperator = "-";

        }else if(e.target.textContent == "="){
            prevOperand = operate(prevOperator, prevOperand, currOperand);
            displayContent.textContent = prevOperand;
            currOperand = "";
            prevOperator = "";

        }else if(e.target.textContent == "clear"){
            displayContent.textContent = "";
            prevOperand = "";
            currOperand = "";

        }else if(e.target.textContent == "del"){
            displayContent.textContent = displayContent.textContent.slice(0, -1);
            currOperand = displayContent.textContent;
        }
    }

    if(displayContent.textContent == "You can't divide by zero!"){
        prevOperand = "";
        currOperand = "";
    }
    console.log("total", prevOperand, displayContent.textContent);

});