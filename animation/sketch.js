let kitten;
let add;

function preload() {
  kitten = loadImage('../animation/kittens/kitten.jpg');
}

function setup() {
  //createCanvas(1000, 1000, WEBGL);
  add = 0;
  createCanvas(window.innerWidth, 800, WEBGL);
}

function draw() {
  background(200);
  console.log(frameCount);
  if(mouseX<((window.innerWidth)/2)){
    add = add+0.01;
    rotateY(add);
  }
  else{
    add = add-0.01;
    rotateY(add);
  }
  console.log(add);
  cylinder(500, 100);
  texture(kitten);
}
