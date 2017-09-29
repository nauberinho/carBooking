var mongoose = require('mongoose');
var MOVIE = require('./models/movieSchema.js');
var moviesList = require('./moviesList.js')


// Koppla upp mot en databas
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/cars', {
    useMongoClient: true
});


function createMovieObjectList(array){
    let movieList = [];
    array.forEach((movie)=>{
        movieList.push(
            new MOVIE({title:movie.title, year:movie.year, actors:movie.actors})
        );
});
    movieList.forEach((movie) => {

        movie.save(function(err, result) {
            if(err){
console.log(err)
            }
            else{

                console.log(result)
            }

    })

    })
    return movieList;
}

createMovieObjectList(moviesList);


