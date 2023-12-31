let operation = '';
let numArr = [];
let numTemp = 0;
let num1 = 0;
let num2 = 0;
let ans = null;

const display = document.querySelector('.display');
const secondaryDisplay = document.querySelector('.secondary-display');
const numpad = document.querySelectorAll('.numpad > button');
const operations = document.querySelectorAll('.operations > button');
const actions = document.querySelectorAll('.actions > button');
const dec = document.querySelector('.numpad > button[value="."]');

function add(a, b) { return a + b; }

function subtract(a, b) { return a - b; }

function multiply(a, b) { return a * b; }

function divide(a, b) { return a / b; }

function ac() {
    numArr = [];
    display.textContent = 0;
    secondaryDisplay.textContent = 0;
    dec.disabled = false;
    ans = null;
}

function del() {
    numArr.pop();
    numTemp = Number(numArr.join(''));
    display.textContent = numTemp;
}

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
        dec.disabled = false;
        operation = e.target.value;
        num1 = ans || numTemp;
        numArr = [];
        secondaryDisplay.textContent = `${num1} ${operation}`;
    });
});

numpad.forEach((button) => {
    button.addEventListener('click', (e) => {
        if (e.target.value === '.') { dec.disabled = true; }
        numArr.push(e.target.value);
        numTemp = Number(numArr.join(''));
        display.textContent = numTemp;
    });
});

actions.forEach((button) => {
    button.addEventListener('click', (e) => {
        const action = e.target.value;
        if (action === '=') {
            dec.disabled = false;
            numArr = [];
            num2 = numTemp;
            ans = operate(operation, num1, num2);
            display.textContent = ans;
            secondaryDisplay.textContent = `${num1} ${operation} ${num2} = ${ans}`;
        }
        if (action === 'ac') { ac(); }
        if (action === 'del') { del(); }
    });
});
