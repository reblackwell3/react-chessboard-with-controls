import React from 'react';
import { Chessboard } from 'react-chessboard';

export interface DarkChessBoardProps {
  [key: string]: any;
}
const DarkChessboard = ({ ...props }: DarkChessBoardProps) => {
  const customDarkSquareStyle = { backgroundColor: '#838387' };
  const customLightSquareStyle = { backgroundColor: '#e1e1e3' };

  return (
    <Chessboard
      customDarkSquareStyle={customDarkSquareStyle}
      customLightSquareStyle={customLightSquareStyle}
      {...props}
    />
  );
};

export default DarkChessboard;
