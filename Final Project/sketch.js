var numSnow = 60;
var xPositions = [];
var yPositions = [];
var Snowsize = [];
var Snowspeed = [];
var song;
var slider;
var button;
var micButton;
var amp;
var volhistory = [];
var img;
var xx = 0.1, sizex = 720, sizey = 720;
var r, g, b;
var input, name;
var rot = 0;
//var mic;


 
//function micClose() {
    //if (mic.isOpening()) {
        //mic.pause();
        //button.html("OPEN");
    //} else {
        //mic.open();
        //button.html("CLOSE");
    //}
        
//}


function togglePlaying() {
    if (song.isPlaying()) {
        song.pause();
        button.html("play");
    } else {
        song.play();
        button.html("pause");
    }
        
}


function preload() {
    song = loadSound('MitiS - Ascension (Remix).mp3');
}


function setup() { 
    createCanvas(720, 720);
    img = loadImage("../images/mitis.jpeg");
    
    //mic = new p5.AudioIn();
    
    r = random(255);
    g = random(255);
    b = random(255);
    
    angleMode(DEGREES);
    
    //buttons
    var button = createButton("Login");
    button.mousePressed(addName);
    button.position(15, 220);
    button.class("bluebutton");
    input = createInput();
    input.position(15, 190);
    
    button = createButton("play");
    button.mousePressed(togglePlaying);
    
    //micButton = createButton("micClose");
    //micButton.mousePressed(micClose);
    
    slider = createSlider(0, 1, 0.5, 0.01);

    amp = new p5.Amplitude();

    //snow position
    for (var i = 0; i < numSnow; i++) {
        xPositions[i] = random(0, width);
        yPositions[i] = random(0, height);
        Snowsize[i] = random(1, 10);
        Snowspeed[i] = random(1, 5);

        }
}



function draw() {
    image(img, xx, xx, sizex, sizey);
    
    
    //var vol = mic.getLevel();

    //slinder
    song.setVolume(slider.value());
    
    //jumping amplitude
    push();
    var vol = amp.getLevel();
    volhistory.push(vol);
    noFill();
    strokeWeight(2);
    stroke(r, g, b);
    
    ellipse(width/2, height/2, 300*vol, 300*vol);
    ellipse(width/2, height/2, 1500*vol, 1500*vol);
    //ellipse(width/2, height/2, 3000*vol, 3000*vol);
    var currentY = map(vol, 0, 2, height, 0);
    translate(width/2, height/2);
    translate(0, height/1.1 -currentY);
    

    beginShape();
    for (var i = 0; i < 360; i++) {
        r = map(volhistory[i], 0, 1, 50, 1300);
        var x = r * cos(i);
        var y = r * sin(i);
        vertex(x, y);
    }
    endShape();

    if (volhistory.length > 360) {
        volhistory.splice(0, 1);
    }
    pop();
    
    //snow position
    noStroke();
    fill("white");
    for (var i = 0; i < numSnow; i++) {
        ellipse(xPositions[i], yPositions[i], Snowsize[i]);
        yPositions[i] += Snowspeed[i];
        if (yPositions[i] > height + Snowsize[i]/2) {
            yPositions[i] = -Snowsize[i]/2;
            xPositions[i] = random(0, width);
        }

        }
    
    //text
    translate(width/2, height/2);
    rotate(rot);
    fill(r, g, b);
    text(name, -50, 0);
    textSize(40);
}


function addName() {
    name = input.value();
}


function mousePressed() {
    var d = dist(mouseX, mouseY, width/2, height/2);
    if (d < 500) {
        r = random(255);
        g = random(255);
        b = random(255);
    }
}




