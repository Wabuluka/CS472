// const { createServer } = require("node:http");
// const hostname = "127.0.0.1";
// const port = 3000;

// const server = createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader("Content-Type", "text/plain");
//   res.end("Hello World");
// });

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}`);
// });

const add = (a, b) => {
  setTimeout(() => {
    for (let i = 0; i < 10; i++) {}
    console.log(a + b);
  }, 1000);
};
console.log("Start");
const A = add(1, 2);
const B = add(2, 3);
const C = add(3, 4);
console.log("End");
