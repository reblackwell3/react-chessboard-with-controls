import { useLayoutEffect, useState } from 'react';

const useChecktHighlighting = (kingSquare, isCheck) => {
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

export default useChecktHighlighting;
