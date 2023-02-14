const { Bishop } = require("./pieces/bishop");
const { King } = require("./pieces/king");
const { Knight } = require("./pieces/knight");
const { Pawn } = require("./pieces/pawn");
const { Queen } = require("./pieces/queen");
const { Rook } = require("./pieces/rook");

const letters = ["a","b","c","d","e","f","g","h"]

class Board {
    constructor() {
        this.layout = new Map([
            ["a1", new Rook(true,this,"a1")],
            ["b1", new Knight(true,this,"b1")],
            ["c1", new Bishop(true,this,"c1")],
            ["d1", new Queen(true,this,"d1")],
            ["e1", new King(true,this,"e1")],
            ["f1", new Bishop(true,this,"f1")],
            ["g1", new Knight(true,this,"g1")],
            ["h1", new Rook(true,this,"h1")],
            ["a2", new Pawn(true,this,"a2")],
            ["b2", new Pawn(true,this,"b2")],
            ["c2", new Pawn(true,this,"c2")],
            ["d2", new Pawn(true,this,"d2")],
            ["e2", new Pawn(true,this,"e2")],
            ["f2", new Pawn(true,this,"f2")],
            ["g2", new Pawn(true,this,"g2")],
            ["h2", new Pawn(true,this,"h2")],
            ["a8", new Rook(false,this,"a8")],
            ["b8", new Knight(false,this,"b8")],
            ["c8", new Bishop(false,this,"c8")],
            ["d8", new Queen(false,this,"d8")],
            ["e8", new King(false,this,"e8")],
            ["f8", new Bishop(false,this,"f8")],
            ["g8", new Knight(false,this,"g8")],
            ["h8", new Rook(false,this,"h8")],
            ["a7", new Pawn(false,this,"a7")],
            ["b7", new Pawn(false,this,"b7")],
            ["c7", new Pawn(false,this,"c7")],
            ["d7", new Pawn(false,this,"d7")],
            ["e7", new Pawn(false,this,"e7")],
            ["f7", new Pawn(false,this,"f7")],
            ["g7", new Pawn(false,this,"g7")],
            ["h7", new Pawn(false,this,"h7")],
        ]);
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
        const piece = this.layout.get(square);

        return piece;
    }
}

module.exports = {
    Board,
}