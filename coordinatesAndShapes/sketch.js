/* 
Example that demonstrates coordinates and shapes.
Created by Dawn C. Hayes March 2017. 
*/

function setup() {  
  createCanvas(400, 400); // the canvas is set in setup() using createCanvas() as it only needs to be initialized once. 
  						  // createCanvas() takes two arguments, a width and a height.
}

// an ellipse is draw at an x position of 250 and a y position of 175 with a width of 50 and a height of 50.
function draw() { 
  background(125, 0, 125);
  stroke(0, 0, 255); 
  strokeWeight(2);   
  fill(0, 0, 255);   
  rect(250, 175, 75, 75); // the coordinate system for computer graphics and the screen begins with 0, 0 at the upper left-hand corner. 
  							 // positive move from left to right, top to bottom. 
  							 // see http://p5js.org/reference/ for examples and explanations of arguments for various shape functions. See: Shape
 
}