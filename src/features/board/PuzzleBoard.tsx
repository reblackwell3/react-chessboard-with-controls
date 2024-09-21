import { HighlightChessboard } from './HighlightChessboard';
import { PuzzlePosition } from '../position/Position';

// Define the props interface directly inside the PuzzleBoard component file
export interface PuzzleBoardProps {
  position: PuzzlePosition;
  onFeedback: (feedbackData: any) => void;
  incInteractionNum: () => void;
}

export const PuzzleBoard = ({
  position,
  onFeedback,
  incInteractionNum,
}: PuzzleBoardProps) => {
  const onPieceDrop = (
    sourceSquare: string,
    targetSquare: string,
    piece: string,
  ) => {
    const isCorrect = position.judgeGuess(sourceSquare, targetSquare, piece);
    onFeedback({
      index: position.getIndex(),
      guess: { sourceSquare, targetSquare, piece },
      isCorrect: isCorrect,
      isFinished: position.isFinished(),
    });
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
