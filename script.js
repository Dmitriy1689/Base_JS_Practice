const numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?');
const personalMovieDB ={
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};
const oneOfTheWatchedFilm = prompt('Назовите один из последних просмотренных вами фильмов', '');
const filmRate1 = prompt('Какую оценку вы готовы поставить этому фильму?', '');
personalMovieDB.movies[oneOfTheWatchedFilm] = filmRate1;
const anotherWatchedFilm = prompt('Назовите ещё один из последних просмотренных вами фильмов', '');
const filmRate2 = prompt('Какую оценку вы готовы поставить этому фильму?', '');
personalMovieDB.movies[anotherWatchedFilm] = filmRate2;

console.log(personalMovieDB);
