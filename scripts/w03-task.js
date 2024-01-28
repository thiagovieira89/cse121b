/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add (number1, number2){
    return number1 + number2;
}
function addNumbers(){
    let number1 = Number(document.querySelector('#add1').value);
    let number2 = Number(document.querySelector('#add2').value);
    
    return document.querySelector('#sum').value = add(number1, number2);
}

document.querySelector('#addNumbers').addEventListener('click', addNumbers);

/* Function Expression - Subtract Numbers */

function subtract (number1, number2){
    return number1 - number2;
}
function subtractNumbers(){
    let number1 = Number(document.querySelector('#subtract1').value);
    let number2 = Number(document.querySelector('#subtract2').value);
    
    return document.querySelector('#difference').value = subtract(number1, number2);
}
document.querySelector('#subtractNumbers').addEventListener('click', subtractNumbers);

/* Arrow Function - Multiply Numbers */

const Multiply = (x,y) => x * y

const multiplyNumbers = () =>{

    let factor1 = parseFloat(document.getElementById('factor1').value);
    let factor2 = parseFloat(document.getElementById('factor2').value);
    let product = Multiply(factor1, factor2);
    document.getElementById('product').value = product;
};

document.getElementById('multiplyNumbers').addEventListener('click', multiplyNumbers);

/* Open Function Use - Divide Numbers */
const divide = (x,y) => x/y

const divideNumbers = () =>{

    let dividend = parseFloat(document.getElementById('dividend').value);
    let divisor = parseFloat(document.getElementById('divisor').value);
    let quotient = divide(dividend, divisor);
    document.getElementById('quotient').value = quotient;
};

document.getElementById('divideNumbers').addEventListener('click', divideNumbers);

/* Decision Structure */
function getTotal() {

    let subTotal = parseFloat(document.getElementById('subtotal').value);

    if (document.getElementById('member').checked){
        subTotal = subTotal - subTotal * 0.2;
    }
    document.getElementById('total').textContent = `$${subTotal.toFixed(2)}`;
}
document.getElementById('getTotal').addEventListener('click', getTotal);

/* ARRAY METHODS - Functional Programming */
/* Output Source Array */
let numbersArray = [1,2,3,4,5,6,7,8,9,10,11,12,13];
document.getElementById('array').textContent = numbersArray;

/* Output Odds Only Array */
let oddNumbers = numbersArray.filter(function(number) {
    return number % 2 === 1;
});
document.getElementById('odds').textContent = oddNumbers;


/* Output Evens Only Array */
let oddNumbers1 = numbersArray.filter(function(number) {
    return number % 2 === 0;
});

document.getElementById('evens').textContent = oddNumbers1

/* Output Sum of Org. Array */
let sum = numbersArray.reduce((acumulator, element) => acumulator + element, 0);

document.getElementById('sumOfArray').textContent = sum;

/* Output Multiplied by 2 Array */
let arrayTwice = numbersArray.map(number => number * 2);

document.getElementById('multiplied').textContent = arrayTwice;

/* Output Sum of Multiplied by 2 Array */
let sumOfMultiplied = numbersArray
  .map(number => number * 2)
  .reduce((accumulator, element) => accumulator + element, 0);

document.getElementById('sumOfMultiplied').textContent = sumOfMultiplied;