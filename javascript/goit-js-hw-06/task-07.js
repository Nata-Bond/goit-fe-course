import users from "./users.js";
console.log(users);

const calculateTotalBalance = (users) => {
  return users.reduce((total, lm) => total + lm.balance, 0);
};

console.log(calculateTotalBalance(users)); // 20916
