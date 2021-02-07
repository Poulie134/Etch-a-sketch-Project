let container = document.querySelector('#container')
function createSquares(n){
    let squares = [];
    for( let i = 1; i<=n; i++){
        for(let j = 1; j <= n; j++){
            let item = 'Row' + i + '-Column' + j;
            squares.push(item);
            console.log(item);
        }
    }
    return squares
}
function addDivSquares(n,parent){
    let squares = createSquares(n);
    for(let i = 0; i < squares.length; i++){
        let div = document.createElement('div')
        div.textContent = squares[i]
        div.classList.add(squares[i])
        container.appendChild(div)
    }
}
addDivSquares(16);