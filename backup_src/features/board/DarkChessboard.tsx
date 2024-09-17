import React from 'react';

const DarkChessboard = ({ props }) => {
  const customDarkSquareStyle = { backgroundColor: '#838387' };
  const customLightSquareStyle = { backgroundColor: '#e1e1e3' };

  return (
    <Chessboard
      {...props}
      customDarkSquareStyle={customDarkSquareStyle}
      customLightSquareStyle={customLightSquareStyle}
    />
  );
};

export default DarkChessboard;
