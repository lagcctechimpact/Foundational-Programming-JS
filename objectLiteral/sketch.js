/* 
Example with shapes across the canvas/window using object literal notation.
Created by Dawn C. Hayes March 2017. 
*/

// the code below creates a circle using object literal notation. Everything inside the brackets is local in scope
// and is accessed with dot syntax. 
var circle = {
	x: 200,
	y: 200,
	diam: 50,
	r: 255,
	g: 123,
	b: 25
}

/*
the same circle could be drawn using variables, but objects enable modularity and resuability in code. 
code can also be written in fewer lines. for instance:

var circlex = 200;
var circley = 200;
var diam = 50;
var circler = 255;
var circleg = 123;
var circleb = 25;

function setup() {
	createCanvas(400, 400);
}


function draw() {
	background(34, 123, 218);
	noStroke();
	fill(circler, circleg, circleb);
	ellipse(circlex, circley, diam, diam);
	
}

// compare this to code organized with an object.
*/

function setup() {
	createCanvas(400, 400);
}


function draw() {
	background(34, 123, 218);
	noStroke();
	fill(circle.r, circle.g, circle.b);
	ellipse(circle.x, circle.y, circle.diam, circle.diam);
	
}