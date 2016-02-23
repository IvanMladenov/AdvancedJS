define(['validator'], function (validator) {
    return (function () {
        var Hall = {
            init: function init(name, capacity) {
                this.setName(name);
                this.setCapacity(capacity);
                this.parties = [];
                this.lectures = [];

                return this;
            },
            setName: function setName(name) {
                validator.validateString(name);
                this._name = name;
            },
            getName: function getName() {
                return this._name;
            },
            setCapacity: function setCapacity(capacity) {
                validator.validateNumber(capacity);
                this._capacity = capacity;
            },
            getCapacity: function getCapacity() {
                return this._capacity;
            },
            addEvent: function addEvent(event) {
                //var ctorName = event.constructor.name;
                if (event._type === 'party') {
                    //validator.validateConstructorNames(ctorName, 'Party');
                    this.parties.push(event);
                } else {
                    //validator.validateConstructorNames(ctorName, 'Lecture');
                    this.lectures.push(event);
                }
            }
        };

        return Hall;
    })();
});

