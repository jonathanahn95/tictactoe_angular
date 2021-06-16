const Board = require('../board');


describe('the Board class -', () => {

    beforeEach(function() {
        board = new Board();
    });

    describe('the constructor', () => {
        it('should be initialized with empty board', () => {
            expect(board.board).toEqual([
                null,null,null,
                null,null,null,
                null,null,null,
            ])
        });
    });

    describe('#updateBoard', () => {
        it('should update the board', () => {
            mockResult = `X | _ | _ \n\n_ | _ | _ \n\n_ | _ | _ \n\n`
            spyOn(console, 'log')
            board.updateBoard(1, 'X')
            board.renderBoard()

            expect(console.log).toHaveBeenCalledWith(mockResult)
        });
    });

    describe('#isTied', () => {
        it('should be return true if no open spots', () => {
            mockBoard = [
                'X', 'O', 'X',
                'O', 'X', 'O', 
                'O', 'X', 'O'
            ]
            board.board = mockBoard;
            expect(board.isTied()).toEqual(true)
        });

        it('should be return false if there are open spots', () => {
            mockBoard = [
                'X', 'O', 'X',
                'O', 'X', 'O', 
                'O', 'X', null
            ]
            board.board = mockBoard;
            expect(board.isTied()).toEqual(false)
        });
    });

    describe('#isValid', () => {
        it('should be return true if pos within the board', () => {
            expect(board.isValid(2)).toEqual(true)
        });

        it('should be return false if pos not within the board', () => {
            expect(board.isValid(10)).toEqual(false)
        });
        
        it('should be return false if pos is taken', () => {
            mockBoard = [null, null, null, null, null, null, null, null, null]
            board.board = mockBoard
            expect(board.isValid(1)).toEqual(true)
        });
        
        it('should be return true if pos is not taken', () => {
            mockBoard = [null, "X", null, null, null, null, null, null, null]
            board.board = mockBoard
            expect(board.isValid(1)).toEqual(false) 
        });
    });


    describe('#availableSpots', () => {
        it('should be return an array of available spots on the board', () => {
            const mockBoard = ["X", null, null, null, null, null, null, null, null]
            board.board = mockBoard;
            const openSpots = [1,2,3,4,5,6,7,8]
            expect(board.availableSpots()).toEqual(openSpots)
        });
        
        it('should be return an array of available spots on the board', () => {
            const mockBoard = ["X", "O", "X", null, null, null, null, null, null]
            board.board = mockBoard;
            const openSpots = [3,4,5,6,7,8]
            expect(board.availableSpots()).toEqual(openSpots)
        });
    });
    
    describe('#renderBoard', () => {
        it('should console.log the current status of the board', () => {
            spyOn(console, 'log')
            board.renderBoard()

            expect(console.log).toHaveBeenCalledWith(`_ | _ | _ \n\n_ | _ | _ \n\n_ | _ | _ \n\n`)
        });

        it('should console.log the current status of the board', () => {
            mockBoard = ['X', null, null, null, null, null, null, null, null]
            board.board = mockBoard;

            spyOn(console, 'log')
            board.renderBoard()

            expect(console.log).toHaveBeenCalledWith(`X | _ | _ \n\n_ | _ | _ \n\n_ | _ | _ \n\n`)
        });

        it('should console.log the current status of the board', () => {
            mockBoard = ['X', null, 'O', null, null, null, null, null, null]
            board.board = mockBoard;

            spyOn(console, 'log')
            board.renderBoard()

            expect(console.log).toHaveBeenCalledWith(`X | _ | O \n\n_ | _ | _ \n\n_ | _ | _ \n\n`)
        });
    });
    
    
    describe('#hasWinner', () => {
        it('should return true if there is a winner', () => {
            mockBoard = ['X', 'X', 'X', 'O', null, null, null, 'O', null]
            board.board = mockBoard;

            expect(board.hasWinner()).toBe(true)
        });

        it('should return false if there is no winner', () => {
            mockBoard = ['X','O','X','O', 'X', 'O', 'O', 'X', 'O']
            board.board = mockBoard;

            expect(board.hasWinner()).toBe(false)
        });

        it('should return false if there is no winner', () => {
            mockBoard = ['X','O', null, null, null, null, null, null, null]
            board.board = mockBoard;

            expect(board.hasWinner()).toBe(false)
        });
    });
});