function sayHi(name) {
  console.log(`Hello ${name}`);
}

let timer = setTimeout(sayHi, 2000, "Davies");
// console.log(timer);
// clearTimeout(timer);

const timed = setInterval(sayHi, 2000, "Davies");

setTimeout(() => {
  clearInterval(timed);
  console.log("stop");
}, 7000);
