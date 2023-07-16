//VARIABLES DECLARATION
let firstNumber = '';
let secondNumber = '';
let operator = null;

const numberButtons = document.querySelectorAll('[data-number]');
const operatorButtons = document.querySelectorAll('[data-operator]');


const display = document.getElementById('display');
const equalButton = document.getElementById('button-equal');

//OPERATE FUNCTION
function operate(number1, operator, number2){
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