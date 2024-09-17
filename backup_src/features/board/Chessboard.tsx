// Chessboard.js
import React, { useLayoutEffect } from 'react';
import useDefaultHighlighting from './useDefaultHighlighting';

const Chessboard = ({ onDrop, onMove, onHighlightKingInCheck, position }) => {
  const { customSquareStyles } = useDefaultHighlighting(customSquareStyles);
  
  const fen = status === 'next' ? blankFen : fen;
  const onPieceDrop = status === 'active' ? handlePieceDrop : undefined;
  const arePiecesDraggable = status === 'active';
  return (
    <Chessboard
      position={fen}
      onPieceDrop={onPieceDrop}
      boardOrientation={playerColor}
      arePiecesDraggable={arePiecesDraggable}
      customSquareStyles={customSquareStyles}
    />
  );
};

export default Chessboard;
