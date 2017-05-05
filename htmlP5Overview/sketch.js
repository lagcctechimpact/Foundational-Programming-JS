// htmlP5Overview 
// code by Dawn C. Hayes March 2017.


function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(255, 0, 0);
  for (i = 0; i < width; i++) {
    strokeWeight(2);
    stroke(255, 255, 255);
    line(i * 50 + 50, 0, i * 50 + 50, height);
  }
}