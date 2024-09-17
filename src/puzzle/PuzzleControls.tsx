import React from 'react';
import Chessboard from 'react-chessboard';

const PuzzleControls = ({ onHint, onNextCorrect, onNextIncorrect, renderControls }) => {

  showHint() {

    onHint()
  }

  nextPuzzle() {
    isCorrect? onNextCorrect() : onNextIncorrect()
  }
    return (
        <>
      {renderControls(showHint, nextPuzzle) }
        </>
    )
};