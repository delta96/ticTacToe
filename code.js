const squares = document.querySelectorAll('.square');
const gameBoard = document.getElementById(board);
const gameMessage = document.querySelector('#message');
const showBanner = document.querySelector('.endGame');
const playButton = document.querySelector('#restartButton');
const winPossibilities = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];
let xTurn = true;



function startGame(){
    
    squares.forEach(square => {
        square.classList.remove('x')
        square.classList.remove('circle')
        square.innerText = ''
        square.removeEventListener('click', setMarker)
        square.addEventListener('click', setMarker, {once: true})
    })
    showBanner.classList.remove('banner')
}

function gameplay(draw) {
    if (draw) {
        gameMessage.innerText = 'Draw!'
    } else {
        gameMessage.innerText = `${xTurn ? "X's" : "O's"} Wins!`
    }
    showBanner.classList.add('banner')
}

function setMarker(e){
    const square = e.target;
    const currentTurn = xTurn ? 'x' : 'circle'
    placeMarker(square, currentTurn)
    if (checkWin(currentTurn)) {
        gameplay(false)
    } else if (draw()) {
        gameplay(true)
    }  else {
        xTurn = !xTurn
    }

}

function checkWin (currentTurn) {
    return winPossibilities.some(combo => {
        return combo.every(index => {
            return squares[index].classList.contains(currentTurn)
        })
    })
}

function draw() {
    return [...squares].every(square => {
        return square.classList.contains('x') || square.classList.contains('circle')
    })
}

function placeMarker(square, currentTurn) {
    if (currentTurn == 'circle'){
        square.classList.add(currentTurn)
        square.innerText = 'O'
    } else {
        square.classList.add(currentTurn)
        square.innerText = 'X'
    }
}

playButton.addEventListener('click', startGame)


startGame()