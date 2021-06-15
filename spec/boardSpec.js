const Board = require('../board');


describe('the Board class', () => {

    beforeEach(function() {
        board = new Board();
    });

    it('should be initialized with empty board', () => {
        expect(board.board).toEqual([
            null,null,null,
            null,null,null,
            null,null,null,
        ])
    });
});