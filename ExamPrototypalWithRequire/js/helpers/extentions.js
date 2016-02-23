define([],function(){
    return (function(){
        Object.prototype.inherit = function(properties) {
        function f() {};
        f.prototype = Object.create(this);
        for (var prop in properties) {
            f.prototype[prop] = properties[prop];
        }
        f.prototype._super = this;
        return new f();
    }
    })();
});

