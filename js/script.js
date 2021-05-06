let operator = "";
let firstNumber = "";
let secondNumber = "";


// Input and display handler
let display = document.getElementById("display");
let buttonsArray = [...document.getElementsByClassName("button")];
buttonsArray.forEach(button => {
    if (button.id === "clear") {
        button.addEventListener("click", function() {
            display.textContent = "";
            operator = "";
            firstNumber = "";
            secondNumber = "";
        });
    } else if (button.id === "delete") {
        button.addEventListener("click", function() {
            display.textContent = display.textContent.slice(0, -1);
        });
    } else if (button.id === "add") {
        button.addEventListener("click", function() {
            operator = "+";
            firstNumber = parseInt(display.textContent);
            display.textContent = "";
            console.log(firstNumber);
        });
    } else if (button.id === "sub") {
        button.addEventListener("click", function() {
            operator = "-";
            firstNumber = parseInt(display.textContent);
            display.textContent = "";
            console.log(firstNumber);
        });
    } else if (button.id === "mul") {
        button.addEventListener("click", function() {
            operator = "*";
            firstNumber = parseInt(display.textContent);
            display.textContent = "";
            console.log(firstNumber);
        });
    } else if (button.id === "div") {
        button.addEventListener("click", function() {
            operator = "/";
            firstNumber = parseInt(display.textContent);
            display.textContent = "";
            console.log(firstNumber);
        });
    } else if (button.id === "equal") {
        button.addEventListener("click", function() {
            secondNumber = parseInt(display.textContent);
            display.textContent = operate(firstNumber, secondNumber, operator);
            console.log(secondNumber);
        });
    }

    for (let i = 0; i < 10; i++) {
        if (button.id == i) {
            button.addEventListener("click", function() {
                display.textContent = display.textContent.concat(i);
            });
        }
    }
});

// Operation function
function add(a, b) {return a + b;}

function subtract(a, b) {return a - b;}

function multiply(a, b) {return a * b;}

function divide(a, b) {return a / b;};

function operate(a, b, operator) {
    switch(operator) {
        case "+":
            return add(a, b);
        case "-":
            return subtract(a, b);
        case "*":
            return multiply(a, b);
        case "/":
            return divide(a, b);
        default:
            return;
    }
}