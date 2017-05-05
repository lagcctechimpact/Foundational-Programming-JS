/* 
Example that uses variables instead of hard-coded values.
Created by Dawn C. Hayes March 2017. 
*/

var circX; // declare and initialize a variable. in this case the name of the circle's x position is circX.
circX = 200; // assign a value to a variable. the name and value is determined by the creator. in this case, the value is 200.
var circY;   // name the circle's y variable.
circY = 200; // assign a value to circleY. 
var circStroke = 125; // assign a value to set the grayscale color for the circle's outline. 
var circR = 55; // a value to assign the r spot in an RGB set of arguments.
var circG = 135; // a value to assign the g spot in an RGB set of arguments.
var circB = 225; // a value to assign the b spot in an RGB set of arguments.
var circSize = 75; // a value for the circle's width and height. These are the last two arguments in the ellipse function.
canvBG = 125, 55, 255; // a variable can be named and have multiple values assigned when separated by commas. 

function setup() {  
	createCanvas(400, 400); 
}


function draw() {
	background(canvBG); // fill in the arguments with the variables. 
	stroke(circStroke); 
	fill(circR, circG, circB);  
	stroke(circStroke);  
	ellipse(circX, circY, circSize, circSize); 
	ellipse(circX + 50, circY - 75, circSize, circSize); 
	fill(circR, circG, circB, 135); 

}