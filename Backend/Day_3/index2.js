const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/notes") {
    res.end(`Path Name ${req.url}`);
  } else if (req.url === "/book") {
    res.end(`Path Name ${req.url}`);
  }
});

server.listen(8080, () => {
  console.log("Server Is Live");
});
