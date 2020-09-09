const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];

const liArray = ingredients.map((el) => {
  const li = document.createElement("li");
  li.textContent = el;
  return li;
});
console.log(liArray);

const ulRef = document.querySelector("#ingredients");
console.log(ulRef);
ulRef.append(...liArray);
