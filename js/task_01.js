'use strict';

const categoriesQuantityItems = document.querySelectorAll('.item');
console.log(`В списке ${categoriesQuantityItems.length} категории`);

categoriesQuantityItems.forEach(item =>
  console.log(
    `Категория: ${item.children[0].textContent} 
    Количество элементов: ${item.children[1].children.length}`,
  ),
);
