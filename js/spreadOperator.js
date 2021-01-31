"use strict";

const obj = {
  a: 5,
  b: 10,
};

const copy = obj; // в copy ссылка на объект, а не сам объект
copy.a = 10;

console.log(copy);
console.log(obj);

function copyFun(mainObj) {
  // Функция которая копирует объект
  let objCopy = {};
  for (let key in mainObj) {
    objCopy[key] = mainObj[key];
  }
  return objCopy;
}

const numbers = {
  a: 2,
  b: 5,
  c: {
    x: 7,
    y: 4,
  },
};

const newNumbers = copyFun(numbers);
newNumbers.a = 10;
console.log(numbers);
console.log(newNumbers);

const add = {
  d: 17,
  e: 20,
};

console.log(Object.assign(numbers, add)); // Object.assign добавляет в один объект, другой объект

const clone = Object.assign({}, add); // еще один способ копировать объект
clone.d = 30;
console.log(add);
console.log(clone);

const oldArray = ["a", "b", "c"];
const newArray = oldArray.slice(); // Способ копировать массив
newArray[1] = "asdasd";
console.log(oldArray);
console.log(newArray);

const video = ["youtube", "vimeo", "rutube"],
  blogs = ["wordpress", "livejournal", "blogger"],
  internet = [...video, ...blogs, "vk", "facebook"];
// ... - Spread оператор, который разворачивает значения переменных video и blogs
video[0] = "netflix";
console.log(internet);
console.log(video);

function log(a, b, c) {
  console.log(a);
  console.log(b);
  console.log(c);
}

const num = [2, 5, 7];

log(...num); // spread оператор передал каждый элемент массива num в каждый аргумент функции

const array = ["a", "b", "c"];

const newArray = [...array]; // Создание копии массива с помощью spread оператора

const newObj = {
  one: 1,
  two: 2,
};

const newObjCopy = { ...newObj }; // Создание копии объекта с помощью spread оператора
console.log(newObjCopy);
