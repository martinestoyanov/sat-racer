class Game {
  constructor() {
    this.activeButtons = { left: false, right: false, up: false, down: false };
    this.ticker = 0;
  }

  gameLoop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    map.draw();
    if (game.ticker == 5) {
      game.stateDetect();
    }
    map.checkpointTracker();
    debugInfo.innerText = `x: ${map.mapX + 237.5} y:${map.mapY + 187.5}`;
    car.draw();
    car.directionCtrl();
    car.speedCtrl();
    car.updatePosition();
    timer.update();
    if (game.ticker <= 5) {
      game.ticker++;
    } else game.ticker = 0;
    requestAnimationFrame(game.gameLoop);
  }

  stateDetect() {
    let x = canvas.width / 2 - car.w / 2;
    let y = canvas.height / 2 - car.h / 2;
    let imageData = ctx.getImageData(x, y, car.w, 1);
    let sumR = 0;
    let sumG = 0;
    let sumB = 0;
    let roadStatus = true;
    let resetTriggered = false;

    for (i = 0; i < imageData.data.length; i += 4) {
      sumR += imageData.data[i];
      sumG += imageData.data[i + 1];
      sumB += imageData.data[i + 2];
    }
    let avgR = sumR / imageData.data.length / 4;
    let avgG = sumG / imageData.data.length / 4;
    let avgB = sumB / imageData.data.length / 4;

    if (avgR == avgG && avgG == avgB && avgR > 0) {
      roadStatus = true;
      console.log("On the road");
    } else if (avgR == 0 && avgG == 0 && avgB == 0) {
      console.log("OFFROAD");
      roadStatus = false;
      if (!resetTriggered) {
        setTimeout(() => {
          if (!roadStatus) {
            map.resetPosition(map.lastCheckpoint);
            console.log(roadStatus);
            resetTriggered = false;
            roadStatus = true;
          }
        }, 1000);
      }
    } else console.log("Riding the edge..");
  }
}
