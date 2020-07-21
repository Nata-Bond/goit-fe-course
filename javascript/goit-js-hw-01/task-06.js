let input;
let total = 0;

do {
  input = prompt("Введите номер");
  if (isNaN(input)) {
    alert("Было введено не число, попробуйте еще раз");
    continue;
  }
  console.log((total = total + Number(input)));
} while (input !== null);
alert(`Общая сумма чисел равна ${total}`);
