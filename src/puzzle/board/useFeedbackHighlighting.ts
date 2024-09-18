import { useLayoutEffect, useState } from 'react';

const useFeedbackHighlighting = (hintSquare: string | null, incorrectMoveSquare: string | null) => {
  const [hintStyles, setHintStyles] = useState({});
  const [incorrectMoveStyles, setIncorrectMovesStyles] = useState({});

  useLayoutEffect(() => {
    if (hintSquare) {
      setHintStyles({
        [hintSquare]: { backgroundColor: '#77b1d4' },
      });
    } else {
      setHintStyles({});
    }
  }, [hintSquare]);

  useLayoutEffect(() => {
    if (incorrectMoveSquare) {
      setIncorrectMovesStyles({
        [incorrectMoveSquare]: { backgroundColor: '#ff7f7f' },
      });
    } else {
      setIncorrectMovesStyles({});
    }
  }, [incorrectMoveSquare]);

  return { ...hintStyles, ...incorrectMoveStyles };
};

export default useFeedbackHighlighting;
