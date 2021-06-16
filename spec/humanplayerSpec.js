const HumanPlayer = require('../humanplayer')
const Board = require('../board');

describe('the HumanPlayer class -', () => {
    
    beforeEach(function() { 
        hp = new HumanPlayer('X', new Board());
    })

    describe('the constructor', () => {
        it('should initialzie with name', () => {
            expect(hp.name).toBe('X')
        });
    });

    describe('#makeMove', () => {
        it('should update the correctly with the players move', () => {
            mockResult = `X | _ | _ \n\n_ | _ | _ \n\n_ | _ | _ \n\n`
            spyOn(console, 'log')
            hp.makeMove(1, 'X')
            hp.board.renderBoard()

            expect(console.log).toHaveBeenCalledWith(mockResult)
        });
    });
});