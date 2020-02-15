let {
    intiboard, populateBoard,
    findHorizontalMatch, findVerticalMatch, findLeftRigtDiagonalMatch,
    findRightLeftDiagonalMatch,
    validateBoardString,
    placeHorizontalWin
} = require('../tictactoe');


describe.skip("Testing the Init   Board functionality", () => {
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


describe.skip("Testing  the populate Board functionality", () => {

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



describe.skip("Testing the Horizontal match functionality ", () => {


    let player1 = "o";
    let player2 = "x";
    let draw = 0;

    let movesstring = null;
    let board = null;
    let bestPlayer = null;
    let expectedResult = null;

    it("Find the best player in horizontal match", () => {
        movesstring = "xxxo++oo+";
        board = populateBoard(movesstring);
        bestPlayer = findHorizontalMatch(board);
        expectedResult = player2;

        expect(bestPlayer).toEqual(expectedResult);
    });


    it("Find the best player from the second row in horizontal match ", () => {
        movesstring = "x++oooxx+";
        board = populateBoard(movesstring);
        bestPlayer = findHorizontalMatch(board);
        expectedResult = player1;

        expect(bestPlayer).toEqual(expectedResult);
    });


    it("Test A scenario where the board is not filled completely and yet no decision yet in horizontal match ", () => {
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




describe.skip("Testing the vertical  match functionality ", () => {

    let player1 = "o";
    let player2 = "x";
    let draw = 0;

    let movesstring = null;
    let board = null;
    let bestPlayer = null;
    let expectedResult = null;


    it("Find the best player in vertical match", () => {
        movesstring = "xoox++xo+";
        board = populateBoard(movesstring);
        bestPlayer = findVerticalMatch(board);
        expectedResult = player2;

        expect(bestPlayer).toEqual(expectedResult);
    });


    it("Find the best player from the second column in vertical match ", () => {
        movesstring = "oxo+x+ox+";
        board = populateBoard(movesstring);
        bestPlayer = findVerticalMatch(board);
        expectedResult = player2;

        expect(bestPlayer).toEqual(expectedResult);
    });


    it("Test A scenario where the board is not filled completely and yet no decision yet in vertical match ", () => {
        movesstring = "ox+xooxo+";
        board = populateBoard(movesstring);
        bestPlayer = findVerticalMatch(board);
        expectedResult = [['o', 'x', '+'], ['x', 'o', 'o'], ['x', 'o', '+']];

        expect(bestPlayer).toEqual(expectedResult);
    });



    it("Test a draw scenario in vertical matcher", () => {
        movesstring = "xoxoxoxoo";
        board = populateBoard(movesstring);
        bestPlayer = findVerticalMatch(board);
        expectedResult = draw;

        expect(bestPlayer).toEqual(expectedResult);
    });


})




describe.skip("Testing the diagonal left to right   match functionality ", () => {

    let player1 = "o";
    let player2 = "x";
    let draw = 0;

    let movesstring = null;
    let board = null;
    let bestPlayer = null;
    let expectedResult = null;


    it("Find the best player in vertical match", () => {
        movesstring = "xoo+x+o+x";
        board = populateBoard(movesstring);
        bestPlayer = findLeftRigtDiagonalMatch(board);
        expectedResult = player2;
        expect(bestPlayer).toEqual(expectedResult);
    });


    it("Test A scenario where the board is not filled completely and yet no decision made  ", () => {
        movesstring = "ox+xooxo+";
        board = populateBoard(movesstring);
        bestPlayer = findLeftRigtDiagonalMatch(board);
        expectedResult = [['o', 'x', '+'], ['x', 'o', 'o'], ['x', 'o', '+']];

        expect(bestPlayer).toEqual(expectedResult);
    });


    it("Test a draw scenario  ", () => {
        movesstring = "xoxoxoxoo";
        board = populateBoard(movesstring);
        bestPlayer = findLeftRigtDiagonalMatch(board);
        expectedResult = draw;

        expect(bestPlayer).toEqual(expectedResult);
    });


})




describe.skip("Testing the diagnoal right to left   match functionality ", () => {

    let player1 = "o";
    let player2 = "x";
    let draw = 0;

    let movesstring = null;
    let board = null;
    let bestPlayer = null;
    let expectedResult = null;


    it("Find the best player in vertical match", () => {
        movesstring = "oox+x+x+o";
        board = populateBoard(movesstring);
        bestPlayer = findRightLeftDiagonalMatch(board);
        expectedResult = player2;
        expect(bestPlayer).toEqual(expectedResult);
    });


    it("Test A scenario where the board is not filled completely and yet no decision made  ", () => {
        movesstring = "ox+xooxo+";
        board = populateBoard(movesstring);
        bestPlayer = findRightLeftDiagonalMatch(board);
        expectedResult = [['o', 'x', '+'], ['x', 'o', 'o'], ['x', 'o', '+']];

        expect(bestPlayer).toEqual(expectedResult);
    });


    it("Test a draw scenario  ", () => {
        movesstring = "xoxxooxoo";
        board = populateBoard(movesstring);
        bestPlayer = findRightLeftDiagonalMatch(board);
        expectedResult = draw;

        expect(bestPlayer).toEqual(expectedResult);
    });


})



describe.skip("Testing the Horizontal match functionality ", () => {
    it('should through an error on null', () => {
        try {
            validateBoardString();
        } catch (e) {
            expect(e.message).toMatch('Invalid Boad String');
        }
    });






    it('should through an error on null', () => {
        let boardString = "x++o";
        try {
            validateBoardString(boardString);
        } catch (e) {
            expect(e.message).toMatch('Invalid Board Length');
        }
    });


    it('should not contain invalid characters', () => {
        let boardString = "x++xy+x++";
        try {
            validateBoardString(boardString);
        } catch (e) {
            expect(e.message).toMatch('Invalid character, not acceptable ');
        }
    });





    it('should return a valid array ', () => {
        let boardString = "x++x++x++";
        let expecdtedResult = boardString.split("");
        let result = validateBoardString(boardString);
        expect(result).toEqual(expecdtedResult);

    });


})



describe("Testinng a possible win where there 2 oo in a row ", () => {


    it('should play the next in line row to win the game', () => {

        let board = "o+ox++x+x";
        let expecdtedResult = [['o', 'o', 'o'], ['x', '+', '+'], ['x', '+', 'x']];


        placeHorizontalWin(board, (status, result) => {
            //todo: return back to the status of the move
            expect(status).toEqual(true);
            expect(result).toEqual(expecdtedResult);

        })
    })



    it('should return same original board if there is no matching two oo in a row ', () => {

        let board = "o++xo+x+x";
        let expecdtedResult = [['o', '+', '+'], ['x', '+', '+'], ['x', '+', 'x']];

        placeHorizontalWin(board, (status, result) => {
            //todo: return back to the status of the move 

            console.log(status);
            if (status == true) {
                expect(result).toEqual(expecdtedResult);
            }
        })
    })







})





