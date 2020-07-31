const formatString = function (string) {
  if (string.length <= 40) {
    return console.log(string);
  }
  if (string.length > 40) {
    let newString = string.slice(0, 40) + "...";
    console.log(newString);
  }
};

formatString("Curabitur ligula sapien, tincidunt non.");
// // вернется оригинальная строка

formatString("Vestibulum facilisis, purus nec pulvinar iaculis.");
// // вернется форматированная строка

formatString("Curabitur ligula sapien.");
// // вернется оригинальная строка

formatString("Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.");
// вернется форматированная строка
