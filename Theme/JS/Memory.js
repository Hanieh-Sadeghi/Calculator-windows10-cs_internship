let numberValue = document.querySelector('#Zero');
const memoryContainer = document.getElementById('containerMemory');
const mlineBtn = document.querySelector('.mline'); //ms m+ m- mc
const list = document.getElementById('history-msg'); //list history&&Memory
// const memory = document.getElementById('memory-p2');//Memory
const eventHandler = {};
const listMemory = document.getElementById('memory-msg'); //Memory

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
        displayTemoMemory(269013399999)
    }
    else if (e.target.getAttribute('value') == 'MR') {
        if (memoryList.length == 0) {
            numberValue.innerHTML = 0;
        }

    }

    console.log(memoryList);
});



export function displayTemoMemory(number) {
    console.log('navid')
    let memoryList = ' ';
    for (let i = 0; i < memoryList.length; i++);
    listMemory.innerHTML = `<p id="memoryLog" class="nohistory ">There's no history yet</p>
    <div class ="memoryNumber"> 
        <div class = "NumberM"> ${number} </div>
            <div class = "spnMemory">
            <spn>mc </spn>
            <spn>m+ </spn>
            <spn>m- </spn>
            </div>
     </div>
    <button id="material-symbols-outlined" class="material-symbols-outlined"> delete</button>`

}
