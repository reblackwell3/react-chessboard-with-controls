import React from 'react';
import HighlightChessboard from './HighlightChessboard';
import { PuzzlePosition } from '../../position/Position';

// Define the props interface directly inside the PuzzleBoard component file
export interface PuzzleBoardProps {
  position: PuzzlePosition;
}

const PuzzleBoard = ({ position }: PuzzleBoardProps) => {
  const onPieceDrop = (
    sourceSquare: string,
    targetSquare: string,
    piece: string,
  ) => {
    const isCorrect = position.judgeGuess(sourceSquare, targetSquare, piece);
    // placeholder for apiProxy.onDropFeedback() call
    if (isCorrect) {
      position.next();
      setTimeout(() => {
        position.next();
      }, 500);
    }
    return isCorrect;
  };

  return (
    <HighlightChessboard
      checkSquare={position.checkSquare()}
      hintSquare={position.hintSquare()}
      incorrectMoveSquare={position.incorrectMoveSquare()}
      onPieceDrop={onPieceDrop}
      position={position.fen()}
    />
  );
};

export default PuzzleBoard;
