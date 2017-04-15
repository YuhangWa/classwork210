
function setup() {
    createCanvas(640, 640);
    background(255);
    
    
    var numberOfRectangles = 400;
    var columns = Math.sqrt(numberOfRectangles);
    var rows = Math.sqrt(numberOfRectangles);
    
    
    var w = width / columns;
    var h = height / rows;

    for (var x = 0; x <= width; x += w) {
        for (var y = 0; y <= height; y += h) {
            
            var r, g, b;
            var tempX = x;
            var tempW = w;
            var tempH = h;
            
            noStroke();
            if (y < height/4) {
                // random firework blue color
                r = random(100, 255);
                g = random(100, 255);
                b = random(100, 255);
                //random firework size 
                w = random(50, 100);
            } else if (y > height * 3/4) {
                // random people color
                r = random(0, 40);
                g = random(0, 40);
                b = random(0, 40);
                // random people size
                w = h = random(70, 100);
            } else {
                // random sky color
                r = random(0, 2);
                g = random(0, 2);
                b = random(0, 70);
            }
            
            
            // all of the color fills
            fill(r,g, b);            
            
            if ( y > height * 3/4) {
                // people

                ellipse(x, y, w/1.5, h/1.5);
            } else {
                // sky
                rect(x, y, w, h);   
           }
            
            x = tempX;
            w = tempW;
            h = tempH;
        }
    }
}
