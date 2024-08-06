const http = require("http");
const fs = require("fs");
const PORT = process.env.PORT || 8000;
const server = http.createServer((req, res) => {
  const logs = `${Date.now()}: Req received\n`;
  fs.appendFile("./src/assets/log.txt", logs, (err, data) => {
    res.end("Hello world from Node server");
  });
});

server.listen(PORT, () => console.log(`Listening on localhost:${PORT}`));
