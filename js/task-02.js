// В HTML есть пустой список ul#ingredients.

//<ul id="ingredients"></ul>

// В JS есть массив строк.

// Напиши скрипт, который для каждого элемента массива ingredients создаст отдельный li,
//   после чего вставит все li за одну операцию в список ul.ingredients.
// Для создания DOM - узлов используй document.createElement().

const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ingredientsRef = document.querySelector('#ingredients');

const makeIngredientsItems = items => {
  return items.map(item => {
    const itemEl = document.createElement('li');
    itemEl.classList.add('item');
    itemEl.textContent = item;
    
    return itemEl;
  });
};

const elements = makeIngredientsItems(ingredients);
ingredientsRef.append(...elements);

console.log(ingredientsRef);