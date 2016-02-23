define(['validator'], function(validator){
    return (function(){
        var Employee = {
            init: function init(name, workHours) {
                this.setName(name);
                this.setWorkHours(workHours);

                return this;
            },
            setName: function setName(name) {
                validator.validateString(name);
                this._name = name;
            },
            getName: function getName() {
                return this._name;
            },
            setWorkHours: function setWorkHours(hours) {
                validator.validateNumber(hours);
                this._workHours = hours;
            },
            getWorkhours: function getWorkHours() {
                return this._workHours;
            }
        };

        return Employee;
    })();
});

