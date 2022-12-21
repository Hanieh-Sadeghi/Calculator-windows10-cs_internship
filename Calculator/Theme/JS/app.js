const numbers = document.querySelectorAll('.keyboardCalculator');
let number1 = '';
let number2 = '';
let sign = '';
const deleteUnit = document.getElementById('.delete');
const deleteCE = document.getElementById('.CE');
const deleteAll = document.getElementById('.C');

numbers.forEach ((buttons) => {
     buttons.addEventListener('click', (e) => {
          e.preventDefault ();
          let value = e.target.getAttribute ( 'value' ) 
          number1 = number1 + value;
          display(number1) 
          
          if( value == 'C'){
               display("0")
          }else if( value == 'backspace'){
               display("-1")
          } else if (value == 'CE'){
               display("0")
          }else if (input == number1){

          }
     })  
})

function display (numbers) {
     const display = document.getElementById ('Zero')
     display.innerHTML = numbers;
}

function clearDisplay () {
     const display = document.getElementById ('.deleteUnit')
     display.innerHTML = ' '   ;
}

function Operation(firstNumber, secondNumber, operand) {
     returt = 0 ;
     switch (operand){
          case '+' :     result = firstNumber + secondNumber  ;  break;
          case '-' :      result = firstNumber -  secondNumber ;  break;
          case '*' :      result = firstNumber * secondNumber ; break;
          case '/' :      result = firstNumber /  secondNumber ;  break;
     }
     
     return result;
 }
