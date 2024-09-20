import HighlightChessboard from './HighlightChessboard';
import { PuzzlePosition } from '../position/Position';

// Define the props interface directly inside the PuzzleBoard component file
export interface PuzzleBoardProps {
  position: PuzzlePosition;
  incInteractionNum: () => void;
}

const PuzzleBoard = ({ position, incInteractionNum }: PuzzleBoardProps) => {
  const onPieceDrop = (
    sourceSquare: string,
    targetSquare: string,
    piece: string,
  ) => {
    const isCorrect = position.judgeGuess(sourceSquare, targetSquare, piece);
    incInteractionNum();
    setTimeout(() => {
      position.resetInteractions();
      incInteractionNum();
    }, 500);
    // placeholder for apiProxy.onDropFeedback() call
    if (isCorrect) {
      position.next();
      incInteractionNum();
      setTimeout(() => {
        position.next();
        incInteractionNum();
      }, 500);
    }
    return isCorrect;
  };

  return (
    <HighlightChessboard
      checkSquare={position.getCheckSquare()}
      hintSquare={position.getHintSquare()}
      incorrectMoveSquare={position.getIncorrectMoveSquare()}
      onPieceDrop={onPieceDrop}
      position={position.fen()}
      boardOrientation={position.getPlayerColor()}
    />
  );
};

export default PuzzleBoard;
