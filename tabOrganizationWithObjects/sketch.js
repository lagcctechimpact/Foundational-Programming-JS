/* 
Example with multiple shapes across the canvas/window using object literal notation placed in tabs for organization.
Code that references the circle and rectangle are in their own tabs, linked in the HTML document:
<script src="circle.js" type="text/javascript"></script>
<script src="rectangle.js" type="text/javascript"></script>
	
Created by Dawn C. Hayes March 2017. 
*/


function setup() {
	createCanvas(400, 400);
}


function draw() {
	background(34, 123, 218);
	noStroke();
	fill(circle.r, circle.g, circle.b);
	ellipse(circle.x, circle.y, circle.diam, circle.diam);
	fill(rectangle.r, rectangle.g, rectangle.b);
	rect(rectangle.x, rectangle.y, rectangle.diam, rectangle.diam);
}