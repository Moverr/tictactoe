
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
    // console.log(result);
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
        // console.log(board);
        return player2;
    } else {
        let isUnmatched = findifExistsUnmatched(board);
        if (isUnmatched == true) {
            // console.log(board);
            return board;
        } else {
            // console.log(board);
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
const placeVerticalWin = (board, columnIndex, unmatched, callback) => {
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
    if (columnIndex < 3) {
        columnIndex++;
        return placeVerticalWin(board, columnIndex, 0, callback);
    }

    return callback(false, board);

}




const playLeftRigtDiagonalWin = (board, callback) => {


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




    if (move_o == 2 && move_x == 0 && unmatched == 1) {

        for (let i = 0; i < board.length; i++) {
            boardrow = board[i];


            if (boardrow[i] == initsymbol) {
                boardrow[i] = player1;

                return callback(true, board);

            }

        }

    }

    return callback(false, board);



}




const playRightLeftDiagonalWin = (board, callback) => {

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






    if (move_o == 2 && move_x == 0 && unmatched == 1) {
        boardIndex = board.length - 1;

        for (let i = 0; i < board.length; i++) {
            boardrow = board[boardIndex];


            if (boardrow[i] == initsymbol) {
                boardrow[i] = player1;

                return callback(true, board);

            }

            boardIndex--;


        }

    }

    return callback(false, board);

}

//block the other player from winining

//Look through rows to find if exists 2 matched then add the third one to win  



// Loook through vertical columns and see if there exists any two players on which to add the other one to win the game

const placeHorizontalBlock = (board, callback) => {

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

        if (move_x == 2 && move_o == 0 && unmatched == 1) {

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


const placeVerticalBlock = (board, columnIndex, unmatched, callback) => {
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


    if (move_x == 2 && move_o == 0 && unmatched == 1) {

        //todo: place  a move o to the unmatched 
        for (let j = 0; j < boardrow.length; j++) {
            if (boardrow[columnIndex] == initsymbol) {
                boardrow[columnIndex] = player1;

                return callback(true, board);
            }
        }
    }

    // console.log(board.length);
    if (columnIndex < 3) {
        columnIndex++;
        return placeVerticalWin(board, columnIndex, 0, callback);
    }

    return callback(false, board);

}




const playLeftRigtDiagonalBlock = (board, callback) => {


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




    if (move_x == 2 && move_o == 0 && unmatched == 1) {

        for (let i = 0; i < board.length; i++) {
            boardrow = board[i];


            if (boardrow[i] == initsymbol) {
                boardrow[i] = player1;

                return callback(true, board);

            }

        }

    }

    return callback(false, board);



}




const playRightLeftDiagonalBlock = (board, callback) => {

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


    if (move_x == 2 && move_o == 0 && unmatched == 1) {
        boardIndex = board.length - 1;

        for (let i = 0; i < board.length; i++) {
            boardrow = board[boardIndex];


            if (boardrow[i] == initsymbol) {
                boardrow[i] = player1;

                return callback(true, board);

            }

            boardIndex--;


        }

    }

    return callback(false, board);

}


//Play Next Move 

const placeHorizontalMove = (board, callback) => {

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

        if (move_o >= 0 && unmatched >= 1) {

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


const placeVerticalMove = (board, columnIndex, unmatched, callback) => {
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


    if (move_o >= 0 && unmatched >= 1) {

        //todo: place  a move o to the unmatched 
        for (let j = 0; j < boardrow.length; j++) {
            if (boardrow[columnIndex] == initsymbol) {
                boardrow[columnIndex] = player1;

                return callback(true, board);
            }
        }
    }

    // console.log(board.length);
    if (columnIndex < 3) {
        columnIndex++;
        return placeVerticalWin(board, columnIndex, 0, callback);
    }

    return callback(false, board);

}




const playLeftRigtDiagonalMove = (board, callback) => {


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


    if (move_o >= 0 && unmatched >= 1) {

        for (let i = 0; i < board.length; i++) {
            boardrow = board[i];
            if (boardrow[i] == initsymbol) {
                boardrow[i] = player1;
                return callback(true, board);

            }

        }

    }

    return callback(false, board);



}




const playRightLeftDiagonalMove = (board, callback) => {

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


    if (move_o >= 0 && unmatched >= 1) {
        boardIndex = board.length - 1;

        for (let i = 0; i < board.length; i++) {
            boardrow = board[boardIndex];


            if (boardrow[i] == initsymbol) {
                boardrow[i] = player1;

                return callback(true, board);

            }

            boardIndex--;


        }

    }

    return callback(false, board);

}




const shuffle = (a) => {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
    return a;
}


const playNextMove = (board) => {
    let playmoves = [1, 2, 3, 4];
    let resultstatus;
    playmoves = shuffle(playmoves);

    let x = 0;
    while (x < playmoves.length) {

        console.log(playmoves[x]);
        let playMove = playmoves[x];


        switch (playMove) {


            case 1:
                return placeHorizontalMove(board, (status, result) => {
                    if (status == true) {
                        resultstatus = status
                        board = result;
                    }
                });




            case 2:
                return placeVerticalMove(board, 0, 0, (status, result) => {
                    if (status == true) {
                        resultstatus == status;
                        board = result;

                    }
                });

            case 3:
                return playLeftRigtDiagonalMove(board, (status, result) => {

                    if (status == true) {
                        resultstatus == status;
                        board = result;
                    }
                });




            case 4:

                return playRightLeftDiagonalMove(board, (status, result) => {
                    if (status == true) {
                        resultstatus == status;
                        board = result;
                    }
                })



            default:
                return board;

        }



        x++;

    }

}


const playGame = (boardstring) => {
    let board = null;
    let resultstatus;


    // 1) if empty string  or undefined meaning, the computer is playing first 
    if (boardstring == undefined || boardstring == "") {
        //todo: play the first branch
        initial_best_move = "++++o++++";
        board = populateBoard(initial_best_move);
        return board;
    }

    board = populateBoard(boardstring);

    //2) Check if there is a matching win already 
    {
        let result = findHorizontalMatch(board);

        if (result == board) {
            result = findVerticalMatch(board);
            if (result == board) {
                result = findLeftRigtDiagonalMatch(board);
                if (result == board) {
                    result = findRightLeftDiagonalMatch(board);
                } else {
                    return board;
                }
            } else {
                return board;
            }

        } else {
            return board;
        }

    }
    //3) Block if oponent already has two matching 
    {

        placeHorizontalBlock(board, (status, result) => {
            if (status == true) {
                resultstatus = status
                board = result;
            }
        });

        if (resultstatus == true) {
            return board;
        }

        placeVerticalBlock(board, 0, 0, (status, result) => {
            if (status == true) {
                resultstatus = status
                board = result;
            }
        });

        if (resultstatus == true) {
            return board;
        }

        playLeftRigtDiagonalBlock(board, (status, result) => {

            if (status == true) {
                resultstatus = status
                board = result;
            }
        });

        if (resultstatus == true) {
            return board;
        }

        playRightLeftDiagonalBlock(board, (status, result) => {
            if (status == true) {
                resultstatus = status
                board = result;
            }
        });

        if (resultstatus == true) {
            return board;
        }


    }
    //4) Check  to see that there are 2 matches so that a best win can be played  
    {
        //check 1
        placeHorizontalWin(board, (status, result) => {
            if (status == true) {
                resultstatus == status;
                board = result;

            }
        });

        if (resultstatus == true) {
            return board;
        }

        placeVerticalWin(board, 0, 0, (status, result) => {
            if (status == true) {
                resultstatus == status;
                board = result;

            }
        });

        if (resultstatus == true) {
            return board;
        }

        playLeftRigtDiagonalWin(board, (status, result) => {

            if (status == true) {
                resultstatus == status;
                board = result;
            }
        });

        if (resultstatus == true) {
            return board;
        }


        playRightLeftDiagonalWin(board, (status, result) => {
            if (status == true) {
                resultstatus == status;
                board = result;
            }
        })

        if (resultstatus == true) {
            return board;
        }


    }

    //play  the next second match 
    {
        playNextMove(board);
    }



    return board;


}


const initGame=(boardstring)=>{
    let result = playGame(boardstring);
    console.log(result);
    console.log(populateResponse(result))


}

const populateResponse = (board) => {
    console.log(board);
    let result = "";
    if (Array.isArray(board) == true) {
         
        let boardrow = 0;

        for (let i = 0; i < board.length; i++) {
            boardrow = board[i];

            console.log(boardrow);
            for(let j = 0; j < boardrow.length; j ++ ){

                if (boardrow[j] == player1) {
                    result =  result+""+player1;
                }
                else if (boardrow[j] == player2) {
                    result += player2;
                } else if (boardrow[j] == initsymbol) {
                    result += " ";
                } else {
                     continue;
                }
            
                
            }
            
        }
 
    }
    result = result+"."
    return result;
}


let movesstring = "xxoxo+++";
initGame(movesstring);



module.exports = {
    intiboard,
    populateBoard,
    findHorizontalMatch,
    findVerticalMatch,
    findLeftRigtDiagonalMatch,
    findRightLeftDiagonalMatch
    , validateBoardString
    , placeHorizontalWin
    , placeVerticalWin
    , playLeftRigtDiagonalWin
    , playRightLeftDiagonalWin
    , placeHorizontalBlock
    , placeVerticalBlock
    , playLeftRigtDiagonalBlock
    , playRightLeftDiagonalBlock
}

// let result  = intiboard();

// console.log(intiboard());

// console.log(players[1]);