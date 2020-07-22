let credits = 23580;
const pricePerDroid = 3000;
let totalPrice;

const quantityOfDroids = prompt("Введите количество дроидов, пожалуйста!");
totalPrice = pricePerDroid * Number(quantityOfDroids);
if (quantityOfDroids === null) {
  console.log("Отменено пользователем!");
} else if (totalPrice > credits) {
  console.log("Недостаточно средств на счету!");
} else {
  credits -= totalPrice;
  console.log(`Вы купили ${quantityOfDroids} дроидов, на счету осталось
      ${credits} кредитов.`);
}
