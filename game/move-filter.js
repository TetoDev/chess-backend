const { Pawn } = require("./pieces/pawn");

function inCheck(king, targetArray) {
    return targetArray.includes(king.position);
}

function moveFilter (moves, board, piece){
    let targetSquaresBefore = [];
    const targetedSquaresAfter = new Map();
    const king = board.getKing(piece.white);

    // // Checking if the king is already in Check
    // board.layout.forEach((piece,square) => {
    //     if (piece instanceof Pawn) {
    //         targetSquaresBefore = targetSquaresBefore.concat(piece.getTargetSquares());
    //     } else {
    //         targetSquaresBefore = targetSquaresBefore.concat(piece.possibleMoves());
    //     }
    // });

    // // Checking if the king is in Check
    // const isKingInCheck = inCheck(king,targetSquaresBefore);

    // Setting a temporary layout in which we preemptively move the piece to all posibilities to check if it would make the king go in Check
    moves.forEach((move) => {
        const tempLayout = new Map(board.layout);
        tempLayout.set(piece,move) // MAKE NEW METHOD TO CAPTURE PIECE IF NECESARY
        let targetSquares = [];

        // Checking all new targeted squares.
        tempLayout.forEach((piece,square) => {
            if (piece instanceof Pawn) {
                targetSquares = targetSquares.concat(piece.getTargetSquares());
            } else {
                targetSquares = targetSquares.concat(piece.possibleMoves());
            }
        });

        // Add entry to targeted squares
        targetedSquaresAfter.set(move, targetSquares);
    })
    

    // Checking if the king will be in Check (all possible moves)
    const willKingBeInCheck = new Map();

    targetedSquaresAfter.forEach((square,targetedSquares) => {
        willKingBeInCheck.set(square, inCheck(king,targetedSquares));
    });

    return moves.filter((move)=>{
        return !willKingBeInCheck.get(move);
    });
}

module.exports = {
    moveFilter,
}