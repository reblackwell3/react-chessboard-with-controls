import React from 'react';
import Chessboard from 'react-chessboard';

const PuzzleBoardWithControls = ({ 
    usePuzzle, onHint, onCorrectDrop, 
    onIncorrectDrop, onNextCorrect, 
    onNextIncorrect }) => {

        const [puzzle, incPuzzleNum] = usePuzzle();

    return (
        <PuzzlesHighlightBoard
        squares={squares}
        onCorrectDrop,
        onIncorrectDrop
      />
      <PuzzleControls onHint, onNextCorrect, onNextIncorrect, renderControls /> 
    )
};

const usePuzzle() = {
    let puzzle;
    useEffect(

       puzzle =  dataEx.getPuzzle()
    , [puzzleNUm]);
    const incPuzzleNum = useCallback((prev) => prev + 1);
    return {puzzleNum, incPuzzleNum}
}

