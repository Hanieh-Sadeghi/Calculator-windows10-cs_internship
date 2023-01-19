const history = document.getElementById('history-memory-p1');
const memory = document.getElementById('history-memory-p2');
const list = document.getElementById('history-msg-list');
const trash = document.getElementById('material-symbols-outlined');
const eventHandler = {};
let state = 'history';

export let HistoryLog = [];
export function addHistory(result) {
    HistoryLog.push(result);
}

trash.addEventListener('click', (e) => {
    e.preventDefault();
    eventHandler.trash(state);
})