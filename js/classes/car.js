class Car {
  constructor(w, img, head, pwr, wht) {
    this.heading = head;
    this.speed = 0;
    this.maxSpeed = 12;
    this.radians = 0;
    this.power = pwr;
    this.weight = wht;
    this.imgElement = new Image();
    this.imgElement.src = img;
    this.x = 30;
    this.y = 30;
    this.w = Math.round(w * this.imgElement.width);
    this.h = this.w * 2;
    this.vX = 0;
    this.vY = 0;
  }

  draw() {
    // let canvasWCenter = canvas.width / 2;
    // let canvasHCenter = canvas.height / 2;
    ctx.translate(canvas.width / 2, canvas.height / 2);
    ctx.rotate((this.heading * Math.PI) / 180);
    ctx.drawImage(this.imgElement, -this.x / 2, -this.y / 2, this.w, this.h);
    ctx.rotate((-this.heading * Math.PI) / 180);
    ctx.translate(-canvas.width / 2, -canvas.height / 2);
  }

  speedCtrl() {
    if (game.activeButtons.accel && this.speed < this.maxSpeed) {
      this.speed += 0.2;
    } else if (this.speed > 0.3 && game.activeButtons.decel) {
      this.speed -= 0.3;
    } else if (this.speed > 0) {
      this.speed -= 0.1;
    }
  }

  directionCtrl() {
    if (this.speed > 0) {
      if (game.activeButtons.rotateLeft && this.heading <= 0)
        this.heading = 359;
      else if (game.activeButtons.rotateLeft && this.heading > 0)
        this.heading = Math.round((this.heading -= 0.2 * this.speed));
      else if (game.activeButtons.rotateRight && this.heading >= 359)
        this.heading = 1;
      else if (game.activeButtons.rotateRight && this.heading > 0)
        this.heading = Math.round((this.heading += 0.2 * this.speed));
    }
  }

  updatePosition() {
    this.vX = Math.round(this.speed * Math.sin((this.heading * Math.PI) / 180));
    this.vY = Math.round(this.speed * Math.cos((this.heading * Math.PI) / 180));
    map.mapY -= this.vY;
    map.mapX += this.vX;
  }
}
