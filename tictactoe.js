
const player1 = "o";
const player2 = "x";
const initsymbol = "+";

const intiboard = () => {
    let board = [];

    for (let i = 0; i < 3; i++) {
        let boradrow = []
        board[i] = [];
        for (let j = 0; j < 3; j++) {
            boradrow[j] = initsymbol;
        }
        board[i] = boradrow;
    }
    return board;
}

const populateBoard = (moves) => {
    if (moves == null) {
        return intiboard();
    }
    let movesarray = moves.split("");
    let board = [];

    let boardindex = 0;
    for (let i = 0; i < 3; i++) {

        let boradrow = []
        board[i] = [];
        for (let j = 0; j < 3; j++) {
            if (movesarray[boardindex] == player1 || movesarray[boardindex] == player2) {
                boradrow[j] = movesarray[boardindex];
            } else {
                boradrow[j] = initsymbol;
            }
            boardindex++;
        }
        board[i] = boradrow;
    }

    return board;

}

const findHorizontalMatch = (board) => {

    if (!Array.isArray(board)) {
        return null;
    }

    //todo: look through the vertical selection to find if there are existing 3 items of same type, x or o 
    for (let i = 0; i < board.length; i++) {
        boardrow = board[i];
        let move_x = 0;
        let move_o = 0;
        for (let j = 0; j < boardrow.length; j++) {
            if (boardrow[j] == player1) {
                move_o++;
            }

            if (boardrow[j] == player2) {
                move_x++;
            }
        }

        if (move_x == 3) {
            return move_x;
        }
        if (move_o == 3) {
            return move_o;
        }
    }

    //note: 0 meaning draw in this context 
    return 0;

}

const findVerticalMatch = () => {

}

const findLeftRigtDiagonalMatch = () => {

}

const findRightLeftDiagonalMatch = () => {

}


const findMatch = (moves) => {
    if (moves == undefined) {
        return null;
    }
    let board = populateBoard(moves);
    let horizontal_match = findHorizontalMatch(board);
    
    



}


let movesstring = "+xxo++o++";
//todo: convert  string to array 
let movesarray = movesstring.split("");

console.log(populateBoard(movesstring));

initial_board = intiboard();




module.exports = {
    intiboard, populateBoard,findHorizontalMatch
}

// let result  = intiboard();

// console.log(intiboard());

// console.log(players[1]);