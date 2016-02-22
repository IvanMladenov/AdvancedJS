define(['validator'], function(validator){
    return (function(){
        function Employee(name, workHours){
            this.setName(name);
            this.setWorkHours(workHours);
        }

        Employee.prototype.setName = function setName(name){
            validator.validateString(name);
            this._name = name;
        };

        Employee.prototype.getName = function getName(){
            return this._name;
        };

        Employee.prototype.setWorkHours = function setWorkHours(hours){
            validator.validateNumber(hours);
            this._workHours = hours;
        };

        Employee.prototype.getWorkhours = function getWorkHours(){
            return this._workHours;
        };

        return Employee;
    })();
});

