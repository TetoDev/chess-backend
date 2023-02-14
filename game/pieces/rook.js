const { Piece } = require("./piece");

class Rook extends Piece{
    constructor(white,board,position){
        this.white = white;
        this.board = board;
        this.position = position;
        this.new = true;
    }

    possibleMoves () {
        let moves = [];

        // Top squares
        let currentSquare = this.position;
        while (true) {
            const topNextSquare = this.board.getUpSquare(currentSquare);
            if (topNextSquare === undefined) {
                break;
            }
            const piece = this.board.getPiece(topNextSquare);
            // Standart move, no piece = free space
            if (piece === undefined) {moves.push(topNextSquare); continue;}
            
            // Capture
            if (piece.white !== this.white){
                moves.push(topNextSquare);
                break;
            }
        }

        // Bottom Squares
        currentSquare = this.position;
        while (true) {
            const bottomNextSquare = this.board.getDownSquare(currentSquare);
            if (bottomNextSquare === undefined) {
                break;
            }
            const piece = this.board.getPiece(bottomNextSquare);
            // Standart move, no piece = free space
            if (piece === undefined) {moves.push(bottomNextSquare); continue;}
            
            // Capture
            if (piece.white !== this.white){
                moves.push(bottomNextSquare);
                break;
            }
        }

        // Right Squares
        currentSquare = this.position;
        while (true) {
            const rightNextSquare = this.board.getRightSquare(currentSquare);
            if (rightNextSquare === undefined) {
                break;
            }
            const piece = this.board.getPiece(rightNextSquare);
            // Standart move, no piece = free space
            if (piece === undefined) {moves.push(rightNextSquare); continue;}
            
            // Capture
            if (piece.white !== this.white){
                moves.push(rightNextSquare);
                break;
            }
        }

        // Bottom Squares
        currentSquare = this.position;
        while (true) {
            const leftNextSquare = this.board.leftSquare(currentSquare);
            if (leftNextSquare === undefined) {
                break;
            }
            const piece = this.board.getPiece(leftNextSquare);
            // Standart move, no piece = free space
            if (piece === undefined) {moves.push(leftNextSquare); continue;}
            
            // Capture
            if (piece.white !== this.white){
                moves.push(leftNextSquare);
                break;
            }
        }
        return moves;
    }
}

module.exports = {
    Rook,
}