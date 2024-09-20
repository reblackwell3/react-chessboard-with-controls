import { Meta, StoryObj } from '@storybook/react';
import { HighlightChessboard } from '../features/board/HighlightChessboard';
import withThemeProvider from './withThemeProvider';

// Define metadata for the HighlightChessboard component
const meta: Meta<typeof HighlightChessboard> = {
  title: 'HighlightChessboard',
  component: HighlightChessboard,
  decorators: [withThemeProvider],
};

export default meta;

// Define a type alias for stories
type Story = StoryObj<typeof HighlightChessboard>;

// Define the default story with mock data
export const Default: Story = {
  args: {
    kingSquare: 'e1',
    isCheck: false,
    hintSquare: null,
    incorrectMoveSquare: null,
  },
};

// Define the story for when the king is in check
export const KingInCheck: Story = {
  args: {
    kingSquare: 'e1',
    isCheck: true,
    hintSquare: null,
    incorrectMoveSquare: null,
  },
};

// Define the story with a hint square
export const WithHint: Story = {
  args: {
    kingSquare: 'e1',
    isCheck: false,
    hintSquare: 'a1',
    incorrectMoveSquare: null,
  },
};

// Define the story with a hint square
export const incorrectMoveSquare: Story = {
  args: {
    kingSquare: 'e1',
    isCheck: false,
    hintSquare: null,
    incorrectMoveSquare: 'e7',
  },
};
