let car = new Car(0.25, "./images/yellow_car.png", 220);
let map = new Map("./images/map.svg");
let game = new Game();
let timer = new Timer();

function startGame() {
  if (ready) {
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
    game.gameLoop();
    timer.run();

  }
}

function mapValue(value, x1, y1, x2, y2) {
  return ((value - x1) * (y2 - x2)) / (y1 - x1) + x2;
}
