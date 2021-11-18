const moment = require("moment");
console.log("The server started at ", moment().format("YYYY-MM-DD HH:mm"));
const http = require("http");
const express = require("express");
const app = express();
const router = require("./router");

app.use(express.json());
app.use("/", router);

let server = http.createServer(app);
const port = 3003;
server.listen(port, () => {
  console.log("server is listening on port: ", port);
});
