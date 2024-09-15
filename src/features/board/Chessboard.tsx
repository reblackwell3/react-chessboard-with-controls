// Chessboard.js
import React, { useLayoutEffect } from 'react';
import useDefaultHighlighting from './useDefaultHighlighting';

const Chessboard = ({ onDrop, onMove, onHighlightKingInCheck, position }) => {
  const { customSquareStyles } = useDefaultHighlighting(customSquareStyles);

  return (
    <Chessboard
      position={status === 'next' ? blankFen : fen}
      onPieceDrop={status === 'active' ? handlePieceDrop : undefined}
      boardOrientation={playerColor}
      arePiecesDraggable={status === 'active'}
      customSquareStyles={customSquareStyles}
    />
  );
};

export default Chessboard;
