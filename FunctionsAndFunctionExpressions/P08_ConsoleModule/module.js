/**
 * Created by Ivan on 4.2.2016 г..
 */

var specialConsole = (function(){

    function formatText(msg, args){
        var reg = /{(\d+)}/g,
            mach;

        while (mach = reg.exec(msg)){
            var index = Number(mach[1]),
                replacement = args[index];

            if (replacement===undefined){
                console.log("Wrong number of arguments");
                return null;
            }

            msg = msg.replace(mach[0], args[index].toString());
        }

        return msg;
    }

    function writeLine() {
        var output;
        if (arguments.length===1){
            output = arguments[0];
        }else {
            var msg = arguments[0];
            Array.prototype.shift.apply(arguments);
            output = formatText(msg, arguments);
        }

        if (output!==null){
            console.log(output);
        }
    }

    function writeError(){
        var output;
        if (arguments.length===1){
            output = arguments[0];
        }else {
            var msg = arguments[0];
            Array.prototype.shift.apply(arguments);
            output = formatText(msg, arguments);
        }

        if (output!==null){
            console.log(output);
        }
    }

    function writeWarning(){
        var output;
        if (arguments.length===1){
            output = arguments[0];
        }else {
            var msg = arguments[0];
            Array.prototype.shift.apply(arguments);
            output = formatText(msg, arguments);
        }

        if (output!==null){
            console.log(output);
        }
    }

    function writeInfo(){
        var output;
        if (arguments.length===1){
            output = arguments[0];
        }else {
            var msg = arguments[0];
            Array.prototype.shift.apply(arguments);
            output = formatText(msg, arguments);
        }

        if (output!==null){
            console.log(output);
        }
    }

    return {
        writeLine: writeLine,
        writeError: writeError,
        writeWarning: writeWarning,
        writeInfo: writeInfo
    }
})();

specialConsole.writeLine("Message: hello");
specialConsole.writeLine("Message: {0}", "hello");
specialConsole.writeLine("Object: {0}", { name: "Gosho", toString: function() { return this.name }});
specialConsole.writeError("Error: {0}", "A fatal error has occurred.");
specialConsole.writeWarning("Warning: {0}", "You are not allowed to do that!");
specialConsole.writeInfo("Info: {0}", "Hi there! Here is some info for you.");
specialConsole.writeError("Error object: {0}", { msg: "An error happened", toString: function() { return this.msg }});
