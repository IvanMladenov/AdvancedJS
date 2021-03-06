var app = app || {};

(function(scope){
    function Validator(){

    }

    Validator.prototype.validateString = function validateString(string){
        var index = string.indexOf(/[^A-Za-z\s]/g);
        if (index!=-1){
            throw new Error('String may contain only letters and white spaces');
        }
    };

    Validator.prototype.validateNumber = function validateNumber(number){
        if (isNaN(number)){
            throw new Error('Should enter a number');
        }
    };

    Validator.prototype.validateDate = function validateDate(date){
        if (typeof (date) != 'object' || !(date instanceof Date)) {
            throw new Error('should be a Date object');
        }
    };

    Validator.prototype.validateConstructorNames = function validateConstructorNames(name, shouldBe){
        if (name !== shouldBe){
            throw new Error(shouldBe + ' must be inctance of ' + name)
        }
    };

    Validator.prototype.validateIsString = function validateIsString(str){
        if (typeof str !== 'string'){
            throw new Error('Should be string only');
        }
    };

    scope.validator = new Validator();
})(app);
