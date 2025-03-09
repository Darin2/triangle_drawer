//create variables for the colors. they can go up to 255
let r=0; //red value
let g=200; //green value 
let b=20; //blue value

//create a function to setup the canvas
function setup() {
 createCanvas(1400,600); //make the canvas 1400px by 600px
 background(204); //set the background color to a light gray (increase to make it darker)
}

//create a function to draw the triangle  
function draw() {
  if (mouseIsPressed){
    fill(r, g, b); //fill the triangle with the colors
    translate(mouseX, mouseY); //translate the triangle to the mouse position
    triangle (0,120,60,0,120,120); //draw the triangle
  }
}
