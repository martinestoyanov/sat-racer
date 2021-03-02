class Map {
  constructor(map, mapX, mapY) {
    this.imgElement = new Image();
    this.imgElement.src = map;
    this.mapX = 2295;
    this.mapY = 4030;
    this.checkpoints = [
      { x1: 2468, y1: 4246, x2: 2475, y2: 4312, heading: 0, completed: false },
      { x1: 1530, y1: 5395, x2: 1591, y2: 5415, heading: 0, completed: false },
      { x1: 1761, y1: 4728, x2: 1827, y2: 4716, heading: 0, completed: false },
      { x1: 2097, y1: 4370, x2: 2127, y2: 4313, heading: 0, completed: false },
      { x1: 1673, y1: 4000, x2: 1723, y2: 3963, heading: 0, completed: false },
      { x1: 1131, y1: 3056, x2: 1184, y2: 3094, heading: 0, completed: false },
      { x1: 1262, y1: 1878, x2: 1342, y2: 1850, heading: 0, completed: false },
      { x1: 1746, y1: 993, x2: 1792, y2: 950, heading: 0, completed: false },
      { x1: 2318, y1: 570, x2: 2370, y2: 528, heading: 0, completed: false },
      { x1: 3511, y1: 742, x2: 3552, y2: 800, heading: 0, completed: false },
      { x1: 4521, y1: 794, x2: 4591, y2: 824, heading: 0, completed: false },
      { x1: 5613, y1: 773, x2: 5707, y2: 809, heading: 0, completed: false },
      { x1: 5360, y1: 1825, x2: 5458, y2: 1785, heading: 0, completed: false },
      { x1: 4305, y1: 2346, x2: 4381, y2: 2307, heading: 0, completed: false },
      { x1: 3798, y1: 3196, x2: 3929, y2: 3175, heading: 0, completed: true },
    ];
    this.lastCheckpoint = {};
  }
  draw() {
    ctx.drawImage(
      this.imgElement,
      this.mapX,
      this.mapY,
      canvas.width / 2,
      canvas.height / 2,
      0,
      0,
      canvas.width,
      canvas.height
    );
  }

  checkpointTracker() {
    let centerX = map.mapX + canvas.width / 4;
    let centerY = map.mapY + canvas.height / 4;
    map.checkpoints.forEach((element, i, arr) => {
      if (
        centerX <= element.x2 &&
        centerX >= element.x1 &&
        ((centerY <= element.y1 && centerY >= element.y2) ||
          (centerY >= element.y1 && centerY <= element.y2))
        //  &&        arr[i - 1].completed == true
      ) {
        element.completed = true;
        map.lastCheckpoint = map.checkpoints[i];
        console.log(`Checkpoint ${i} passed!`);
      }
    });
  }
}
