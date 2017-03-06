// system variables
function setup() { 
    createCanvas(640, 640);
    //two points, numbers in (x1, y1, x2, y2)
   
    
}

function draw() {

    background("white");
     
    fill("white");
    stroke("black");
    rect(0, 0, 639, 639);
    fill("black");
    stroke("black");
    rect(0, 0, 320, 639);
    
    
    if (mouseX < 320){
        fill("white");
        ellipseMode(CENTER);
        ellipse(pmouseX, pmouseY, 100, 100);
        stroke("black");
    } else {
        fill("black");
        ellipse(pmouseX, pmouseY, 100, 100);
        stroke("white");


    }
    

    

    
    
}