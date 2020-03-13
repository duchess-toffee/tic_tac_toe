window.onload = function () {
    const board = document.querySelector('.board-game');
    const cells = board.querySelectorAll('.cell');
    const turnText = document.querySelector('p');
    const xScoreText = document.querySelector('.x-score');
    const oScoreText = document.querySelector('.o-score');
    const popUp = document.querySelector('.pop-up');
    const popUpText = document.querySelector('.pop-up > p')
    const popUpButton = document.querySelector('button');

    const playTicTacToe = new ticTacToe(board, cells, turnText, xScoreText, oScoreText, popUp, popUpText, popUpButton);
}