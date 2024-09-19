import { Meta, StoryObj } from '@storybook/react';
import PuzzleBoard, { PuzzleBoardProps } from '../puzzle/board/PuzzleBoard';

// Define metadata for the PuzzleBoard component
const meta: Meta<typeof PuzzleBoard> = {
  title: 'PuzzleBoard',
  component: PuzzleBoard,
};

export default meta;

// Mock functions for drop handling
const handleCorrectDrop = (
  sourceSquare: string,
  targetSquare: string,
  piece: string,
) => {
  console.log(
    `Correct move from ${sourceSquare} to ${targetSquare}, with piece ${piece}`,
  );
  return true; // Indicate a correct move
};

const handleIncorrectDrop = (
  sourceSquare: string,
  targetSquare: string,
  piece: string,
) => {
  console.log(
    `Incorrect move from ${sourceSquare} to ${targetSquare}, with piece ${piece}`,
  );
};

// Define a type alias for stories
type Story = StoryObj<typeof PuzzleBoard>;

// Define the default story with mock data
export const Default: Story = {
  args: {
    fen: 'r6k/pp2r2p/4Rp1Q/3p4/8/1N1P2R1/PqP2bPP/7K b - - 0 24',
    hintSquare: null,
    onCorrectDrop: (source, target, piece) => {},
    onIncorrectDrop: (source, target, piece) => {},
    incorrectMoveSquare: null,
    setIncorrectMoveSquare: () => {},
    moves: 'f2g3 e6e7 b2b1 b3c1 b1c1 h6c1'.split(' '),
  },
};

// Define the story for when the king is in check
// export const KingInCheck: Story = {
//   args: {
//     fen: '4k2r/4r3/8/8/8/8/3R4/R3K3 w Qk - 0 1',
//     kingSquare: 'e1',
//     isCheck: true,
//     hintSquare: null,
//     incorrectMoveSquare: null,
//     onCorrectDrop: handleCorrectDrop,
//     onIncorrectDrop: handleIncorrectDrop,
//   },
// };

// // Define the story with a hint square
// export const WithHint: Story = {
//   args: {
//     fen: '4k2r/6r1/8/8/8/8/3R4/R3K3 w Qk - 0 1',
//     kingSquare: 'e1',
//     isCheck: false,
//     hintSquare: 'a1',
//     incorrectMoveSquare: null,
//     onCorrectDrop: handleCorrectDrop,
//     onIncorrectDrop: handleIncorrectDrop,
//   },
// };
