import { useCallback } from 'react';

const useDefaultHighlighting = (setCustomSquareStyles, positionRef) => {
  const [customSquareStyles, setCustomSquareStyles] = useState({});

  const resetStyles = useCallback(() => {
    setCustomSquareStyles({});
  }, [setCustomSquareStyles]); // [setCustomSquareStyles] is probably wrong

  const setCheckSquare = (square: string) => {
    setCustomSquareStyles((prev) => ({
      ...prev,
      [square]: { backgroundColor: 'red' },
    }));
  };

  const setDefaultHighlighting = useCallback(() => {
    resetStyles();
    setCheckSquare(positionRef.current.getCheckSquare());
  }, [resetStyles, setCheckSquare, positionRef]);

  useLayoutEffect(() => {
    // I will review  later if layout effect is right,
    //I chose it becuase these are apperance changes
    defaultHighlighting();
  }, [position]); // This should go in the hook

  return {
    customSquareStyles,
  };
};

export default useDefaultHighlighting;
