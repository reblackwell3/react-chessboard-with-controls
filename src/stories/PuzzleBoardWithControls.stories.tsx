import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import PuzzleBoardWithControls, {
  PuzzleBoardWithControlsProps,
} from '../puzzle/PuzzleBoardWithControls';
import { PuzzlePosition } from '../position/Position';

// Define metadata for the PuzzleBoardWithControls component
const meta: Meta<typeof PuzzleBoardWithControls> = {
  title: 'PuzzleBoardWithControls',
  component: PuzzleBoardWithControls,
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
type Story = StoryObj<typeof PuzzleBoardWithControls>;

const defaultPosition = new PuzzlePosition(
  'r6k/pp2r2p/4Rp1Q/3p4/8/1N1P2R1/PqP2bPP/7K b - - 0 24',
  'f2g3 e6e7 b2b1 b3c1 b1c1 h6c1'.split(' '),
);

const apiProxy = {
  onFetch: () =>
    Promise.resolve({
      fen: 'r6k/pp2r2p/4Rp1Q/3p4/8/1N1P2R1/PqP2bPP/7K b - - 0 24',
      moves: 'f2g3 e6e7 b2b1 b3c1 b1c1 h6c1'.split(' '),
    }),
  onNext: () => Promise.resolve({}),
  onDropFeedback: () => Promise.resolve({}),
  onHintFeedback: () => Promise.resolve({}),
};

const renderControls = (showHint: () => void, nextPuzzle: () => void) => {
  return (
    <div>
      <button onClick={showHint}>Show Hint</button>
      <button onClick={nextPuzzle}>Next Puzzle</button>
    </div>
  );
};

// Define the default story with mock data
export const Default: Story = {
  args: {
    initialFen: 'r6k/pp2r2p/4Rp1Q/3p4/8/1N1P2R1/PqP2bPP/7K b - - 0 24',
    moves: 'f2g3 e6e7 b2b1 b3c1 b1c1 h6c1'.split(' '),
    apiProxy: apiProxy,
    renderControls: renderControls,
  } as PuzzleBoardWithControlsProps,
};
