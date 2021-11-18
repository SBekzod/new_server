const moment = require("moment");
console.log("The server started at ", moment().format("YYYY-MM-DD HH:mm"));
const http = require("http");

let soni = 0;

let server = http.createServer((req, res) => {
  soni++;
  console.log("Kimdir kirdi bu yerga, serverda odam soni: ", soni);
  res.end("Hello World");
});

server.listen(3003, () => {
  console.log("server tayyor");
});
