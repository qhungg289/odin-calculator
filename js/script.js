let firstOperator = "";
let secondOperator = "";
let firstNumber = "";
let secondNumber = "";
let result = "";
let timesClicked = 0;

// Input and display handler
let mainDisplay = document.getElementById("main-display");
let secondDisplay = document.getElementById("second-display");
let buttonsArray = [...document.getElementsByClassName("button")];
buttonsArray.forEach((button) => {
	if (button.id === "clear") {
		button.addEventListener("click", function () {
			clearButton();
		});
	} else if (button.id === "delete") {
		button.addEventListener("click", function () {
			deleteButton();
		});
	} else if (button.id === "add") {
		button.addEventListener("click", function () {
			callOperator("+");
		});
	} else if (button.id === "sub") {
		button.addEventListener("click", function () {
			callOperator("-");
		});
	} else if (button.id === "mul") {
		button.addEventListener("click", function () {
			callOperator("*");
		});
	} else if (button.id === "div") {
		button.addEventListener("click", function () {
			callOperator("/");
		});
	} else if (button.id === "equal") {
		button.addEventListener("click", function () {
			equalButton();
		});
	} else if (button.id === "decimal") {
		button.addEventListener("click", function () {
			if (
				mainDisplay.textContent == "" ||
				mainDisplay.textContent == firstNumber ||
				mainDisplay.textContent == secondNumber
			) {
				mainDisplay.textContent = mainDisplay.textContent.concat("0");
				mainDisplay.textContent = mainDisplay.textContent.concat(
					button.textContent
				);
			} else if (!mainDisplay.textContent.includes(".")) {
				mainDisplay.textContent = mainDisplay.textContent.concat(
					button.textContent
				);
			}
		});
	}

	for (let i = 0; i < 10; i++) {
		if (button.id == i) {
			button.addEventListener("click", function () {
				mainDisplay.textContent = mainDisplay.textContent.concat(i);
			});
		}
	}
});

function callOperator(op) {
	timesClicked++;
	if (timesClicked > 1) {
		callSecondOperator(op);
	} else {
		callFirstOperator(op);
	}
}

function callFirstOperator(op) {
	firstOperator = op;
	firstNumber = Number(mainDisplay.textContent);
	mainDisplay.textContent = "";
}

function callSecondOperator(op) {
	secondOperator = op;
	secondNumber = Number(mainDisplay.textContent);
	mainDisplay.textContent = "";
	firstNumber = operate(firstNumber, secondNumber, firstOperator);
	secondDisplay.textContent = firstNumber;
	firstOperator = secondOperator;
}

function clearButton() {
	mainDisplay.textContent = "";
	secondDisplay.textContent = 0;
	firstOperator = "";
	firstNumber = "";
	secondNumber = "";
	result = "";
	timesClicked = 0;
}

function deleteButton() {
	mainDisplay.textContent = mainDisplay.textContent.slice(0, -1);
}

function equalButton() {
	secondNumber = Number(mainDisplay.textContent);
	result = operate(firstNumber, secondNumber, firstOperator);
	mainDisplay.textContent = result;
	secondDisplay.textContent = 0;
	timesClicked = 0;
}

// Operation function
function add(a, b) {
	return Math.round((a + b) * 100) / 100;
}

function subtract(a, b) {
	return Math.round((a - b) * 100) / 100;
}

function multiply(a, b) {
	return Math.round(a * b * 100) / 100;
}

function divide(a, b) {
	if (b === 0) return "ERROR";
	return Math.round((a / b) * 100) / 100;
}

function operate(a, b, operator) {
	switch (operator) {
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
