let { intiboard, populateBoard, findHorizontalMatch } = require('../tictactoe')
describe("Testing the Init   Board functionality", () => {
    let board = intiboard();

    it("Should find out if board is an array ", () => {
        let arrayObject = Array.isArray(board);
        expect(arrayObject).toEqual(true);
    });

    it("should load a 3 by 3 matrix ", () => {
        expect(board.length).toEqual(3);
        expect(board[0].length).toEqual(3);

    });


});


describe("Testing  the populate Board functionality", () => {

    let movesstring = "+xxo++o++";
    let board = populateBoard(movesstring);
    let expectedResult = [['+', 'x', 'x'], ['o', '+', '+'], ['o', '+', '+']];


    it("Should find out if board is an array ", () => {
        let arrayObject = Array.isArray(board);
        expect(arrayObject).toEqual(true);
    });

    it("The resultant board should be equal to the expected result ", () => {
        expect(board).toEqual(expectedResult);
    })


})








describe("Find Row Match of a record ", () => {

    let player1 = "o";
    let player2 = "x";


    let movesstring = "xxxo++oo+";
    let board = populateBoard(movesstring);
    let bestPlayer = findHorizontalMatch(board);
    let expectedResult = player2;


    it("Find the best player", () => {
        expect(bestPlayer).toEqual(expectedResult);
    });




})

