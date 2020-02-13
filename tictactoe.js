 

 function  initBoard () {

    let board = [];
    for (let i = 0; i < 3; i++) {
        let boradrow = []
        board[i] = [];
        for (let j = 0; j < 3; j++) {
            boradrow[j] = j;
        }
        board[i] = boradrow;
    }
    

    return board;
}

// let result  = initBoard();

console.log(initBoard());