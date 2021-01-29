"use strict";

/* Задание на урок:

1) Автоматизировать вопросы пользователю про фильмы при помощи цикла

2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
возвращаем пользователя к вопросам опять

3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
"Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
"Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"

4) Потренироваться и переписать цикл еще двумя способами*/

const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?");

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  private: false,
};

console.log(personalMovieDB.count);

const firstQuestion = prompt("Один из последних просмотренных фильмов?");
const thirdQuestion = prompt("На сколько оцените его?");
const secondQuestion = prompt("Один из последних просмотренных фильмов?");
const fourthQuestion = prompt("На сколько оцените его?");

personalMovieDB.movies[firstQuestion] = thirdQuestion;
personalMovieDB.movies[secondQuestion] = fourthQuestion;

console.log(personalMovieDB);
