function setup() { 
    createCanvas(800, 800);
    //two points, numbers in (x1, y1, x2, y2)
    
    background('lightblue');
    
    //ear
    fill('lightyellow');
    ellipse(400, 400, 700, 300);
    //head
    
    ellipse(400, 400, 600, 800);
        //eyes
            fill('red');
            ellipse(250, 350, 150, 50);
            ellipse(550, 350, 150, 50);
            fill(0);
            ellipse(250, 350, 50, 50);
            ellipse(550, 350, 50, 50);
        //toothleft
            fill('red');
            beginShape(TRIANGLES);
            vertex(300, 650);
            vertex(310, 700);
            vertex(320, 650);
            endShape();
        //toothright
            fill('red');
            beginShape(TRIANGLES);
            vertex(480, 650);
            vertex(490, 700);
            vertex(500, 650);
            endShape();
        //mouse
            
            strokeWeight(3);
            strokeCap(ROUND);
            line(300, 650, 500, 650);
        //eyebrown-right
            strokeWeight(15.0);
            line(470, 310, 670, 290);
        //eyebrown-left
            
            strokeWeight(15.0);
            line(170, 290, 330, 310);

        //hat-part1
            fill(50);
            stroke(0, 0, 0);
            line(0, 250, 1000, 330);
        //hat-part2
            beginShape();
            vertex(150, 0);
            vertex(650, 20);
            vertex(700, 300);
            vertex(100, 250);
            endShape(CLOSE);
            
            
}