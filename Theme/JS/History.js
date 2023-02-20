const history = document.getElementById('history-1'); //History
let historyNumber = document.getElementsByClassName('historyNumber');

export let HistoryLog = [];
export function addHistory(result) {
  HistoryLog.push(result);
}

export function historyTempBox() {
  let historyBox = '';
  for (let i = 0; i < historyBox.length; i++) {
    historyBox += ` ${numberList[i]}  ${signList[i]} `;
  }
}

//
let memoryOrng = document.getElementById('memory-p2');
let historyOrng = document.getElementById('history-1');

memoryOrng.addEventListener('click', function () {
  historyOrng.classList.remove('underline-active');
  memoryOrng.classList.add('underline-active');
  
});

historyOrng.addEventListener('click', function () {
  memoryOrng.classList.remove('underline-active');
  historyOrng.classList.add('underline-active');
});