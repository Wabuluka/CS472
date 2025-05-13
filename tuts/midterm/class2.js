class Animal {
  constructor(name) {
    this.speed = 0;
    this.name = name;
  }

  run(speed) {
    this.speed += speed;
    console.log(`${this.name} runs with speed ${this.speed}`);
  }

  stop() {
    this.speed = 0;
    console.log(`${this.name} stands still`);
  }
}

class Rabbit extends Animal {
  constructor(name) {
    super(name);
  }

  hides() {
    console.log(`${this.name} hides`);
  }

  stop() {
    super.stop();
  }

  static playingAround() {
    console.log(this === User);
  }
}

let rabbit1 = new Rabbit("jung");
console.log(rabbit1);
rabbit1.hides();
rabbit1.stop();
User.playingAround();
