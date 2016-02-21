var app = app || {};

(function(scope){
    function Course(name, numberOfLectures){
        this.setName(name);
        this.setNumberOfLectures(numberOfLectures);
    }

    Course.prototype.setName = function setName(name){
        scope.validator.validateString(name);
        this._name = name;
    };

    Course.prototype.getName = function getName(){
        return this._name;
    };

    Course.prototype.setNumberOfLectures = function setNumberOfLectures(number){
        scope.validator.validateNumber(number);
        this._numberOfLectures = number;
    };

    Course.prototype.getNumberOfLectures = function getNumberOfLectures(){
        return this._numberOfLectures;
    };

    scope.course = Course;
})(app);