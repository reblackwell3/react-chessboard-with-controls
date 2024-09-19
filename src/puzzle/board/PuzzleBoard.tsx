import React from 'react';
import HighlightChessboard from './HighlightChessboard';
import { PuzzlePosition } from '../../position/Position';

// Define the props interface directly inside the PuzzleBoard component file
export interface PuzzleBoardProps {
  position: PuzzlePosition;
  hintSquare: string | null;
  onCorrectDrop: (source: string, target: string, piece: string) => void;
  onIncorrectDrop: (source: string, target: string, piece: string) => void;
  incorrectMoveSquare: string | null;
  setIncorrectMoveSquare: (square: string | null) => void;
}

const PuzzleBoard: React.FC<PuzzleBoardProps> = ({
  position,
  onCorrectDrop,
  onIncorrectDrop,
}) => {
  const onPieceDrop = (
    sourceSquare: string,
    targetSquare: string,
    piece: string,
  ) => {
    const isCorrect = handleGuess(sourceSquare, targetSquare, piece);
    if (isCorrect) {
      position.isCorrectMove(true);
      position.next();
      setTimeout(() => {
        position.next();
      }, 500);
    } else {
      position.isCorrectMove(false);
    }
    return isCorrect;
  };

  const handleGuess = (
    sourceSquare: string,
    targetSquare: string,
    piece: string,
  ) => {
    const move = `${sourceSquare}${targetSquare}`;
    const promotionPiece = piece[1].toLowerCase(); // 'wN' -> 'n'
    const moveWithPromotionPiece = `${move}${promotionPiece}`;
    const isCorrect =
      position.judgeGuess(move) || position.judgeGuess(moveWithPromotionPiece);
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
