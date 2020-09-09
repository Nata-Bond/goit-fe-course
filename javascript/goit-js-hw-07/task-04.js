//Счетчик состоит из спана и кнопок, которые должны увеличивать
//и уменьшать значение счетчика на 1.

//Создай переменную counterValue в которой будет хранится
//текущее значение счетчика.
//Создай функции increment и decrement для увеличения и уменьшения
//значения счетчика
//Добавь слушатели кликов на кнопки, вызовы функций и обновление
//интерфейса

/* < div id="counter" >
    <button type="button" data-action="decrement">-1</button>
    <span id="value">0</span>
    <button type="button" data-action="increment">+1</button>
</div > */

const refs = {
  btnIncrement: document.querySelector('[data-action="increment"]'),
  btnDecrement: document.querySelector('[data-action="decrement"]'),
  valueSpan: document.querySelector("#value"),
};

console.log(refs.btnIncrement);
console.log(refs.btnDecrement);
console.log(refs.valueSpan);
let counterValue = +refs.valueSpan.textContent;
console.log(counterValue);
function increment() {
  counterValue += 1;
  refs.valueSpan.textContent = counterValue;
}

refs.btnIncrement.addEventListener("click", increment);

function decrement() {
  counterValue -= 1;
  refs.valueSpan.textContent = counterValue;
}

refs.btnDecrement.addEventListener("click", decrement);
