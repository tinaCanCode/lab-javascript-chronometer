class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = 0;
  }
  startClick(callback) {
    this.intervalId = setInterval(() => {
      this.currentTime++;
    }, 1000);
  }
  getMinutes() {
    return Math.floor(this.currentTime / 60);
  }
  getSeconds() {
    return this.currentTime % 60;
  }

  twoDigitsNumber(input) {
    let result = ""

    if (input < 10) {
      result = "0" + input;
    } else {
      result = input.toString();
    }
    return result
  }
  stopClick() {
    clearInterval(this.intervalId);
  }
  resetClick() {
    this.currentTime = 0;
  }
  splitClick() {
    let minutes = this.twoDigitsNumber(this.getMinutes())
    let seconds = this.twoDigitsNumber(this.getSeconds())
    return minutes + ":" + seconds
  }
}
