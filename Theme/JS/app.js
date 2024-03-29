import *  as historyModule from './History.js';
import * as memoryModule from './Memory.js';

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
const history = document.getElementById('history-1'); //History
const memory = document.getElementById('memory-p2');//Memory
const listHistory = document.getElementById('history-msg'); //list history&&
const listMemory = document.getElementById('memory-msg'); //Memory
let numberList = [];
let signList = [];
let historyLog = [];


numbers.forEach((buttons) => {
  buttons.addEventListener('click', (e) => {
    e.preventDefault();
    let signs = ' + - × ÷ ';
    let topSigns = ['sqr', 'cube', '√', '1/'];
    let value = e.target.getAttribute('value');
    let changeSign = '+/-';

    if (signs.includes(value)) {
      sign = value;
      value = ' ';
      number1 = Number(temp);
      temp = ' ';
      numberList.push(number1);
      signList.push(sign);
      clearTempBox();
      displayTempBox();

    } else if (value == '=') {
      if (temp == '') {
        numberList = [];
        signList = [];
        temp = numberValue.innerHTML;
        historyModule.addHistory(temp);
        historyDiv.innerHTML = '';
        historyLog.push(boxResult.innerHTML);
        for (let i = 0; i < historyModule.HistoryLog.length; i++) {
          historyDiv.innerHTML += `<div class='historyTemp'> ${historyLog[i]} </div> <div class='historyNumber'> ${historyModule.HistoryLog[i]} </div>`;
        }
        return;
      } else {
        number2 = Number(temp);
        numberList.push(number2);
        signList.push(value);
        let result = calculate();
        temp = result;
        display('');
        display(result);
        displayTempBox();
        historyModule.addHistory(result);
        historyDiv.innerHTML = '';
        historyLog.push(boxResult.innerHTML);
        for (let i = 0; i < historyModule.HistoryLog.length; i++) {
          historyDiv.innerHTML += `<div class='historyTemp'> ${historyLog[i]} </div> <div class='historyNumber'> ${historyModule.HistoryLog[i]} </div>`;
        }
      }
      numberList = [];
      signList = [];
      historyModule.historyTempBox();

    } else if (topSigns.includes(value)) {
      let currentValue = parseFloat(numberValue.innerHTML);

      numberList.push(currentValue);
      signList.push(value);
      display(exponent_calculate(currentValue, value));
      displayTempBox();
      historyModule.historyTempBox();

    } else if (value == '%') {
      let per = temp;
      let result = percentage(number1, per);
      numberList.push(Number(result));
      signList.push('');
      display(number1 - result);
      temp = '';
      displayTempBox();
      console.log(temp);
    } else if (value == 'backspace') {
      temp = numberValue.innerHTML.toString().substring(0, numberValue.innerHTML.length - 1);
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

history.addEventListener('click', () => {
  listHistory.classList.add('active-history');
  listHistory.classList.remove('deactivate-history');
  listMemory.classList.remove('active-memory');
  listMemory.classList.add('deactivate-memory');
});

memory.addEventListener('click', () => {
  listMemory.classList.add('active-memory');
  listMemory.classList.remove('deactivate-memory');
  listHistory.classList.remove('active-history');
  listHistory.classList.add('deactivate-history');
});


function clearDisplay(type) {
  switch (type) {
    case 'deleteAll':
      number1 = ' ';
      number2 = ' ';
      temp = ' ';
      display(0);
      break;

    case 'deleteCE':
      display(0);
      temp = ' ';
      console.log(temp)
      number2 = ' ';
      break;
  }
}

export function clearTempBox() {
  boxResult.innerHTML = '';
}

function display(numbers) {
  const display = document.getElementById('Zero');
  display.innerHTML = numbers;
}

function displayTempBox() {
  let displayBox = ' ';
  for (let i = 0; i < numberList.length; i++) {
    if (numberList[i].toString().includes('.')) {
      displayBox += `${numberList[i].toFixed(2)}  ${signList[i]} `;
    } else {
      displayBox += `${numberList[i]}  ${signList[i]} `;
    }
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
    case 'sqr': {
      result = Math.pow(number, 2);
      break;
    }
    case 'cube': {
      result = Math.pow(number, 3);
      break;
    }
    case '1/': {
      result = 1 / number;
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