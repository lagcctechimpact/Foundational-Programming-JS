/* 
6.4 p5.js The Constructor Function 
Code for https://vimeo.com/channels/learningp5js/141211393
*/

var stars = []; // declare an empty array.
var moonx = 25;
var moony = 370;
var diam = 50;
var speed = 0.25; // global variable to show distinction between Star constructor's local variable.

function setup() {
	createCanvas(600, 400);
	for (var i = 0; i < 200; i++) { // loop and increment from 0 to 200.
		stars[i] = new Star(); // make a new star from the Star constructor basd on the size of the array.
	}

}

function draw() {
	background(0);
	for (var i = 0; i < stars.length; i++) { // display the stars.

		stars[i].display();
	}
	noStroke();
	fill(200, 200, 155);
	ellipse(moonx, moony, diam, diam); 
	moonx = moonx + speed; 
	moony = moony - speed;

}

//constructor function
function Star() {
	this.x = random(0, width); // constrain to the window width.
	this.y = random(0, height); // constrain to the window height.

	this.display = function() {
		stroke(random(255)); // random grayscale for twinkle effect.
		noFill();
		point(this.x, this.y); // the referenced object's x and y position.
	}
}