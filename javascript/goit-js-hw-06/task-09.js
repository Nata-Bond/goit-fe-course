import users from "./users.js";
console.log(users);

const getNamesSortedByFriendsCount = (users) => {
  return users
    .sort((min, max) => min.friends.length - max.friends.length)
    .map((lm) => lm.name);
};

console.log(getNamesSortedByFriendsCount(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez' ]
