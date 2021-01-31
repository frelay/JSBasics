"use strict";

// callback это функция, которая принимает аргументом другую функцию

function learnJS(lang, callback) {
  console.log(`Я учу ${lang}`);
  callback();
}

function done() {
  console.log("Я прошел этот урок");
}

learnJS("JavaScript", done);
