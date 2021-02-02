"use strict";

// Получение элементов из документа DOM

const box = document.getElementById("box");
// Получаем из HTML документа элемент с id box
console.log(box);

const btns = document.getElementsByTagName("button");
// Получаем в псевдомассив (коллекцию) из HTML документа все элементы с тэгом button
console.log(btns[2]);
// Выводим элемент из коллекции с индексом 2

const circles = document.getElementsByClassName("circle");
// Получаем в псевдомассив (коллекцию) из HTML документа все элементы с классом circle
console.log(circles);

const hearts = document.querySelectorAll(".heart");
// Получаем в псевдомассив (коллекцию) из CSS документа все селекторы (При обращении к селекторам ставим точку)
console.log(hearts);

hearts.forEach((item) => {
  console.log(item);
});
