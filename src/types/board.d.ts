/**
 * Represents the position of a chess piece on the board.
 *
 * @property row - The row index of the piece on the board (0-based).
 * @property column - The column index of the piece on the board (0-based).
 * @property pieceName - The name of the chess piece at this position (e.g., "Knight", "Bishop").
 */
export interface Position {
  row: number;
  column: number;
  pieceName: "pawn" | "rock" | "knight" | "bishop" | "queen" | "king";
}

/**
 * Represents a chess game state.
 *
 * @property board - An array of `Position` objects representing the current state of the chessboard.
 */
export interface Game {
  id: number;
  board: Array<Position>;
  difficulty: "easy" | "intermediate" | "hard" | "expert";
}
