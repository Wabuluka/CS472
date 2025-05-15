import fs from "fs";
import http from "http";
const server = http.createServer((req, res) => {
  const url = req.url;
  const method = req.method;

  if (url === "/" || (url === "/home" && method === "GET")) {
    res.writeHead(200, "Content-Type", "application/json");
    const msg = { message: "Welcome to my website" };
    res.end(JSON.stringify(msg));
  } else if (url === "/image" && method === "GET") {
    res.writeHead(200, "Content-Type", "image/jpeg");
    var src = fs.createReadStream("./me.jpg");
    src.pipe(res);
  } else if (url === "/pdf" && method === "GET") {
    res.writeHead(200, "Content-Type", "application/pdf");
    var file = fs.createReadStream("./file.pdf");
    file.pipe(res);
  } else if (url === "/about" && method === "GET") {
    res.writeHead("200", "Content-Type", "text/plain");
    var txt = fs.readFileSync("./aboutme.txt", "utf-8");
    res.end(txt);
  } else {
    res.writeHead(404, "Content-Type", "text/plain");
    res.write("Not Found");
    res.end();
  }
});
server.listen(3000, () => console.log("Server is running now"));
