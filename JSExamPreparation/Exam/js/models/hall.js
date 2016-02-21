var app = app || {};

(function(scope){
    function Hall(name, capacity){
        this.setName(name);
        this.setCapacity(capacity);
        this.parties = [];
        this.lectures = [];
    }

    Hall.prototype.setName = function setName(name){
        scope.validator.validateString(name);
        this._name = name;
    };

    Hall.prototype.getName = function getName(){
        return this._name;
    };

    Hall.prototype.setCapacity = function setCapacity(capacity){
        scope.validator.validateNumber(capacity);
        this._capacity = capacity;
    };

    Hall.prototype.getCapacity = function getCapacity(){
        return this._capacity;
    };

    Hall.prototype.addEvent = function addEvent(event){
        var ctorName = event.constructor.name;
        if (event.constructor.name === 'Party'){
            scope.validator.validateConstructorNames(ctorName, 'Party');
            this.parties.push(event);
        }else {
            scope.validator.validateConstructorNames(ctorName, 'Lecture');
            this.lectures.push(event);
        }
    };

    scope.hall = Hall;

})(app);