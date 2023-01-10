const numbers = document.querySelectorAll(".keyboardCalculator");
let temp = "";
let number1 = "";
let number2 = "";
let sign = "";
let result = "";
let numberValue = document.querySelector("#Zero");
let boxNumbers = document.querySelector(".boxResult");
const backSpace = document.getElementById(".backSpace");
const deleteCE = document.getElementById(".CE");
const deleteAll = document.getElementById(".C");


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
    } else if (topSigns.includes(value)) {
      let currentValue = parseInt(numberValue.innerHTML);
      display(exponent_calculate(currentValue, value));
    } else if (value == "%") {
      // console.log('haha')
    } else {
      temp = temp + value;
      display(temp);
    }
    
    // if (value == "C") {
      //   display("0");
      
      // } else if (value == "backspace") {
        //   display();
        
        // } else if (value == "CE") {
          //   display("0");
          // }
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

    case "deleteCE":
      if(isNaN(firstResult)){
        number1 = number1.slice(0, -number2.length);
        temp = temp.slice(0, -number2.length)
        
      }
      display(0);
         number2= "";
      break;

    case "backSpace":
      if (number2 != "" || !isNaN(number1)) {
        number1 = number1.slice(0, -1);
        temp = temp.slice(0, -1);
        display(number1)
        if (isNaN(number1)) {
          number2 = number2.slice(0, -1)
          display(number2);
        }
      }

      break;
  }
}

function display(numbers) {
  const display = document.getElementById("Zero");
  display.innerHTML = numbers;
}

// function clearDisplay() {
//   const display = document.getElementById(".deleteUnit");
//   substr(0, deleteUnit.length - 1)
//   display.innerHTML = " ";
// }

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

