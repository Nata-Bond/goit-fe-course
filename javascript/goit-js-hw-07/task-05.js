//Напиши скрипт который, при наборе текста в инпуте input#name
//- input(событие input), подставляет его текущее значение в span#name
//- output.Если инпут пустой, в спане должна отображаться строка 'незнакомец'.

/* < input type = "text" placeholder = "Ваше имя?" id = "name-input" />
    <h1>Привет, <span id="name-output">незнакомец</span>!</h1> */

const refs = {
  inputData: document.querySelector("#name-input"),
  spanData: document.querySelector("#name-output"),
};

console.dir(refs.inputData);
console.dir(refs.spanData);

function changeName(event) {
  console.log(event);
  if (event.target.value === "") {
    refs.spanData.textContent = "НеЗнАкОмЕц :)";
    return;
  }
  refs.spanData.textContent = event.target.value;
}

refs.inputData.addEventListener("input", changeName);
