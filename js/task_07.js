'use strict';
const sizeRange = document.querySelector('input#font-size-control');
const textRange = document.querySelector('span#text');
const changeTextRange = function() {
  textRange.style.fontSize = `${sizeRange.value}px`;
};

sizeRange.addEventListener('input', changeTextRange);
