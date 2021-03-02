const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
let debugInfo = document.getElementById("debug-info");
let ready = false;
let debugReady = false;

window.onload = () => {
  preload();
  document.getElementById("start-button").onclick = () => {
    startGame();
  };
  document.onkeydown = function (event) {
    if (event.key == "d") {
      debugReady = true;
      console.log(`Ready to debug ${debugReady}`);
      let debugButton = document.createElement("button");
      debugButton.innerHTML = "DEBUG";
      debugButton.onclick = function () {
        if (debugReady) dbMode.startDebug();
      };
      debugInfo.appendChild(debugButton);
    }
  };
};

function preload() {
  let images = new Array();
  let imagesToPreload = ["./images/yellow_car.png", "./images/map.svg"]
  // ctx.translate(0.5, 0.5);
  canvas.width = 950;
  canvas.height = 750;
  canvas.style.width = 950;
  canvas.style.height = 750;

  preloadImages(imagesToPreload);

  function preloadImages() {
    let imageCounter = 0;
    function loadCheck() {
      if (imageCounter == imagesToPreload.length) {
        ready = true;
        console.log(`Images loaded`);
      } else {
        setTimeout(()=> {
          loadCheck();
        },500)
      }
    }
    for (i = 0; i < imagesToPreload.length; i++) {
      images[i] = new Image();
      images[i].src = imagesToPreload[i];
      images[i].onload = () => {
        imageCounter++;
      };
    }
    loadCheck();
  }
}
