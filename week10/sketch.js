// spaceships and arrays

var numSpaceships = 20;
var xPositions = [];
var yPositions = [];
var spaceshipsize = [];
var spaceshipSpeed = [];

function setup() { 
    createCanvas(720, 360);
    for (var i = 0; i < numSpaceships; i++) {
        xPositions[i] = random(0,width);
        yPositions[i] = random(0, height);
        spaceshipsize[i] = random(1, 10);
        spaceshipSpeed[i] = random(1, 10);

    }
}
    
function draw() {
    background('black');
    
    
    for (var i = 0; i < numSpaceships; i++) {
        ellipse(xPositions[i], yPositions[i], spaceshipsize[i]);
        xPositions[i] += spaceshipSpeed[i];
        if (xPositions[i] > width + spaceshipsize[i]/2) {
            xPositions[i] = -spaceshipsize[i]/2;
            yPositions[i] = random(0, height);
        }
    }

}
        

        

