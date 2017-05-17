// dom button
var r = 255, g = 255, b = 255;
var rot = 0;

function setup() { 
    var canvas = createCanvas(640, 480);
    canvas.parent("container");
    //two points, numbers in (x1, y1, x2, y2)
    
    var button = createButton("Rotate the rectangle");
    button.mousePressed(rotateRect);
    button.parent("sketch");
    button.pisition(24, 24);
    
}

function draw() {
    background('black');
    translate(width/2, height/2);
    rotate(rot);
    rect(0, 0, 50, 50);
}

function rotateRect() {
    rot += 0.1;
}

        

        

