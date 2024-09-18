import React from 'react';
import HighlightChessboard from './HighlightChessboard';

// Define the props interface directly inside the PuzzleBoard component file
export interface PuzzleBoardProps {
  fen: string;
  kingSquare: string;
  isCheck: boolean;
  hintSquare: string | null;
  incorrectMoveSquare: string | null;
  onCorrectDrop: (source: string, target: string, piece: string) => boolean;
  onIncorrectDrop: (source: string, target: string, piece: string) => void;
}

const PuzzleBoard: React.FC<PuzzleBoardProps> = ({
  fen,
  kingSquare,
  isCheck,
  hintSquare,
  incorrectMoveSquare,
  onCorrectDrop,
  onIncorrectDrop,
}) => {
  const onPieceDrop = (
    sourceSquare: string,
    targetSquare: string,
    piece: string,
  ) => {
    const isCorrect = onCorrectDrop(sourceSquare, targetSquare, piece);
    if (!isCorrect) {
      onIncorrectDrop(sourceSquare, targetSquare, piece);
    }
    return isCorrect;
  };

  return (
    <HighlightChessboard
      kingSquare={kingSquare}
      isCheck={isCheck}
      hintSquare={hintSquare}
      incorrectMoveSquare={incorrectMoveSquare}
      onPieceDrop={onPieceDrop}
      position={fen}
    />
  );
};

export default PuzzleBoard;
