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
    let draw = 0;

    let movesstring = null;
    let board = null;
    let bestPlayer = null;
    let expectedResult = null;


    it("Find the best player", () => {
        movesstring = "xxxo++oo+";
        board = populateBoard(movesstring);
        bestPlayer = findHorizontalMatch(board);
        expectedResult = player2;

        expect(bestPlayer).toEqual(expectedResult);
    });


    it("Find the best player from the second row", () => {
        movesstring = "x++oooxx+";
        board = populateBoard(movesstring);
        bestPlayer = findHorizontalMatch(board);
        expectedResult = player1;

        expect(bestPlayer).toEqual(expectedResult);
    });


    it("Test A scenario where the board is not filled completely and yet no decision yet ", () => {
        movesstring = "x++xooxo+";
        board = populateBoard(movesstring);
        bestPlayer = findHorizontalMatch(board);
        expectedResult = [['x', '+', '+'], ['x', 'o', 'o'], ['x', 'o', '+']];

        expect(bestPlayer).toEqual(expectedResult);
    });




    it("Test a draw scenario in Horizontal matcher", () => {
        movesstring = "xoxxooxoo";
        board = populateBoard(movesstring);
        bestPlayer = findHorizontalMatch(board);
        expectedResult = draw;

        expect(bestPlayer).toEqual(expectedResult);
    });


})

