define(['validator'], function (validator) {
    return (function () {
        var Course = {
            init: function init(name, numberOfLectures) {
                this.setName(name);
                this.setNumberOfLectures(numberOfLectures);

                return this;
            },
            setName: function setName(name) {
                validator.validateString(name);
                this._name = name;
            },

            getName: function getName() {
                return this._name;
            },
            setNumberOfLectures: function setNumberOfLectures(number) {
                validator.validateNumber(number);
                this._numberOfLectures = number;
            },
            getNumberOfLectures: function getNumberOfLectures() {
                return this._numberOfLectures;
            }
        };

        return Course;
    })();
});
