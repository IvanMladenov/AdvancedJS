define(['validator', 'event', 'extentions'], function (validator, event) {
    return (function () {
        var Party = event.inherit({
            init: function init(options) {
                this._super.init.call(this, options);
                this.setIsCatered(options.isCatered);
                this.setIsBirthday(options.isBirthday);
                this.setOrganiser(options.organiser);

                return this;
            },
            setIsCatered: function setIsCatered(isCatered) {
                var bool = Boolean(isCatered);
                this._isCatered = bool;
            },
            getIsCatered: function () {
                return this._isCatered;
            },
            setIsBirthday: function setIsBirthday(isBirthday) {
                var bool = Boolean(isBirthday);
                this._isBirthday = bool;
            },
            getIsBirthday: function getIsBirthday() {
                return this._isBirthday;
            },
            setOrganiser: function setOrganiser(organiser) {
                //var ctorName = organiser.constructor.name;
                //validator.validateConstructorNames(ctorName, 'Employee');
                this._organiser = organiser;
            },
            getOrganiser: function getOrganiser() {
                return this._organiser;
            }
        });

        return Party;
    })();
});

