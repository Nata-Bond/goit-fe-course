import users from "./users.js";
console.log(users);

const getInactiveUsers = (users) => {
  return users.filter((lm) => !lm.isActive);
};

console.log(getInactiveUsers(users)); // [объект Moore Hensley, объект Ross Vazquez, объект Blackburn Dotson]
