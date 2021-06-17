const Game = require('../game')
const Board = require('../board')
const HumanPlayer = require('../humanplayer')
const ComputerPlayer = require('../computerplayer')

describe('the Game class - ', () => {


    beforeEach(function() {
        game = new Game();
        board = new Board();
        hp = new HumanPlayer('X', board);
        cp = new ComputerPlayer('O', board);
    });

    describe('the constructor', () => {
        it('should initialize with empty Board instance', () => {

            expect(game.board).toEqual(board)
        });

        it('should initialize with HumanPlayer instance', () => {

            expect(game.hp).toEqual(hp)
        });

        it('should initialize with ComputerPlayer instance', () => {

            expect(game.cp).toEqual(cp)
        });

        it('should initialize with human player going first', () => {
            
            expect(game.humanIsNext).toEqual(true)
        });
    });

    describe('#changeCurrentPlayer', () => {
        it('should change the current player', () => {
            game.changeCurrentPlayer();

            expect(game.humanIsNext).toEqual(false)
        });

        it('should change the current player', () => {
            game.changeCurrentPlayer();
            game.changeCurrentPlayer();

            expect(game.humanIsNext).toEqual(true)
        });
    });
});
