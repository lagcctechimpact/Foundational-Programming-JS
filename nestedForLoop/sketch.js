/*  
nested loop that draws rectangles to the canvas. 

Code by Dawn C. Hayes March, 2017
*/


function setup() {
	createCanvas(600, 400);
	background(0, 64, 135);
}

function draw() {
	strokeWeight(4);
	stroke(255);

	for (var i = 0; i <= width; i += 60) { // for every i add 60. Spaces rectangles out. 
		for (var j = 0; j <= height; j += 60) { // for every j add 60. Spaces rectangles out.
			fill(mouseX, random(255), mouseY); // fill based on a random value and the mouse position
			rect(i, j, 35, 35); // draw at i, j for each rectangle's x and y position. 
		}
	}
}