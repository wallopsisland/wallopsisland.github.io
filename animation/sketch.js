let kitten;
let add;

function preload() {
  kitten = loadImage('../animation/Design.jpeg');
}

function setup() {
  //createCanvas(1000, 1000, WEBGL);
  add = 0;
  createCanvas(window.innerWidth, 800, WEBGL);
  scale(0.25);
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
  cylinder(1303/3.4, 1024/3.4);
  texture(kitten);
}
