
  const intiboard=()=> {
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


const players  = ["x","o"];

let movesstring = "+xxo++o++";
//todo: convert  string to array 
let movesarray = movesstring.split("");

console.log(movesarray);


module.exports = {
    intiboard
}

// let result  = intiboard();

// console.log(intiboard());

// console.log(players[1]);