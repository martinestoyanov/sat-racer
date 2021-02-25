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
}
