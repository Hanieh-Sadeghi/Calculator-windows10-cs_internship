let numberValue = document.querySelector('#Zero');
const memoryContainer = document.getElementById('containerMemory');
export const mlineBtn = document.querySelector('.mline'); //ms m+ m- mc
const list = document.getElementById('history-msg'); //list history&&Memory
// const memory = document.getElementById('memory-p2');//Memory
const eventHandler = {};

let memoryList = [];
export function addMemory(result) {
    memoryList.push(result);
}
window.addEventListener('resize', resizeCalculateWindow);
function resizeCalculateWindow() {
    if (window.innerWidth > 500) {
        memoryContainer.style.visibility = 'hidden';
    }
}
mlineBtn.addEventListener('click', (e) => {
    if (window.innerWidth > 500) {
        memoryContainer.style.visibility = 'hidden';
    } else {
        const visibility = memoryContainer.style.visibility;
        if (e.target.getAttribute('value') == 'MC') {
            memoryList = [];
            list.innerHTML = '';
        } else if (e.target.getAttribute('value') == 'M') {
            {
                if (visibility == 'hidden' || visibility == '') {
                    memoryContainer.style.visibility = 'visible';
                } else {
                    memoryContainer.style.visibility = 'hidden';

                }
            }
        }
        else if (e.target.getAttribute('value') == 'M+') {
            if (memoryList.length == 0) {
                memoryList.push(Number(numberValue.innerHTML));
            } else {
                memoryList[memoryList.length - 1] += Number(numberValue.innerHTML);
            }
        }
        else if (e.target.getAttribute('value') == 'M-') {
            if (memoryList.length == 0) {
                memoryList.push(Number(numberValue.innerHTML));
            } else {
                memoryList[memoryList.length - 1] -= Number(numberValue.innerHTML);
            }
        }
        else if (e.target.getAttribute('value') == 'MS') {
            memoryList.push(Number(numberValue.innerHTML));
        }
        console.log(memoryList);
    }
});