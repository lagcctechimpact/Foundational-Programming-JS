/* 
Example that moves drawn shapes across the canvas/window in different directions using variables and incrementors in the draw() loop.
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

var recX = 100;
var recY = 300;
var recStroke = 35;
var recCol = 0;
var recSize = 75;



function setup() {  
	createCanvas(400, 400); 
}


function draw() {
	background(canvBG); 
	stroke(circStroke); 
	fill(circR, circG, circB);  
	stroke(circStroke);  
	ellipse(circX, circY, circSize, circSize); 
	ellipse(circX + 50, circY - 75, circSize, circSize); // by adding + 50 and -75, the position of the ellipse is offset against the other.
	fill(circR, circG, circB, 135); 
	
	circX = circX + 3; // in the draw() loop, this statement will increment the value of circX by 3.
					   // this gives the appearance of animation that draws the ellipse at circX + 3 each time the code is completed. 
					   // it will then draw the ellipse at the new location after the code is executed. 
					   // this statement also introduces an incrementor, +, that takes a value, adds it to another and assigns it to the variable.
					   
    stroke(recStroke);
    fill(recCol);
    rect(recX, recY, recSize, recSize);
    
    recY = recY - 2; // use a - incrementor to make the rectangle appear to move up on the canvas.
    

}