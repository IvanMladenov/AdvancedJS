define(['validator', 'event', 'extentions'], function(validator, event){
    return (function(){
        function Party(options){
            event.call(this, options);
            this.setIsCatered(options.isCatered);
            this.setIsBirthday(options.isBirthday);
            this.setOrganiser(options.organiser);
        }

        Party.extends(event);

        Party.prototype.setIsCatered = function setIsCatered(isCatered){
            var bool = Boolean(isCatered);
            this._isCatered  = bool;
        };

        Party.prototype.getIsCatered = function(){
            return this._isCatered;
        };

        Party.prototype.setIsBirthday = function setIsBirthday(isBirthday){
            var bool = Boolean(isBirthday);
            this._isBirthday = bool;
        };

        Party.prototype.getIsBirthday = function getIsBirthday(){
            return this._isBirthday;
        };

        Party.prototype.setOrganiser = function setOrganiser(organiser){
            var ctorName = organiser.constructor.name;
            validator.validateConstructorNames(ctorName, 'Employee');
            this._organiser = organiser;
        };

        Party.prototype.getOrganiser = function getOrganiser(){
            return this._organiser;
        };

        return Party;
    })();
});

