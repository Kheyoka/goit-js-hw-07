'use strict';

const inputName = document.querySelector('#name-input');
const outputName = document.querySelector('#name-output');
const typeName = function(event) {
  outputName.textContent = event.target.value
    ? event.target.value
    : 'незнакомец';
};

inputName.addEventListener('input', typeName);
