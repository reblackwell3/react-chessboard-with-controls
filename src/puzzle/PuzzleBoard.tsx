import React from 'react';
import Chessboard from 'react-chessboard';

const PuzzleBoard = ({ usePuzzle, onIncorrect, onCorrect, onHint, onNext }) => {
    const puzzle = usePuzzle();
    let chessService = new ChessService();

    handlePieceDrop(sourceSquare, targetSquare, piece) {
        console.log('piece', piece);
        const move = `${sourceSquare}${targetSquare}`;
        const promotionPiece = piece[1].toLowerCase(); // 'wN' -> 'n'
        const isCorrect =
          this.positionRef.current.guess(move) ||
          this.positionRef.current.guess(`${move}${promotionPiece}`);
        
        isCorrect ? onCorrect(data) : onIncorrect(data) // perhaps look into emitting events
        return isCorrect;
      }
    return (
        <>
        <SmartPuzzleHighlightBoard
        onDrop={handleDrop}
        onMove={handleMove}
        onHighlightKingInCheck={handleHighlightKingInCheck}
        position={position}
        chessService={chessService}
      />
      {chessService.renderControls()}  
        </>
    )
};