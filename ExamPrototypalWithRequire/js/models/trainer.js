define(['validator', 'employee', 'extentions'], function (validator, employee) {
    return (function () {
        var Trainer = employee.inherit({
            init: function init(name, workHours) {
                this._super.init.call(this, name, workHours);
                this.courses = [];
                this.feedbacks = [];

                return this;
            },
            addFeedback: function addFeedback(feedback) {
                validator.validateIsString(feedback);
                this.feedbacks.push(feedback);
            },
            addCourse: function addCourse(course) {
                //var ctorName = course.constructor.name;
                //validator.validateConstructorNames(ctorName, 'Course');
                this.courses.push(course);
            }
        });

        return Trainer;
    })();
});

