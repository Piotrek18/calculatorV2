//VARIABLES DECLARATION
let firstNumber = '';
let secondNumber = '';
let operator = null;

const numberButtons = document.querySelectorAll('[data-number]');
const operatorButtons = document.querySelectorAll('[data-operator]');
const powerButton = document.getElementById('button-power');
/*<button id="button-clear" class="operate-buttons">cl</button>
<button id="button-backspace" class="operate-buttons">bc</button>*/
const display = document.getElementById('display');
const equalButton = document.getElementById('button-equal');

numberButtons.forEach((button) => {
    button.addEventListener('click', () => appendNumber(button.textContent));
  });

operatorButtons.forEach((button) => {
    button.addEventListener('click', () => setOperator(button.textContent));
  });
powerButton.addEventListener('click', calculatePower);
equalButton.addEventListener('click', calculateResult);

function appendNumber(number){
    display.textContent += number;
    };


function setOperator(selectedOperator){
    if(operator !== null) {
        calculateResult();
    }
    firstNumber = display.textContent
    console.log('first num :' + firstNumber);
    operator = selectedOperator;
    display.textContent = '';
}

function calculateResult(){
    if(firstNumber === ''|| operator === null || display.textContent === ''){
        return;
    }
    secondNumber = display.textContent;
    console.log('second num :' + secondNumber);
    const result = operate(firstNumber, operator, secondNumber);
    display.textContent = result;
    console.log('result: ' + result);
    resetCalculation();
}

function resetCalculation() {
    firstNumber = '';
    secondNumber = '';
    operator = null;
  }

function calculatePower() {
    const number = parseFloat(display.textContent);
    const result = Math.pow(number, 2);
    display.textContent = result;
}

//OPERATE FUNCTION
function operate(number1, operator, number2){
    number1 = Number(number1);
    number2 = Number(number2);

    if(operator === "+"){
        return add(number1,number2);
    }else if(operator === "-"){
        return subtract(number1,number2);
    }else if(operator === "*"){
        return multiply(number1,number2);
    }else if(operator === "/"){
        if(number2 === 0){
            return null;
        }else{
            return divide(number1,number2);
        }
    }else{
        return null;
    }
}

//MATH OPERATIONS FUNCIONS 
function add(number1 ,number2){
    return number1 + number2;
};

function subtract(number1 ,number2){
    return number1 - number2;
};

function multiply(number1 ,number2){
    return number1 * number2;
};

function divide(number1 ,number2){
    return number1 / number2;
};