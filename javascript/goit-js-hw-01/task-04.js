let credits = 23580;
const pricePerDroid = 3000;
let totalPrice;

let quantityOfDroids = prompt("Введите количество дроидов, пожалуйста!");

if (quantityOfDroids === null) {
  console.log("Отменено пользователем!");
} else if ((totalPrice = pricePerDroid * Number(quantityOfDroids) > credits)) {
  console.log(alert("Недостаточно средств на счету!"));
  console.log("Недостаточно средств на счету!");
} else {
  totalPrice = pricePerDroid * Number(quantityOfDroids);
  credits -= totalPrice;
  console.log(
    alert(`Вы купили ${quantityOfDroids} дроидов, на счету осталось
      ${credits} кредитов.`)
  );
}
