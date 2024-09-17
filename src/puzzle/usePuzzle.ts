import { useEffect, useCallback, useState } from 'react';

const usePuzzle = (puzzleApiGet) => {
    const [puzzleNum, setPuzzleNum] = useState(0);
    const [puzzle, setPuzzle] = useState(null);

    useEffect(() => {
        const fetchPuzzle = async () => {
            const fetchedPuzzle = await puzzleApiGet();
            setPuzzle(fetchedPuzzle);
        };
        fetchPuzzle();
    }, [puzzleNum]);

    const incPuzzleNum = useCallback(() => setPuzzleNum((prev) => prev + 1), []);
    
    return {puzzle, incPuzzleNum};
}

export default usePuzzle;