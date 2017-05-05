// callbacks
// code by Dawn C. Hayes March 2017

var resetButton;

function setup() {
  createCanvas(600, 400);
  meteor = {
    xpos: 0,
    ypos: 0,
    diam: 5,
    ht: 5,
    col: 255,
    speedx: 1,
    speedy: 1.75,
  }

  resetButton = createButton('reset');
  resetButton = resetButton.mousePressed(resetAnimation);
}

function draw() {
  background(0, 0, 100, 55);
  noStroke();
  fill(meteor.col);
  ellipse(meteor.xpos, meteor.ypos, meteor.diam, meteor.ht);

  meteor.xpos = meteor.xpos + meteor.speedx;
  meteor.ypos = meteor.ypos + meteor.speedy;

  if (meteor.ypos > height) {
    noStroke;
    fill(0);
    rect(0, 380, width, width);
  }
}

function resetAnimation() {
  meteor.xpos = 0;
  meteor.ypos = 0;
}