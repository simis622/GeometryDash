class Game {
  constructor() {
    this.groundY = height - 40;
    this.player = new Player(150, this.groundY, 40);
    this.obstacles = [];
    this.spawnTimer = 0;
    this.speed = 6;
    this.score = 0;
    this.timer = 0;
    this.best = 0;


  }

  update() {
    this.spawnTimer++;

    
        if (this.spawnTimer > 90) {
  this.spawnTimer = 0;

  
  let pattern = random([1, 2]);

  if (pattern === 1) {
    
    this.obstacles.push(
      new Obstacle(width + 40, this.groundY, 40, 40, this.speed)
    );
  } else {
    
    this.obstacles.push(
      new Obstacle(width + 20, this.groundY, 40, 40, this.speed)
    );
    this.obstacles.push(
      new Obstacle(width + 60, this.groundY, 40, 40, this.speed)
    );
  }
}

    this.player.update();

    for (let obs of this.obstacles) {
      obs.update();

      if (obs.collides(this.player)) {
        this.reset();
        return;
      }
    }

    this.obstacles = this.obstacles.filter(o => !o.offscreen());
    this.timer++;

    if (this.timer === 60) { 
      this.score++;
      this.timer = 0;
}

  }

  draw() {
    image(bgImg, 0, 0, width, height); 


    
    stroke(255);
    line(0, this.groundY + 20, width, this.groundY + 20);

    this.player.draw();
    for (let obs of this.obstacles) {
      obs.draw();
    }

    
    fill(255);
    textSize(32);
    textAlign(CENTER, TOP);
    text('Skoč, aby ses vyhnul překážkám!', width / 2, 20);

    fill(255);
    textSize(24);
    textAlign(LEFT, TOP);
    text("Score: " + this.score, 20, 20);

    text("Best: " + this.best, 20, 50);


  }

  jump() {
    this.player.jump();
  }

reset() {
  if (this.score > this.best) {
    this.best = this.score;
  }

  this.obstacles = [];
  this.player.y = this.player.groundY;
  this.player.vy = 0;
  this.score = 0;
  this.timer = 0;
}

}
