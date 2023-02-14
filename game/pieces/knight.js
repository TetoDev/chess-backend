const { Piece } = require("./piece");

class Knight extends Piece {
  constructor(white, board, position) {
    this.white = white;
    this.board = board;
    this.position = position;
  }

  possibleMoves() {
    let moves = [];
    // Top
    const topNextNextSquare = this.board.getUpSquare(
      this.board.getUpSquare(this.position)
    );

    const topLeft = this.board.getLeftSquare(topNextNextSquare);
    const topLeftPiece = this.board.getPiece(topLeft);
    const topRight = this.board.getRightSquare(topNextNextSquare);
    const topRightPiece = this.board.getPiece(topRight);

    if (topLeftPiece == undefined) {
      // Default Move
      if (topLeft !== undefined) moves.push(topLeft);
    } else {
      if (topLeftPiece.white !== this.white) {
        // Capture
        moves.push(topLeft);
      }
    }
    if (topRightPiece == undefined) {
      // Default Move
      if (topRight !== undefined) moves.push(topRight);
    } else {
      if (topRightPiece.white !== this.white) {
        // Capture
        moves.push(topRight);
      }
    }
    // Bottom
    const bottomNextNextSquare = this.board.getDownSquare(
      this.board.getDownSquare(this.position)
    );

    const bottomLeft = this.board.getLeftSquare(bottomNextNextSquare);
    const bottomLeftPiece = this.board.getPiece(bottomLeft);
    const bottomRight = this.board.getRightSquare(bottomNextNextSquare);
    const bottomRightPiece = this.board.getPiece(bottomRight);

    if (bottomLeftPiece == undefined) {
      // Default Move
      if (bottomLeft !== undefined) moves.push(bottomLeft);
    } else {
      if (bottomLeftPiece.white !== this.white) {
        // Capture
        moves.push(topLeft);
      }
    }
    if (bottomRightPiece == undefined) {
      // Default Move
      if (bottomRight !== undefined) moves.push(bottomRight);
    } else {
      if (bottomRightPiece.white !== this.white) {
        // Capture
        moves.push(bottomRight);
      }
    }
    // Right
    const rightNextNextSquare = this.board.getRightSquare(
      this.board.getRightSquare(this.position)
    );

    const rightTop = this.board.getLeftSquare(rightNextNextSquare);
    const rightTopPiece = this.board.getPiece(rightTop);
    const rightBottom = this.board.getRightSquare(rightNextNextSquare);
    const rightBottomPiece = this.board.getPiece(rightBottom);

    if (rightTopPiece == undefined) {
      // Default Move
      if (rightTop !== undefined) moves.push(rightTop);
    } else {
      if (rightTopPiece.white !== this.white) {
        // Capture
        moves.push(rightTop);
      }
    }
    if (rightBottomPiece == undefined) {
      // Default Move
      if (rightBottom !== undefined) moves.push(rightBottom);
    } else {
      if (rightBottomPiece.white !== this.white) {
        // Capture
        moves.push(rightBottom);
      }
    }
    // Left
    const leftNextNextSquare = this.board.getRightSquare(
      this.board.getRightSquare(this.position)
    );

    const leftTop = this.board.getLeftSquare(leftNextNextSquare);
    const leftTopPiece = this.board.getPiece(leftTop);
    const leftBottom = this.board.getRightSquare(leftNextNextSquare);
    const leftBottomPiece = this.board.getPiece(leftBottom);

    if (leftTopPiece == undefined) {
      // Default Move
      if (leftTop !== undefined) moves.push(leftTop);
    } else {
      if (leftTopPiece.white !== this.white) {
        // Capture
        moves.push(leftTop);
      }
    }
    if (leftBottomPiece == undefined) {
      // Default Move
      if (leftBottom !== undefined) moves.push(leftBottom);
    } else {
      if (leftBottomPiece.white !== this.white) {
        // Capture
        moves.push(leftBottom);
      }
    }
  }
}

module.exports = {
  Knight,
};
