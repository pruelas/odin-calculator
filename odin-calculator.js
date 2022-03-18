function operate(operator, number1, number2){
    var solution ="";
    if(number1 == ""){
        solution = number2;
    }else if(operator == "+"){
        console.log('add');
        solution = Number(number1) + Number(number2);
    }else if(operator == '-'){
        solution = Number(number1)-Number(number2);
    }else if(operator == '*'){
        solution = Number(number1)*Number(number2);
    }else if(operator == ""){
        solution = number2;
    }else{
        if(isNaN(Number(number1)/Number(number2))){
            solution = "Nope";
       }else{
            solution = divide(Number(number1), Number(number2));
       }
    }

    console.log(solution.toString().length, solution);
    if(solution.toString().length > 8 && !isNaN(solution)){
        if(Number.isInteger(solution)){
            return "NaN";
        }else{
            var maxDecimalPlaces = 6;
            while(solution.toString().length > 8)
            {
                solution = Number(solution).toFixed(maxDecimalPlaces);
                maxDecimalPlaces --;
                console.log(solution);
            }    
            return solution;
        }
        
    }else{
        return solution;
    }
};

function divide(a, b){
    if(Number(b) == 0){
        return "Nope";
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
    console.log(displayContent.textContent.trim(), displayContent.textContent.trim().length);

    
    if(e.target.id == "key"){

        if(currOperand.length < 8 && !isNaN(e.target.textContent) ){
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
            }

        }else if(e.target.textContent == "."){
            if(!currOperand.includes(".")){
            currOperand += ".";
            displayContent.textContent = currOperand;
            }

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
            currOperand = prevOperand;
            prevOperator = "";

        }else if(e.target.textContent == "clear"){
            displayContent.textContent = "0";
            prevOperand = "";
            currOperand = "";

        }else if(e.target.textContent == "del"){
            if(currOperand != "" && currOperand.length > 1){
                displayContent.textContent = displayContent.textContent.slice(0, -1);
                currOperand = displayContent.textContent;
            }else{
                displayContent.textContent = "0";
                currOperand = "";
            }
        }


    }

        if(displayContent.textContent == "Nope" || displayContent.textContent == "NaN"){
            prevOperand = "";
            currOperand = "";
        }

        console.log("total", prevOperand, displayContent.textContent);


});

window.addEventListener('keydown', function(e, expresssion){
    console.log(e.code);
    var displayContent = document.getElementById("display");
    var solution = 0;

    if(currOperand.length < 8 && !isNaN(e.code.charAt(e.code.length-1))){
        if(e.code == "Numpad0"){
            currOperand += "0";
            displayContent.textContent = currOperand;

        }else if(e.code == "Numpad1" || e.code == "Digit1"){
            currOperand += "1";
            displayContent.textContent = currOperand;

        }else if(e.code == "Numpad2" || e.code == "Digit2"){
            currOperand += "2";
            displayContent.textContent = currOperand;

        }else if(e.code == "Numpad3"){
            currOperand += "3";
            displayContent.textContent = currOperand;

        }else if(e.code == "Numpad4"){
            currOperand += "4";
            displayContent.textContent = currOperand;

        }else if(e.code == "Numpad5"){
            currOperand += "5";
            displayContent.textContent = currOperand;

        }else if(e.code == "Numpad6"){
            currOperand += "6";
            displayContent.textContent = currOperand;

        }else if(e.code == "Numpad7"){
            currOperand += "7";
            displayContent.textContent = currOperand;

        }else if(e.code == "Numpad8"){
            currOperand += "8";
            displayContent.textContent = currOperand;

        }else if(e.code == "Numpad9"){
            currOperand += "9";
            displayContent.textContent = currOperand;
        }

    }else if(e.code == "NumpadDecimal"){
        if(!currOperand.includes(".")){
            currOperand += ".";
            displayContent.textContent = currOperand;
        }

    }else if(e.code == "NumpadDivide"){
        prevOperand = operate(prevOperator, prevOperand, currOperand);
        displayContent.textContent = prevOperand;
        currOperand = "";
        prevOperator = "/";

    }else if(e.code == "NumpadMultiply"){
        prevOperand = operate(prevOperator, prevOperand, currOperand);
        displayContent.textContent = prevOperand;
        currOperand = "";
        prevOperator = "*";

    }else if(e.code == "NumpadAdd"){
        console.log(prevOperand, currOperand);
        prevOperand = operate(prevOperator, prevOperand, currOperand);
        displayContent.textContent = prevOperand;
        currOperand = "";
        prevOperator = "+";

    }else if(e.code == "NumpadSubtract"){
        prevOperand = operate(prevOperator, prevOperand, currOperand);
        displayContent.textContent = prevOperand;
        currOperand = "";
        prevOperator = "-";

    }else if(e.code == "NumpadEnter"){
        prevOperand = operate(prevOperator, prevOperand, currOperand);
        displayContent.textContent = prevOperand;
        currOperand = prevOperand;
        prevOperator = "";

    }else if(e.code == "Delete"){
        displayContent.textContent = "0";
        prevOperand = "";
        currOperand = "";

    }else if(e.code == "Backspace"){
        if(currOperand != "" && currOperand.length > 1){
            displayContent.textContent = displayContent.textContent.slice(0, -1);
            currOperand = displayContent.textContent;
        }else{
            displayContent.textContent = "0";
            currOperand = "";
        }
    }

    if(displayContent.textContent == "Nope" || displayContent.textContent == "NaN"){
        prevOperand = "";
        currOperand = "";
    }
    console.log("total", prevOperand, displayContent.textContent);

});