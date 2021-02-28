class Map {
  constructor(map, mapX, mapY) {
    this.imgElement = new Image();
    this.imgElement.src = map;
    // this.imgElementBG = new Image();
    // this.imgElementBG.src = "./images/bg.png";
    this.sizeWidth = window.innerWidth;
    this.sizeHeight = window.innerHeight;
    this.mapX = 1360;
    this.mapY = 4055;
    // this.mapX = this.imgElement.width / 2 - this.sizeWidth / 2;
    // this.mapY = this.imgElement.height / 2 - this.sizeHeight / 2;
  }
  draw() {
    ctx.drawImage(
      this.imgElement,
      this.mapX,
      this.mapY,
      this.sizeWidth / 2,
      this.sizeHeight / 2,
      0,
      0,
      this.sizeWidth,
      this.sizeHeight
    );
  }
}
