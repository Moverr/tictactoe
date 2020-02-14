
const player1 = "o";
const player2 = "x";
const initsymbol = "+";
const draw = 0;

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

    let unmatched = 0;
    //todo: look through the vertical selection to find if there are existing 3 items of same type, x or o 
    for (let i = 0; i < board.length; i++) {
        boardrow = board[i];
        let move_o = 0;
        let move_x = 0;

        for (let j = 0; j < boardrow.length; j++) {
            if (boardrow[j] == player1) {
                move_o++;
            }

            else if (boardrow[j] == player2) {
                move_x++;
            } else {
                unmatched++;
            }
        }

        if (move_o == 3) {
            return player1;
        }

        if (move_x == 3) {
            return player2;
        }

    }
    if (unmatched > 0) {
        console.log(board);
        return board;
    }

    //note: 0 meaning draw in this context 
    return draw;

}

const rotateThroughBoardColumns = (board, columnIndex, unmatched) => {

    let move_o = 0;
    let move_x = 0;

    for (let i = 0; i < board.length; i++) {
        boardrow = board[i];

        if (boardrow[columnIndex] == player1) {
            move_o++;[]
        }

        else if (boardrow[columnIndex] == player2) {
            move_x++;
        } else {
            unmatched++;
        }

    }

    if (move_o == 3) {
        return player1;
    }

    else if (move_x == 3) {
        return player2;
    } else {
        if (columnIndex === 3 && unmatched > 0) {

            return board;
        } else if (columnIndex === 3) {
            return draw;
        } else {

            columnIndex = columnIndex + 1;
            return rotateThroughBoardColumns(board, columnIndex, unmatched);
        }

    }
}

const findVerticalMatch = (board) => {
    if (!Array.isArray(board)) {
        return null;
    }
    let columnIndex = 0;
    let unmatched = 0;
    let result = rotateThroughBoardColumns(board, columnIndex, unmatched);
    return result;
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
    // let horizontal_match = findHorizontalMatch(board);
    let vertical_match = findVerticalMatch(board);


    return vertical_match;


}


let movesstring = "+xxo++o++";
//todo: convert  string to array 
let movesarray = movesstring.split("");

console.log(findMatch(movesstring));

// initial_board = intiboard();




module.exports = {
    intiboard, populateBoard, findHorizontalMatch,findVerticalMatch
}

// let result  = intiboard();

// console.log(intiboard());

// console.log(players[1]);