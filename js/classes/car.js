class Car {
  constructor(w, img, head) {
    this.heading = head;
    this.speed = 0;
    this.maxSpeed = 6;
    this.radians = 0;
    this.imgElement = new Image();
    this.imgElement.src = img;
    this.w = Math.round(w * this.imgElement.width);
    this.h = this.w * 2;
    this.vX = 0;
    this.vY = 0;
  }

  draw() {
    ctx.translate(canvas.width / 2, canvas.height / 2);
    ctx.rotate((this.heading * Math.PI) / 180);
    ctx.drawImage(this.imgElement, -this.w / 2, -this.h / 2, this.w, this.h);
    ctx.rotate((-this.heading * Math.PI) / 180);
    ctx.translate(-canvas.width / 2, -canvas.height / 2);
  }

  speedCtrl() {
    if (game.activeButtons.accel && this.speed < this.maxSpeed) {
      this.speed += 0.02;
    } else if (this.speed > 0.3 && game.activeButtons.decel) {
      this.speed -= 0.1;
    } else if (this.speed > 0.05) {
      this.speed -= 0.05;
    } else if (this.speed < 0.5 && this.speed > 0) {
      this.speed = 0;
    } else if (this.speed == 0 && game.activeButtons.decel) {
      this.speed -= 0.3;
    }
  }

  directionCtrl() {
    if (game.activeButtons.accel || car.speed !== 0) {
      if (game.activeButtons.rotateLeft && this.heading <= 0)
        this.heading = 359;
      else if (game.activeButtons.rotateRight && this.heading >= 359)
        this.heading = 1;
      else if (game.activeButtons.rotateLeft && this.heading > 0)
        this.heading = Math.round(
          (this.heading -= mapValue(car.speed, 0, 6, 1.5, 0.5))
        );
      else if (game.activeButtons.rotateRight && this.heading > 0)
        this.heading = Math.round(
          (this.heading += mapValue(car.speed, 0, 6, 1.5, 0.5))
        );
    }
  }

  updatePosition() {
    this.vX = this.speed * Math.sin((this.heading * Math.PI) / 180);
    this.vY = this.speed * Math.cos((this.heading * Math.PI) / 180);

    map.mapY = map.mapY - this.vY;
    map.mapX = map.mapX + this.vX;
  }
}
