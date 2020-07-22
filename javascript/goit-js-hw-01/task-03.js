const ADMIN_PASSWORD = "jqueryismyjam";
let message;

let enterYourPass = prompt("Enter your password please");

if (enterYourPass === null) {
  message = "Отменено пользователем!";
} else if (enterYourPass === ADMIN_PASSWORD) {
  message = "Добро пожаловать!";
} else {
  message = "Доступ запрещен, неверный пароль!";
}
alert(message);
