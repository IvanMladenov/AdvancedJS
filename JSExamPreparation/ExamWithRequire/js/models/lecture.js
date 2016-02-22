define(['validator', 'event', 'extentions'], function(validator, event){
    return (function(){
        function Lecture(options){
            event.call(this, options);
            this.setTrainer(options.trainer);
            this.setCourse(options.course);
        }

        Lecture.extends(event);

        Lecture.prototype.setTrainer = function setTrainer(trainer){
            var ctorName = trainer.constructor.name;
            validator.validateConstructorNames(ctorName, 'Trainer');
            this._trainer = trainer;
        };

        Lecture.prototype.getTrainer = function getTrainer(){
            return this._trainer;
        };

        Lecture.prototype.setCourse = function setCourse(course){
            var ctorName = course.constructor.name;
            validator.validateConstructorNames(ctorName, 'Course');
            this._course = course;
        };

        Lecture.prototype.getCourse = function getCourse(){
            return this._course;
        };

        return Lecture;

    })();
});

