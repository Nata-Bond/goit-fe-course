import users from "./users.js";
console.log(users);

const getUserNames = (users) => {
  return users.map((lm) => lm.name);
};

console.log(getUserNames(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Ross Vazquez', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony' ]
