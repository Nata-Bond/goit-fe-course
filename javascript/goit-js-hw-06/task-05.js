import users from "./users.js";
console.log(users);

const getUserWithEmail = (users, email) => {
  return users.find((lm) => lm.email === email);
};

console.log(getUserWithEmail(users, "shereeanthony@kog.com")); // {объект пользователя Sheree Anthony}
console.log(getUserWithEmail(users, "elmahead@omatom.com")); // {объект пользователя Elma Head}
