const { Piece } = require("./piece");
const { Room } = require("../room");

class Bishop extends Piece{
    constructor(white,board,position){
        this.white = white;
        this.board = board;
        this.position = position;
    }

    possibleMoves () {
        // Top Left
        let currentSquare = this.position;
        while (true) {
            const topLeftNextSquare = this.board.getUpLeftSquare(currentSquare);
            if (topLeftNextSquare === undefined) {
                break;
            }
            const piece = this.board.getPiece(topLeftNextSquare);
            // Standart move, no piece = free space
            if (piece === undefined) {moves.push(topLeftNextSquare); continue;}
            
            // Capture
            if (piece.white !== this.white){
                moves.push(topLeftNextSquare);
                break;
            }
        }

        // Top right
        currentSquare = this.position;
        while (true) {
            const topRightNextSquare = this.board.getUpRightSquare(currentSquare);
            if (topRightNextSquare === undefined) {
                break;
            }
            const piece = this.board.getPiece(topRightNextSquare);
            // Standart move, no piece = free space
            if (piece === undefined) {moves.push(topRightNextSquare); continue;}
            
            // Capture
            if (piece.white !== this.white){
                moves.push(topRightNextSquare);
                break;
            }
        }

        // Bottom Right
        currentSquare = this.position;
        while (true) {
            const bottomRightNextSquare = this.board.getDownRightSquare(currentSquare);
            if (bottomRightNextSquare === undefined) {
                break;
            }
            const piece = this.board.getPiece(bottomRightNextSquare);
            // Standart move, no piece = free space
            if (piece === undefined) {moves.push(bottomRightNextSquare); continue;}
            
            // Capture
            if (piece.white !== this.white){
                moves.push(bottomRightNextSquare);
                break;
            }
        }


        
    }
}

module.exports = {
    Bishop,
}