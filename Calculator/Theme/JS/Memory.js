
export const mline = document.querySelectorAll('.mline'); //ms m+ m- mc
const list = document.getElementById('history-msg'); //list history&&Memory
const memory = document.getElementById('memory-p2');//Memory
const eventHandler = {};
let messages = 'There\'s no history yet';
let memoryList = [];


export function addMemory(result) {
    memoryList.push(result);
}

function addEventListener(event, handler) {
    eventHandler[event] = handler;
}

function creatltemMemory(element) {
    const divTag1 = create('div');
    const divTag2 = create('div');
    const divTag3 = create('div')
    const spanTag1 = create('span');
    const spanTag2 = create('span');
    const spanTag3 = create('span');
    const li = create('li');

    divTag1.innerHTML = element.number1;
    divTag1.classList.add('memory-p2');
}

// export function displayMemory() {
//     memory.innerHTML = '';
//     for (let i = 0; i < memoryList.length; i++) {
//         memory.innerHTML += `${memoryList[i]} `;
//     }
// }
