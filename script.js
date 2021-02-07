let container = document.querySelector('#container');
let resetButton = document.querySelector('#resetButton')
let sizeButton = document.querySelector('#sizeButton')
let square;
function gridCreate(n){
    container.style.gridTemplateColumns = `repeat(${n},1fr)`;
    container.style.gridTemplateRows = `repeat(${n},1fr)`;
    
    for(let i = 0; i < n**2; i++){
        let div = document.createElement('div');
        div.classList.add('square');
        container.appendChild(div);
        console.log('done');
    }
    let squares = document.querySelectorAll('.square')
    squares.forEach((square) => {
    square.addEventListener('mouseover', (e) => {
        square.classList.add('ON')
        })
    })
    resetButton.addEventListener('click',(e) => {
        squares.forEach((square) => {
            square.classList.remove('ON')
        })
    })
    sizeButton.addEventListener('click',(e) => {
        squares.forEach((square) => {
            square.classList.remove('ON')
        })
        let size = prompt("Choose The Size You Want")
        while(size > 100){
            size = prompt('Numer too high, try with one lower than 100')
        }
        gridCreate(size)
    })
}
gridCreate(16);