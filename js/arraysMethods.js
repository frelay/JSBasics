"use strict";

const arr = [1, 2, 3, 4, 10, 15];

arr.pop(); // удаляет последний элемент в массиве
arr.push(15); // добавляет в конец массива элемент

console.log(arr);

for (let i = 0; i < arr.length; i++) {
  // перебор массива циклом for
  console.log(arr[i]);
}

for (let value of arr) {
  // for of перебирает элементы массива
  console.log(value);
}

for (let value in arr) {
  // for in перебирает индексы массива
  console.log(value);
}

arr.forEach(function (item, i, arr) {
  // forEach принимает callback функцию, которая принимает аргументы: item - элемент массива, i - индекс элемента массива,
  // arr - перебираемый массив
  console.log(`${i}: ${item} внутри массива ${arr}`);
});

const str = prompt("");
const products = str.split(", ");
// если ввести в prompt какие то значения через запятую и если передать разделитель запятую в метод split,
// то значения попадут в массив по разделителю.
console.log(products.join("; ")); // Метод join переделает массив split в строку и разделит элементы разделителем
