
export const mline = document.querySelectorAll('.mline'); //ms m+ m- mc
const list = document.getElementById('history-msg'); //list history&&Memory
// const memory = document.getElementById('memory-p2');//Memory
const eventHandler = {};
let messages = 'There\'s no history yet';

let memoryList = [];
export function addMemory(result) {
    memoryList.push(result);
}


