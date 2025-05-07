let animal = {
  eats: true,
  walk() {
    console.log("Animal walk");
  },
};
let rabbit = {
  jumps: true,
};

Object.setPrototypeOf(rabbit, animal);

console.log(rabbit.eats);
rabbit.walk();
// console.log(animal.jumps); // undefined

let longEar = {
  earLength: 10,
};

Object.setPrototypeOf(longEar, rabbit);
longEar.walk();
console.log(longEar.jumps);
