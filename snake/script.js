const canvas = document.getElementById("screen");
let context = canvas.getContext("2d");

const square = 20;
const numbers_of_square = 30;

let head_positionX = numbers_of_square / 2;
let head_positionY = numbers_of_square / 2;

let velocityX = 0;
let velocityY = 0;

const snake_body = [];
let body_length = 5;

let apple_positionX = 2;
let apple_positionY = 2;

document.addEventListener("keydown", keyPush);

function RenderScreen() {

  context.fillStyle = "#000";
  context.fillRect(0, 0, screen.width, screen.height);

  //draw snake head
  context.fillStyle = "gray";
  context.fillRect(head_positionX * square, head_positionY * square, square, square);

  head_positionX += velocityX;
  head_positionY += velocityY;

  if (head_positionX >= numbers_of_square)
  {
    head_positionX = 0;
  }
  else if (head_positionX < 0)
  {
    head_positionX = numbers_of_square;
  }

  if (head_positionY >= numbers_of_square){
    head_positionY = 0;
  }
  else if (head_positionY < 0)
  {
    head_positionY = numbers_of_square;
  }

  //draw snake body and verify colision
  for (let i = 0; i < snake_body.length; i++){
    context.fillRect(snake_body[i].x * square, snake_body[i].y * square, square, square);
    if (head_positionX == snake_body[i].x && head_positionY == snake_body[i].y)
    {
      velocityX = 0;
      velocityY = 0;
      body_length = 5;
    }
  }

  snake_body.push({
    x: head_positionX,
    y: head_positionY,
  })

  while (snake_body.length > body_length)
  {
    snake_body.shift();
  }

  //draw apple and verify pontuation
  context.fillStyle = "red";
  context.fillRect(apple_positionX * square, apple_positionY * square, square, square);

  if (apple_positionX == head_positionX && apple_positionY == head_positionY)
  {
    body_length++;
    apple_positionX = Math.floor(Math.random() * numbers_of_square);
    apple_positionY = Math.floor(Math.random() * numbers_of_square);
  }
}

function keyPush(event) {
  switch(event.which){
    case 37: 
      velocityX != 1 ? velocityX = -1 : velocityX = 1;
      velocityY = 0;
      break;
    case 38: 
     velocityY != 1 ? velocityY = -1 : velocityY = 1;
     velocityX = 0;
      break;
    case 39: 
      velocityX != -1 ? velocityX = 1 : velocityX = -1;
      velocityY = 0;
      break;
    case 40: 
      velocityY != -1 ? velocityY = 1 : velocityY = -1;
      velocityX = 0;
      break;
  }
}

setInterval(RenderScreen, 80)
