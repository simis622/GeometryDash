let game;
let bgImg;

function preload() {
  bgImg = loadImage('./img/background.png');
}


function setup() {
  createCanvas(1240, 620); 
  game = new Game();
}

function draw() {
  game.update();
  game.draw();
}


function keyPressed() {
  if (key === ' ' || key === 'ArrowUp') {
    game.jump();
  }
}

