const history = document.getElementById('history-1'); //History
const memory = document.getElementById('memory-p2');//Memory
const list = document.getElementById('history-msg'); //list history&&Memory
let historyNumber = document.getElementsByClassName('historyNumber');

export let HistoryLog = [];
export function addHistory(result) {
  HistoryLog.push(result);
}

export function historyTempBox() {
 let historyBox = '';
  for (let i = 0; i < historyBox.length; i++) {
    historyBox += `${numberList[i]} ${signList[i]} `;
  }
}
