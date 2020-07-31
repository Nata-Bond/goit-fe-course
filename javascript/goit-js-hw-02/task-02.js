const calculateEngravingPrice = function (message, pricePerWord) {
  let arrayOfWords = message.split(" ");
  console.log(arrayOfWords.length * pricePerWord);
};

calculateEngravingPrice(
  "Proin sociis natoque et magnis parturient montes mus",
  10
); // 80

calculateEngravingPrice(
  "Proin sociis natoque et magnis parturient montes mus",
  20
); // 160

calculateEngravingPrice("Donec orci lectus aliquam est magnis", 40); // 240

calculateEngravingPrice("Donec orci lectus aliquam est magnis", 20); // 120
