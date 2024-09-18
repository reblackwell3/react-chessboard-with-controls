import { useLayoutEffect, useState } from 'react';

const useCheckHighlighting = (kingSquare: string, isCheck: boolean) => {
  const [checkStyles, setCheckStyles] = useState({});

  useLayoutEffect(() => {
    if(isCheck) {
      setCheckStyles({
        [kingSquare]: { backgroundColor: 'red' },
      });
    } else {
      setCheckStyles({});
    }
  }, [kingSquare, isCheck]);

  return checkStyles;
};

export default useCheckHighlighting;
