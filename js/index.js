
const display = document.querySelector('.display');

const digitsOpers = document.querySelectorAll('.digits button, .operations button');
digitsOpers.forEach(digit => digit.addEventListener('click', digitOperPressed));


function digitOperPressed(e) {
    e.preventDefault();
    display.value += e.target.innerText;
}

const equal = document.querySelector('.eq');
equal.addEventListener('click', equalPressed);

function equalPressed(e) {
    e.preventDefault();
    display.value = eval(display.value);
}
const clear = document.querySelector('.clear');
clear.addEventListener('click', clearDisplay);

function clearDisplay(e) {
    e.preventDefault();
    display.value = '';
}