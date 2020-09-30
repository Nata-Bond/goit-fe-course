"use strict";

import ourGallery from "./gallery-items.js";

const galleryRef = document.querySelector(".js-gallery");
const lightboxRef = document.querySelector(".js-lightbox");
const lightboxImageRef = document.querySelector(".lightbox__image");
const lightboxButtonRef = document.querySelector(".lightbox__button");

let indexImage = 0;
const createGallery = (gallery) => {
  const liRef = document.createElement("li");
  liRef.classList.add("gallery__item");

  const aRef = document.createElement("a");
  aRef.classList.add("gallery__link");
  aRef.href = gallery.original;

  const imgRef = document.createElement("img");
  imgRef.classList.add("gallery__image");

  imgRef.src = gallery.preview;
  imgRef.setAttribute("data-source", gallery.original);
  imgRef.setAttribute("data-index", indexImage++);
  imgRef.alt = gallery.description;

  aRef.appendChild(imgRef);

  liRef.appendChild(aRef);

  return liRef;
};

const galleryList = ourGallery.map((gallery) => createGallery(gallery));

galleryRef.append(...galleryList);

galleryRef.addEventListener("click", (event) => {
  event.preventDefault();
  console.log(event);
  if (event.target.nodeName !== "IMG") {
    return;
  }

  const fullImg = event.target.dataset.source;
  const imageAlt = event.target.alt;

  lightboxRef.classList.add("is-open");
  lightboxImageRef.src = fullImg;
  lightboxImageRef.alt = imageAlt;
});

lightboxButtonRef.addEventListener("click", () => {
  lightboxRef.classList.remove("is-open");
  lightboxImageRef.src = "";
  lightboxImageRef.alt = "";
});

document.addEventListener("keydown", (event) => {
  if (event.code === "Escape") {
    lightboxRef.classList.remove("is-open");
    lightboxImageRef.src = "";
    lightboxImageRef.alt = "";
  }
});
