import fs from "fs";

const readable = fs.createReadStream("./me.jpg");
const writable = fs.createWriteStream("./imgs/me1.jpg");

readable.pipe(writable);
console.log(readable);
