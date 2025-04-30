let display = document.getElementById('display');
let currentInput = '';
let operator = '';
let firstNumber = '';

function appendNumber(num) {
    currentInput += num;
    display.value = currentInput;
}

function appendOperator(op) {
    if (currentInput !== '') {
        if (firstNumber === '') {
            firstNumber = currentInput;
            operator = op;
            currentInput = '';
        }
    }
}

function calculate() {
    if (firstNumber !== '' && currentInput !== '' && operator !== '') {
        let result;
        let num1 = parseFloat(firstNumber);
        let num2 = parseFloat(currentInput);

        switch (operator) {
            case '+':
                result = num1 + num2;
                break;
            case '-':
                result = num1 - num2;
                break;
            case '*':
                result = num1 * num2;
                break;
            case '/':
                result = num1 / num2;
                break;
        }

        display.value = result;
        firstNumber = '';
        currentInput = result.toString();
        operator = '';
    }
}

function clearDisplay() {
    display.value = '';
    currentInput = '';
    operator = '';
    firstNumber = '';
}