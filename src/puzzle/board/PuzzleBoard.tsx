import React from 'react';
import { Chessboard } from 'react-chessboard';
import useCheckHighlighting from './useCheckHighlighting';
import useFeedbackHighlighting from './useFeedbackHighlighting';

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
  const checkStyles = useCheckHighlighting(kingSquare, isCheck);
  const feedbackStyles = useFeedbackHighlighting(hintSquare, incorrectMoveSquare);
  const customSquareStyles = { ...checkStyles, ...feedbackStyles };

  const onPieceDrop = (sourceSquare: string, targetSquare: string, piece: string) => {
    const isCorrect = onCorrectDrop(sourceSquare, targetSquare, piece);
    if (!isCorrect) {
      onIncorrectDrop(sourceSquare, targetSquare, piece);
    }
    return isCorrect;
  };

  return (
    <Chessboard
      customSquareStyles={customSquareStyles}
      onPieceDrop={onPieceDrop}
      position={fen}
    />
  );
};

export default PuzzleBoard;
