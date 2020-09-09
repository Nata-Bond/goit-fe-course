//Напиши скрипт, который реагирует на изменение значения
//input#font - size - control(событие input) и изменяет
//инлайн - стиль span#text обновляя свойство font - size.
//В результате при перетаскивании ползунка будет меняться
//размер текста.

{
  /* < input id = "font-size-control" type = "range" />
    <br />
    <span id="text">Абракадабра!</span> */
}

const inputRangeRef = document.querySelector("#font-size-control");
console.dir(inputRangeRef.value);
const spanRef = document.querySelector("#text");
// spanRef.style.fontSize = "100px";

inputRangeRef.addEventListener("input", (event) => {
  // console.dir(event);
  spanRef.style.fontSize = `${event.target.value}px`;
});
