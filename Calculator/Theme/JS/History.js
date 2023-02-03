const history = document.getElementById('history-p1'); //History
const memory = document.getElementById('memory-p2');//Memory
const list = document.getElementById('history-msg'); //list history&&Memory
let historyNumber =document.getElementsByClassName('historyNumber');

export let HistoryLog = [];
export function addHistory(result) {
    HistoryLog.push(result);
}

export function historyTempBox(){
    switch (arguments.length) {
        case 2: {
          let historyBox = `${arguments[0]} ${arguments[1]}`; //backtick
          historyNumber.innerHTML = historyBox ;
          break;
        }
        case 4: {
          let historyBox  = `${arguments[0]}  ${arguments[1]} ${arguments[2]} ${arguments[3]}`;
          historyNumber.innerHTML = historyBox ;
          break;
        }
      }
}
