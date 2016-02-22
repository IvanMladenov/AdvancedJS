define(['performance', 'extensions'], function (Performance) {
    return (function () {
        var idCounter = 1;

        function Movie(title, lenght, rating, country) {
            this.title = title;
            Performance.call(this, lenght, rating, country);
            this._id = idCounter++;
        }

        Movie.extends(Performance);

        return Movie;
    })();
})

