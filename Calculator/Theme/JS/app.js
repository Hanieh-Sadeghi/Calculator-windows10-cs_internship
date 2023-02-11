import *  as historyModule from './History.js'
import * as  memoryModule from './Memory.js'

let temp = '';
let number1 = '';
let number2 = '';
let sign = '';
let result = '';
let numberValue = document.querySelector('#Zero');
let boxResult = document.querySelector('.boxResult');
let historyDiv = document.getElementById('historyLog');
const numbers = document.querySelectorAll('.keyboardCalculator');
const deleteCE = document.getElementById('.CE');
const deleteAll = document.getElementById('.C');
const trash = document.getElementById('material-symbols-outlined');
let numberList = [];
let signList = [];
let historyLog = [];

numbers.forEach((buttons) => {
  buttons.addEventListener('click', (e) => {
    e.preventDefault();
    let signs = '+-×÷';
    let topSigns = ['X2', 'X3', '√', '1/X'];
    let value = e.target.getAttribute('value');
    let changeSign = '+/-';

    if (signs.includes(value)) {
      sign = value;
      value = '';
      number1 = Number(temp);
      temp = '';
      numberList.push(number1);
      signList.push(sign);
      displayTempBox();

    } else if (value == '=') {
      number2 = Number(temp);
      numberList.push(number2);
      signList.push(value);
      let result = calculate();
      temp = result;
      display(' ');
      display(result);
      displayTempBox();
      historyModule.addHistory(result);
      historyDiv.innerHTML = '';
      historyLog.push(boxResult.innerHTML);
      for (let i = 0; i < historyModule.HistoryLog.length; i++) {
        historyDiv.innerHTML += `<div class='historyTemp'>${historyLog[i]}</div> <div class='historyNumber'> ${historyModule.HistoryLog[i]}</div>`;
      }
      numberList = [];
      signList = [];
      historyModule.historyTempBox();

    } else if (topSigns.includes(value)) {
      let currentValue = parseInt(numberValue.innerHTML);
      numberList.push(currentValue);
      signList.push(value);
      display(exponent_calculate(currentValue, value));
      displayTempBox()
      historyModule.historyTempBox();

    } else if (value == '%') {
      let per = temp;
      let result = percentage(number1, per);
      numberList.push(Number(per));
      signList.push(value);
      display(number1 - result);
      displayTempBox();

    } else if (value == 'backspace') {
      temp = temp.substring(0, temp.length - 1);
      if (temp == '') {
        display(0)
      } else {
        display(temp);
      }
    } else if (value == changeSign) {
      negative(Number(numberValue.innerHTML));
      display(numberValue.innerHTML);
    } else {
      if (value === '.' && temp.includes('.')) return;
      temp = temp + value;
      display(temp);
    }

    if (value == 'C') {
      clearDisplay('deleteAll');
      clearTempBox();
    }
    else if (value == 'CE') {
      clearDisplay('deleteCE');
      // clearTempBox();
    }
  });
});

function clearDisplay(type) {
  switch (type) {
    case 'deleteAll':
      number1 = '';
      number2 = '';
      temp = '';
      display(0);
      break;

    case 'deleteCE':
      display(0);
      temp = '';
      console.log(temp)
      number2 = '';
      break;
  }
}

function clearTempBox() {
  boxResult.innerHTML = '';
}

function display(numbers) {
  const display = document.getElementById('Zero');
  display.innerHTML = numbers;
}

function displayTempBox() {
  let displayBox = '';
  for (let i = 0; i < numberList.length; i++) {
    displayBox += `${numberList[i]} ${signList[i]}`;
  }
  boxResult.innerHTML = displayBox;
}

function calculate() {
  result = numberList[0];
  for (let i = 0; i < numberList.length - 1; i++) {
    let currentSign = signList[i];
    switch (currentSign) {
      case '+':
        result += numberList[i + 1];
        break;
      case '-':
        result -= numberList[i + 1];
        break;
      case '×':
        result *= numberList[i + 1];
        break;
      case '÷':
        result /= numberList[i + 1];
        break;
    }
  }
  return result;
}

function exponent_calculate(number, operator) {
  let result = 0;
  switch (operator) {
    case '√': {
      result = Math.sqrt(number);
      break;
    }
    case 'X2': {
      result = Math.pow(number, 2);
      break;
    }
    case 'X3': {
      result = Math.pow(number, 3);
      break;
    }
    case '1/X': {
      result = number = 1 / number;
      break;
    }
  }
  return result;
}

function percentage(number, per) {
  return (number * per) / 100;
}

trash.addEventListener('click', (e) => {
  e.preventDefault();
  historyDiv.innerHTML = '';
})

function negative(number) {
  numberValue.innerHTML = number * -1;
  temp = numberValue.innerHTML;
}

// read array in javascript

function readArrayNumber() {
  for (let i = 0; i < numberList.length; i++) {
    console.log(numberList[i]);
  }
}