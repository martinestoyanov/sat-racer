class Map {
  constructor(map, mapX, mapY) {
    this.imgElement = new Image();
    this.imgElement.src = map;
    this.sizeWidth = window.innerWidth;
    this.sizeHeight = window.innerHeight;
    this.mapX = 2340;
    this.mapY = 4300;
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
