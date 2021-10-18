let snakeSize = 10
let xPos = 0;
let yPos = 100
let xSpeed = 2
let ySpeed = 2
let direction
let directionRandom
let xDirection
let yDirection

function setup() {
    createCanvas(windowWidth, windowHeight);
    xPos = Math.floor(Math.random() * windowWidth) + snakeSize;
    yPos = Math.floor(Math.random() * windowHeight) + snakeSize;
  }
  
  function mouseClicked() {
    directionRandom = random()
    xDirection = mouseX-xPos
    yDirection = mouseY-yPos
    console.log(xDirection+" / "+yDirection)

    //DIRECTION

    //En bas à droite
    if (xDirection > 0 && yDirection > 0){
      if (xDirection < yDirection){
        direction = "y"
      } else{
        direction = "x"
      }
      if (xSpeed < 0 ){
        xSpeed=-xSpeed
      }
      if (ySpeed < 0 ){
        ySpeed=-ySpeed
      }
      console.log("en bas à droite")
    }

    //En bas à gauche
    if (xDirection < 0 && yDirection > 0){
      yDirection = -yDirection
      if (xDirection > yDirection){
        direction = "y"
      } else{
        direction = "x"
      }
      if (xSpeed > 0 ){
        xSpeed=-xSpeed
      }
      if (ySpeed < 0 ){
        ySpeed=-ySpeed
      }
      yDirection = -yDirection
      console.log("en bas à gauche")
    }

    //En haut à droite
    if (xDirection > 0 && yDirection < 0){
      xDirection = -xDirection
      if (xDirection > yDirection){
        direction = "y"
      } else{
        direction = "x"
      }
      if (xSpeed < 0 ){
        xSpeed=-xSpeed
      }
      if (ySpeed > 0 ){
        ySpeed=-ySpeed
      }
      xDirection = -xDirection
      console.log("en haut à droite")
    }

     //En haut à gauche
     if (xDirection < 0 && yDirection < 0){
      if (xDirection > yDirection){
        direction = "y"
      } else{
        direction = "x"
      }
      if (xSpeed > 0 ){
        xSpeed=-xSpeed
      }
      if (ySpeed > 0 ){
        ySpeed=-ySpeed
      }
      console.log("en haut à gauche")
    }
    console.log(direction)
  }
  

  function draw() {
    background(255);
    fill(0)
    rect(xPos, yPos, snakeSize,snakeSize)

    //SNAKE WALL
    if (xPos > windowWidth-snakeSize){
      xPos = 0
    } 
    if (xPos < 0){
      xPos = windowWidth-snakeSize
    } 
    if (yPos > windowHeight-snakeSize){
      yPos = 0
    } 
    if (yPos < 0){
      yPos = windowHeight-snakeSize
    } 

    //SNAKLE MOVE
    if (direction == "x"){
      xPos +=xSpeed
    } else{
      yPos +=ySpeed
    }
    //noLoop();

  }