import React from 'react';
import Chessboard from 'react-chessboard';
import PuzzleControls from './controls/PuzzleControls';
import withHighlighting from './board/withHighlighting';
import withDefaultActions from './board/withDefaultActions';

// Combine decorators
const EnhancedPuzzleBoard = withHighlighting(withDefaultActions(Chessboard));

const PuzzleBoardWithControls = ({ 
    usePuzzle, onHint, onCorrectDrop, 
    onIncorrectDrop, onNextCorrect, 
    onNextIncorrect 
}) => {

    const [puzzle, incPuzzleNum] = usePuzzle();

    return (
        <>
          <EnhancedPuzzleBoard
            position={puzzle.position}
            onCorrectDrop={onCorrectDrop}
            onIncorrectDrop={onIncorrectDrop}
            chessService={puzzle.chessService}
          />
          <PuzzleControls 
            onHint={onHint} 
            onNextCorrect={onNextCorrect} 
            onNextIncorrect={onNextIncorrect} 
            renderControls={(showHint, nextPuzzle) => (
              <div>
                <button onClick={showHint}>Hint</button>
                <button onClick={nextPuzzle}>Next Puzzle</button>
              </div>
            )}
          />
        </>
    );
};

export default PuzzleBoardWithControls;
