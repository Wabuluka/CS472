/**
 * I have commented at the end the position of execution
 */
const fs = require("fs");
const rd = fs.createReadStream("input.txt");
rd.close();
rd.on("close", () => console.log("readablStream close event")); //9
fs.readFile("input.txt", "utf-8", (error, data) => {
  if (error) console.log(error);
  else console.log(data); //10
});
setTimeout(() => console.log("this is setTimeout"), 5000); //11
setTimeout(() => console.log("this is setTimeout"), 0); //5
setImmediate(() => console.log("this is setImmediate 1")); //6
setImmediate(() => {
  console.log("this is setImmediate 2"); //7
  Promise.resolve().then(
    () => console.log("Promise.resolve inside setImmediate") // 8
  );
});
Promise.resolve().then(() => console.log("Promise.resolve 1")); // 2
Promise.resolve().then(() => {
  console.log("Promise.resolve 2"); // 3
  process.nextTick(() => console.log("nextTick inside Promise")); // 4
});
process.nextTick(() => console.log("nextTick 1")); //1

/**
 * Expected Output:
 *
 * nextTick 1
 * Promise.resolve 1
 * Promise.resolve 2
 * nextTick inside Promise
 * this is setTimeout
 * this is setImmediate 1
 * this is setImmediate 2
 * Promise.resolve inside setImmediate
 * readablStream close event
 * [data from readFile callback]
 * this is setTimeout
 */
