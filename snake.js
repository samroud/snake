let snakeSize = 30
let xPos
let yPos
let xSpeed = snakeSize
let ySpeed = snakeSize
let direction
let directionRandom
let xDirection
let yDirection
let snakeWay = []
let appleXPos
let appleYPos
let snakeLength = 1
let widthCanvas = 1000

let myFont
function preload(){
  myFont = loadFont('Capital-SemiBold.otf')
}
let textSnake = ["S","U","P","E","R","O","+"]
let textSnakeNum

function appleMove(){
  appleXPos = snakeSize * Math.floor(Math.random() * windowWidth/snakeSize + 1) - snakeSize/2;
  appleYPos = snakeSize * Math.floor(Math.random() * windowHeight/snakeSize + 1) - snakeSize/2;
}


function setup() {
    createCanvas(windowWidth, windowHeight);
    frameRate(10)
    textFont(myFont)
    xPos = snakeSize * 10//snakeSize * Math.floor(Math.random() * windowWidth/snakeSize);
    yPos = snakeSize * 10 //snakeSize * Math.floor(Math.random() * windowHeight/snakeSize);
    appleMove()
    textSize(30)
    textAlign(CENTER)
  }
  
  function draw() {
    background(255);
    
    //GRID
    stroke(0,0,0,30)
    let colNum = windowWidth/snakeSize
    let rowNum = windowHeight/snakeSize
    for(let row=0;row<rowNum;row++){
      push()
      translate(0,row*snakeSize)
      line(0,0,windowWidth,0)
      pop()
    }
    for(let col=0;col<colNum;col++){
      push()
      translate(col*snakeSize,0)
      line(0,0,0,windowHeight)
      pop()
    }


    //SNAKE WALL
    if (xPos > windowWidth){
      xPos =0
    } 
    if (xPos < 0){
      xPos = Math.floor(windowWidth/snakeSize) * snakeSize
    } 
    if (yPos > windowHeight - snakeSize/4){
      yPos = 0
    } 
    if (yPos+snakeSize < 0){
      yPos = Math.floor(windowHeight/snakeSize) * snakeSize
    } 

    //WAY
    snakeWay.push({
      x: xPos, 
      y: yPos, 
    })
    //console.log(snakeWay)

  


    if (frameCount>snakeLength){
      textSnakeNum = 0 

      for (let i=1;i<snakeLength+1;i++){
        snakeLastPositions = snakeWay[snakeWay.length-i]
        noFill()
        stroke(0)
        rect(snakeLastPositions.x, snakeLastPositions.y, snakeSize,snakeSize)
        fill(0)
        
        text(textSnake[textSnakeNum], snakeLastPositions.x + snakeSize/2, snakeLastPositions.y + snakeSize/1.2)
        if (i%textSnake.length == 0){
          textSnakeNum =0 
        }else{
           textSnakeNum += 1 
        }

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
      }      
    }
    text(snakeLength, windowWidth/2, 50)



    //APPLE
    fill(255,0,0)
    ellipse(appleXPos,appleYPos,snakeSize,snakeSize)

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


    //SNAKLE MOVE
    if (direction == "x"){
      xPos +=xSpeed
    } else{
      yPos +=ySpeed
    }

  }