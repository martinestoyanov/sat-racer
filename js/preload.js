window.onload = () => {
  let ready = false;
  preload();
  document.getElementById("start-button").onclick = () => {
    startGame();
  };
};
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
let debugInfo = document.getElementById("debug-info");


function preload() {
  ctx.translate(0.5, 0.5);
  let sizeWidth = window.innerWidth;
  let sizeHeight = window.innerHeight;
  canvas.width = sizeWidth;
  canvas.height = sizeHeight;
  canvas.style.width = sizeWidth;
  canvas.style.height = sizeHeight;

  let images = new Array();

  function preloadImages() {
    for (i = 0; i < preloadImages.arguments.length; i++) {
      images[i] = new Image();
      images[i].src = preloadImages.arguments[i];
    }
    ready = true;
    console.log(ready);
  }
  preloadImages("../images/yellow_car.png", "../images/map2.png");
}
