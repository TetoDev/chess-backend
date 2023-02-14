const rooms = require("../game/room.js");

function createRoom(){
    const room = new rooms.Room();
    return room.id;
}

function processMove(id, piece, move, white){
    const room = rooms.roomMap.get(id);

    if (room == undefined) return false;
    if (room.board.wasWhiteLastMove === white) return false;

    const boardPiece = room.board.getPiece(piece);
    if (boardPiece == undefined) return false;
    if (boardPiece.white !== white) return false;

    return room.board.move(boardPiece,move);
}

function resign (white){

}

function askDraw (){

}