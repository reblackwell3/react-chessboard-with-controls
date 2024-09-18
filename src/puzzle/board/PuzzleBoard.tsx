import React from 'react';
import HighlightChessboard from './HighlightChessboard';
import guessService from './guessService';

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
  const service = guessService(moves, moveIndex, incMoveIndex);

  const onPieceDrop = (
    sourceSquare: string,
    targetSquare: string,
    piece: string,
  ) => {
    const isCorrect = service.handleGuess(sourceSquare, targetSquare, piece);
    if (isCorrect) {
      onCorrectDrop(sourceSquare, targetSquare, piece);
    } else {
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
