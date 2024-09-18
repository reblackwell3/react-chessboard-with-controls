const guessService = (
  moves: string[],
  moveIndex: number,
  incMoveIndex: () => void,
) => {
  const handleGuess = (
    sourceSquare: string,
    targetSquare: string,
    piece: string,
  ) => {
    const move = `${sourceSquare}${targetSquare}`;
    const promotionPiece = piece[1].toLowerCase(); // 'wN' -> 'n'
    const moveWithPromotionPiece = `${move}${promotionPiece}`;
    const isCorrect =
      isCorrectGuess(move) || isCorrectGuess(moveWithPromotionPiece);
    if (isCorrect) {
      incMoveIndexForMoveAndDelayedResponse();
    }
    return isCorrect;
  };

  const isCorrectGuess = (guessedMove: string) => {
    return guessedMove === moves[moveIndex];
  };

  const incMoveIndexForMoveAndDelayedResponse = () => {
    incMoveIndex();
    setTimeout(() => {
      incMoveIndex();
    }, 500);
  };

  return {
    handleGuess,
  };
};

export default guessService;
