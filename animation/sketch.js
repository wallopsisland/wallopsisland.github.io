let kitten;
let add;


function preload() {
  kitten = loadImage('../animation/background.jpg');
}

function setup() {
  //createCanvas(1000, 1000, WEBGL);
  var cnv = createCanvas(600, 800, WEBGL);
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

  document.getElementById("Position").innerHTML = slider.value.toString();

  if(slider.value>27 && slider.value<=48){
    document.getElementById("Section").innerHTML = "Mud Flat";
    document.getElementById("Fact").innerHTML = "A coastal wetland in which much is deposited by tides.";
  }
  else if(slider.value>48 && slider.value<=90){
    document.getElementById("Section").innerHTML = "Salt Marsh";
    document.getElementById("Fact").innerHTML = "An ecosystem in the upper coastal intertidal zone between land and open salt water that is regularly flooded by the tides.";
  }
  else if(slider.value>90 && slider.value<=140){
    document.getElementById("Section").innerHTML = "Tidal Creek";
    document.getElementById("Fact").innerHTML = "A channel that is affected by the flow of ocean tides.";
  }
  else if(slider.value>140 && slider.value<=212){
    document.getElementById("Section").innerHTML = "Maritime Forest";
    document.getElementById("Fact").innerHTML = "An ocean coastal wooded habitat found on higher ground than dune areas within range of salt spray.";
  }
  else if(slider.value>212 && slider.value<=248){
    document.getElementById("Section").innerHTML = "Dunes";
    document.getElementById("Fact").innerHTML = "A mound or ridge of sand formed by the wind.";
  }
  else if(slider.value>248 && slider.value<=250){
    document.getElementById("Section").innerHTML = "Intertidal";
    document.getElementById("Fact").innerHTML = "The area between tide marks.";
  }



  rotateY(-slider.value/45);

  cylinder(652.229/1.8, 768/1.8);
  texture(kitten);
}
