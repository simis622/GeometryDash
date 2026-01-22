class Player {
  constructor(x, groundY, size) {
    this.x = x; /*nastaveni x-ove souradnice */
    this.size = size; /*nastaveni velikosti hrace*/

    this.groundY = groundY; /*Nastaví hráče na zem*/
    this.y = groundY; 

    this.vy = 0; /*rychlost nahoru a dolů*/
    this.gravity = 1.05; /*gravitace*/
    this.jumpForce = -15; /*Síla skoku (záporná = nahoru)*/

    this.onGround = true;
  }

  jump() {/*může skočit jen když je na zemi.*/
    if (this.onGround) {/*hrac bude moct skocit jen kdyz je na zemi*/
      this.vy = this.jumpForce;/*nastavi rychlost nahoru*/
      this.onGround = false;/*hrac neni za zemi*/
    }
  }

  update() {
    this.vy += this.gravity;/*Přidá gravitaci k rychlosti*/
    this.y += this.vy;/*Posune hráče nahoru nebo dolů.*/

  
    if (this.y > this.groundY) { /*jestli hráč spadl pod zem*/
      this.y = this.groundY; /*Vrátí hráče přesně na zem*/
      this.vy = 0; /*nastavi */
      this.onGround = true; /*Řekne, že hráč zase stojí na zemi*/
    }
  }

  draw() {
    fill(0, 255, 0); /*barva na zelenou barvu*/
    rectMode(CENTER);/*Obdélník se kreslí od středu.*/
    rect(this.x, this.y, this.size, this.size); /*Nakreslí hráče jako čtverec.*/
  }
}


