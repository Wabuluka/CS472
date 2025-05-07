var givePizza = function () {
  return new Promise(function (resolve, reject) {
    if (false) {
      resolve("this is true");
    } else {
      reject("this is false");
    }
  });
};

// givePizza()
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));

const promise = new Promise((resolve, reject) => {
  console.log("Promise starts");
  resolve("Promise result");
  console.log("Promise ends");
});

console.log("Code starts");
promise.then(console.log);
console.log("code ends");
