import React from 'react';
import { Chessboard } from 'react-chessboard';

const useCheckHighlighting = (kingSquare: string, isCheck: boolean) => {
    const styles: Record<string, any> = {};
  if (isCheck) {
    styles.kingSquare = { backgroundColor: 'red' };
  }
  return styles;
};

const useFeedbackHighlighting = (hintSquare: string | null, incorrectMoveSquare: string | null) => {
  const styles: Record<string, any> = {};
  if (hintSquare) {
    styles.hintSquare = { backgroundColor: '#77b1d4' };
  }
  if (incorrectMoveSquare) {
    styles.incorrectMoveSquare = { backgroundColor: '#ff7f7f' };
  }
  return styles;
};

export interface HighlightChessboardProps {
  kingSquare: string;
  isCheck: boolean;
  hintSquare: string | null;
  incorrectMoveSquare: string | null;
}

const HighlightChessboard = (
  { kingSquare, isCheck, hintSquare, incorrectMoveSquare, ...props }: HighlightChessboardProps
) => {
  const checkStyles = useCheckHighlighting(kingSquare, isCheck);
  const feedbackStyles = useFeedbackHighlighting(hintSquare, incorrectMoveSquare);
  const customSquareStyles = { ...checkStyles, ...feedbackStyles };

  return <Chessboard customSquareStyles={customSquareStyles} {...props} />;
};

export default HighlightChessboard;
