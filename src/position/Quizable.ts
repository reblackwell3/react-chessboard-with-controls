export interface Quizable {
  judgeGuess(move: string): boolean;
  hintSquare(): string;
  isCorrectMove(isCorrect: boolean): void;
  incorrectMoveSquare(): string;
}
