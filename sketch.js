var n=0;
function setup() {
  createCanvas(900,900);
}

function draw() {
  background(0);
  image(img_but,300,300,300,300)
  textFont(Font);
  textSize(36);
  textAlign(CENTER)
  text(n,448,448)
  
}
function mousePressed(){
  if(mouseX>=310 && mouseX<=590){
    if(mouseY<=600 && mouseY>=300){
      n+=1
    }
  }
}
function preload(){
  img_but=loadImage("pngegg.png");
  Font=loadFont("AnticSlab-Regular.ttf")
}