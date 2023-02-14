const { Piece } = require("./piece");

class King extends Piece{
    constructor(white,board,position){
        this.white = white;
        this.board = board;
        this.position = position;
        this.new = true;
    }

    possibleMoves () {
        let moves = [];

        const squares = [
            this.board.getUpSquare(this.position),
            this.board.getUpRightSquare(this.position),
            this.board.getRightSquare(this.position),
            this.board.getDownRightSquare(this.position),
            this.board.getDownSquare(this.position),
            this.board.getDownLeftSquare(this.position),
            this.board.getLeftSquare(this.position),
            this.board.getUpLeftSquare(this.position)        
        ];

        squares.forEach((square) => {
            if (square !== undefined){
                const piece = this.board.getPiece(square);
                if (piece == undefined){
                    moves.push(square);
                } else if (piece.white != this.white) {
                    moves.push(square);
                }
            }
        })

        return moves;
    }
}

module.exports = {
    King,
}