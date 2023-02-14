let mlineM3 = '';
const memoryContainer =document.getElementById('containerMemory');
export const mlineBtn = document.querySelector('.mline'); //ms m+ m- mc
const list = document.getElementById('history-msg'); //list history&&Memory
// const memory = document.getElementById('memory-p2');//Memory
const eventHandler = {};

let memoryList = [];
export function addMemory(result) {
    memoryList.push(result);
}

mlineBtn.addEventListener('click', () => {
    const visibility = memoryContainer.style.visibility;

    if (visibility == 'hidden' || visibility == '') {
        memoryContainer.style.visibility = 'visible';
    }else{
        memoryContainer.style.visibility = 'hidden';
    }
}); 



