var app = app || {};

(function(scope){
    function Lecture(options){
        scope.event.call(this, options);
        this.setTrainer(options.trainer);
        this.setCourse(options.course);
    }

    Lecture.extends(scope.event);

    Lecture.prototype.setTrainer = function setTrainer(trainer){
        var ctorName = trainer.constructor.name;
        scope.validator.validateConstructorNames(ctorName, 'Trainer');
        this._trainer = trainer;
    };

    Lecture.prototype.getTrainer = function getTrainer(){
        return this._trainer;
    };

    Lecture.prototype.setCourse = function setCourse(course){
        var ctorName = course.constructor.name;
        scope.validator.validateConstructorNames(ctorName, 'Course');
        this._course = course;
    };

    Lecture.prototype.getCourse = function getCourse(){
        return this._course;
    };

    scope.lecture = Lecture;

})(app);