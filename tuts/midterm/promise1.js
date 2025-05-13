let promise = new Promise(function (resolve, reject) {
  const random = Math.random();
  console.log("Random: ", random);
  if (random > 0.5) {
    setTimeout(() => resolve("done"), 1000);
  } else {
    setTimeout(() => reject(new Error("Woops")), 1000);
  }
});

promise.then((data) => console.log(data)).catch((error) => console.log(error));
