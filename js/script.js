"use strict";

/* Задание на урок:

1) Первую часть задания повторить по уроку

2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы

3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres

P.S. Функции вызывать не обязательно*/

let numberOfFilms;

function start() {
  numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?");

  while (numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)) {
    numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?");
  }
}

start();

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  private: false,
};

function rememberMyFilms() {
  let count = 0;
  while (count < 2) {
    const firstQuestion = prompt("Один из последних просмотренных фильмов?");
    const secondQuestion = prompt("На сколько оцените его?");
    if (
      firstQuestion != null &&
      secondQuestion != null &&
      firstQuestion != "" &&
      secondQuestion != "" &&
      firstQuestion.length < 50 &&
      secondQuestion.length < 50
    ) {
      personalMovieDB.movies[firstQuestion] = secondQuestion;
    } else {
      count--; // Возврат итерации в начало цикла
    }

    count++;
  }
}

rememberMyFilms();

function detectPersonalLevel() {
  if (personalMovieDB.count === 10) {
    console.log("Просмотрено довольно мало фильмов");
  } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log("Вы классический зритель");
  } else if (personalMovieDB.count >= 30) {
    console.log("Вы киноман");
  } else {
    console.log("Произошла ошибка");
  }
}

detectPersonalLevel();

function showMyDB() {
  if (personalMovieDB.private === false) {
    console.log(personalMovieDB);
  }
}

showMyDB();

function writeYourGenres() {
  for (let i = 1; i <= 3; i++) {
    const genreQuestion = prompt(`Ваш любимый жанр под номером ${i}`);
    if (
      genreQuestion != null &&
      genreQuestion != "" &&
      genreQuestion.length < 50
    ) {
      personalMovieDB.genres.push(genreQuestion);
    } else {
      i--; // Возврат итерации в начало цикла
    }
  }
}

writeYourGenres();
