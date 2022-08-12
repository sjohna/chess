import './style.css';

const chessboardElement = document.getElementById('chessboard');

let chessboard: HTMLDivElement[][] =[];

for (let rowSet = 0; rowSet < 4; ++rowSet) {
    // do rows in pairs of two

    // row starting with black
    let row: HTMLDivElement[] = [];
    for (let col = 0; col < 8; ++col) {
        const square = createSquare(col % 2 == 0 ? 'white' : 'black');
        chessboardElement.append(square);
        row.push(square);
    }
    chessboard.push(row);

    // row starting with white
    row = [];
    for (let col = 0; col < 8; ++col) {
        const square = createSquare(col % 2 == 1 ? 'white' : 'black');
        chessboardElement.append(square);
        row.push(square);
    }
    chessboard.push(row);
}

const knightImage = document.createElement('img') as HTMLImageElement;
knightImage.src = 'assets/images/Chess_nlt45.svg';
knightImage.style.height = '100%';
knightImage.style.width = '100%';

chessboard[2][3].append(knightImage);

function createSquare(background: string): HTMLDivElement {
    const square = document.createElement('div') as HTMLDivElement;
    square.style.width = '120px';
    square.style.height = '120px';
    square.style.background = background;
    square.onclick = () => moveKnightHere(square);
    return square;
}

function moveKnightHere(square: HTMLDivElement) {
    knightImage.remove();
    square.append(knightImage);
}