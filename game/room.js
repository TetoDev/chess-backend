const { Board } = require("./board");

const roomMap = {};

class Room {
  constructor(id) {
    this.id = id;
    this.wasLastMoveWhite = false;
    this.board = new Board;
    roomMap.push({ id: this });
  }

  move(piece,square){
    
  }
}

module.exports = {
  Room,
  roomMap,
};
