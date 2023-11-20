// Счетчик состоит из спана и кнопок, которые должны увеличивать и уменьшать значение счетчика на 1.

// Создай переменную counterValue в которой будет хранится текущее значение счетчика.
// Создай функции increment и decrement для увеличения и уменьшения значения счетчика
// Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса
  

// <div id="counter">
//   <button type="button" data-action="decrement">-1</button>
//   <span id="value">0</span>
//   <button type="button" data-action="increment">+1</button>
// </div>

const counterPlusRef = document.querySelector("[data-action=increment]");
const counterMinusRef = document.querySelector("[data-action=decrement]");
let counterSpanRef = document.querySelector("#value");

let currentValue = 0;
const increment = () => {
  return (counterSpanRef.textContent = currentValue += 1);
};
const decrement = () => {
  return (counterSpanRef.textContent = currentValue -= 1);
};
counterPlusRef.addEventListener("click", increment);
counterMinusRef.addEventListener("click", decrement);