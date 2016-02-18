Object.prototype.extend = function(properties) {
    function F() {}
    F.prototype = Object.create(this);
    for (var prop in properties) {
        F.prototype[prop] = properties[prop];
    }
    F.prototype._super = this;
    return new F();
};

var Point = {
    init: function(x, y){
        this.x = x;
        this.y = y;
        return this;
    },
    toString: function(){
        return 'Point(' + 'x = ' + this.x + ', y = ' + this.y + ')'
    }
};

var shapeModule = (function(){
    var Shape = {
        init: function init(color){
            this.color = color;
            return this;
        },
        toString: function(){
            return 'color = ' + this.color;
        }
    };

    var Circle = Shape.extend({
        init: function init(color, center, radius){
            this._super.init.call(this, color);
            this.center = center;
            this.radius = radius;

            return this;
        },
        toString: function(){
            return 'Circle: ' + this._super.toString.call(this) +
                ', center = ' + this.center.toString() +
                ', radius = ' + this.radius;
        }
    });


    var Rectangle = Shape.extend({
        init: function init(color, topLeftPoint, width, height){
            this.topLeft = topLeftPoint;
            this.width = width;
            this.height = height;
            this._super.init.call(this, color);

            return this;
        },
        toString: function(){
            return 'Rectangle: ' + this._super.toString.call(this) +
                ', topLeftPoint = ' + this.topLeft.toString() +
                ', width = ' + this.width +
                ', height = ' + this.height;
        }
    });

    var Triangle = Shape.extend({
        init: function init(color, pointA, pointB, pointC){
            this.pointA = pointA;
            this.pointB = pointB;
            this.pointC = pointC;
            this._super.init.call(this, color);

            return this;
        },
        toString: function(){
            return 'Triangle: ' + this._super.toString.call(this) +
                ', A = ' + this.pointA.toString() +
                ', B = ' + this.pointB.toString() +
                ', C = ' + this.pointC.toString();
        }
    });

    var Line = Shape.extend({
        init: function init(color, pointA, pointB){
            this.pointA = pointA;
            this.pointB = pointB;
            this._super.init.call(this, color);

            return this;
        },
        toString: function(){
            return 'Line: ' + this._super.toString.call(this) +
                ', Start = ' + this.pointA.toString() +
                ', End = ' + this.pointB.toString();
        }
    });

    var Segment = Shape.extend({
        init: function init(color, pointA, pointB){
            this.pointA = pointA;
            this.pointB = pointB;
            this._super.init.call(this, color);

            return this;
        },
        toString: function(){
            return 'Segment: ' + this._super.toString.call(this) +
                ', Start = ' + this.pointA.toString() +
                ', End = ' + this.pointB.toString();
        }
    });

    return {
        line: Line,
        circle: Circle,
        rectangle: Rectangle,
        triangle: Triangle,
        segment: Segment
    }
})();

var circle = shapeModule.circle.init('green', Point.init(5, 10), 25);
var rectangle = shapeModule.rectangle.init('white', Point.init(10, 20), 30, 50.5);
var triangle = shapeModule.triangle.init('pink', Point.init(5, 0), Point.init(10, 0), Point.init(7.5, 12.175));
var line = shapeModule.line.init('blue', Point.init(4, 6), Point.init(10, 15));
var segment = shapeModule.segment.init('brown', Point.init(12.7, 6.78), Point.init(155, -37));

console.log(circle.toString());
console.log(rectangle.toString());
console.log(triangle.toString());
console.log(line.toString());
console.log(segment.toString());



