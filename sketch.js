var ball;
var dataBase;
var ballPosition

function setup(){
    dataBase = firebase.database();
    console.log(dataBase)
    
    createCanvas(500,500);
    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";
   
    ballPosition = dataBase.ref('ball/position')
    ballPosition.on("value",readData,showErr)
}

function draw(){
    background("white");





    if(keyDown(LEFT_ARROW)){
        writeData(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        writeData(1,0);
    }
    else if(keyDown(UP_ARROW)){
        writeData(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        writeData(0,+1);
    }

    drawSprites();
}

function writeData(x,y){
    dataBase.ref('ball/position').set({x:ball.x +x,y:ball.y + y})
  
}


function readData(data)
{
  position = data.val();
  ball.x = position.x;
  ball.y = position.y;

}


function showErr()
{
    console.log("error")
}

