var app = app || {};

(function(scope){
    function Event(options){
        if (this.constructor.name === 'Event') {
            throw new Error('Cannot instantiate abstract class');
        }

        this.setTitle(options.title);
        this.setType(options.type);
        this.setDuration(options.duration);
        this.setDate(options.date);
    }

    Event.prototype.setTitle = function setTitle(title){
        scope.validator.validateString(title);
        return this._title = title;
    };

    Event.prototype.getTitle = function getTitle(){
        return this._title;
    };

    Event.prototype.setType = function setType(type){
        scope.validator.validateString(type);
        return this._type = type;
    };

    Event.prototype.getType = function getType(){
        return this._type;
    };

    Event.prototype.setDuration = function setDuration(duration){
        scope.validator.validateNumber(duration);
        return this._duration = duration;
    };

    Event.prototype.getDuration = function getDuration(){
        return this._duration;
    };

    Event.prototype.setDate = function setDate(date){
        scope.validator.validateDate(date);
        return this._date = date;
    };

    Event.prototype.getDate = function getDate(){
        return this._date;
    };

    scope.event = Event;
})(app);