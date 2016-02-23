define(['validator', 'event', 'extentions'], function (validator, event) {
    return (function () {
        var Lecture = event.inherit({
            init: function init(options) {
                this._super.init.call(this, options);
                this.setTrainer(options.trainer);
                this.setCourse(options.course);

                return this;
            },
            setTrainer: function setTrainer(trainer) {
                //var ctorName = trainer.constructor.name;
                //validator.validateConstructorNames(ctorName, 'Trainer');
                this._trainer = trainer;
            },
            getTrainer: function getTrainer() {
                return this._trainer;
            },
            setCourse: function setCourse(course) {
                //var ctorName = course.constructor.name;
                //validator.validateConstructorNames(ctorName, 'Course');
                this._course = course;
            },
            getCourse: function getCourse() {
                return this._course;
            }
        });
        //Lecture.getCourse = function getCourse() {
        //    return this._course;
        //};
        //Lecture.setCourse = function setCourse(course) {
        //    //var ctorName = course.constructor.name;
        //    //validator.validateConstructorNames(ctorName, 'Course');
        //    this._course = course;
        //};
        //Lecture.getTrainer= function getTrainer() {
        //    return this._trainer;
        //};
        //Lecture.setTrainer = function setTrainer(trainer) {
        //    //var ctorName = trainer.constructor.name;
        //    //validator.validateConstructorNames(ctorName, 'Trainer');
        //    this._trainer = trainer;
        //};

        return Lecture;
    })();
});

