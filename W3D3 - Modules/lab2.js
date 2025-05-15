import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

let __filename = fileURLToPath(import.meta.url);
let __dirname = path.dirname(__filename);

const readable = fs.createReadStream(
  path.join(__dirname, "module/testfile.txt"),
  { highWaterMark: 64 * 1024, encoding: "utf-8" }
);

const writable = fs.createWriteStream(
  path.join(__dirname, "module/testfile.txt")
);

// readable.on("data", function (chunk) {
//   console.log(chunk);
//   writable.write(chunk);
// });
readable.pipe(writable);
