let operator = "";
let firstNumber = "";
let secondNumber = "";

let display = document.getElementById("display");

// Input and display handler
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
            firstNumber = parseInt(display.textContent);
        });
    }

    for (let i = 0; i < 10; i++) {
        if (button.id == i) {
            button.addEventListener("click", function() {
                display.textContent = display.textContent.concat(i);
                firstNumber = parseInt(display.textContent);
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
            add(a, b);
            break;
        case "-":
            subtract(a, b);
            break;
        case "*":
            multiply(a, b);
            break;
        case "/":
            divide(a, b);
            break;
    }
}