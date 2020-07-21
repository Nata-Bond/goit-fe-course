const ADMIN_PASSWORD = "jqueryismyjam";
let message;

// let enterYourPass = prompt("Enter your password please");

if (enterYourPass === null) {
  message = alert("Отменено пользователем!");
} else if (enterYourPass === ADMIN_PASSWORD) {
  message = alert("Добро пожаловать!");
} else {
  message = alert("Доступ запрещен, неверный пароль!");
}
