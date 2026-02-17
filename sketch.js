let sizeOfTriangle_input

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background("#2EC4B6");
  designStuff();
}

function designStuff(){
  push()
  fill("#E71D36")
  textFont("impact")
  textSize(40)
  text("Loop",50,50)
  pop()
  
  push()
  textSize(20)
   fill("#E71D36")
  textFont("impact")
  text("I will draw a triangle, how big,\n shall I make it?",50,100)
  pop()
}
