let sizeOfTriangle_input
let draw_button;

function setup() {
  createCanvas(400, 400);
  sizeOfTriangle_input = createInput();
  draw_button = createButton("press")
}
function draw() {
  background("#2EC4B6");
  designStuff();
  buttonStuff()
}
function buttonStuff(){
  push();
  draw_button.style('background-color','#FF9F1C')
  draw_button.style('font-family','impact')
  draw_button.position(50,250)
  pop();
  
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
  sizeOfTriangle_input.position(50,150)
  
}
