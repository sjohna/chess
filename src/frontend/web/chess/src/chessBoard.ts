export type RankIndex = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;
export type FileIndex = 'a' | 'b' | 'c' | 'd' | 'e' | 'f' | 'g' | 'h';
export type PieceType = 'king' | 'queen' | 'rook' | 'bishop' | 'knight' | 'pawn';
export type PieceColor = 'white' | 'black';
export type SquareColor = 'light' | 'dark';

export interface Piece {
    type: PieceType;
    color: PieceColor;
}

export interface BoardSquare {
    rank: RankIndex;
    file: FileIndex;
    color: SquareColor;
    div?: HTMLDivElement;
    piece?: Piece;
    pieceImage?: HTMLImageElement;
}

export type BoardFile = {
    [key in RankIndex]: BoardSquare;
}

export type Board = {
    [key in FileIndex]: BoardFile;
}

function ranks(): RankIndex[] {
    return [1, 2, 3, 4, 5, 6, 7, 8];
}

function ranksReversed(): RankIndex[] {
    return [8, 7, 6, 5, 4, 3, 2, 1];
}

function files(): FileIndex[] {
    return ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
}

function filesReversed(): FileIndex[] {
    return ['h', 'g', 'f', 'e', 'd', 'c', 'b', 'a']
}

export function renderBoard(container: HTMLDivElement, board: Board, fromBlacksPerspective: boolean) {
    const rankOrder = fromBlacksPerspective ? ranks() : ranksReversed();
    const fileOrder = fromBlacksPerspective ? filesReversed() : files();

    const labelledRank = rankOrder[rankOrder.length - 1];
    const labelledFile = fileOrder[fileOrder.length - 1];

    for (let rank of rankOrder) {
        for (let file of fileOrder) {
            const square = board[file][rank];
            square.div = createSquareDiv(square);
            container.append(square.div);
            const labelDiv = document.createElement('div') as HTMLDivElement;
            labelDiv.style.position = 'absolute';
            labelDiv.style.top = '12px';
            labelDiv.style.left = '12px';
            labelDiv.style.color = 'red';
            labelDiv.style.fontWeight = 'bold';
            labelDiv.innerText = `${square.file}${square.rank}`;
            square.div.append(labelDiv);
        }
    }
}

export function renderPieces(board: Board) {
    for (let rank of ranks()) {
        for (let file of files()) {
            renderPiece(board[file][rank]);
        }
    }
}

export function renderPiece(square: BoardSquare) {
    square.pieceImage?.remove();
    if (square.piece) {
        // TODO: handle different pieces and colors
        const pieceImage = document.createElement('img') as HTMLImageElement;
        pieceImage.src = 'assets/images/Chess_nlt45.svg';
        pieceImage.style.height = '100%';
        pieceImage.style.width = '100%';
        square.pieceImage = pieceImage;
        square.div.append(pieceImage);
    }
}

function createSquareDiv(square: BoardSquare): HTMLDivElement {
    const squareDiv = document.createElement('div') as HTMLDivElement;
    squareDiv.style.width = '120px';
    squareDiv.style.height = '120px';
    squareDiv.style.background = square.color === 'light' ? 'white' : 'black';
    squareDiv.style.position = 'relative';
    return squareDiv;
}

export function emptyBoard(): Board {
    const ret: Board = {
        a: {
            1: { file: 'a', rank: 1, color: 'dark' },
            2: { file: 'a', rank: 2, color: 'light' },
            3: { file: 'a', rank: 3, color: 'dark' },
            4: { file: 'a', rank: 4, color: 'light' },
            5: { file: 'a', rank: 5, color: 'dark' },
            6: { file: 'a', rank: 6, color: 'light' },
            7: { file: 'a', rank: 7, color: 'dark' },
            8: { file: 'a', rank: 8, color: 'light' },
        },
        b: {
            1: { file: 'b', rank: 1, color: 'light' },
            2: { file: 'b', rank: 2, color: 'dark' },
            3: { file: 'b', rank: 3, color: 'light' },
            4: { file: 'b', rank: 4, color: 'dark' },
            5: { file: 'b', rank: 5, color: 'light' },
            6: { file: 'b', rank: 6, color: 'dark' },
            7: { file: 'b', rank: 7, color: 'light' },
            8: { file: 'b', rank: 8, color: 'dark' },
        },
        c: {
            1: { file: 'c', rank: 1, color: 'dark' },
            2: { file: 'c', rank: 2, color: 'light' },
            3: { file: 'c', rank: 3, color: 'dark' },
            4: { file: 'c', rank: 4, color: 'light' },
            5: { file: 'c', rank: 5, color: 'dark' },
            6: { file: 'c', rank: 6, color: 'light' },
            7: { file: 'c', rank: 7, color: 'dark' },
            8: { file: 'c', rank: 8, color: 'light' },
        },
        d: {
            1: { file: 'd', rank: 1, color: 'light' },
            2: { file: 'd', rank: 2, color: 'dark' },
            3: { file: 'd', rank: 3, color: 'light' },
            4: { file: 'd', rank: 4, color: 'dark' },
            5: { file: 'd', rank: 5, color: 'light' },
            6: { file: 'd', rank: 6, color: 'dark' },
            7: { file: 'd', rank: 7, color: 'light' },
            8: { file: 'd', rank: 8, color: 'dark' },
        },
        e: {
            1: { file: 'e', rank: 1, color: 'dark' },
            2: { file: 'e', rank: 2, color: 'light' },
            3: { file: 'e', rank: 3, color: 'dark' },
            4: { file: 'e', rank: 4, color: 'light' },
            5: { file: 'e', rank: 5, color: 'dark' },
            6: { file: 'e', rank: 6, color: 'light' },
            7: { file: 'e', rank: 7, color: 'dark' },
            8: { file: 'e', rank: 8, color: 'light' },
        },
        f: {
            1: { file: 'f', rank: 1, color: 'light' },
            2: { file: 'f', rank: 2, color: 'dark' },
            3: { file: 'f', rank: 3, color: 'light' },
            4: { file: 'f', rank: 4, color: 'dark' },
            5: { file: 'f', rank: 5, color: 'light' },
            6: { file: 'f', rank: 6, color: 'dark' },
            7: { file: 'f', rank: 7, color: 'light' },
            8: { file: 'f', rank: 8, color: 'dark' },
        },
        g: {
            1: { file: 'g', rank: 1, color: 'dark' },
            2: { file: 'g', rank: 2, color: 'light' },
            3: { file: 'g', rank: 3, color: 'dark' },
            4: { file: 'g', rank: 4, color: 'light' },
            5: { file: 'g', rank: 5, color: 'dark' },
            6: { file: 'g', rank: 6, color: 'light' },
            7: { file: 'g', rank: 7, color: 'dark' },
            8: { file: 'g', rank: 8, color: 'light' },
        },
        h: {
            1: { file: 'h', rank: 1, color: 'light' },
            2: { file: 'h', rank: 2, color: 'dark' },
            3: { file: 'h', rank: 3, color: 'light' },
            4: { file: 'h', rank: 4, color: 'dark' },
            5: { file: 'h', rank: 5, color: 'light' },
            6: { file: 'h', rank: 6, color: 'dark' },
            7: { file: 'h', rank: 7, color: 'light' },
            8: { file: 'h', rank: 8, color: 'dark' },
        },
    };

    return ret;
}