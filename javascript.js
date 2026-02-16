function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return num1 / num2;
}

function operate(num1, num2, operator) {
    if (operator == "+") {
        return add(num1, num2);
    } else if (operator == "-") {
        return subtract(num1, num2);
    } else if (operator == "*") {
        return multiply(num1, num2);
    } else if (operator == "/") {
        return divide(num1, num2);
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
    const clearButton = document.querySelector("#Clear");
    clearButton.addEventListener("click", () => {
        display.textContent = "";
    })
}
displayChange();

