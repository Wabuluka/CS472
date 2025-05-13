// var givePizza = function () {
//   return new Promise(function (resolve, reject) {
//     if (false) {
//       resolve("This is true");
//     } else {
//       reject("This is false");
//     }
//   });
// };

// givePizza()
//   .then((data) => console.log(data))
//   .catch((error) => console.log(error));
// console.log("Try me");

// let promise = new Promise(function (resolve, reject) {
//   // setTimeout(()=>resolve('done'), 1000)
//   console.log("Promise start"); //1
//   resolve("Promise result");//5
//   console.log("Promise ends"); //2
// });
// console.log(`Code starts`);//3
// promise.then(console.log);
// console.log(`Code ends`);//4

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise result");
  }, 0);
});

console.log("Code starts");
promise.then(console.log);
console.log("I love JS");
