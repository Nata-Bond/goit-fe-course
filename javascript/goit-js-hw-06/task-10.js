import users from "./users.js";
console.log(users);

const getSortedUniqueSkills = (users) =>
  users
    .reduce((allSkills, lm) => {
      allSkills.push(...lm.skills);
      return allSkills;
    }, [])
    .reduce((uniqSkills, lm) => {
      if (!uniqSkills.includes(lm)) {
        uniqSkills.push(lm);
      }
      return uniqSkills;
    }, [])
    .sort();

console.log(getSortedUniqueSkills(users));
// [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit', 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]
