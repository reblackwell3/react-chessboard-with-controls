import React, { useEffect, useState } from 'react';
import PuzzleBoard from './PuzzleBoard';
import PuzzleControls from './PuzzleControls';

const PuzzleBoardWithControls = ({ apiProxy }) => {
  const { onFetch, onNext, onDropFeedback, onHintFeedback } = apiProxy;

  const [initialFen, setInitialFen] = useState(null);
  const [moves, setMoves] = useState([]);
  const [feedback, setFeedback] = useState({});

  useEffect(() => {
    if (onFetch) {
      // Fetch data using the provided API
      onFetch().then((data) => {
        setInitialFen(data.initialFen || null);
        setMoves(data.moves || []);
      });
    }
  }, [onFetch]);

  const handlePieceDrop = (sourceSquare, targetSquare) => {
    const move = { sourceSquare, targetSquare };

    if (onDropFeedback) {
      // Register the feedback when a piece is moved
      const feedbackData = { move, status: 'correct' }; // Example feedback
      onDropFeedback(feedbackData).then((response) => {
        setFeedback(response); // Optionally handle response
      });
    }

    // You could add any other logic here related to handling the move
  };

  const handleHintRequest = (moveNumber) => {
    if (onHintFeedback) {
      // Handle hint request feedback
      onHintFeedback(moveNumber).then((response) => {
        // Optionally handle response
      });
    }
  };

  const handleNextPuzzle = () => {
    if (onNext) {
      // Post feedback on puzzle completion
      onNext().then(() => {
        // Optionally reset state or load new puzzle
      });
    }
  };

  return (
    <div className="puzzle-board-with-controls">
      {initialFen && (
        <PuzzleBoard
          fen={initialFen}
          moves={moves}
          onPieceDrop={handlePieceDrop}
        />
      )}
      <PuzzleControls
        onNext={handleNextPuzzle}
        onHint={handleHintRequest}
        feedback={feedback}
      />
    </div>
  );
};

// Define default empty methods to prevent breaking if not provided
PuzzleBoardWithControls.defaultProps = {
  apiProxy: {
    onFetch: () => Promise.resolve({}),
    onNext: () => Promise.resolve(),
    onDropFeedback: () => Promise.resolve(),
    onHintFeedback: () => Promise.resolve(),
  },
};

export default PuzzleBoardWithControls;
