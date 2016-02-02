/**
 * Created by Ivan on 2.2.2016 г..
 */

function printArgsInfo (){
    var type;

    for (var i = 0; i < arguments.length; i++) {
        type = typeof arguments[i];
        if (Array.isArray(arguments[i])){
            type = 'array';
        }

        console.log(arguments[i] + ' (' + type + ' )')

    }
    console.log();
}

printArgsInfo(2, 3, 2.5, -110.5564, false);
printArgsInfo(null, undefined, "", 0, [], {});
printArgsInfo([1, 2], ["string", "array"], ["single value"]);
printArgsInfo("some string", [1, 2], ["string", "array"], ["mixed", 2, false, "array"], {name: "Peter", age: 20});
printArgsInfo([[1, [2, [3, [4, 5]]]], ["string", "array"]]);