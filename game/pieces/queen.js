const { Piece } = require("./piece");
const { Room } = require("../room");

class Queen extends Piece{
    constructor(white,board,position){
        this.white = white;
        this.board = board;
        this.position = position;
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

        // Top Left
        currentSquare = this.position;
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
    Queen,
}