import { useCallback } from 'react';

const useFeedbackHighlighting = (setCustomSquareStyles) => {
  const setHintSquare = (square: string) => {
    setCustomSquareStyles((prev) => ({
      ...prev,
      [square]: { backgroundColor: '#77b1d4' },
    }));
  };

  const setIncorrectMoveSquare = 
    setCustomSquareStyles((prev) => ({
        ...prev,
        [targetSquare]: { backgroundColor: '#ff7f7f' },
      }));
      setTimeout(() => {
        setCustomSquareStyles({});
        setCheckSquare(positionRef.current.getCheckSquare());
      }, 500);
  );

//   useLayoutEffect(() => {
//     // I will review  later if layout effect is right,
//     //I chose it becuase these are apperance changes
//     defaultHighlighting();
//   }, [position]); // This should go in the hook


  return { customSquareStyles };
};

export default useFeedbackHighlighting;
