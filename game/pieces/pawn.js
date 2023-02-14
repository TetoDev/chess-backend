const { Piece } = require("./piece");

class Pawn extends Piece {
  constructor(white, board, position) {
    this.white = white;
    this.board = board;
    this.position = position;
    this.new = true;
  }

  possibleMoves() {
    let moves = [];

    // Next Square.
    const nextSquare = this.board.getNextSquare(this.position, this.white);
    if (nextSquare !== undefined) {
      // Add move to moves
      if (this.board.getPiece(nextSquare) == undefined) moves.push(nextSquare);

      // Next Next Square
      const nextNextSquare = this.board.getNextSquare(nextSquare, this.white);
      if (nextNextSquare !== undefined) {
        // Add move to moves
        if (
          this.board.getPiece(nextNextSquare) == undefined &&
          this.new &&
          (this.white ? this.position[1] == "2" : this.position[1] == "7")
        )
          moves.push(nextNextSquare);
      }

      // Captures
      // Left Capture
      const leftNextSquare = this.board.getLeftSquare(nextSquare);
      if (leftNextSquare !== undefined) {
        const piece = this.board.getPiece(leftNextSquare);
        if (piece !== undefined) {
          if (piece.white !== this.white) {
            // Add move to moves
            moves.push(leftNextSquare);
          }
        }
      }
      // Right Capture
      const rightNextSquare = this.board.getRightSquare(nextSquare);
      if (rightNextSquare !== undefined) {
        const piece = this.board.getPiece(rightNextSquare);
        if (piece !== undefined) {
          if (piece.white !== this.white) {
            // Add move to moves
            moves.push(rightNextSquare);
          }
        }
      }
    }

    return moves;
  }
}

module.exports = {
    Pawn,
}