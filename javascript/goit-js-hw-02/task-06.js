let input;
const numbers = [];
let total = 0;

while (input !== null) {
  input = prompt("введите число");
  console.log(input);
  console.log(typeof input);
  while (isNaN(Number(input)) || input === "") {
    alert("Было введено не число, попробуйте еще раз");
    input = prompt("введите число");
  }
  numbers.push(Number(input));
  console.log(numbers);
}

if (numbers.length > 0) {
  for (let num of numbers) {
    total = total + num;
  }
}
console.log(`Общая сумма чисел равна ${total}`);
