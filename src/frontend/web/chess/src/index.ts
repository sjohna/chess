import './style.css';
import {defaultTheme, emptyBoard, renderBoard, renderPieces} from "./chessBoard";

const chessboardElement = document.getElementById('chessboard') as HTMLDivElement;

const board = emptyBoard();

const theme = defaultTheme();

board['e'][1].piece = {color: 'white', type: 'knight'}
renderBoard(chessboardElement, board, theme, false);
renderPieces(board);

// const knightImage = document.createElement('img') as HTMLImageElement;
// knightImage.src = 'assets/images/Chess_nlt45.svg';
// knightImage.style.height = '100%';
// knightImage.style.width = '100%';
//