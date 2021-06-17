const Board = require('./board')
const HumanPlayer = require('./humanplayer')
const ComputerPlayer = require('./computerplayer')
const readline = require('readline');

class Game { 
    constructor() { 
        this.board = new Board();
        this.hp = new HumanPlayer('X', this.board);
        this.cp = new ComputerPlayer('O', this.board);
        this.humanIsNext = true;
    }

    changeCurrentPlayer() { 
        if (this.humanIsNext === true) { 
            this.humanIsNext = false
        } else { 
            this.humanIsNext = true;
        }

        return this.humanIsNext;
    }

    run() {
        const currentPlayer = this.humanIsNext? this.hp : this.cp;
        const rl = readline.createInterface({
            input:process.stdin,
            output: process.stdout
        });

        if (currentPlayer === this.hp) { 
            rl.question(`Player ${currentPlayer.name}: Please enter a move`, (input) => {
                this.hp.makeMove(input, "X")

                if (this.board.isTied() || this.board.hasWinner()) { 
                    this.board.renderBoard();
                    rl.close() 
                } else { 
                    this.board.renderBoard();
                    this.changeCurrentPlayer()
                    this.run()
                }
            })
        } else { 
            rl.write(this.cp.makeBestMove())
            if (this.board.isTied() || this.board.hasWinner()) { 
                this.board.renderBoard();
                rl.close() 
            } else { 
                this.board.renderBoard();
                this.changeCurrentPlayer()
                this.run()
            }
        }
        
    }
}

const game = new Game()
game.run()

module.exports = Game;
