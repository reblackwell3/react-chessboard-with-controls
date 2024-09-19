import React, { useEffect, useState } from 'react';
import PuzzleBoard from './board/PuzzleBoard';
import { PuzzlePosition } from '../position/Position';

export interface PuzzleBoardWithControlsProps {
  initialFen: string;
  moves: string[];
  apiProxy: {
    onFetch: () => Promise<any>;
    onNext: () => Promise<any>;
    onDropFeedback: (feedbackData: any) => Promise<any>;
    onHintFeedback: (moveNumber: number) => Promise<any>;
  };
  renderControls: (
    showHint: () => void,
    nextPuzzle: () => void,
  ) => React.ReactNode;
}

const PuzzleBoardWithControls = ({
  initialFen,
  moves,
  apiProxy,
  renderControls,
}: PuzzleBoardWithControlsProps) => {
  const { onFetch, onNext, onDropFeedback, onHintFeedback } = apiProxy;

  const [position, setPosition] = useState(
    new PuzzlePosition(initialFen, moves),
  );
  // const [feedback, setFeedback] = useState({});
  // placeholder for feedback
  const [puzzleNum, setPuzzleNum] = useState(0);

  useEffect(() => {
    onFetch().then((data) => {
      setPosition(new PuzzlePosition(data.fen, data.moves));
    });
  }, [puzzleNum]);

  const handleHintRequest = () => {
    position.wantsHint(true);
    // placeholder for apiProxy.onHintFeedback() call
  };

  const handleNextPuzzle = () => {
    setPuzzleNum((prevPuzzleNum) => prevPuzzleNum + 1);
    // placeholder for apiProxy.onNext() call
  };

  return (
    <div className="puzzle-board-with-controls">
      {position && <PuzzleBoard position={position} />}
      {renderControls(handleHintRequest, handleNextPuzzle)}
    </div>
  );
};

export default PuzzleBoardWithControls;
