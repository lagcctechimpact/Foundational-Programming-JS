/* 
Example that uses mousePressed() to demonstrate event-driven programming. The background shape's color changes when the mouse is pressed.
	
Created by Dawn C. Hayes March 2017. 
*/

var diam = 200;
var bgCol = 255;
var bgSwitch = 0;

function setup() {
	createCanvas(400, 400);
	background(bgCol);
	noStroke();
	fill(255, 0, 0);
	ellipse(width / 2, height / 2, diam, diam);
}


function draw() {

	// noStroke();
	// fill(255, 0, 0);
	// ellipse(width / 2, height / 2, diam, diam);
}

function mousePressed() { // the mousePressed() function executes once when the mouse is pressed.
                          // mousePressed() is a reserved function built into P5. You only need to call it and include code to be executed.
	background(bgSwitch);
	noStroke();
	fill(0, 0, 255);
	ellipse(width / 2, height / 2, diam, diam);
}