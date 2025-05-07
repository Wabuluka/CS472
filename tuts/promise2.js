let bar = new Promise(function (resolve, reject) {
  console.log("waiting for x");
  resolve("Hello");
});

console.log(bar.then((x) => console.log(x)));
