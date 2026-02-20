let sizeOfTriangle_input;
let draw_button , draw_diamond;
let output;
function setup() {
  createCanvas(400, 400);
  sizeOfTriangle_input = createInput();
  draw_button = createButton("draw Triangle");
  draw_diamond = createButton("draw diamond");
  output = "";
}
function draw() {
  background("#2EC4B6");
  designStuff();
  buttonStuff();
  text(output , 50,200)
}

function drawDiamond(){
  output = ""
  let size = int(sizeOfTriangle_input.value()) *2
  console.log(size)
  for(let i = 0; i<size ; i++){
    console.log(i % 2)
    if(i % 2 == 0){
      //it is even
      output += "*";
    }else{
      output += " ";
    }
  }
}
function drawTriangle(){
  let size = int(sizeOfTriangle_input.value()) +1
  for(let j = 0; j< size; j++){
    for(let i=0;i<j; i++){
      //this will draw a row
      output += "*"
    }
    output += "\n"
  }
  
}
function buttonStuff(){
  push();
  draw_button.mousePressed(drawTriangle);
  draw_diamond.mousePressed(drawDiamond);
  //draw_button.size(75,20);
  draw_button.style('background-color','#FF9F1C');
  draw_diamond.style('background-color','#FF9F1C');
  draw_button.style('font-family','impact');
  draw_diamond.style('font-family','impact');
  draw_button.position(200,150);
  draw_diamond.position(200,175);
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
