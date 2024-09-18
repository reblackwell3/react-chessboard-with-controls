export interface Quizable {
  // Method to guess the next move; returns true if correct, false otherwise
  judgeGuess(move: string): boolean;

  hint(): string;
}
