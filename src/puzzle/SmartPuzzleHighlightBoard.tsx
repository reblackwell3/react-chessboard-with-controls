import React from 'react';
import Chessboard from 'react-chessboard';
import useFeedbackHighlighting from '../../backup_src/features/puzzle/useFeedbackHighlighting';
import useDefaultHighlighting from '../../backup_src/features/game/useDefaultHighlighting';

const SmartPuzzleHighlightBoard = ({ 
    usePuzzle, onHint, onCorrectDrop, 
    onIncorrectDrop, onNextCorrect, 
    onNextIncorrect }) => {

        const [puzzle, incPuzzleNum] = usePuzzle();

    return (
        <PuzzlesHighlightBoard
        squares={squares}
        {...props}
      />
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
const dropService = (onDrop) => {
    
    //board
    handlePieceDrop(sourceSquare, targetSquare, piece) {
        console.log('piece', piece);
        const move = `${sourceSquare}${targetSquare}`;
        const promotionPiece = piece[1].toLowerCase(); // 'wN' -> 'n'
        const isCorrect =
      this.positionRef.current.guess(move) ||
      this.positionRef.current.guess(`${move}${promotionPiece}`);
      
      if (isCorrect) {
      this.next();
      setTimeout(() => this.next(), 500);
    } else {
        console.log('incorrect move');
        this.incorrectMoveHighlighting(move);
    }
    return isCorrect;
}
}