export interface Quizable {
  // Method to guess the next move; returns true if correct, false otherwise
  guess(move: string): boolean;

  hint(): string;
}
