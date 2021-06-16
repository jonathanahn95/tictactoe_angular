class HumanPlayer { 
    constructor(name, board) { 
        this.name = name;
        this.board = board;
    }

    makeMove(coord, player) { 
        this.board.updateBoard(coord, player);
    }
}

module.exports = HumanPlayer;