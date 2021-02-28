class Game {
  constructor() {
    this.activeButtons = { left: false, right: false, up: false, down: false };
  }

  gameLoop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    map.draw();
    game.stateDetect();
    car.draw();
    car.directionCtrl();
    car.speedCtrl();
    car.updatePosition();
    debugInfo.innerText = `${car.speed}mph ${car.heading} x: ${map.mapX} y:${
      map.mapY
    } steering: ${mapValue(car.speed, 0, 6, 2, 0.1)}`;
    timer.update();
    requestAnimationFrame(game.gameLoop);
  }

  stateDetect() {
    let x = canvas.width / 2 - car.w / 2;
    let y = canvas.height / 2 - car.h / 2;
    let imageData = ctx.getImageData(x, y, car.w, 1);
    let sumR = 0;
    let sumG = 0;
    let sumB = 0;

    for (i = 0; i < imageData.data.length; i += 4) {
      sumR += imageData.data[i];
      sumG += imageData.data[i + 1];
      sumB += imageData.data[i + 2];
    }

    // if (sumR > 130) console.log("RED");
    if (sumG > 130) console.log("GREEN");
    // else if (sumB > 130) console.log("BLUE");
  }
}
