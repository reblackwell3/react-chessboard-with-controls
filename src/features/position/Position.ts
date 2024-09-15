import { Traversable } from './Traversable';
import { Quizable } from './Quizable';
import { Chess } from 'chess.js';

export abstract class Position implements Traversable, Quizable {
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

  guess(move: string): boolean {
    console.log(`all moves ${this.moves} ---- your move ${move}`);
    return this.moves[this.i] === move;
  }

  getCheckSquare(): string {
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

  hint(): string {
    return this.moves[this.i];
  }

  fen(): string {
    return this.chess.fen();
  }
}

export class FenPosition extends Position {
  constructor(initialFEN: string, moves: string[]) {
    super();
    this.chess.load(initialFEN);
    this.moves = moves;
    // console.log(`fen: ${initialFEN} moves: ${moves}`);
  }
}

export class PgnPosition extends Position {
  constructor(PGN: string) {
    super();
    console.log(`pgn: ${PGN}`);
    this.chess.loadPgn(PGN);
    this.moves = this.chess.history();
    this.chess.reset();
    // console.log(`pgn: ${PGN}`);
  }
}
