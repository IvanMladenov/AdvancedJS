var imdb = imdb || {};

(function(scope){
    var idCounter = 1;
    function Theatre(name, lenght, rating, country){
        this.title = name;
        scope._performance.call(this, lenght, rating, country);
        this._id = idCounter++;
    }

    Theatre.extends(scope._performance);

    scope.getTheatre = function getTheatre (name, lenght, rating, country){
        return new Theatre(name, lenght, rating, country);
    }

})(imdb);