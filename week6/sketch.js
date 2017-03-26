// system variables
var r = 1;
var xxx = 70;

function setup() { 
    createCanvas(640, 640);
    //two points, numbers in (x1, y1, x2, y2)
}

function draw() {
    background(0);
 
    var ts = 230;
    var tsize = 30;
    var lineNumber = 1;
    
   
    var r = random(0, 255);
    var g = random(0, 255);
    var b = random(0, 255);
    
    
    textSize(ts);
    textFont("Copperplate");
    textAlign(CENTER);
    
    noStroke();
    //rect(320, 240, 70, 12);
    
    var y = 120;
    var x = 290;
    var yy = 60;
    var xx = 320;

    //logo
    fill(r, g, b);
    strokeWeight(15);
    stroke("white");
    
    
    textStyle(ITALIC);
    lineNumber += 0;
    text("Y  H", x, y + ts*lineNumber);
    
    
    
    
    //bottom
    textSize(tsize);
    textFont("Copperplate");
    
    
    fill("white");
    strokeWeight(5);
    stroke("black");
    
    
    textStyle(BOLD)
    lineNumber += 1;
    text("Yuhang Wang", xx, yy + ts*lineNumber);
    
    
    
    
    
    
    
    //lines lp means linepoints
    var lps1 = 70;
    var lps2 = 400;
    var lps3 = 550;
    var lps4 = 400;
    
    
    
    var lps5 = 320;
    var lps6 = 80;
    var lps7 = 320;
    var lps8 = 460;
    
    
    stroke("white");
    line(lps1, lps2, lps3, lps4);
    line(lps5, lps6, lps7, lps8);
    
    ellipse(xxx, 400, 20, 20);
    xxx += 5;
    
    if (xxx > 550) {
        xxx = 70;
    }
        
}
