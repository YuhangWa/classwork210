// system variables
function setup() { 
    createCanvas(640, 480);
    //two points, numbers in (x1, y1, x2, y2)
}

function draw() {
    background(220);
    
    
    var ww = width/5;   //windowwidth
    var wh = height/2;  //windowheight
    
    for ( var x = ww/4; x < width; x+=ww) {
     for ( var y = wh/4; y < height; y+=wh) {   
        
         //Stroke();
         fill(86, 34, 18);
         rect(x, y, ww/2, wh/2);
         
         
         fill(255, 161, 114);
         rect(x + 6, y, ww/2.5, wh/3.5);
         rect(x + 6, y + wh/8 * 2.5, ww/2.5, wh/6);
         

         
         
         fill("white");
         rect(x + 1, y + 100, ww/2.1, wh/180);
         rect(x + 1, y + 103, ww/2.1, wh/180);
         rect(x + 1, y + 106, ww/2.1, wh/180);
         rect(x + 1, y + 109, ww/2.1, wh/180);
         rect(x + 1, y + 112, ww/2.1, wh/180);


      }
        
    }

    
}