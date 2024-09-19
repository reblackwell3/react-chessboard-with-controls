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
  apiProxy,
  renderControls,
}: PuzzleBoardWithControlsProps) => {
  const { onFetch, onNext, onDropFeedback, onHintFeedback } = apiProxy;

  const [position, setPosition] = useState(
    new PuzzlePosition('8/8/8/7K/k7/8/8/8 w - - 0 1', []),
  );
  const [puzzleNum, setPuzzleNum] = useState(0);
  const [interactionNum, setInteractionNum] = useState(0);

  const incInteractionNum = () => {
    setInteractionNum((prev) => prev + 1);
  };

  useEffect(() => {
    onFetch().then((data) => {
      setPosition(new PuzzlePosition(data.fen, data.moves));
    });
  }, [puzzleNum]);

  const handleHintRequest = () => {
    position.wantsHint(true);
    incInteractionNum();
    // placeholder for apiProxy.onHintFeedback() call
  };

  const handleNextPuzzle = () => {
    setPuzzleNum((prevPuzzleNum) => prevPuzzleNum + 1);
    // placeholder for apiProxy.onNext() call
  };

  return (
    <div className="puzzle-board-with-controls">
      {position && (
        <PuzzleBoard
          position={position}
          incInteractionNum={incInteractionNum}
        />
      )}
      {renderControls(handleHintRequest, handleNextPuzzle)}
    </div>
  );
};

export default PuzzleBoardWithControls;
