import *  as historyModule from './History.js'
let temp = "";
let number1 = "";
let number2 = "";
let sign = "";
let result = "";
const numbers = document.querySelectorAll(".keyboardCalculator");
let numberValue = document.querySelector("#Zero");
let boxNumbers = document.querySelector(".boxResult");
const backSpace = document.getElementById(".backSpace");
const deleteCE = document.getElementById(".CE");
const deleteAll = document.getElementById(".C");
let historyDiv = document.getElementById("historyLog");
const trash = document.getElementById('material-symbols-outlined'); 


numbers.forEach((buttons) => {
  buttons.addEventListener("click", (e) => {
    e.preventDefault();
    let signs = "+-×÷";
    let topSigns = ["X2", "X3", "√", "1/X"];
    
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
      historyModule.addHistory(result);
      historyDiv.innerHTML = "";
      for (let i = 0; i < historyModule.HistoryLog.length; i++) {
        console.log(historyModule.HistoryLog);
        historyDiv.innerHTML += `<div class="historyNumber"> ${historyModule.HistoryLog[i]}</div>`;
      }
    } else if (topSigns.includes(value)) {
      let currentValue = parseInt(numberValue.innerHTML);
      display(exponent_calculate(currentValue, value));
    } else if (value == "%") {
      let per = 2
      let temp2 = Number(temp)
      let result = percentage(temp2, per);
      display(result)
    } else if (value == "backspace") {
      temp = temp.substring(0, temp.length-1);
      display(temp);
    } else  {
      temp = temp + value;
      display(temp);
    }

    if (value == "C") {
      clearDisplay("deleteAll")

    } else if (value == "CE") {
      display("0");
      
    }
  });
});

function clearDisplay(type) {
  switch (type) {
    case "deleteAll":
      number1 = "";
      number2 = "";
      temp = "";
      display(0);
      break;

    // case "deleteCE":
    //   if (isNaN(firstResult)) {
    //     number1 = number1.slice(0, -number2.length);
    //     temp = temp.slice(0, -number2.length)

    //   }
    //   display(0);
    //   number2 = "";
    //   break;
}
}

function display(numbers) {
  const display = document.getElementById("Zero");
  display.innerHTML = numbers;
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

function percentage(number, per) {
  return (number / 100) * per;
}

function displayBox(){

}

trash.addEventListener('click',   (e)=> {
  e.preventDefault();
  historyDiv.innerHTML = '';
  })