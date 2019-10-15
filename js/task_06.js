'use strict';

// <input
//   type="text"
//   id="validation-input"
//   data-length="6"
//   placeholder="Введи 6 символов"
// />

const validationInput = document.querySelector('#validation-input');
const validationInputLength = validationInput.getAttribute('data-length');
const inputValidation = function() {
  if (validationInput.value.length === Number(validationInputLength)) {
    validationInput.classList.add('valid');
    validationInput.classList.replace('invalid', 'valid');
  } else {
    validationInput.classList.add('invalid');
    validationInput.classList.replace('valid', 'invalid');
  }
};

validationInput.addEventListener('blur', inputValidation);
