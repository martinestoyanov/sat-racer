class Game {
  constructor() {
    this.activeButtons = { left: false, right: false, up: false, down: false };
  }

  gameLoop() {
    // let compMapX = 0;
    // let compMapY = 0;
    timer.run();
    let gameID = setInterval(() => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      map.draw();
      this.stateDetect();
      car.draw();
      car.directionCtrl();
      car.speedCtrl();
      car.updatePosition();
      // compMapX = map.mapX;
      // compMapY = map.mapY;
      debugInfo.innerText = `${Math.round(car.speed * 10)}mph ${
        car.heading
      } x: ${map.mapX} y:${map.mapY} velX: ${car.vX} velY: ${car.vY}`;
      // console.log("Map Info:", map.mapX, map.mapY);
      // console.log("Car Info:", car.speed, car.heading);
      timer.update();
    }, 20);
  }
  stateDetect() {
    let x = canvas.width / 2 - car.w / 2;
    let y = canvas.height / 2 - car.h / 2;
    let imageData = ctx.getImageData(x, y, car.w, car.h);
    let sumR = 0;
    let sumG = 0;
    let sumB = 0;

    for (i = 0; i < imageData.data.length; i += 4) {
      sumR += imageData.data[i];
      sumG += imageData.data[i + 1];
      sumB += imageData.data[i + 2];
    }
    if (sumR > 130) console.log("RED");
    else if (sumG > 130) console.log("GREEN");
    else if (sumB > 130) console.log("BLUE");
    else {console.log("Something...")}

    // console.log(avg);
  }
}