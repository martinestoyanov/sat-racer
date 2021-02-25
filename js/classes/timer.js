class Timer {
  constructor() {
    this.startTime = 0;
    this.currentTime = 0;
    this.timeDelta = 0;
    this.total = 0;
    this.timerInfo = document.getElementById("timer");
    this.minutes = 0;
    this.seconds = 0;
    // this.tenths = 0;
  }
  run() {
    this.startTime = Date.now();
    return setInterval(() => {
      this.currentTime = Date.now();
      this.timeDelta = this.currentTime - this.startTime;
      //   console.log(this.startTime, this.currentTime, this.timeDelta, this.total);
    }, 100);
  }

  update() {
    this.minutes = Math.floor(this.timeDelta / 1000 / 60);
    this.seconds = Math.floor(this.timeDelta / 1000);
    // this.tenths = Math.floor(this.total / 100);
    this.timerInfo.innerHTML = `${this.minutes}:${this.seconds}`;
    // console.log(this.timerInfo);
  }
}
