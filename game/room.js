const { Board } = require("./board");
const { randomUUID } = require("crypto");

const roomMap = {};

class Room {
  constructor() {
    this.id = randomUUID();
    this.board = new Board();
    roomMap.push({ id: this });
  }
}

module.exports = {
  Room,
  roomMap,
};
