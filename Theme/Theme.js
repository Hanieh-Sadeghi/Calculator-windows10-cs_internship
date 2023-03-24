
let  root =  document.querySelector ('html');
let menu = document.querySelector('.burger');

menu.addEventListener('click', function () {
    console.log('burger');
    if ( root .getAttribute ('data-theme') === 'theme-container') {
        root .setAttribute ('data-theme' , 'black');
    } else if ( root .getAttribute('data-theme') === 'black'){
        root.setAttribute('data-theme' , 'blue');
    }else if ( root .getAttribute('data-theme') === 'blue'){
        root.setAttribute('data-theme' , 'purple');
    }else if ( root .getAttribute('data-theme') === 'purple'){
        root.setAttribute('data-theme' , 'green');
    }else if ( root .getAttribute('data-theme') === 'green'){
        root.setAttribute('data-theme' , 'theme-container');
    }
})

