'use strict';

const counter = document.querySelector('#value');
const counterValueMinus = document.querySelector(
  'button[data-action="decrement"]',
);
const counterValuePlus = document.querySelector(
  'button[data-action="increment"]',
);
let counterValue = 0;
function decrement() {
  counterValue -= 1;
}
function increment() {
  counterValue += 1;
}
counterValueMinus.addEventListener('click', decrement);
counterValuePlus.addEventListener('click', increment);
