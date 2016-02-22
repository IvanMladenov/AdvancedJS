define([],function(){
    return (function(){
        if (!Object.create) {
            Object.create = function(proto) {
                function F() {}
                F.prototype = proto;
                return new F();
            };
        }

        Function.prototype.extends = function(parent) {
            this.prototype = Object.create(parent.prototype);
            this.prototype.constructor = this;
        };
    })();
});

