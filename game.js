const Board = require('./board')
const HumanPlayer = require('./humanplayer')
const ComputerPlayer = require('./computerplayer')

class Game { 
    constructor() { 
        this.board = new Board();
        this.hp = new HumanPlayer('X', this.board);
        this.cp = new ComputerPlayer('O');
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
}

module.exports = Game;
