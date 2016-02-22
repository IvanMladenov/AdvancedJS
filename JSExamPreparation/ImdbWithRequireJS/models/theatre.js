define(['performance', 'extensions'], function (Performance) {
    return (function () {
        var idCounter = 1;

        function Theatre(name, lenght, rating, country) {
            this.title = name;
            Performance.call(this, lenght, rating, country);
            this._id = idCounter++;
        }

        Theatre.extends(Performance);

        return Theatre;
    })();
});

