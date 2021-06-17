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

    describe('#run', () => {
        it('should update the board after the human players move', () => {
            mockBoard = [
                'X', null, null,
                null, 'O', 'X',
                'O', 'X', null
            ]
            board.board = mockBoard
            mockResult = `X | _ | _ \n\n_ | O | X \n\nO | X | _ \n\n`

            spyOn(hp, 'makeMove')
            hp.makeMove(1, 'X')

            spyOn(console, 'log')
            board.renderBoard()

            spyOn(board, 'isTied')
            board.isTied()

            spyOn(board, 'hasWinner')
            board.hasWinner()

            spyOn(board, 'renderBoard')
            board.renderBoard()

            spyOn(game, 'changeCurrentPlayer')
            game.changeCurrentPlayer()

            spyOn(game, 'run')
            game.run()
            
            expect(hp.makeMove).toHaveBeenCalledWith(1, 'X')
            expect(console.log).toHaveBeenCalledWith(mockResult)
            expect(board.isTied).toHaveBeenCalledWith()
            expect(board.hasWinner).toHaveBeenCalledWith()
            expect(board.renderBoard).toHaveBeenCalledWith()
            expect(game.changeCurrentPlayer).toHaveBeenCalledWith()
            expect(game.run).toHaveBeenCalledWith()
        });

        it('should update the board after the computer players move', () => {
            mockBoard = [
                'X', null, 'O',
                null, 'O', 'X',
                'O', 'X', null
            ]
            board.board = mockBoard
            mockResult = `X | _ | O \n\n_ | O | X \n\nO | X | _ \n\n`

            spyOn(cp, 'makeBestMove')
            cp.makeBestMove()

            spyOn(console, 'log')
            board.renderBoard()

            spyOn(board, 'isTied')
            board.isTied()

            spyOn(board, 'hasWinner')
            board.hasWinner()

            spyOn(board, 'renderBoard')
            board.renderBoard()

            spyOn(game, 'changeCurrentPlayer')
            game.changeCurrentPlayer()

            spyOn(game, 'run')
            game.run()
            
            expect(cp.makeBestMove).toHaveBeenCalledWith()
            expect(console.log).toHaveBeenCalledWith(mockResult)
            expect(board.isTied).toHaveBeenCalledWith()
            expect(board.hasWinner).toHaveBeenCalledWith()
            expect(board.renderBoard).toHaveBeenCalledWith()
            expect(game.changeCurrentPlayer).toHaveBeenCalledWith()
            expect(game.run).toHaveBeenCalledWith()
        });
    });
});
