// Напиши скрипт, который реагирует на изменение значения input#font - size - control(событие input)
// и изменяет инлайн - стиль span#text обновляя свойство font - size.
// В результате при перетаскивании ползунка будет меняться размер текста.

// <input id="font-size-control" type="range" />
// <br />
// <span id="text">Абракадабра!</span>

const fontSizeRangeRef = document.querySelector('#font-size-control');
const textRef = document.querySelector('#text');

function handleInputRange(event) {
    textRef.style.fontSize = event.currentTarget.value + 'px';
}

fontSizeRangeRef.addEventListener('input', handleInputRange);