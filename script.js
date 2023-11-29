let operation = '';
let numArr = [];
let numTemp = 0;
let num1 = 0;
let num2 = 0;
let ans = 0;

const display = document.querySelector('.display');
const secondaryDisplay = document.querySelector('.secondary-display');
display.textContent = 0;
const numpad = document.querySelectorAll('.numpad > button');
const operations = document.querySelectorAll('.operations > button');
const actions = document.querySelectorAll('.actions > button');

function add(a, b) { return a + b; }

function subtract(a, b) { return a - b; }

function multiply(a, b) { return a * b; }

function divide(a, b) { return a / b; }

function ac() { display.textContent = 0; }

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

operations.forEach((button) => {
    button.addEventListener('click', (e) => {
        operation = e.target.value;
        num1 = numTemp;
        numArr = [];
    });
});

numpad.forEach((button) => {
    button.addEventListener('click', (e) => {
        numArr.push(e.target.value);
        numTemp = Number(numArr.join(''));
        display.textContent = numTemp;
    });
});

actions.forEach((button) => {
    button.addEventListener('click', (e) => {
        const action = e.target.value;
        numArr = [];
        if (action === '=') {
            num2 = numTemp;
            ans = operate(operation, num1, num2);
            display.textContent = `${num1} ${operation} ${num2} = ${ans}`;
        }

        if (action === 'ac') {
            ac();
        }
    });
});
