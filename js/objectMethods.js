"use strict";

const options = {
  name: "test",
  width: 1024,
  height: 1024,
  colors: {
    border: "black",
    bg: "red",
  },
};

console.log(options.name); // Обращение к ключу объекта
delete options.name; // Удаление пары ключ-значение
console.log(Object.keys(options)); // Метод возвращает массив с ключами объекта
const { border, bg } = options.colors; // Деструктуризация объекта
console.log(border);

for (let key in options) {
  // Перебор объекта
  if (typeof options[key] === "object") {
    for (let i in options[key]) {
      console.log(`Свойство: ${i} имеет значение ${options[key][i]}`);
    }
  } else {
    console.log(`Свойство: ${key} имеет значение ${options[key]}`);
  }
}
