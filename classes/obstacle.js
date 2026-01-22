class Obstacle {
  constructor(x, y, w, h, speed) {
    this.x = x;
    this.y = y;
    this.w = w; 
    this.h = h; 
    this.speed = speed;
  }

  update() {/*posouva prekazku */
    this.x -= this.speed;
  }

  draw() {
    fill(0);
    noStroke();

    
    triangle(/*vytvoreni trojuhelniků*/
      this.x, this.y - this.h / 2,       
      this.x - this.w / 2, this.y + this.h / 2, 
      this.x + this.w / 2, this.y + this.h / 2  
    );
  }

  offscreen() {
    return this.x + this.w < 0; /*zjisteni jestli je objekt mimo obrazovku*/
  }

  collides(player) {
    /*Kontrola kolize s hráčem, ktera vrací true, pokud se překážka a hráč dotýkají*/
    return (
      player.x + player.size / 2 > this.x - this.w / 2 &&
      player.x - player.size / 2 < this.x + this.w / 2 &&
      player.y + player.size / 2 > this.y - this.h / 2 &&
      player.y - player.size / 2 < this.y + this.h / 2
    );
  }
}


