


const initBoard = () => {
    let board = [];
    for (let i = 0; i < 3; i++) {
        let boradrow = []
        board[i] = [];
        for (let j = 0; j < 3; j++) {
            row[j] = j;
        }
        board[i] = row;
    }
    return board;
}


console.log(initBoard());