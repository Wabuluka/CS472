import express from "express";
import fs from "fs";
import path, { join } from "path";
import { fileURLToPath } from "url";

let __filename = fileURLToPath(import.meta.url);
let __dirname = path.dirname(__filename);
const app = express();
express.static(join(__dirname, "public"));
const port = 3000;

app.get("/", (req, res) => {
  res.status(200).json({ message: "Welcome to my website" });
});

app.get("/image", (req, res) => {
  var src = fs.createReadStream("./public/me.jpg");
  src.pipe(res);
});

app.get("/pdf", (req, res) => {
  var file = fs.createReadStream("./public/file.pdf");
  file.pipe(res);
});

app.get("/about", (req, res) => {
  var txt = fs.readFileSync("./public/aboutme.txt", "utf-8");
  res.send(txt);
});

app.use((req, res) => {
  res.end("Not found");
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
