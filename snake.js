let snakeSize = 50
let xPos
let yPos
let xSpeed = -snakeSize
let ySpeed = snakeSize
let direction = "x"
let directionRandom
let xDirection
let yDirection
let appleXPos
let appleYPos
let snakeWay = []
let snakeLength = 1
let widthCanvas = 1000

let myFont
function preload(){
  myFont = loadFont('Capital-SemiBold.otf')
}
let textSnake = ["S","N","A","K","E","/"]
let textSnakeNum
let textSnakeNumMiam = 1

function appleMove(){
  appleXPos = snakeSize * Math.floor(Math.random() * (windowWidth-snakeSize) / snakeSize) + snakeSize/2;
  appleYPos = snakeSize * Math.floor(Math.random() * (windowHeight-snakeSize) / snakeSize) + snakeSize/2;
}


function setup() {
    createCanvas(windowWidth, windowHeight);
    frameRate(8)
    textFont(myFont)
    xPos = snakeSize * 10//snakeSize * Math.floor(Math.random() * windowWidth/snakeSize);
    yPos = snakeSize * 10 //snakeSize * Math.floor(Math.random() * windowHeight/snakeSize);
    appleMove()
    textSize(snakeSize)
    textAlign(CENTER)
  }
  
  function draw() {
    background(255)
    noStroke()
    //GRID
    // stroke(0,0,0,30)
    // let colNum = windowWidth/snakeSize
    // let rowNum = windowHeight/snakeSize
    // for(let row=0;row<rowNum;row++){
    //   push()
    //   translate(0,row*snakeSize)
    //   line(0,0,windowWidth,0)
    //   pop()
    // }
    // for(let col=0;col<colNum;col++){
    //   push()
    //   translate(col*snakeSize,0)
    //   line(0,0,0,windowHeight)
    //   pop()
    // }

    //MOVE WITH KEYBOARD
    if (keyIsDown(LEFT_ARROW)) {
      direction = "x"
      if (xSpeed > 0 ){
        xSpeed=-xSpeed
      }
    }
    if (keyIsDown(RIGHT_ARROW)) {
      direction = "x"
      if (xSpeed < 0 ){
        xSpeed=-xSpeed
      }
    }
    if (keyIsDown(UP_ARROW)) {
      direction = "y"
      if (ySpeed > 0 ){
        ySpeed=-ySpeed
      }
    }
    if (keyIsDown(DOWN_ARROW)) {
      direction = "y"
      if (ySpeed < 0 ){
        ySpeed=-ySpeed
      }
    }



    //SNAKE WALL
    if (xPos > windowWidth - snakeSize/2){
      xPos =0
    } 
    if (xPos < 0){
      xPos = Math.floor(windowWidth/snakeSize) * snakeSize
    } 
    if (yPos > windowHeight - snakeSize/2){
      yPos = 0
    } 
    if (yPos < 0){
      yPos = Math.floor(windowHeight/snakeSize) * snakeSize
    } 

    //WAY
    snakeWay.push({
      x: xPos, 
      y: yPos, 
      dir: direction
    })
    //console.log(snakeWay)


    if (frameCount>snakeLength){
      textSnakeNum = 0 

      for (let i=1;i<snakeLength+1;i++){
        snakeLastPositions = snakeWay[snakeWay.length-i]
        push()
        fill(0)
        translate(snakeLastPositions.x,snakeLastPositions.y)

        //roration
        if(snakeLastPositions.dir == "y" && ySpeed < 0){
          translate(snakeSize,0)
          rotate(PI/2)
        }
        if(snakeLastPositions.dir == "y" && ySpeed > 0){
          translate(0,snakeSize)
          rotate(PI/2 * 3)
        }
        if(snakeLastPositions.dir == "x" && xSpeed > 0){
          translate(snakeSize,snakeSize)
          rotate(PI/2 * 2)
        }
        
        if (i==snakeLength && i!=1){
          fill(255)
          stroke(255,0,0)
          rect(0, 0, snakeSize,snakeSize)
          noStroke()
          fill(255,0,0)
        } else if (i==1){
          fill(0)
          stroke(0)
          rect(0, 0, snakeSize,snakeSize)
          noStroke()
          fill(255)
        }
         else{
          fill(255)
          stroke(0)
          rect(0, 0, snakeSize,snakeSize)
          noStroke()
          fill(0)
        }
  
        text(textSnake[textSnakeNum], 0 + snakeSize/2, 0 + snakeSize/1.14)

        if (i%textSnake.length == 0){
          textSnakeNum =0 
        }else{
           textSnakeNum += 1 
        }
        pop()

        //COLLISION???
        if (i>2 && snakeWay[snakeWay.length-1].x==snakeLastPositions.x && snakeWay[snakeWay.length-1].y==snakeLastPositions.y){
          // console.log("COLLISTION!!!")
          // text('GAME OVER', windowWidth/2, 150)
          // xSpeed = 0
          // ySpeed = 0
          // noLoop()
        }

      }
      // MIAM MIAM
      if (snakeWay[snakeWay.length-1].x==appleXPos- snakeSize/2 && snakeWay[snakeWay.length-1].y==appleYPos- snakeSize/2){
        snakeLength +=1
        appleMove()
        console.log("Miam Miam")
        textSnakeNumMiam+=1
        if(textSnakeNumMiam == textSnake.length){
          textSnakeNumMiam=0
        }
      }      
    }
    //text(snakeLength, windowWidth/2, 50)



    //APPLE
    noStroke()
    fill(255,0,0)
    rect(appleXPos - snakeSize/2,appleYPos - snakeSize/2,snakeSize,snakeSize)
    fill(255)
    text(textSnake[textSnakeNumMiam], appleXPos, appleYPos + snakeSize/2.7)

     

    //SNAKLE MOVE
    if (direction == "x"){
      xPos +=xSpeed
    } else{
      yPos +=ySpeed
    }

  }