let sizeOfTriangle_input;
let draw_button;
let output;
function setup() {
  createCanvas(400, 400);
  sizeOfTriangle_input = createInput();
  draw_button = createButton("press");
  output = "";
}
function draw() {
  background("#2EC4B6");
  designStuff();
  buttonStuff();
  text(output , 50,200)
}

function drawTriangle(){
  for(let j = 0; j<7; j++){
    for(let i=0;i<5;i++){
      //this will draw a row
      output += "*"
    }
    output += "\n"
  }
  
}
function buttonStuff(){
  push();
  draw_button.mousePressed(drawTriangle);
  draw_button.size(75,20);
  draw_button.style('background-color','#FF9F1C');
  draw_button.style('font-family','impact');
  draw_button.position(200,150);
  pop(); 
}
function designStuff(){
  push();
  fill("#E71D36");
  textFont("impact");
  textSize(40);
  text("Loop",50,50);
  pop();
  
  push();
  textSize(20);
   fill("#E71D36");
  textFont("impact");
  text("I will draw a triangle, how big,\n shall I make it?",50,100);
  pop();
  sizeOfTriangle_input.position(50,150);
  
}
