define(['movie'], function(){
    return (function(){
        var idCounter = 1;
        function Genre(name){
            this.name = name;
            this._movies = [];
            this._id = idCounter++;
        }

        Genre.prototype.addMovie  = function addMovie(movie){
            this._movies.push(movie);
        }

        Genre.prototype.deleteMovie = function deleteMovie(movie){
            var index = this._movies.indexOf(movie);
            this._movies.splice(index, 1);
        }

        Genre.prototype.deleteMovieById = function deleteMovieById(id){
            this._movies = this._movies.filter(function(movie){
                return movie._id !== id;
            })
        }

        Genre.prototype.getMovies = function getMovies () {
            return this._movies;
        }

            return Genre;
    })();
});

