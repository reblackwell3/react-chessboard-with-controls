// ParentComponent.js
import React, { useState } from 'react';
import Chessboard from './Chessboard';

const ParentComponent = ({ chessService }) => {
  const [position, setPosition] = useState(chessService.initialPosition());

  const handleDrop = (move) => {
    if (chessService.canDrop(move)) {
      chessService.makeMove(move);
      setPosition(chessService.getPosition());
    }
  };

  const handleMove = (move) => {
    chessService.makeMove(move);
    setPosition(chessService.getPosition());
  };

  const handleHighlightKingInCheck = () => {
    return chessService.isKingInCheck();
  };

  return (
    <div>
      <Chessboard
        onDrop={handleDrop}
        onMove={handleMove}
        onHighlightKingInCheck={handleHighlightKingInCheck}
        position={position}
        chessService={chessService}
      />
      {chessService.renderControls()}
    </div>
  );
};

export default ParentComponent;
