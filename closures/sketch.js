// closures. 
// code by Dawn C. Hayes March 2017.

var x = 50;
var y = 0;
var speed = 3;
var diam = 5;
var greeting1;
var greeting2;

function setup() {
  createCanvas(600, 400);
  greeting1 = createP('Howdy!');
  greeting2 = createP('Yo!');

  createGreeting(greeting1, 250);
  createGreeting(greeting2, 2000);

}

function draw() {
  background(0, 0, 100, 55);
  noStroke();
  fill(255);
  ellipse(x, y, diam, diam);
  x++;
  y++;
  
  if (x > 250) {
    noStroke();
    fill(255, 0, 0);
    ellipse(x, y, diam, diam);
  }
}

function createGreeting(elt, wait) {
  var message = ["Wait for it..."];
  setInterval(timeIt, wait);

  function timeIt() {
    elt.html(message);
  }
}