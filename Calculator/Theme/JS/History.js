const history = document.getElementById('history-p1'); //History
const memory = document.getElementById('memory-p2');//Memory
const list = document.getElementById('history-msg'); //list history&&Memory


export let HistoryLog = [];
export function addHistory(result) {
    HistoryLog.push(result);
}
