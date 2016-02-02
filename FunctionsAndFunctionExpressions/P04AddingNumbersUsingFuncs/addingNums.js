/**
 * Created by Ivan on 2.2.2016 г..
 */

var add = (function(){
    var sum = 0;

    function increment(number){
        sum+=number;
        return increment;
    }

    increment.toString = function(){
        return sum;
    };

    return increment;
})();

var addTwo = add(1)(1)(1)(1)(1)(1);

console.log(addTwo.toString()); //print value of sum
console.log(addTwo(3).toString()); //add 3 to sum via variable addTwo