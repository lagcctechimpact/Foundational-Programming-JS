/* 
Example that moves drawn ellipses across the canvas/window using variables in the draw() loop.
Created by Dawn C. Hayes March 2017. 
*/

var circX; 
circX = 200; 
var circY;  
circY = 200; 
var circStroke = 125; 
var circR = 55; 
var circG = 135; 
var circB = 225; 
var circSize = 75;
canvBG = 125, 55, 255; 

function setup() {  
	createCanvas(400, 400); 
}


function draw() {
	background(canvBG); 
	stroke(circStroke); 
	fill(circR, circG, circB);  
	stroke(circStroke);  
	ellipse(circX, circY, circSize, circSize); 
	ellipse(circX + 50, circY - 75, circSize, circSize); 
	fill(circR, circG, circB, 135); 
	
	circX = circX + 3; // in the draw() loop, this statement will increment the value of circX by 3.
					   // this gives the appearance of animation that draws the ellipse at circX + 3 each time the code is completed. 
					   // it will then draw the ellipse at the new location after the code is executed. 
					   // this statement also introduces an incrementor, +, that takes a value, adds it to another and assigns it to the variable. 

}