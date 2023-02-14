const { Bishop } = require("./pieces/bishop");
const { King } = require("./pieces/king");
const { Knight } = require("./pieces/knight");
const { Pawn } = require("./pieces/pawn");
const { Queen } = require("./pieces/queen");
const { Rook } = require("./pieces/rook");
const { moveFilter } = require("./move-filter");

const letters = ["a","b","c","d","e","f","g","h"]

class Board {
    constructor() {
        this.layout = new Map([
            [new Rook(true,this,"a1"),"a1"],
            [new Knight(true,this,"b1"),"b1"],
            [new Bishop(true,this,"c1"),"c1"],
            [new Queen(true,this,"d1"),"d1"],
            [new King(true,this,"e1"),"e1"],
            [new Bishop(true,this,"f1"),"f1"],
            [new Knight(true,this,"g1"),"g1"],
            [new Rook(true,this,"h1"),"h1"],
            [new Pawn(true,this,"a2"),"a2"],
            [new Pawn(true,this,"b2"),"b2"],
            [new Pawn(true,this,"c2"),"c2"],
            [new Pawn(true,this,"d2"),"d2"],
            [new Pawn(true,this,"e2"),"e2"],
            [new Pawn(true,this,"f2"),"f2"],
            [new Pawn(true,this,"g2"),"g2"],
            [new Pawn(true,this,"h2"),"h2"],
            [new Rook(false,this,"a8"),"a8"],
            [new Knight(false,this,"b8"),"b8"],
            [new Bishop(false,this,"c8"),"c8"],
            [new Queen(false,this,"d8"),"d8"],
            [new King(false,this,"e8"),"e8"],
            [new Bishop(false,this,"f8"),"f8"],
            [new Knight(false,this,"g8"),"g8"],
            [new Rook(false,this,"h8"),"h8"],
            [new Pawn(false,this,"a7"),"a7"],
            [new Pawn(false,this,"b7"),"b7"],
            [new Pawn(false,this,"c7"),"c7"],
            [new Pawn(false,this,"d7"),"d7"],
            [new Pawn(false,this,"e7"),"e7"],
            [new Pawn(false,this,"f7"),"f7"],
            [new Pawn(false,this,"g7"),"g7"],
            [new Pawn(false,this,"h7"),"h7"],
        ]);
        this.wasWhiteLastMove = false;
        this.moves = [];
    }

    getNextSquare(square,white){
        const row = white ? parseInt(square[1]) + 1 : parseInt(square[1]) -1;
        
        if ( 1 <= row <= 8 ){
            return square[0] + row.toString();
        } else {
            return undefined;
        }
    }

    getUpSquare(square){
        const row = parseInt(square[1]) + 1;

        if ( 1 <= row <= 8 ){
            return square[0] + row.toString();
        } else {
            return undefined;
        }
    }

    getDownSquare(square){
        const row = parseInt(square[1]) -1;

        if ( 1 <= row <= 8 ){
            return square[0] + row.toString();
        } else {
            return undefined;
        }
    }

    getLeftSquare(square){
        if (square === undefined) return undefined;
        const columnIndex = letters.indexOf(square[0]);

        if (columnIndex == 0) return undefined;

        return letters[columnIndex - 1] + square[1];
    }

    getRightSquare(square) {
        if (square === undefined) return undefined;
        const columnIndex = letters.indexOf(square[0]);

        if (columnIndex == 7) return undefined;

        return letters[columnIndex + 1] + square[1];
    }

    getUpRightSquare (square){
        return this.getUpSquare(this.getRightSquare(square));
    }

    getUpLeftSquare (square) {
        return this.getUpSquare(this.getLeftSquare(square));
    }

    getDownRightSquare (square) {
        return this.getDownSquare(this.getRightSquare(square));
    }

    getDownLeftSquare(square){
        return this.getDownSquare(this.getLeftSquare(square));
    }

    getPiece(square) {
        if (square == undefined) return undefined;
        const piece = () => {
            let p = undefined;
            this.layout.forEach((piece,value) => {
                if (piece.position === square) p = piece;
            })

            return p;
        }

        return piece;
    }

    getKing(white){
        if (white) {
            for (piece in this.layout.keys()){
                if (piece instanceof King){
                    if (piece.white === white){
                        return piece;
                    }
                }
            }
        }
        return undefined;
    }

    move(piece, move) {
        const moves = piece.possibleMoves();
        if (!moves.includes(move)) return false;

        moveFilter(moves,this, piece);

        if (!moves.includes(move)) return false;
    }
}

module.exports = {
    Board,
}