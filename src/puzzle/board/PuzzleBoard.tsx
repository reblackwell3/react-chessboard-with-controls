import React from 'react';
import useChecktHighlighting from './useCheckHighlighting';
import useFeedbackHighlighting from './useFeedbackHighlighting';
import { Chessboard } from 'react-chessboard';

const PuzzleBoard = ({ 
    fen, moves, moveNum, incMoveNum,  onCorrectDrop, 
    onIncorrectDrop }) => {

        const checkStyles = useCheckHighlighting(puzzle.kingSquare, puzzle.isCheck);
        const feedbackStyles = useFeedbackHighlighting(puzzle.hintSquare, puzzle.incorrectMoveSquare);
        const customSquareStyles = {...checkStyles, ...feedbackStyles};

    return (
        <Chessboard
        customSquareStyles={customSquareStyles}
        onDrop={boardService.onDrop}
      />
    )
};
