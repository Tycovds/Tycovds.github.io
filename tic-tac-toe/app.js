// true = X, false = O
let playerTurn = true;
// display turn, winner, drae
const turnWrapper = document.querySelector('.player-turn-wrapper');
const playerTurnText = document.getElementById('player-turn');
const player1Score = document.getElementById('player-1-score');
const player2Score = document.getElementById('player-2-score');
let p1Score = 0;
let p2Score = 0;
// holds null, 'X' or 'O'
let boardState = [null, null, null, null, null, null, null, null, null];
let boxes = document.querySelectorAll('.box');
boxes.forEach(box => {
    box.addEventListener('click', e => {
        // box1 - box = 1
        let char = box.id.slice(3, 4) - 1;
        // if box has been clicked, don't add symbol and update board state
        if (box.getAttribute('data-clicked') !== 'true') {
            if (playerTurn) {
                box.innerText = 'X';
                boardState[char] = 'X';
                playerTurnText.innerText = '2 (O)';
            } else {
                box.innerText = 'O';
                boardState[char] = 'O';
                playerTurnText.innerText = '1 (X)';
            }
            box.setAttribute('data-clicked', 'true');
            playerTurn = !playerTurn;
            checkWinner()
        }
        
    })
})
// checks boardState array indices
const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];
function checkWinner() {
    let roundWon = false;
    for (let i = 0; i < 8; i++) {
        const winCondition = winningConditions[i];
        let a = boardState[winCondition[0]];
        let b = boardState[winCondition[1]];
        let c = boardState[winCondition[2]];
        if (a === null || b === null || c === null) {
            continue;
        }
        if (a === b && b === c) {
            if (a == 'X') {
                p1Score++;
                player1Score.innerText = String(p1Score);
                turnWrapper.innerText = 'Winner: X';
            } else {
                p2Score++;
                player2Score.innerText = String(p2Score);
                turnWrapper.innerText = 'Winner: O';
            }
            roundWon = true;
            break;
        }
    }
    // there is a winner
    if (roundWon) {
        // console.log('Winner');
        boxes.forEach(box => {
            box.setAttribute('data-clicked', 'true');
        })
        setTimeout(resetGame, 4000);
        return;
    }
    // draw
    if (!boardState.some(value => value == null)) {
        turnWrapper.innerText = 'Draw';
        // console.log("draw");
        setTimeout(resetGame, 4000);
    }
}
function resetGame() {
    turnWrapper.innerHTML = 'Make a move player <span id="player-turn">1 (X)</span>';
    boardState = [null, null, null, null, null, null, null, null, null];
    playerTurnText.innerText = '1 (X)';
    playerTurn = true;
    boxes.forEach(box => {
        box.innerText = '';
        box.removeAttribute('data-clicked');
    })
}