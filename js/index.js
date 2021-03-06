
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

const xPow = document.querySelector('.pow');
xPow.addEventListener('click', powFunc);

function powFunc(e) {
    e.preventDefault();
    display.value = eval(Math.pow(display.value, 2));
}

const xSqrt = document.querySelector('.sqrt');
xSqrt.addEventListener('click', sqrtFunc);

function sqrtFunc(e) {
    e.preventDefault();
    display.value = eval(Math.sqrt(display.value));
}


