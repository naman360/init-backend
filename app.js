const http = require("http");
const crypto = require("crypto");
const express = require("express");
const app = express();
const PORT = process.env.PORT || 8000;

app.get("/", (req, res) => {
  res.end("Homepage");
});

app.get("/contact-us", (req, res) => {
  res.end("Contact Us");
});

app.get("/about", (req, res) => {
  res.end(`Hi ${req.query.name}`);
});

/* const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);

  const logs = `${Date.now()}: ${parsedUrl.path} Req received\n`;
  fs.appendFile("./src/assets/log.txt", logs, (err, data) => {
    switch (parsedUrl.pathname) {
      case "/":
        break;
      case "/contact-us":
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
}); */

// app.listen(PORT, () => console.log(`Listening on localhost:${PORT}`));

process.env.UV_THREADPOOL_SIZE = 8;
const MAX_CALLS = 8;
const start = Date.now();
for (let i = 0; i < MAX_CALLS; i++) {
  crypto.pbkdf2("password", "salt", 100000, 512, "sha512", () => {
    console.log(`Hash ${i + 1}:`, Date.now() - start);
  });
}
