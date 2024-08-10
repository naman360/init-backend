const fs = require("fs");
const server = require("http").createServer();

server.on("request", (req, res) => {
  // Reading file data and sending whole data as response, node will load entire file and then send the data
  /* fs.readFile("./src/assets/log.txt", (err, data) => {
    res.end(data);
  }); */
  //   Using streams, keep sending data as it is loading
  const readable = fs.createReadStream("./src/asssets/log.txt");
  readable.on("data", (chunk) => {
    res.write(chunk);
  });

  /* readable.on("end", () => {
    res.end();
  });
  readable.on("error", (err) => {
    console.log(err);
  }); */

  /* Handles clubbing of all events and also handles back pressure, when large amount of data is flowing and 
  response buffer is full, manually it cannot be done, hance pipe can be used
  */
  readable.pipe(res);
});
server.listen(8000, "127.0.0.1", () => {
  console.log("Listening");
});
