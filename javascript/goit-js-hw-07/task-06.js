//Напиши скрипт, который бы при потере фокуса на инпуте, проверял его содержимое
//на правильное количество символов.

//   Сколько символов должно быть в инпуте, указывается в его атрибуте data - length.
//Если введено подходящее количество, то border инпута становится зеленым,
//если неправильное - красным.
//Для добавления стилей, используй CSS - классы valid и invalid.

const inputRef = document.querySelector("#validation-input");
inputRef.addEventListener("blur", () => {
  //   console.log(inputRef.value.length);
  //   console.dir(inputRef.dataset.length);
  const inputValue = inputRef.value.length;
  const dataValue = inputRef.dataset.length;
  if (inputValue === +dataValue) {
    inputRef.classList.add("valid");
    inputRef.classList.remove("invalid");
  } else {
    inputRef.classList.remove("valid");
    inputRef.classList.add("invalid");
  }
});
