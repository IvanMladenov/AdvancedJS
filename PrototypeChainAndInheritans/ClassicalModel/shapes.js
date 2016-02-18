if (!Object.create) {
    Object.create = function (proto) {
        function F() {}
        F.prototype = proto;
        return new F();
    };
}

Object.prototype.extends = function (parent) {
    this.prototype = Object.create(parent.prototype);
    this.prototype.constructor = this;
};

var Point = (function(){
    function Point(x, y){
        this.x = x;
        this.y = y;

        return this;
    }

    Point.prototype.toString = function (){return 'Point(x:' + this.x + ', y:' + this.y + ')'};

    return Point;
})();

var shapesModule = (function(){
    var Shape = (function () {
        function Shape(color) {

            this.color = color;
            return this;
        }

        Shape.prototype.toString = function(){return this.constructor.name + ', color: ' + this.color};
        return Shape;
    })();

    var Circle = (function () {
        function Circle(centerPoint, radius, color) {
            Shape.call(this, color);
            this.center = centerPoint;
            this.radius = Number(radius);

            return this;
        }

        Circle.extends(Shape);
        Circle.prototype.toString = function (){
          return Shape.prototype.toString.call(this) +
                  ', radius = ' + this.radius +
                  ', center: ' + this.center.toString();
        };

        return Circle;
    })();

    var Rectangle = (function(){
        function Rectangle(topLeftPoint, width, heght, color){
            this.topLeft = topLeftPoint;
            this.width = Number(width);
            this.height = Number(heght);
            Shape.call(this, color);

            return this;
        }

        Rectangle.extends(Shape);
        Rectangle.prototype.toString = function (){
            return Shape.prototype.toString.call(this) +
                    ', Top lef corner: ' + this.topLeft +
                    ', width: ' + this.width +
                    ', height: ' + this.height;
        };

        return Rectangle;
    })();

    var Triangle = (function(){
        function Triangle(pointA, pointB, pointC, color){
            this.a = pointA;
            this.b = pointB;
            this.c = pointC;
            Shape.call(this, color);

            return this;
        }

        Triangle.extends(Shape);
        Triangle.prototype.toString = function (){
            return Shape.prototype.toString.call(this) + ' ' +
                    'A: ' + this.a.toString() + ' ' +
                    'B: ' + this.b.toString() + ' ' +
                    'C: ' + this.c.toString();
        };

        return Triangle;
    })();

    var Line = (function(){
        function Line(pointA, pointB, color){
            this.a = pointA;
            this.b = pointB;
            Shape.call(this, color);

            return this;
        }

        Line.extends(Shape);
        Line.prototype.toString = function (){
            return Shape.prototype.toString.call(this) +
                ', Start = ' + this.a +
                ', End =  ' + this.b;
        };

        return Line;
    })();

    var Segment = (function(){
        function Segment(pointA, pointB, color){
            this.a = pointA;
            this.b = pointB;
            Shape.call(this, color);

            return this;
        }

        Segment.extends(Shape);
        Segment.prototype.toString = function (){
            return Shape.prototype.toString.call(this) +
                ', A = ' + this.a +
                ', B = ' + this.b;
        };

        return Segment;
    })();

    return {
        circle: Circle,
        rectangle: Rectangle,
        triangle: Triangle,
        line: Line,
        segment: Segment
    }
})();

var circle = new shapesModule.circle(new Point(3, 5), 12, 'ff0000'),
    rectangle =  new shapesModule.rectangle(new Point(10, 20), 20, 15, 'ffcc00'),
    triangle = new shapesModule.triangle(new Point(3, 5), new Point(3, 15), new Point(15, 0), 'e6b800'),
    line = new shapesModule.line(new Point(5, 5), new Point(10, 5), '1a1400'),
    segment = new shapesModule.segment(new Point(5, 5), new Point(10, 5), '1a1400');

console.log(circle.toString());
<<<<<<< HEAD
//console.log(rectangle);
=======
console.log(rectangle.toString());
>>>>>>> 283b4621c52b646233e9b5a85c935fd230763182
console.log(triangle.toString());
console.log(line.toString());
console.log(segment.toString());
