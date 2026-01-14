class Player {
  constructor(x, groundY, size) {
    this.x = x;
    this.size = size;

    this.groundY = groundY;
    this.y = groundY;

    this.vy = 0;
    this.gravity = 1.1;
    this.jumpForce = -13;

    this.onGround = true;
  }

  jump() {
    if (this.onGround) {
      this.vy = this.jumpForce;
      this.onGround = false;
    }
  }

  update() {
    this.vy += this.gravity;
    this.y += this.vy;

  
    if (this.y > this.groundY) {
      this.y = this.groundY;
      this.vy = 0;
      this.onGround = true;
    }
  }

  draw() {
    fill(0, 255, 0);
    rectMode(CENTER);
    rect(this.x, this.y, this.size, this.size);
  }
}
