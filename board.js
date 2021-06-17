class Board { 
    constructor() { 
        this.board = [ 
            null, null, null, null, null, null, null, null, null
        ]
    }

    renderBoard() { 
        let str = "";
        for (let i = 0; i < this.board.length; i++) {
            if ((i + 1) % 3 === 0) {
                if (!this.board[i]) {
                    str += '_ \n\n'
                } else { 
                    str += `${this.board[i]} \n\n`
                }
            } else { 
                if (!this.board[i]) {
                    str += '_ | '
                } else { 
                    str += `${this.board[i]} | `
                }
            }
        }

        console.log(str)
    }

    availableSpots() { 
        const res = []

        for (let i = 0; i < this.board.length; i++) { 
            if (!this.board[i]) { 
                res.push(i)
            }
        }

        return res;
    }

    updateBoard(coord, player) { 
        this.board[coord-1] = player
    }

    isValid(coord) { 
        if (coord < 0 || coord > 8 || this.board[coord]) { 
            return false
        } else if (!this.board[coord]) { 
            return true
        }
    }

    isTied() { 
        if (this.availableSpots().length) { 
            return false
        } else { 
            return true
        }
    }

    hasWinner() {
        const moves = [
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [0,4,8],
            [2,4,6]
        ]

        const board = this.board

        for (let i = 0; i < moves.length; i++) {
            const [a,b,c] = moves[i];
            if (board[a] && board[a] === board[b] && board[a] === board[c]) {
                return board[a]
            }
        }

        return false
    }

}

module.exports = Board;