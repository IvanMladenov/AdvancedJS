define(['validator'], function (validator) {
    return (function () {
        var Event = {
            init: function init(options) {
                if (this.constructor.name === 'Event') {
                    throw new Error('Cannot instantiate abstract class');
                }
                this.setTitle(options.title);
                this.setType(options.type);
                this.setDuration(options.duration);
                this.setDate(options.date);

                return this;
            },
            setTitle: function setTitle(title) {
                validator.validateString(title);
                return this._title = title;
            },
            getTitle: function getTitle() {
                return this._title;
            },
            setType: function setType(type) {
                validator.validateString(type);
                return this._type = type;
            },
            getType: function getType() {
                return this._type;
            },
            setDuration: function setDuration(duration) {
                validator.validateNumber(duration);
                return this._duration = duration;
            },
            getDuration: function getDuration() {
                return this._duration;
            },
            setDate: function setDate(date) {
                validator.validateDate(date);
                return this._date = date;
            },
            getDate: function getDate() {
                return this._date;
            }
        }

        return Event;
    })();
});

