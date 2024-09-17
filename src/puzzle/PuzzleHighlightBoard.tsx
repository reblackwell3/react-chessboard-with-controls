import React from 'react';
import Chessboard from 'react-chessboard';
import useFeedbackHighlighting from '../../backup_src/features/puzzle/useFeedbackHighlighting';
import useDefaultHighlighting from '../../backup_src/features/game/useDefaultHighlighting';

const PuzzleHighlightBoard = ({ squares }) => {
    
    const feedbackStyles = useFeedbackHighlighting(squares);
    const defaultStyles = useDefaultHighlighting(squares);

    const customSquareStyles = {...feedbackStyles, ...defaultStyles};
    return (
        <Chessboard
        customSquareStyles={feedbackStyles}
        {...props}
      />
    )
};