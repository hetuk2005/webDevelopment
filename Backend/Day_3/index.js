const http = require("http");

const server = http.createServer((req, res) => {
  res.write("Hello Server...");
  res.write("Hello Server...2");
  res.end("\nExit");
});

server.listen(8000, () => {
  console.log("Server Is Live");
});
