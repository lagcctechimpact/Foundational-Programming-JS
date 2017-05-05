// creating html in javscript using p5
// code by Dawn C. Hayes March 2017

var para; 

function setup() {
  createCanvas(600, 400);
  para = createP('This paragraph is generated using P5!'); // uses a global variable.
  createP('Another paragraph generated in Javascript.'); // does not use a global variable. 
}

function draw() {
  background(255, 0, 0);
  for (i = 0; i < width; i++) {
    strokeWeight(2);
    stroke(255, 255, 255);
    line(i * 50 + 50, 0, i * 50 + 50, height);
  }
}