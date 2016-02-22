var app = app || {};

(function(scope){
    function Trainer(name, workHours){
        scope.employee.call(this, name, workHours);
        this.courses = [];
        this.feedbacks = [];
    }

    Trainer.extends(scope.employee);

    Trainer.prototype.addFeedback = function addFeedback(feedback){
        scope.validator.validateIsString(feedback);
        this.feedbacks.push(feedback);
    };

    Trainer.prototype.addCourse = function addCourse(course){
        var ctorName = course.constructor.name;
        scope.validator.validateConstructorNames(ctorName, 'Course');
        this.courses.push(course);
    };

    scope.trainer = Trainer;
})(app);