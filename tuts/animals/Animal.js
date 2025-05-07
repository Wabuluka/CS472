class Animal {
  constructor(name) {
    this.name = name;
    this.speed = 0;
  }

  run(speed) {
    this.speed += speed;
  }

  stop() {
    this.speed = 0;
  }
}

class Rabbit extends Animal {
  hide() {
    console.log(this.name + "has stopped");
  }

  stop() {
    super.stop();
    this.hide();
  }
}
