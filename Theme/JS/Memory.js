import * as appModule from './app.js';
let numberValue = document.querySelector('#Zero');
const memoryContainer = document.getElementById('containerMemory');
const mlineBtn = document.querySelector('.mline'); //ms m+ m- mc
const list = document.getElementById('history-msg'); //list history&&Memory
// const memory = document.getElementById('memory-p2');//Memory
// const eventHandler = {};
const listMemory = document.getElementById('memoryLog'); //Memory



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
    }

    const visibility = memoryContainer.style.visibility;
    if (e.target.getAttribute('value') == 'MC') {
        memoryList = [];
        list.innerHTML = '';
        listMemory.innerHTML = `<p id="memoryLog" class="nohistory "> There's no memory yet </p>`
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
        displayTempMemory();
    }
    else if (e.target.getAttribute('value') == 'M-') {
        if (memoryList.length == 0) {
            memoryList.push(Number(numberValue.innerHTML));
        } else {
            memoryList[memoryList.length - 1] -= Number(numberValue.innerHTML);
        }
        displayTempMemory();
    }
    else if (e.target.getAttribute('value') == 'MS') {
        memoryList.push(Number(numberValue.innerHTML));
        displayTempMemory();
    }
    else if (e.target.getAttribute('value') == 'MR') {
        if (memoryList.length == 0) {
            numberValue.innerHTML = 0;
        } else {
            numberValue.innerHTML = memoryList[memoryList.length - 1];
        }
        appModule.clearTempBox();
    }
    console.log(memoryList);
});



export function displayTempMemory() {
    listMemory.innerHTML = ' ';
    for (let i = 0; i < memoryList.length; i++) {
        listMemory.innerHTML +=
            ` <div class ="memoryNumber"> 
                <div class = "NumberM"> ${memoryList[i]} </div>
                <div class = "spnMemory">
                <spn id="${i}" value="MC">mc </spn>
                <spn id="${i}" value="M+">m+ </spn>
                <spn id="${i}" value="M-">m- </spn>
                </div>
         </div>`
    }
    debugger;
    let memoryItemBtn = document.querySelectorAll('.spnMemory'); // spn mc m+ m-
    memoryItemBtn.addEventListener('click', (e) => {
        let index = Number(e.target.getAttribute('id'));
        let operator = e.target.getAttribute('value');
        if (operator == 'M+') {
            memoryList[index] += Number(numberValue.innerHTML);
        }
    });
}
