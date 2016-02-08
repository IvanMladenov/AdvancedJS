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
    }

    return Point;
})();

var shapesModule = (function(){
    var Shape = (function () {
        function Shape(color) {

            this.color = color;
        }

        Shape.prototype.toString = function(){return this.constructor.name + ', color: ' + this.color};
        return Shape;
    })();

    var Circle = (function () {
        function Circle(centerPoint, radius, color) {
            Shape.call(this, color);
            this.center = centerPoint;
            this.radius = Number(radius);
        }

        Circle.extends(Shape);

        return Circle;
    })();

    var Rectangle = (function(){
        function Rectangle(topLeftPoint, width, heght, color){
            this.topLeft = topLeftPoint;
            this.width = Number(width);
            this.height = Number(heght);
            Shape.call(this, color);
        }

        Rectangle.extends(Shape);

        return Rectangle;
    })();

    var Triangle = (function(){
        function Triangle(pointA, pointB, pointC, color){
            this.a = pointA;
            this.b = pointB;
            this.c = pointC;
            Shape.call(this, color);
        }

        Triangle.extends(Shape);

        return Triangle;
    })();

    var Line = (function(){
        function Line(pointA, pointB, color){
            this.a = pointA;
            this.b = pointB;
            Shape.call(this, color);
        }

        Line.extends(Shape);

        return Line;
    })();

    var Segment = (function(){
        function Segment(pointA, pointB, color){
            this.a = pointA;
            this.b = pointB;
            Shape.call(this, color);
        }

        Segment.extends(Shape);

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
    rectangle =  shapesModule.rectangle(new Point(10, 20), 20, 15, 'ffcc00'),
    triangle = new shapesModule.triangle(new Point(3, 5), new Point(3, 15), new Point(15, 0), 'e6b800'),
    line = new shapesModule.line(new Point(5, 5), new Point(10, 5), '1a1400'),
    segment = new shapesModule.segment(new Point(5, 5), new Point(10, 5), '1a1400');

console.log(circle.toString());
console.log(rectangle);
console.log(triangle.toString());
console.log(line.toString());
console.log(segment.toString());
