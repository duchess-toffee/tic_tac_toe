window.onload = function(){
    const playAgain = document.querySelector('button');
    const popUp = document.querySelector('.pop-up')

    let xArr = [{
        row1: 0,
        row2: 0,
        row3: 0,
        col1: 0,
        col2: 0,
        col3: 0,
        dia1: 0,
        dia2: 0
    }];
     let oArr = [{
        row1: 0,
        row2: 0,
        row3: 0,
        col1: 0,
        col2: 0,
        col3: 0,
        dia1: 0,
        dia2: 0
    }];

    let xScoreText = document.querySelector('.x-score');
    const oScoreText = document.querySelector('.o-score');
    let xScore = 0;
    let oScore = 0;

    const board = document.querySelector('.board-game');
    const cells = board.querySelectorAll('.cell');
    const turnTracker = document.querySelector('p');
    let turn = 1;

    refresh();

    function addXO(){
        if(turn%2 !== 0 ){
            this.textContent = 'X';
            turnTracker.textContent = `O's Turn`;
            win(xArr, this);
            turn++;
        }else if(turn%2 == 0){
            this.textContent = 'O';
            turnTracker.textContent = `X's Turn`;
            win(oArr, this);
            turn++;
        }
        this.removeEventListener('click', addXO);
    }

    function endGame(){
        const winText = popUp.querySelector('p');
        let hasWinner = false;
        if(xArr[0].row1 === 3 || 
            xArr[0].row2 === 3 ||
            xArr[0].row3 === 3 ||
            xArr[0].col1 === 3 ||
            xArr[0].col2 === 3 ||
            xArr[0].col3 === 3 ||
            xArr[0].dia1 === 3 ||
            xArr[0].dia2 === 3){
                xScore++;
                xScoreText.textContent = `X : ${xScore}`;
                winText.textContent = "X WINS!";
                hasWinner = true;
        }
        else if(oArr[0].row1 === 3 || 
            oArr[0].row2 === 3 ||
            oArr[0].row3 === 3 ||
            oArr[0].col1 === 3 ||
            oArr[0].col2 === 3 ||
            oArr[0].col3 === 3 ||
            oArr[0].dia1 === 3 ||
            oArr[0].dia2 === 3){
                oScore++;
                oScoreText.textContent = `O : ${oScore}`;
                winText.textContent = "O WINS!";
                hasWinner = true;
        }else{
            winText.textContent = "TIE!";
        }
        popUp.style.display = 'flex';
        cells.forEach(cell => cell.removeEventListener('click', addXO));
        return hasWinner;
    }

    function win(arr, cell){
        if(cell == board.children[0] ||
            cell == board.children[1] ||
            cell == board.children[2]){
                arr[0].row1++;
                if (arr[0].row1 === 3 || turn === 9){
                    if(endGame()){
                        return;
                    }
                }
            }
        if(cell == board.children[3] ||
            cell == board.children[4] ||
            cell == board.children[5]){
                arr[0].row2++;
                if (arr[0].row2 === 3 || turn === 9){
                    if(endGame()){
                        return;
                    }
                }
            }
        if(cell == board.children[6] ||
            cell == board.children[7] ||
            cell == board.children[8]){
                arr[0].row3++;
                if (arr[0].row3 === 3 || turn === 9){
                    if(endGame()){
                        return;
                    }
                }
            }
        if(cell == board.children[0] ||
            cell == board.children[3] ||
            cell == board.children[6]){
                arr[0].col1++;
                if (arr[0].col1 === 3 || turn === 9){
                    if(endGame()){
                        return;
                    }
                }
            }
        if(cell == board.children[1] ||
            cell == board.children[4] ||
            cell == board.children[7]){
                arr[0].col2++;
                if (arr[0].col2 === 3 || turn === 9){
                    if(endGame()){
                        return;
                    }
                }
            }
        if(cell == board.children[2] ||
            cell == board.children[5] ||
            cell == board.children[8]){
                arr[0].col3++;
                if (arr[0].col3 === 3 || turn === 9){
                    if(endGame()){
                        return;
                    }
                }
            }
        if(cell == board.children[0] ||
            cell == board.children[4] ||
            cell == board.children[8]){
                arr[0].dia1++;
                if (arr[0].dia1 === 3 || turn === 9){
                    if(endGame()){
                        return;
                    }
                }
            }
        if(cell == board.children[2] ||
            cell == board.children[4] ||
            cell == board.children[6]){
                arr[0].dia2++;
                if (arr[0].dia2 === 3 || turn === 9){
                    if(endGame()){
                        return;
                    }
                }
            }
    }

    function refresh(){
        popUp.style.display = "none";
        cells.forEach(cell => cell.textContent = '');
        turn = 1;
        xArr = [{
            row1: 0,
            row2: 0,
            row3: 0,
            col1: 0,
            col2: 0,
            col3: 0,
            dia1: 0,
            dia2: 0
        }];
        oArr = [{
            row1: 0,
            row2: 0,
            row3: 0,
            col1: 0,
            col2: 0,
            col3: 0,
            dia1: 0,
            dia2: 0
        }];;
        cells.forEach(cell => cell.addEventListener('click', addXO));
    }

    
    playAgain.addEventListener('click', refresh);

}