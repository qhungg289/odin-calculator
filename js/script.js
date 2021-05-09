let firstOperator = "";
let secondOperator = "";
let firstNumber = "";
let secondNumber = "";
let result = "";
let timesClicked = 0;
let temp = "";

// Input and display handler
let display = document.getElementById("display");
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
			display.textContent = display.textContent.concat(
				button.textContent
			);
		});
	}

	for (let i = 0; i < 10; i++) {
		if (button.id == i) {
			button.addEventListener("click", function () {
				display.textContent = display.textContent.concat(i);
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
	firstNumber = Number(display.textContent);
	display.textContent = "";
	console.log(firstNumber);
	console.log("First OP");
}

function callSecondOperator(op) {
	secondOperator = op;
	secondNumber = Number(display.textContent);
	display.textContent = "";
	console.log(secondNumber);
	firstNumber = operate(firstNumber, secondNumber, firstOperator);
	firstOperator = secondOperator;
	console.log("Second OP");
	console.log(firstNumber);
}

function clearButton() {
	display.textContent = "";
	firstOperator = "";
	firstNumber = "";
	secondNumber = "";
	result = "";
	timesClicked = 0;
	console.log("Clear!");
}

function deleteButton() {
	display.textContent = display.textContent.slice(0, -1);
}

function equalButton() {
	secondNumber = Number(display.textContent);
	result = operate(
		firstNumber,
		secondNumber,
		firstOperator
	);
	display.textContent = result;
	console.log(firstNumber);
	console.log(secondNumber);
	console.log(result);
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
