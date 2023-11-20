/*В HTML есть список категорий ul#categories.
Напиши скрипт, который выполнит следующие операции.
Посчитает и выведет в консоль количество категорий в ul#categories, то есть элементов li.item. Получится 'В списке 3 категории.'.
Для каждого элемента li.item в списке ul#categories, найдет и выведет в консоль текст заголовка элемента(тега h2)
и количество элементов в категории(всех вложенных в него элементов li).
Например для первой категории получится:
Категория: Животные
Количество элементов: 4*/

const ulRef = document.querySelector('ul#categories').children.length;
 
console.log(`В списке ${ulRef} категории.`);

const ulItemsRefs = document.querySelectorAll("#categories li.item");

ulItemsRefs.forEach(item => {
    console.log(`Категория: ${item.firstElementChild.textContent}`);
    console.log(`Количество элементов: ${item.lastElementChild.children.length}`);
    }
)