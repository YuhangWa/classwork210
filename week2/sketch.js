function setup() { 
    createCanvas(640, 640);
    //two points, numbers in (x1, y1, x2, y2)
    
    var w = color(249);
    var g = color(51);
    var b = color(0);
    var s = color(165, 165, 157);
    var blue = color(104, 182, 255);
    var r = color(255, 0, 0);
    var darkblue = color(0, 67, 255);
    var y = color(255, 242, 0);
    
    // rect one
    var rectpoint1 = (100);
    var rectpoint2 = (20);
    var rectpoint3 = (350);
    var rectpoint4 = (600);
    var radius = (30);
    
    //rect two
    var rectpoint5 = (110);
    var rectpoint6 = (80);
    var rectpoint7 = (330);
    var rectpoint8 = (470);
    
    //topofiphone
    var epoint1 = (210);
    var epoint2 = (55);
    var epoint3 = (12);
    var epoint4 = (12);
    
    //topofiphone line
    var lpoint1 = (240);
    var lpoint2 = (53);
    var lpoint3 = (320);
    var lpoint4 = (53);
    var lstrokeweight = (7.0);
    
    //topofiphone
    var epoint5 = (280);
    var epoint6 = (35);
    var epoint7 = (3);
    var epoint8 = (3);
    
    //buttom of iphone
    var epoint9 = (275);
    var epoint10 = (585);
    var epoint11 = (50);
    var epoint12 = (50);
    
    //apps 
    var rect1 = (140);
    var rect2 = (110);
    var rect3 = (50);
    var rect4 = (50);
    var rect5 = (15);
    
    var rect6 = (215);
    var rect7 = (110);
    var rect8 = (50);
    var rect9 = (50);
    
    var rect10 = (290);
    var rect11 = (110);
    var rect12 = (50);
    var rect13 = (50);
    
    background(g);
    
    fill(w);
    stroke(w);
    rect(rectpoint1, rectpoint2, rectpoint3, rectpoint4, radius);
    
    
    fill(b);
    rect(rectpoint5, rectpoint6, rectpoint7, rectpoint8);
    
    fill(b);
    stroke(b);
    ellipse(epoint1, epoint2, epoint3, epoint4);
    
    strokeWeight(lstrokeweight);
    strokeCap(ROUND);
    line(lpoint1, lpoint2, lpoint3, lpoint4);
    
    fill(b);
    stroke(b);
    ellipse(epoint5, epoint6, epoint7, epoint8);
    
    fill(w);
    stroke(s);
    ellipse(epoint9, epoint10, epoint11, epoint12);
    
    fill(darkblue);
    stroke(w);
    rect(rect1, rect2, rect3, rect4, rect5);
    
    fill(r);
    stroke(w);
    rect(rect6, rect7, rect8, rect9, rect5);
    
    fill(y);
    stroke(w);
    rect(rect10, rect11, rect12, rect13, rect5);
    
}
    
    