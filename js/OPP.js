"usestrict";
// Объектно-прототипное программирование
const soldier = {
  // Создается объект солдат с характеристиками и функцией
  health: 400,
  armor: 100,
  sayHello: function () {
    console.log("Hello");
  },
};

const john = Object.create(soldier); // Создается экземпляр объекта с характеристиками солдата

john.sayHello();
