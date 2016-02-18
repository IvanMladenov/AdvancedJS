var imdb = imdb || {};

(function(scope){
    var idCounter = 1;
    function Movie(title, lenght, rating, country){
        this.title = title;
        scope._performance.call(this, lenght, rating, country);
        this._id = idCounter++;
    }

    Movie.extends(scope._performance);

    scope.getMovie = function getMovie(title, lenght, rating, country){
        return new Movie(title, lenght, rating, country);
    }

})(imdb);