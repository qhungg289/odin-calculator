let operator = "";
let firstNumber = "";
let secondNumber = "";

// Input and display handler
let display = document.getElementById("display");
let buttonsArray = [...document.getElementsByClassName("button")];
buttonsArray.forEach((button) => {
	if (button.id === "clear") {
		button.addEventListener("click", function () {
			display.textContent = "";
			operator = "";
			firstNumber = "";
			secondNumber = "";
		});
	} else if (button.id === "delete") {
		button.addEventListener("click", function () {
			display.textContent = display.textContent.slice(0, -1);
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
			secondNumber = Number(display.textContent);

			if (
				(secondNumber === 0 && operator === "/") ||
				secondNumber === "" ||
				operator === ""
			) {
				display.textContent = "ERROR!";
			} else {
				display.textContent = operate(
					firstNumber,
					secondNumber,
					operator
				);
			}

			console.log(secondNumber);
		});
	} else if (button.id === "decimal") {
        button.addEventListener("click", function() {
            display.textContent = display.textContent.concat(button.textContent);
        });
    }

	for (let i = 0; i < 10; i++) {
		if (button.id == i) {
			button.addEventListener("click", function () {
				display.textContent = display.textContent.concat(i);
			});
		}
	}

	function callOperator(op) {
		operator = op;
		firstNumber = Number(display.textContent);
		display.textContent = "";
		console.log(firstNumber);
	}
});

// Operation function
function add(a, b) {
	return Math.round((a + b) * 100) / 100;
}

function subtract(a, b) {
	return Math.round((a - b) * 100) / 100;
}

function multiply(a, b) {
	return Math.round((a * b) * 100) / 100;
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
