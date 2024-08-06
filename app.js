const http = require("http");
const fs = require("fs");
const url = require("url");

const PORT = process.env.PORT || 8000;

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);

  const logs = `${Date.now()}: ${parsedUrl.path} Req received\n`;
  fs.appendFile("./src/assets/log.txt", logs, (err, data) => {
    switch (parsedUrl.pathname) {
      case "/":
        res.end("Homepage");
        break;
      case "/contact-us":
        res.end("Contact Us");
        break;
      case "/about":
        const username = parsedUrl.query.username;
        res.end(`Hi, ${username}`);
        break;
      default:
        res.end("404 Not found");
        break;
    }
  });
});

server.listen(PORT, () => console.log(`Listening on localhost:${PORT}`));
