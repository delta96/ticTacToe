const squares = document.querySelectorAll('.square');
const gameBoard = document.getElementById(board);
const gameMessage = document.getElementById(message);
const showBanner = document.querySelector('.endGame');
let xTurn = true;

squares.forEach(square => {
    square.addEventListener('click', setMarker, {once: true})
})

function setMarker(e){
    const square = e.target;

    if (xTurn = !xTurn) {
        square.innerText = 'O'
        square.classList.add('circle')
        xTurn = true
    } else if (draw()) {
        gameMessage.innerHTML = 'Draw!'
        showBanner.classList.add('show')
        console.log(draw())
    } else {
        square.innerText = 'X'
        square.classList.add('x')
        xTurn = false
        console.log(draw())
    }

}

function draw() {
    return [...squares].every(square => {
        return square.classList.contains('x') || square.classList.contains('circle')
    })
}