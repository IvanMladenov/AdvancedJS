define(['validator', 'employee', 'extentions'], function(validator, employee){
    return (function(){
        function Trainer(name, workHours){
            employee.call(this, name, workHours);
            this.courses = [];
            this.feedbacks = [];
        }

        Trainer.extends(employee);

        Trainer.prototype.addFeedback = function addFeedback(feedback){
            validator.validateIsString(feedback);
            this.feedbacks.push(feedback);
        };

        Trainer.prototype.addCourse = function addCourse(course){
            var ctorName = course.constructor.name;
            validator.validateConstructorNames(ctorName, 'Course');
            this.courses.push(course);
        };

        return Trainer;
    })();
});

