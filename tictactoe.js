
const intiboard = () => {
    let board = [];

    for (let i = 0; i < 3; i++) {
        let boradrow = []
        board[i] = [];
        for (let j = 0; j < 3; j++) {
            boradrow[j] = "+";
        }
        board[i] = boradrow;
    }
    return board;
}

const populateBoard = (moves) => {
    if(moves == null){
        return intiboard();
    }
    let movesarray = moves.split("");
    let board = [];

    for (let i = 0; i < 3; i++) {
        let boradrow = []
        board[i] = [];
        for (let j = 0; j < 3; j++) {
            boradrow[j] = "+";
        }
        board[i] = boradrow;
    }

}


const players = ["x", "o"];

let movesstring = "+xxo++o++";
//todo: convert  string to array 
let movesarray = movesstring.split("");

console.log(movesarray);

initial_board = intiboard();




module.exports = {
    intiboard
}

// let result  = intiboard();

// console.log(intiboard());

// console.log(players[1]);