const numbers = document.querySelectorAll('.keyboardCalculator');
let test = '';
const deleteUnit = document.getElementById('.delete');
const deleteCE = document.getElementById('.CE');
const deleteAll = document.getElementById('.C');

// for(let i=0; i<numbers.length; i++){
//      numbers[i].addEventListener('click',( e)=> {
//           e.preventDefault();
//           console.log(e.target.getAttribute('value'))
//      })
// }

numbers.forEach ((buttons) => {
     buttons.addEventListener('click', (e) => {
          e.preventDefault ();
          let value = e.target.getAttribute ( 'value' ) 
          test = test + value;
          display(test) 
     })  
})

function display (numbers) {
     const display = document.getElementById ('Zero')
     display.innerHTML = numbers;
}

function clearDisplay () {
     const display = document.getElementById ('')
     display.innerHTML = ''   
}

deleteAllNumber .addEventListener()