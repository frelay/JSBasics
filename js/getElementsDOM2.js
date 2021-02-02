"use strict";

// Действия с элементами на странице

const box = document.getElementById("box");
const btns = document.getElementsByTagName("button");
const circles = document.getElementsByClassName("circle");
const hearts = document.querySelectorAll(".heart");
const wrapper = document.querySelector(".wrapper");

// Меняем стили у элементов с id box. CSS свойства записываются в camelCase
box.style.backgroundColor = "aqua";
box.style.width = "500px";
// Если менять стили через cssText, то свойства пишутся как в документе CSS
box.style.cssText = "background-color: red; width: 300px";
// Для смены стилей у элементов полученных в псевдомассив нужно указать индекс элемента
btns[2].style.borderRadius = "100%";
circles[1].style.backgroundColor = "red";
// Для применения действий ко всем элементам псевдомассива используем forEach
hearts.forEach((item) => {
  item.style.backgroundColor = "green";
});
// Добавление элементов в документ
const div = document.createElement("div"); // Создаем элемент div
div.classList.add("black"); // Добавляем элементу div класс black, который уже описан в CSS
document.body.append(div); // Добавляем в документ в конец тега body наш div
wrapper.append(div); // Добавление нашего блока div в блок с классом wrapper в конец
wrapper.prepend(div); // Добавление нашего блока div в блок с классом wrapper в начало
hearts[0].before(div); // Добавление нашего блока div в блок с классом hearts перед первым элементом heart
hearts[0].after(div); // Добавление нашего блока div в блок с классом hearts после первого элемента heart
hearts[0].replaceWith(circles[0]); // Заменяем один элемент другим
div.innerHTML = "<h1>Hello world</h1>"; // Добавление в наш div HTML кода (аналог textContent, но без HTML кода)
// div.insertAdjacentHTML("afterbegin", <h2>Hello</h2>);
