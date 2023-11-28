let operation = '';
let numArr = [];
let numTemp = 0;
let num1 = 0;
let num2 = 0;
let ans = 0;

const display = document.querySelector('.display');
display.textContent = 0;
const numpad = document.querySelector('.numpad');
const operations = document.querySelector('.operations');
const actions = document.querySelector('.actions');

function add(a, b) { return a + b; }

function subtract(a, b) { return a - b; }

function multiply(a, b) { return a * b; }

function divide(a, b) { return a / b; }

function clear() { display.textContent = 0; }

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

operations.addEventListener('click', (e) => {
    operation = e.target.value;
    num1 = numTemp;
    numArr = [];
});

numpad.addEventListener('click', (e) => {
    numArr.push(e.target.value);
    numTemp = Number(numArr.join(''));
    display.textContent = numTemp;
});

actions.addEventListener('click', (e) => {
    const action = e.target.value;
    numArr = [];
    if (action === '=') {
        num2 = numTemp;
        ans = operate(operation, num1, num2);
        display.textContent = `${num1} ${operation} ${num2} = ${ans}`;
    }

    if (action === 'clear') {
        display.textContent = 0;
    }
});
