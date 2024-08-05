const http = require("http");
const PORT = process.env.PORT || 8000;
const server = http.createServer((req, res) => {
  console.log("Request Received");
  res.end("Hello world from Node server");
});

server.listen(PORT, () => console.log(`Listening on localhost:${PORT}`));
