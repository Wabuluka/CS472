class Meditation {
  constructor(duration) {
    this.duration = duration;
  }
  start() {
    let count = this.duration;
    const timer = setInterval(() => {
      if (count > 0) {
        console.log(count);
        count--;
      } else {
        clearInterval(timer);
        console.log("Jay Guru Dev");
      }
    }, 1000);
  }
}

const morning_meditation = new Meditation(5);
morning_meditation.start();
console.log(`Start meditation`);
