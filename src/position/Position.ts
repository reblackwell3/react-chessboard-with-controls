import { Traversable } from './Traversable';
import { Quizable } from './Quizable';
import { Chess } from 'chess.js';

export abstract class Position implements Traversable {
  protected chess: Chess;
  protected moves: string[];
  protected i: number = 0;

  constructor() {
    this.chess = new Chess();
    this.moves = [];
  }

  // Common methods shared by all positions
  next(): boolean {
    if (this.i < this.moves.length) {
      this.chess.move(this.moves[this.i]);
      this.i++;
      return true;
    }
    return false;
  }

  prev(): boolean {
    if (this.i > 0) {
      this.chess.undo();
      this.i--;
      return true;
    }
    return false;
  }

  fen(): string {
    return this.chess.fen();
  }

  checkSquare(): string {
    if (!this.chess.inCheck()) {
      return '';
    }

    const turn = this.chess.turn();
    const kingPieceType = 'k';

    // Step 1: Map each square to an object { square, piece }
    const squaresWithPieces = this.chess.board().flatMap((row, rowIndex) =>
      row.map((piece, colIndex) => ({
        square: String.fromCharCode(97 + colIndex) + (8 - rowIndex),
        piece: piece,
      })),
    );

    // Step 2: Filter to find the king's square
    const kingSquare = squaresWithPieces
      .filter(
        ({ piece }) =>
          piece && piece.type === kingPieceType && piece.color === turn,
      )
      .map(({ square }) => square)[0]; // Get the first matching square

    return kingSquare;
  }
}

export class PuzzlePosition extends Position {
  protected isCorrect: boolean = false;
  protected guessedMove: string = '';
  protected isHintWanted: boolean = false;
  constructor(initialFEN: string, moves: string[]) {
    super();
    this.chess.load(initialFEN);
    this.moves = moves;
    // console.log(`fen: ${initialFEN} moves: ${moves}`);
  }

  judgeGuess = (sourceSquare: string, targetSquare: string, piece: string) => {
    const move = `${sourceSquare}${targetSquare}`;
    const promotionPiece = piece[1].toLowerCase(); // 'wN' -> 'n'
    const moveWithPromotionPiece = `${move}${promotionPiece}`;
    const isCorrect =
      this.judgeMove(move) || this.judgeMove(moveWithPromotionPiece);
    return isCorrect;
  };

  private judgeMove(move: string): boolean {
    this.guessedMove = move;
    console.log(`all moves ${this.moves} ---- your move ${move}`);
    return this.moves[this.i] === move;
  }

  wantsHint(wants: boolean): void {
    this.isHintWanted = wants;
  }

  hintSquare(): string {
    if (!this.isHintWanted) {
      return '';
    }
    return this.hint().slice(0, 2);
  }

  private hint(): string {
    return this.moves[this.i];
  }

  isCorrectMove(isCorrect: boolean): void {
    this.isCorrect = isCorrect;
  }

  incorrectMoveSquare(): string {
    if (this.isCorrect) {
      return '';
    }
    return this.guessedMove.slice(2, 4);
  }
}

export class GamePosition extends Position {
  constructor(PGN: string) {
    super();
    console.log(`pgn: ${PGN}`);
    this.chess.loadPgn(PGN);
    this.moves = this.chess.history();
    this.chess.reset();
    // console.log(`pgn: ${PGN}`);
  }
}
