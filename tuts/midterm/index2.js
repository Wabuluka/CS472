function Vehicle() {
  this.make;
  this.model;
  this.year;
  this.mileage;
}

Vehicle.prototype.drive = function (distance) {
  this.mileage += distance;
};

Vehicle.prototype.toString = function () {
  return `${this.year} ${this.make} ${this.model} (${this.mileage} miles)`;
};

function Car(make, model, year, mileage, numDoors, speed, topSpeed) {
  Vehicle.call(this, make, model, year, mileage);
  this.numDoors = numDoors;
  this.speed = speed;
  this.topSpeed = topSpeed;
}

Object.setPrototypeOf(Car, Vehicle);
Object.setPrototypeOf(Car.prototype, Vehicle.prototype);

Car.prototype.accelerate = function () {
  this.speed += 10;
};

Car.prototype.break = function () {
  this.speed -= 10;
};

Car.prototype.toString = function () {
  return (
    Vehicle.prototype.toString.call(this) + `${this.numDoors} ${this.topSpeed}`
  );
};
