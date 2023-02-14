class Piece {
    constructor(){
        if(this.constructor == Piece){
            throw new Error("Abstract classes cannot be instantiated. Class: Piece");
        }
    }

    possibleMoves (){
        throw new Error("Method move(square) needs to be implemented. Abstract class: Piece");
    }

    remove(){
        this = NaN;
    }

}

module.exports = {
    Piece,
}