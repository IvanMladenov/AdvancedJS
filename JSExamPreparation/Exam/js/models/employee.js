var app = app || {};

(function(scope){
    function Employee(name, workHours){
        this.setName(name);
        this.setWorkHours(workHours);
    }

    Employee.prototype.setName = function setName(name){
        scope.validator.validateString(name);
        this._name = name;
    };

    Employee.prototype.getName = function getName(){
        return this._name;
    };

    Employee.prototype.setWorkHours = function setWorkHours(hours){
        scope.validator.validateNumber(hours);
        this._workHours = hours;
    };

    Employee.prototype.getWorkhours = function getWorkHours(){
        return this._workHours;
    };

    scope.employee = Employee;

})(app);