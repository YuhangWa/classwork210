var numSnow = 60;
var xPositions = [];
var yPositions = [];
var Snowsize = [];
var Snowspeed = [];
var rot = 0;
var input, name;

function setup() { 
    createCanvas(720, 520);

    
    var button = createButton("Login");
    button.mousePressed(addName);
    button.parent("sketch");
    button.position(100, 160);
    button.class("bluebutton");
    
    input = createInput();
    input.parent("sketch");
    inout.position(100, 160);
    
    for (var i = 0; i < numSnow; i++) {
        xPositions[i] = random(0, width);
        yPositions[i] = random(0, height);
        Snowsize[i] = random(1, 10);
        Snowspeed[i] = random(1, 5);

    }



}

    
function draw() {
    background('black');

    
    
    for (var i = 0; i < numSnow; i++) {
        ellipse(xPositions[i], yPositions[i], Snowsize[i]);
        yPositions[i] += Snowspeed[i];
        if (yPositions[i] > height + Snowsize[i]/2) {
            yPositions[i] = -Snowsize[i]/2;
            xPositions[i] = random(0, width);
        }
    }

    translate(width/2, height/2);
    rotate(rot);
    fill("white");
    text(name, 0, 0);
}



function addName() {
    name = input.value();
}
   