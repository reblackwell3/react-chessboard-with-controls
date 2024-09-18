import React from 'react';
import HighlightChessboard from './HighlightChessboard';
import { FenPosition } from '../../position/Position';

// Define the props interface directly inside the PuzzleBoard component file
export interface PuzzleBoardProps {
  fen: string;
  isCheck: boolean;
  hintSquare: string | null;
  onCorrectDrop: (source: string, target: string, piece: string) => boolean;
  onIncorrectDrop: (source: string, target: string, piece: string) => void;
  incorrectMoveSquare: string | null;
  setIncorrectMoveSquare: (square: string | null) => void;
  moves: string[];
  moveIndex: number;
  incMoveIndex: () => void;
}

const PuzzleBoard: React.FC<PuzzleBoardProps> = ({
  fen,
  hintSquare,
  onCorrectDrop,
  onIncorrectDrop,
  incorrectMoveSquare,
  setIncorrectMoveSquare,
  moves,
}) => {
  const position = new FenPosition(fen, moves);
  const checkSquare = position.getCheckSquare();

  const onPieceDrop = (
    sourceSquare: string,
    targetSquare: string,
    piece: string,
  ) => {
    const isCorrect = handleGuess(sourceSquare, targetSquare, piece);
    if (isCorrect) {
      onCorrectDrop(sourceSquare, targetSquare, piece);
      position.next();
      setTimeout(() => {
        position.next();
      }, 500);
    } else {
      onIncorrectDrop(sourceSquare, targetSquare, piece);
      setIncorrectMoveSquare(targetSquare);
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
  z;
  return (
    <HighlightChessboard
      checkSquare={checkSquare}
      hintSquare={hintSquare}
      incorrectMoveSquare={incorrectMoveSquare}
      onPieceDrop={onPieceDrop}
      position={fen}
    />
  );
};

export default PuzzleBoard;
