// const http = require("http");

// const HOSTNAME = process.env.HOSTNAME || "localhost";
// const PORT = process.env.PORT || 3000;

// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader("Content-type", "text/plain");
//   res.end("Hello world");
// });

// server.listen(PORT, HOSTNAME, () => {
//   console.log(`server running at http://${HOSTNAME}:${PORT}`);
// });

// console.log(__filename);
// console.log(__dirname);

const fs = require("fs");

fs.readFile("hi.txt", "utf-8", (err, data) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(data);
});
