const images = [
  {
    url:
      "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url:
      "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url:
      "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

//Напиши скрипт для создания галлереи изображений по массиву данных.
//Используй массив объектов images для создания тегов img вложенных в li.
//Для создания разметки используй шаблонные строки и insertAdjacentHTML().

//Все элементы галереи должны добавляться в DOM за одну операцию вставки.
//Добавь минимальное оформление галереи флексбоксами или гридами через css - классы.

const imageArray = images.map((image) => {
  const li = `<li class="gallery-li"><img src="${image.url}" alt="${image.alt}" width="320"></li>`;
  return li;
});
console.log(imageArray);
const galleryRef = document.querySelector("#gallery");
galleryRef.insertAdjacentHTML("afterbegin", imageArray.join(""));
console.log(galleryRef);

// но! Репета в вебинаре говорил не юзать insertAdjacentHTML()., поэтому:

// const liArrayRef = images.map((image) => {
//   const liRef = document.createElement("li");
//   liRef.classList.add("gallery-li");
//   const imgRef = document.createElement("img");
//   imgRef.src = image.url;
//   imgRef.alt = image.alt;
//   liRef.appendChild(imgRef);
//   return liRef;
// });

// console.log(liArrayRef);

// const galleryRef = document.querySelector("#gallery");
// console.log(galleryRef);
// galleryRef.append(...liArrayRef);
