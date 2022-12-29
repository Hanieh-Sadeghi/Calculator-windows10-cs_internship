const numbers = document.querySelectorAll(".keyboardCalculator");
let temp = "";
let number1 = "";
let number2 = "";
let sign = "";
const deleteUnit = document.getElementById(".delete");
const deleteCE = document.getElementById(".CE");
const deleteAll = document.getElementById(".C");

numbers.forEach((buttons) => {
  buttons.addEventListener("click", (e) => {
    e.preventDefault();
    let signs = "+-×÷";

    let value = e.target.getAttribute("value");

    if (signs.includes(value)) {
      sign = value;
      value = "";
      number1 = Number(temp);
      temp = "";
    } else if (value == "=") {
      number2 = Number(temp);
      temp = "";
      let result = calculate(number1, number2, sign);
      display("");
      display(result);
    } else {
      temp = temp + value;
      display(temp);
    }

    if (value == "C") {
      display("0");
    } else if (value == "backspace") {
      display("-1");
    } else if (value == "CE") {
      display("0");
    }
  });
});

function display(numbers) {
  const display = document.getElementById("Zero");
  display.innerHTML = numbers;
}

function clearDisplay() {
  const display = document.getElementById(".deleteUnit");
  display.innerHTML = " ";
}

let result = "";
function calculate(firstNumber, secondNumber, operand) {
  result = 0;
  switch (operand) {
    case "+":
      result = firstNumber + secondNumber;
      break;
    case "-":
      result = firstNumber - secondNumber;
      break;
    case "×":
      result = firstNumber * secondNumber;
      break;
    case "÷":
      result = firstNumber / secondNumber;
      break;
  }

  return result;
}
