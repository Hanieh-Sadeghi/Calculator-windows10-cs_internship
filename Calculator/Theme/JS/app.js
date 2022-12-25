const numbers = document.querySelectorAll('.keyboardCalculator');
let temp = ''
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
          temp = temp + value;
          display(temp) 
          if( value == 'C'){
               display("0")
          }else if( value == 'backspace'){
               display("-1")
          } else if (value == 'CE'){
               display("0")
          }
          let signs  =  '+-×÷'
        
         if(signs.includes(value)){ 
              number1 = temp;
              display(number1)
              temp = '';
              sign = signs;
             console.log(number1)
     } else if(value== '=') {
          number2 = temp;
          display(number2)
          temp = '';
          console.log(number1)
          typeof
          console.log(number2)
          let result = Operation(number1, number2, signs );
          console.log(result)
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
     result = ' ' ;
     // switch (operand){
     //      case '+' :     result = firstNumber + secondNumber  ;  break;
     //      case '-' :      result = firstNumber -  secondNumber ;  break;
     //      case '*' :      result = firstNumber * secondNumber ; break;
     //      case '/' :      result = firstNumber /  secondNumber ;  break;
     // }
     result = firstNumber + secondNumber

     return result;
}
