var freqA = 247;
var freqS = 278;
var freqD = 311;
var freqF = 330;

var oscA, oscS, oscD, oscF;
var playingA, playingS, playingD, playingF = false;
var playing = false;
var value = 255;
var box = 0;
var ed = false;

function preload () {
  img = loadImage ('ed.png') 
}

function setup() {
  createCanvas(400,400);
  backgroundColor = color(51, 204, 255);
  textAlign(CENTER);
  
  oscA = new p5.Oscillator();
  oscA.setType('triangle');
  oscA.freq(freqA);
  oscA.amp(0);
  oscA.start();
  
  oscS = new p5.Oscillator();
  oscS.setType('triangle');
  oscS.freq(freqS);
  oscS.amp(0);
  oscS.start();
  
  oscD = new p5.Oscillator();
  oscD.setType('triangle');
  oscD.freq(freqD);
  oscD.amp(0);
  oscD.start();
  
  oscF = new p5.Oscillator();
  oscF.setType('triangle');
  oscF.freq(freqF);
  oscF.amp(0);
  oscF.start();
}

function draw() {
  if (playing) {
    background(51, 204, 255);
    fill(box+20,box-50,box+40);
    noStroke();arc(width/2, height/2, width, height, width, PI + box, PIE);
  } 
  
  else {
    background(255);
  }
  
  text('shape of pacman - ed sherran', 260, height/2, 100);
    
  if (mouseIsPressed) {
   image(img, mouseX, mouseY);
 }
}

function keyPressed() {
  text("got key press for ", key);
  var osc;
  if (key == 'A') {
    osc = oscA;
    box=50;
  } else if (key == 'S') {
    osc = oscS;
    box=100;
  } else if (key == 'D') {
    osc = oscD;
    box=150;
  } else if (key == 'F') {
    osc = oscF;
    box=200;
  }
  if (osc) {
    osc.amp(0.5, 0.1);
    playing = true;
    var playingA, playingS, playingD, playingF = true;
  }
}

function keyReleased() {
  print("got key release for ", key);
  var osc;
  if (key == 'A') {
    osc = oscA;
  } else if (key == 'S') {
    osc = oscS;
  } else if (key == 'D') {
    osc = oscD;
  } else if (key == 'F') {
    osc = oscF;
  }
  if (osc) {
    osc.amp(0, 0.5);
    playing = false;
    var playingA, playingS, playingD, playingF = false;
  }
}

function mousePressed() {
 ed = true;

}

function mouseReleased() {
 ed = false;
}
