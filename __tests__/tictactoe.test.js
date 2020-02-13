let { intiboard } = require('../tictactoe')
describe("Testing the Tictoa Engine", () => {
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