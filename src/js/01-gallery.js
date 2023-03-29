import { galleryItems } from './gallery-items.js';

const galleryList = document.querySelector('.gallery');

galleryItems.forEach((element => {

    // Створення елементу div
    const divElement = document.createElement('div');

    // Присвоєння елементу div клас gallery__item
    divElement.classList.add('gallery__item');

    // Створення елементу a
    const aElement = document.createElement('a');

    // Присвоєння елементу a клас gallery__link
    aElement.classList.add('gallery__link');

    // Присвлєння елементу a атрибут href
    aElement.href = element.original;

    // Створення елементу img
    const imgElement = document.createElement('img');

    // Присвоєення елементу img клас gallery__image
    imgElement.classList.add('gallery__image');

    // Присвоєння елементу img атрибут src
    imgElement.src = element.preview;


}))
