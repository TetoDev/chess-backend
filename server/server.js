const http = require("http");
const rooms = require("../game/room.js");

function createServer() {

  const server = http.createServer((request, response) => {
    const { method, url, headers } = request;

    // Creating new room
    if (method === "GET") {
        const room = new rooms.Room();
        const id = room.id;
    }
    // Setting move
    if (method === "POST") {
      let body = '';
      request
        .on("data", (chunk) => {
          body += chunk.toString();
        })
        .on("end", () => {
          console.log(body);
          response.writeHead(200, {})
          response.end()
        })
        .on('error', (err) => {
            console.log(err);
        })
    }
  })
  server.listen(80)
}

module.exports = {
  createServer,
};
