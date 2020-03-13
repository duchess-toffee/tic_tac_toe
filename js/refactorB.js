class ticTacToe {
    constructor(board, cells, turnText, xScoreText, oScoreText, popUp, popUpText, popUpButton) {
        this.board = board;
        this.cells = cells;
        this.turnText = turnText;
        this.xScoreText = xScoreText;
        this.oScoreText = oScoreText;
        this.popUp = popUp;
        this.popUpText = popUpText;
        this.popUpButton = popUpButton;

        this.turn = 'X';
        this.counter = 1;
        this.xScore = 0;
        this.oScore = 0;
        this.gameStatus = [
            /*row 1*/ {X:0, O:0},
            /*row 2*/ {X:0, O:0},
            /*row 3*/ {X:0, O:0},
            /*col 1*/ {X:0, O:0},
            /*col 2*/ {X:0, O:0},
            /*col 3*/ {X:0, O:0},
            /*diagonal 1*/ {X:0, O:0},
            /*diagonal 2*/ {X:0, O:0}
        ];
        this.winner = [];

        this.onClick = (e) => this.play(e);

        this.cells.forEach(cell => cell.addEventListener('click', this.onClick));
        this.popUpButton.addEventListener('click', () => this.refresh());
    }

    refresh() {
        /* On 'Play Again' button click:
        1. Hide pop-up
        2. Clear board
        3. Reset turn counter
        4. Reset win tracker 
        5. Add back event listener*/
        this.turn = 'X';
        this.popUp.style.display = 'none';
        this.gameStatus = [
            /*row 1*/ {X:0, O:0},
            /*row 2*/ {X:0, O:0},
            /*row 3*/ {X:0, O:0},
            /*col 1*/ {X:0, O:0},
            /*col 2*/ {X:0, O:0},
            /*col 3*/ {X:0, O:0},
            /*diagonal 1*/ {X:0, O:0},
            /*diagonal 2*/ {X:0, O:0}
        ];
        this.counter = 1;

        this.cells.forEach(cell => {
            cell.textContent = '';
            cell.addEventListener('click', this.onClick);
        });
    }

    play(e) {
        /* On clicking a cell on the board:
        1. Add an 'X' or 'O'
        2. Update the text to say O's Turn or X's Turn
        3. Check for a win condition
        4. Add one to the turn
        5. Remove event Listener from the cell. */
        let cell = e.target;
        cell.textContent = `${this.turn}`;
        this.updateStatus(cell, this.turn);
        this.checkWin(cell)

        this.turn = (this.turn === 'X') ? 'O' : 'X';
        this.turnText.textContent = `${this.turn}'s Turn`;
        cell.removeEventListener('click', this.onClick);
        this.counter++;
    }

    updateStatus(cell, turn){
        if(cell === this.board.children[0]){
            this.gameStatus[0][turn]++;
            this.gameStatus[3][turn]++;
            this.gameStatus[6][turn]++;
        }
        if(cell === this.board.children[1]){
            this.gameStatus[0][turn]++;
            this.gameStatus[4][turn]++;
        }
        if(cell === this.board.children[2]){
            this.gameStatus[0][turn]++;
            this.gameStatus[5][turn]++;
            this.gameStatus[7][turn]++;
        }
        if(cell === this.board.children[3]){
            this.gameStatus[1][turn]++;
            this.gameStatus[3][turn]++;
        }
        if(cell === this.board.children[4]){
            this.gameStatus[1][turn]++;
            this.gameStatus[4][turn]++;
            this.gameStatus[6][turn]++;
            this.gameStatus[7][turn]++;
        }
        if(cell === this.board.children[5]){
            this.gameStatus[1][turn]++;
            this.gameStatus[5][turn]++;
        }
        if(cell === this.board.children[6]){
            this.gameStatus[2][turn]++;
            this.gameStatus[3][turn]++;
            this.gameStatus[7][turn]++;
        }
        if(cell === this.board.children[7]){
            this.gameStatus[2][turn]++;
            this.gameStatus[4][turn]++;
        }
        if(cell === this.board.children[8]){
            this.gameStatus[2][turn]++;
            this.gameStatus[5][turn]++;
            this.gameStatus[6][turn]++;
        }
    }

    checkWin() {
        /* On each play:
        1. Check if X or O won
        2. If winner, update score & pop-up text, display pop-up, remove event listener
        3. If no winner, keep going
        4. If tie, update pop-up text, display pop-up, remove event listener */
        const winner = this.gameStatus.filter(condition => condition.X === 3 || condition.O ===3);

        if (winner.length !== 0 && winner[0].X === 3) {
            this.xScore++;
            this.xScoreText.textContent = `X: ${this.xScore}`;
            this.popUpText.textContent = 'X Wins!';
            this.popUp.style.display = 'flex';
            this.cells.forEach(cell => cell.removeEventListener('click', this.onClick));
        } else if (winner.length !== 0 && winner[0].O === 3) {
            this.oScore++;
            this.oScoreText.textContent = `O: ${this.oScore}`;
            this.popUpText.textContent = 'O Wins!';
            this.popUp.style.display = 'flex';
            this.cells.forEach(cell => cell.removeEventListener('click', this.onClick));
        } else if (this.counter === 9){
            this.popUpText.textContent = 'Tie!';
            this.popUp.style.display = 'flex';
            this.cells.forEach(cell => cell.removeEventListener('click', this.onClick));
        }
        console.log(this.counter);
    }
}