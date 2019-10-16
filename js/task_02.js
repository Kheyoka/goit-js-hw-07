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
ingredients.reduce((createlistOfIng, item) => {
  createlistOfIng = document.createElement('li');
  createlistOfIng + item;
  createlistOfIng.insertAdjacentHTML('afterbegin', item);
  ingredientsList.appendChild(createlistOfIng);
});
