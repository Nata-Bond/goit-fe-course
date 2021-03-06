//Напиши скрипт создания и очистки коллекции элементов.
//Пользователь вводит количество элементов в input и нажимает кнопку
//Создать, после чего рендерится коллекция.При нажатии на кнопку
//Очистить, коллекция элементов очищается.

//Создай функцию createBoxes(amount), которая принимает 1 параметр amount - число.
//Функция создает столько div, сколько указано в amount и добавляет их в div#boxes.

//Каждый созданный div:

//Имеет случайный rgb цвет фона
//Размеры самого первого div - 30px на 30px
//Каждый следующий div после первого, должен быть шире и выше предыдущего на 10px
//Создай функцию destroyBoxes(), которая очищает div#boxes.

{
  /* < div id = "controls" >
    <input type="number" min="0" max="100" step="1" />
    <button type="button" data-action="render">Создать</button>
    <button type="button" data-action="destroy">Очистить</button>
</div >

    <div id="boxes"></div> */
}

const boxesDivRef = document.querySelector("#boxes");
const inputRef = document.querySelector('[type="number"]');
const renderRef = document.querySelector('[data-action="render"]');
const destroyRef = document.querySelector('[data-action="destroy"]');

const random = function () {
  return Math.floor(Math.random() * 256);
};
// console.log(random());

const createBoxes = function (amount) {
  const divArray = [];
  let size = 30;
  for (let i = 0; i < amount; i++) {
    // console.log(i);
    const boxesRef = document.createElement("div");
    boxesRef.style.backgroundColor = `rgb(${random()}, ${random()}, ${random()}`;
    boxesRef.style.width = `${size}px`;
    boxesRef.style.height = `${size}px`;
    size = size + 10;
    // console.log(boxesRef);
    divArray.push(boxesRef);
  }
  //   console.log(divArray);
  boxesDivRef.append(...divArray);
};

renderRef.addEventListener("click", () => {
  boxesDivRef.innerHTML = "";
  const inputVal = +inputRef.value;
  createBoxes(inputVal);
});

destroyRef.addEventListener("click", () => {
  boxesDivRef.innerHTML = "";
});
