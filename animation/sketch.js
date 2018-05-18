let kitten;
let add;


function preload() {
  kitten = loadImage('../animation/Design.jpeg');
}

function setup() {
  //createCanvas(1000, 1000, WEBGL);
  var cnv = createCanvas(800, 800, WEBGL);
  var x = 100 ;
  var y = (windowHeight - height) / 2;
  cnv.position(x, y);
  add = 0;
  scale(0.25);
}

function draw() {
  background(200);
  console.log(frameCount);
  var slider = document.getElementById("myRange");

  document.getElementById("Position").innerHTML = add.toString();
  document.getElementById("Section").innerHTML = slider.value.toString();
  document.getElementById("Fact").innerHTML = "eEEp";

  rotateY(slider.value/45);

  cylinder(1303/3, 1024/3);
  texture(kitten);
}
