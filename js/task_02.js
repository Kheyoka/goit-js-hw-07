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
ingredients.map(item => {
  let createlistOfIng = document.createElement('li');
  createlistOfIng.insertAdjacentHTML('beforeend', item);
  ingredientsList.appendChild(createlistOfIng);
});
