import React, { useEffect, useState } from 'react';
import PuzzleBoard from './PuzzleBoard';
import { PuzzlePosition } from '../position/Position';
import { ThemeProvider } from '../theme/ThemeProvider';
export interface PuzzleBoardWithControlsProps {
  theme: 'light' | 'dark';
  apiProxy: {
    onFetch: () => Promise<any>;
    onNext: () => Promise<any>;
    onDropFeedback: (feedbackData: any) => Promise<any>;
    onHintFeedback: (moveNumber: number) => Promise<any>;
  };
  renderControls: (
    showHint: () => void,
    nextPuzzle: () => void,
    isFinished: boolean,
  ) => React.ReactNode;
}

const PuzzleBoardWithControls = ({
  theme,
  apiProxy,
  renderControls,
}: PuzzleBoardWithControlsProps) => {
  // const { onFetch, onNext, onDropFeedback, onHintFeedback } = apiProxy;
  const { onFetch } = apiProxy;

  const [position, setPosition] = useState(
    new PuzzlePosition('8/8/8/7K/k7/8/8/8 w - - 0 1', []),
  );
  const [puzzleNum, setPuzzleNum] = useState(0);
  const [, setInteractionNum] = useState(0);

  const incInteractionNum = () => {
    setInteractionNum((prev) => prev + 1);
  };

  useEffect(() => {
    onFetch().then((data) => {
      if (!data || !data.fen || !data.moves) {
        console.error('Invalid data fetched:', data);
        return;
      }
      setPosition(() => {
        const newPosition = new PuzzlePosition(data.fen, data.moves);
        setTimeout(() => {
          newPosition.next();
          incInteractionNum();
        }, 500);
        return newPosition;
      });
    });
  }, [puzzleNum]);

  const handleHintRequest = () => {
    position.wantsHint(true);
    incInteractionNum();
    setTimeout(() => {
      position.resetInteractions();
      incInteractionNum();
    }, 500);
    // placeholder for apiProxy.onHintFeedback() call
  };

  const handleNextPuzzle = () => {
    setPuzzleNum((prevPuzzleNum) => prevPuzzleNum + 1);
    // placeholder for apiProxy.onNext() call
  };

  return (
    <ThemeProvider theme={theme}>
      <div className="puzzle-board-with-controls">
        {position && (
          <PuzzleBoard
            position={position}
            incInteractionNum={incInteractionNum}
          />
        )}
        {renderControls(
          handleHintRequest,
          handleNextPuzzle,
          position.isFinished(),
        )}
      </div>
    </ThemeProvider>
  );
};

export default PuzzleBoardWithControls;
