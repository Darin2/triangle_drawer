let r=0;
let g=200;
let b=20;

function setup() {
 createCanvas(1400,600);
 background(204);
}

function draw() {
  if (mouseIsPressed){
    fill(r, g, b);
    translate(mouseX, mouseY);
    triangle (0,120,60,0,120,120);
  }
}
