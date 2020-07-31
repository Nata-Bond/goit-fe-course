const checkForSpam = function (message) {
  message = message.toLowerCase();
  let messageArr = message.split(" ");
  for (const item of messageArr) {
    if (item.includes("sale") || item.includes("spam")) {
      messageArr = true;
      break;
    } else {
      messageArr = false;
    }
  }
  return console.log(messageArr);
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
checkForSpam("Latest technology news"); // false

checkForSpam("JavaScript weekly newsletter"); // false

checkForSpam("Get best sale offers now!"); // true

checkForSpam("[SPAM] How to earn fast money?"); // true
