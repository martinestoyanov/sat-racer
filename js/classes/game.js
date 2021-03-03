class Game {
  constructor() {
    this.activeButtons = { left: false, right: false, up: false, down: false };
    this.ticker = 0;
    this.resetTriggered = false;
    this.roadStatus = true;
    this.finish = false;
  }

  gameLoop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    map.draw();
    game.stateDetect();
    map.checkpointTracker();
    car.update();
    timer.update();
    score.update();
    game.endRace();
    requestAnimationFrame(game.gameLoop);
  }

  stateDetect() {
    if (game.ticker == 5) {
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

      let avgR = sumR / imageData.data.length / 4;
      let avgG = sumG / imageData.data.length / 4;
      let avgB = sumB / imageData.data.length / 4;

      if (avgR == avgG && avgG == avgB && avgR > 0) {
        //On the road
        game.roadStatus = true;
      } else if (avgR == 0 && avgG == 0 && avgB == 0 && !game.resetTriggered) {
        score.offroad += 5;
        map.checkpointAnnounce.innerHTML = "!!Get Back On The Road!!";
        setTimeout(() => {
          map.checkpointAnnounce.innerHTML = "";
        }, 500);
        // Off the road and no reset triggered
        // console.log("Offroad");
        game.resetTriggered = true;
        game.roadStatus = false;
        setTimeout(game.onTheRoadAgain, 1000);
      } else {
        // console.log("Riding the edge..");
        score.edge -= 0.005;
      }
    } else if (game.ticker < 5) {
      game.ticker++;
    } else game.ticker = 0;
  }

  onTheRoadAgain() {
    if (game.roadStatus == false) {
      game.resetTriggered = false;
      map.resetPosition(map.lastCheckpoint);
    } else {
      game.resetTriggered = false;
    }
  }

  endRace() {
    let checkpointCounter = 0;
    let alertFired = false;
    map.checkpoints.forEach((element, i, arr) => {
      if (element.completed) checkpointCounter++;
    });
    if (checkpointCounter == map.checkpoints.length && !alertFired) {
      alertFired = true;
      alert(
        `Finished!\r\n
        Time: ${timer.seconds}\r\n
        Riding the line: ${score.edge}\r\n
        Offroad:${score.offroad}\r\n
        Total:${timer.seconds + score.edge + score.offroad}`
      );
    }
  }

  countdown() {}
}
