function add(a, num2) { return a + num2; }

function subtract(a, b) { return a - b; }

function multiply(a, b) { return a * b; }

function divide(a, b) { return a / b; }

function operate(operator, a, b) {
    switch (operator) {
    case '+':
        return add(a, b);
    case '-':
        return subtract(a, b);
    case '*':
        return multiply(a, b);
    case '/':
        return divide(a, b);
    default:
        return 'Invalid operation';
    }
}

let operation;
const numArr = [];
let num = 0;

const display = document.querySelector('.display');
display.textContent = num;
const numpad = document.querySelector('.numpad');
const operations = document.querySelector('.operations');

operations.addEventListener('click', (e) => {
   console.log(e.target.value);
});

numpad.addEventListener('click', (e) => {
    numArr.push(e.target.value);
    num = Number(numArr.join(''));
    display.textContent = num;
});

