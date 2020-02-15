
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
        } else if (boardrow[columnIndex] == initsymbol) {
            unmatched++;
        } else {

        }

    }

    if (move_o == 3) {
        return player1;
    }

    else if (move_x == 3) {
        return player2;
    } else {

        if (columnIndex == 3 && unmatched > 0) {

            return board;
        } else if (columnIndex == 3) {
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
    console.log(result);
    return result;
}



const findifExistsUnmatched = (board) => {
    let boardrow = 0;
    for (let i = 0; i < board.length; i++) {
        boardrow = board[i];

        if (boardrow[i] == initsymbol) {
            return true;
        }

    }
    return false;
}


const findLeftRigtDiagonalMatch = (board) => {

    let unmatched = 0;
    let move_o = 0;
    let move_x = 0;
    let boardrow = 0;

    for (let i = 0; i < board.length; i++) {
        boardrow = board[i];
        if (boardrow[i] == player1) {
            move_o++;
        }
        else if (boardrow[i] == player2) {
            move_x++;
        } else if (boardrow[i] == initsymbol) {
            unmatched++;
        } else {

        }
    }
    if (move_o == 3) {
        return player1;
    }
    else if (move_x == 3) {
        console.log(board);
        return player2;
    } else {
        let isUnmatched = findifExistsUnmatched(board);
        if (isUnmatched == true) {
            console.log(board);
            return board;
        } else {
            console.log(board);
            return draw;
        }
    }

}

const findRightLeftDiagonalMatch = (board) => {

    let unmatched = 0;
    let move_o = 0;
    let move_x = 0;
    let boardrow = 0;

    let boardIndex = board.length - 1;

    for (let i = 0; i < board.length; i++) {

        boardrow = board[boardIndex];

        if (boardrow[i] == player1) {
            move_o++;
        }
        else if (boardrow[i] == player2) {
            move_x++;
        } else if (boardrow[i] == initsymbol) {
            unmatched++;
        } else {

        }
        boardIndex--;

    }


    if (move_o == 3) {
        return player1;
    }
    else if (move_x == 3) {

        return player2;
    } else {
        let isUnmatched = findifExistsUnmatched(board);
        if (isUnmatched == true) {
            return board;
        } else {
            return draw;
        }
    }


}

const validateBoardString = (boardString) => {
    if (boardString === null || boardString === undefined) {
        throw new Error("Invalid Boad String");
    }

    let boardarray = boardString.split("");
    if (boardarray.length !== 9) {
        throw new Error("Invalid Board Length");
    }

    //validat4e of boardstring only includes specific characers 

    for (let index = 0; index < boardarray.length; index++) {
        let character = boardarray[index];
        if (character != player1 && character != player2 && character != initsymbol) {
            throw new Error("Invalid character, not acceptable ");
        }
    }

    return boardarray;



}


//Look through rows to find if exists 2 matched then add the third one to win  
const placeHorizontalWin = (board, callback) => {

    if (!Array.isArray(board)) {
        return null;
    }


    let boardrow = null;
    //todo: look through the vertical selection to find if there are existing 3 items of same type, x or o 
    for (let i = 0; i < board.length; i++) {
        boardrow = board[i];

        let move_o = 0;
        let move_x = 0;
        let unmatched = 0;


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

        if (move_o == 2 && move_x == 0 && unmatched == 1) {

            //todo: place  a move o to the unmatched 
            for (let j = 0; j < boardrow.length; j++) {
                if (boardrow[j] == initsymbol) {
                    boardrow[j] = player1;

                    return callback(true, board);
                }
            }
        }


    }
    return callback(false, board);

}



// Loook through vertical columns and see if there exists any two players on which to add the other one to win the game
const placeVerticalWin = (board, columnIndex, unmatched,callback) => {
    let move_o = 0;
    let move_x = 0;
    let boardrow = 0;


    for (let i = 0; i < board.length; i++) {
        boardrow = board[i];

        
        if (boardrow[columnIndex] == player1) {
            move_o++;
        }

        else if (boardrow[columnIndex] == player2) {
            move_x++;
        } else if (boardrow[columnIndex] == initsymbol) {
            unmatched++;
        } else {

        }

    }


    if (move_o == 2 && move_x == 0 && unmatched == 1) {

        //todo: place  a move o to the unmatched 
        for (let j = 0; j < boardrow.length; j++) {
            if (boardrow[columnIndex] == initsymbol) {
                boardrow[columnIndex] = player1;

                return callback(true, board);
            }
        }
    }

    // console.log(board.length);
    if (columnIndex < 3 ) {
        columnIndex ++;
        return placeVerticalWin(board, columnIndex, 0,callback);
    }

    return callback(false, board);
 
}

 





const playGame = (boardstring) => {
    if (boardstring == undefined) {
        return null;
    }

    //todo:   validate board string 
    let boardArray = validateBoardString(boardstring)
    let board = populateBoard(boardstring);

    //todo: Win if a player [computer] has two in a row, they can place the third to win. 
    //decide when to know a win in a horizontal flow 
    //todo:  add the third item to win 
   /* placeHorizontalWin(board, (status, result) => {
        //todo: return back to the status of the move 
        console.log(result);

        if (status == true) {
            board = result;
            return board;
        }
    }) */

    /*
    //todo: block the opponent if they have two in a row  : 
    placeVerticalWin(board,0,0, (status, result) => {
        //todo: return back to the status of the move 
        console.log(result);

        // if (status == true) {
        //     board = result;
        //     return board;
        // }
    })
    */



    // console.log(board);


    // let movesarray = moves.split("");

    // console.log(movesarray.length);
    // let board = populateBoard(moves);

    // console.log(board);



    /* let board = populateBoard(moves);
    // let horizontal_match = findHorizontalMatch(board);
    // let vertical_match = findVerticalMatch(board);
    let diagnoal_leftright_match = findLeftRigtDiagonalMatch(board);


    // console.log(diagnoal_leftright_match);
    return diagnoal_leftright_match;
    */


}


let movesstring = "++ox+o+xo";



// playGame(movesstring)
// console.log(findMatch(movesstring));

// initial_board = intiboard();




module.exports = {
    intiboard,
    populateBoard,
    findHorizontalMatch,
    findVerticalMatch,
    findLeftRigtDiagonalMatch,
    findRightLeftDiagonalMatch
    , validateBoardString
    , placeHorizontalWin
    ,placeVerticalWin
}

// let result  = intiboard();

// console.log(intiboard());

// console.log(players[1]);