const total = 100;

let ordered = 50;
if (ordered > total) {
  console.log(`На складе недостаточно товаров!`);
} else {
  console.log(`Заказ оформлен, с вами свяжется менеджер`);
}

ordered = 130;
if (ordered > total) {
  console.log(`На складе недостаточно товаров!`);
} else {
  console.log(`Заказ оформлен, с вами свяжется менеджер`);
}

ordered = 101;
ordered >= total
  ? console.log("На складе недостаточно товаров! Выберете меньше товаров")
  : console.log("Заказ оформлен, с вами свяжется менеджер");
