function startsWith(key){
    var index = this.indexOf(key);

    return index===0;
}

function endsWith(key){
    var index = this.lastIndexOf(key);
    var expected = this.length-key.length;

    return index===expected;
}

function left(count){
    return count<this.length?this.substr(0, count):this.toString();
}

function right(count){
    return count<this.length?this.substr(this.length-count, count):this.toString();
}

function padLeft(){
    var char = arguments[1]||' ';
    var count = arguments[0];
    return char.repeat(count) + this;
}

function padRight(){
    var char = arguments[1]||' ';
    var count = arguments[0];
    return this + char.repeat(count);
}

function repeat(count){
    return Array(count+1).join(this);
}

String.prototype.startsWith = startsWith;
String.prototype.endsWith = endsWith;
String.prototype.left = left;
String.prototype.right = right;
String.prototype.repeat = repeat;
String.prototype.padLeft = padLeft;
String.prototype.padRight = padRight;

var example = "This is an example string used only for demonstration purposes.";
console.log(example.startsWith("This"));
console.log(example.startsWith("this"));
console.log(example.startsWith("other"));
console.log();

example = "This is an example string used only for demonstration purposes.";
console.log(example.endsWith("poses."));
console.log(example.endsWith ("example"));
console.log(example.startsWith("something else"));
console.log();

example = "This is an example string used only for demonstration purposes.";
console.log(example.left(9));
console.log(example.left(90));
console.log();

example = "This is an example string used only for demonstration purposes.";
console.log(example.right(9));
console.log(example.right(90));
console.log();

// Combinations must also work
example = "abcdefgh";
console.log(example.left(5).right(2));
console.log();

var hello = "hello";
console.log(hello.padLeft(5));
console.log(hello.padLeft(10));
console.log(hello.padLeft(5, "."));
console.log(hello.padLeft(10, "."));
console.log(hello.padLeft(2, "."));
console.log();

hello = "hello";
console.log(hello.padRight(5));
console.log(hello.padRight(10));
console.log(hello.padRight(5, "."));
console.log(hello.padRight(10, "."));
console.log(hello.padRight(2, "."));
console.log();

var character = "*";
console.log(character.repeat(5));
// Alternative syntax
console.log("~".repeat(3));
console.log();

// Another combination
console.log("*".repeat(5).padLeft(10, "-").padRight(15, "+"));




