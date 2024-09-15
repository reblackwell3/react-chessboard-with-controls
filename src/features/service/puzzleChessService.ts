import PuzzleControls from './PuzzleControls';
import ChessService from './ChessService';
import { useState, useRef } from 'react';
import { PgnPosition as Position } from '../common/Position';
import useDefaultHightlighting from '../board/useDefaultHightlighting';

class PuzzleChessService extends ChessService {
  constructor(moves, setCustomSquareStyles, setFen, setStatus, incPuzzleNum) {
    super();
    this.positionRef = useRef(new Position(moves));
    this.setCustomSquareStyles = setCustomSquareStyles;
    this.setFen = setFen;
    this.setStatus = setStatus;
    this.incPuzzleNum = incPuzzleNum;

    const 
  }



  handlePieceDrop(sourceSquare, targetSquare, piece) {
    console.log('piece', piece);
    const move = `${sourceSquare}${targetSquare}`;
    const promotionPiece = piece[1].toLowerCase(); // 'wN' -> 'n'
    const isCorrect =
      this.positionRef.current.guess(move) ||
      this.positionRef.current.guess(`${move}${promotionPiece}`);
    
    if (isCorrect) {
      this.next();
      setTimeout(() => this.next(), 500);
    } else {
      console.log('incorrect move');
        this.incorrectMoveHighlighting(move);
    }
    return isCorrect;
  }

  showHint() {
    const move = this.positionRef.current.hint();
    this.hintHighlighting(move);
  }

  nextPuzzle() {
    this.setCustomSquareStyles({});
    this.incPuzzleNum();
    this.setStatus('next');
  }

  next() {
    if (this.positionRef.current.next()) {
      this.setFen(this.positionRef.current.fen());
    this.defaultHighlighting()
    } else {
      this.setStatus('closed');
    }
  }

  renderControls() {
    return <PuzzleControls onHint={() => this.showHint()} onNextPuzzle={() => this.nextPuzzle()} />;
  }
}

export default PuzzleChessService;
