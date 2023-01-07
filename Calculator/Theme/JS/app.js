const numbers = document.querySelectorAll(".keyboardCalculator");
let temp = "";
let number1 = "";
let number2 = "";
let sign = "";
let result = "";
let numberValue = document.querySelector("#Zero");
let boxNumbers = document.querySelector(".boxResult");
const deleteUnit = document.getElementById(".delete");
const deleteCE = document.getElementById(".CE");
const deleteAll = document.getElementById(".C");

numbers.forEach((buttons) => {
  buttons.addEventListener("click", (e) => {
    e.preventDefault();
    let signs = "+-×÷";
    let topSigns =["X2","X3","√","1/X"];
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
    } else if (topSigns.includes(value)) {
      let currentValue = parseInt(numberValue.innerHTML);
      display(exponent_calculate(currentValue, value));
    }else {
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

function exponent_calculate(number, operator) {
  let result = 0;
  switch (operator) {
    case "√": {
      result = Math.sqrt(number);
      break;
    }
    case "X2": {
      result = Math.pow(number, 2);
      break;
    }
    case "X3": {
      result = Math.pow(number, 3);
      break;
    }
    case "1/X": {
      result = number = 1 / number;
      break;
    }
  }
  return result;
}
