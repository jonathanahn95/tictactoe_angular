const ComputerPlayer = require('../computerplayer')
const Board = require('../board');

describe('the ComputerPlayer class - ', () => {
    beforeEach(function() { 
        cp = new ComputerPlayer('O', new Board())
    })

    describe('the constructor', () => {
        it('initializes with name', () => {
            expect(cp.name).toBe('O')
        });
    });

    describe('#makeBestMove', () => {
        it('updates the board with the best move', () => {
            mockBoard = [
                'X', 'O', 'X',
                'O', 'X', 'O', 
                null, null, null
            ]
            cp.board.board = mockBoard

            mockResult = `X | O | X \n\nO | X | O \n\nO | _ | _ \n\n`
            spyOn(console, 'log')
            cp.makeBestMove()
            cp.board.renderBoard()

            expect(console.log).toHaveBeenCalledWith(mockResult)
        });

        it('updates the board with the best move', () => {
            mockBoard = [
                'X', null, null,
                null, 'O', 'X',
                'O', 'X', null
            ]
            cp.board.board = mockBoard

            mockResult = `X | _ | O \n\n_ | O | X \n\nO | X | _ \n\n`
            spyOn(console, 'log')
            cp.makeBestMove()
            cp.board.renderBoard()

            expect(console.log).toHaveBeenCalledWith(mockResult)
        });
    });

    describe('#minimax', () => { 
        it('returns the best move to block the winning move from X', () => {
            mockBoard = [
                'X', 'O', 'X',
                'O', 'X', 'O', 
                null, null, null
            ]
            cp.board.board = mockBoard

            expect(cp.minimax()).toEqual({index: 6, score: -10})
        });
        
        it('returns the winning move when next move to win', () => {
            mockBoard = [
               'X', null, null,
               null, 'O', 'X',
                'O', 'X', null
            ]
            cp.board.board = mockBoard

            expect(cp.minimax()).toEqual({ index: 2, score: 10 } )
        });
        
        it('returns the winning move when next move to win', () => {
            mockBoard = [
               'O', null, 'X',
               'X', 'O', 'X',
               null, null, null
            ]
            cp.board.board = mockBoard

            expect(cp.minimax()).toEqual({ index: 8, score: 10 } )
        });
        
        it('returns the winning move when next move to win', () => {
            mockBoard = [
               'O', null, 'X',
               'X', 'O', 'X',
               null, null, null
            ]
            cp.board.board = mockBoard

            expect(cp.minimax()).toEqual({ index: 8, score: 10 } )
        });
        
        it('returns the center move when center is taking my humans first turn', () => {
            mockBoard = [
                null, null, null,
                null, null, null,
                null, null, 'X'
            ]
            cp.board.board = mockBoard

            expect(cp.minimax()).toEqual({ index: 4, score: 0 } )
        });
    });
});      