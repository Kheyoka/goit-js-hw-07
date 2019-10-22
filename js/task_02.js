'use strict';

const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];
const ingredientsList = document.querySelector('#ingredients');
const res = ingredients.map(el => {
  const li = document.createElement('li');
  li.textContent = el;
  return li;
});
ingredientsList.append(...res);
