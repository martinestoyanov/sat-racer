class Map {
  constructor(map, mapX, mapY) {
    this.imgElement = new Image();
    this.imgElement.src = map;
    this.mapX = 865;
    this.mapY = 8000;
  }
  draw() {
    let sizeWidth = window.innerWidth;
    let sizeHeight = window.innerHeight;
    ctx.drawImage(
      this.imgElement,
      this.mapX,
      this.mapY,
      sizeWidth,
      sizeHeight,
      0,
      0,
      sizeWidth,
      sizeHeight
    );
  }
}
