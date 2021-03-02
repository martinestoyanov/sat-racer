class DebugMode {
  constructor() {
    this.imgElement = new Image();
    this.imgElement.src = "./images/target.png";
    this.w = Math.round(0.25 * this.imgElement.width);
    this.h = this.w * 2;
    this.speed = 2;
  }

  startDebug() {
    timer.timerInfo.innerHTML = "↑↓←→ to scroll, s to change speed";
    document.onkeydown = function (event) {
      const arrows = ["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown"];
      if (arrows.includes(event.key)) {
        event.preventDefault();
      }
      if (event.key === "ArrowLeft") {
        game.activeButtons.rotateLeft = true;
      } else if (event.key === "ArrowRight") {
        game.activeButtons.rotateRight = true;
      } else if (event.key === "ArrowUp") {
        game.activeButtons.accel = true;
      } else if (event.key === "ArrowDown") {
        game.activeButtons.decel = true;
      } else if (event.key === "s" && dbMode.speed == 2) {
        dbMode.speed = 4;
      } else if (event.key === "s" && dbMode.speed == 4) {
        dbMode.speed = 0.5;
      } else if (event.key === "s" && dbMode.speed == 0.5) {
        dbMode.speed = 2;
      }
    };

    document.onkeyup = function (event) {
      if (event.key === "ArrowLeft") {
        game.activeButtons.rotateLeft = false;
      } else if (event.key === "ArrowRight") {
        game.activeButtons.rotateRight = false;
      } else if (event.key === "ArrowUp") {
        game.activeButtons.accel = false;
      } else if (event.key === "ArrowDown") {
        game.activeButtons.decel = false;
      }
    };
    // map.mapX = 0;
    // map.mapY = 0;
    dbMode.loop();
    // console.log("DEBUG")
  }

  loop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    map.draw();
    dbMode.drawTarget();
    dbMode.debugMove();
    debugInfo.innerText = `x: ${map.mapX + 237.5} y:${map.mapY+187.5} speed: ${dbMode.speed}`;
    // console.log(event.key)
    requestAnimationFrame(dbMode.loop);
  }

  drawTarget() {
    ctx.translate(canvas.width / 2, canvas.height / 2);
    ctx.drawImage(
      dbMode.imgElement,
      -dbMode.w / 2,
      -dbMode.h / 2,
      dbMode.w,
      dbMode.h
    );
    ctx.translate(-canvas.width / 2, -canvas.height / 2);
  }
  debugMove() {
    if (game.activeButtons.accel) {
      map.mapY -= this.speed;
    } else if (game.activeButtons.decel) {
      map.mapY += this.speed;
    } else if (game.activeButtons.rotateLeft) {
      map.mapX -= this.speed;
    } else if (game.activeButtons.rotateRight) {
      map.mapX += this.speed;
    }
  }
}
