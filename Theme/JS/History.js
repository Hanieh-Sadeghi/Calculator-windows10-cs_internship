const history = document.getElementById('history-1'); //History
let historyNumber = document.getElementsByClassName('historyNumber');

export let HistoryLog = [];
export function addHistory(result) {
  HistoryLog.push(result);
}

export function historyTempBox() {
 let historyBox = '';
  for (let i = 0; i < historyBox.length; i++) {
    historyBox += ` ${numberList [i]}  ${signList [i]} `;
  }
}
