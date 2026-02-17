function add(firstNumber, secondNumber) {
    return firstNumber + secondNumber;
}

function subtract(firstNumber, secondNumber) {
    return firstNumber - secondNumber;
}

function multiply(firstNumber, secondNumber) {
    return firstNumber * secondNumber;
}

function divide(firstNumber, secondNumber) {
    return firstNumber / secondNumber;
}


let firstNumber = null;
let secondNumber = null;
let operator = null;

function operate(firstNumber, secondNumber, operator) {
    if (operator == "+") {
        return add(firstNumber, secondNumber);
    } else if (operator == "-") {
        return subtract(firstNumber, secondNumber);
    } else if (operator == "*") {
        return multiply(firstNumber, secondNumber);
    } else if (operator == "/") {
        return divide(firstNumber, secondNumber);
    }
}

function displayChange() {
    const buttons = document.querySelectorAll("button");
    const display = document.querySelector(".Display");
    let currentNumber = "";
    buttons.forEach((button) => {
        button.addEventListener("click", () => {
            // Only handle digit buttons (0-9)
            if (!isNaN(button.textContent)) {
                currentNumber += button.textContent;
                display.textContent = currentNumber;
            }
        });
    });

    const operatorButtons = document.querySelectorAll(".Operator");
    operatorButtons.forEach((button) => {
        button.addEventListener("click", () => {
            if (firstNumber === null) {
                firstNumber = currentNumber;
            } else if (operator) {
                secondNumber = currentNumber;
                firstNumber = operate(Number(firstNumber), Number(secondNumber), operator);
                display.textContent = firstNumber;
            }
            operator = button.textContent;
            currentNumber = "";
        });
    });
    const equalsButton = document.querySelector("#Equals");
    equalsButton.addEventListener("click", () => {
        if (firstNumber === null) {
            firstNumber = currentNumber;
        } else if (operator) {
        secondNumber = currentNumber;
        const equalsOperation = operate(Number(firstNumber), Number(secondNumber), operator);
        display.textContent = equalsOperation;
        firstNumber = equalsOperation;
        }
        currentNumber = "";
    });

    const clearButton = document.querySelector("#Clear");
    clearButton.addEventListener("click", () => {
        display.textContent = "";
        firstNumber = null;
        secondNumber = null;
        currentNumber = null;
    })
}
displayChange();

