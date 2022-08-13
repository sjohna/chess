import './style.css';
import {emptyBoard, renderBoard, renderPieces} from "./chessBoard";

const chessboardElement = document.getElementById('chessboard') as HTMLDivElement;

const board = emptyBoard();

board['a'][5].piece = {color: 'white', type: 'knight'}
renderBoard(chessboardElement, board,false);
renderPieces(board);

// const knightImage = document.createElement('img') as HTMLImageElement;
// knightImage.src = 'assets/images/Chess_nlt45.svg';
// knightImage.style.height = '100%';
// knightImage.style.width = '100%';
//