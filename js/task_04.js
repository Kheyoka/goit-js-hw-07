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
  return (counter.innerHTML = counterValue);
}
function increment() {
  counterValue += 1;
  return (counter.innerHTML = counterValue);
}
counterValueMinus.addEventListener('click', decrement);
counterValuePlus.addEventListener('click', increment);
