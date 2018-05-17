let backG;

function setup() {
  createCanvas(windowWidth, 1000, WEBGL);
}

function draw() {
  background(200);
  rotateY(frameCount * 0.001);
  cylinder(500, 200);
}
