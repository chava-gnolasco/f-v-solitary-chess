import { defineStore } from "pinia";
import type { Game } from "@/types/board";

/**
 * Pinia store for managing chess board configurations and retrieval logic.
 *
 * This store provides access to a predefined list of chess game boards, each with a unique identifier,
 * difficulty level, and piece arrangement. It exposes methods to retrieve a board by its ID and difficulty,
 * as well as to access the list of all available boards.
 *
 * @returns An object containing:
 * - `boards`: The array of available `Game` board configurations.
 * - `getBoard`: Function to retrieve a board by its unique ID and difficulty.
 *
 * @example
 * const boardStore = useBoardStore();
 * const board = boardStore.getBoard(1, 'intermediate');
 */
export const useBoardStore = defineStore("boardStore", () => {
  const boards: Array<Game> = [
    {
      id: 1,
      difficulty: "intermediate",
      board: [
        { row: 1, column: 1, pieceName: "rock" },
        { row: 2, column: 2, pieceName: "bishop" },
        { row: 3, column: 3, pieceName: "rock" },
        { row: 3, column: 4, pieceName: "knight" },
        { row: 4, column: 1, pieceName: "knight" },
      ],
    },
    {
      id: 2,
      difficulty: "intermediate",
      board: [
        { row: 1, column: 2, pieceName: "pawn" },
        { row: 2, column: 1, pieceName: "rock" },
        { row: 2, column: 2, pieceName: "knight" },
        { row: 2, column: 4, pieceName: "rock" },
        { row: 4, column: 3, pieceName: "pawn" },
      ],
    },
  ];

  /**
   * Retrieves a game board by its unique identifier and difficulty level.
   *
   * @param id - The unique identifier of the board to retrieve.
   * @param difficulty - The difficulty level of the board to match.
   * @returns The matching `Game` object if exactly one is found; otherwise, `undefined`.
   */
  const getBoard = (id: number, difficulty: string): Game | undefined => {
    const selectedBoard = boards.filter((board) => {
      return board.id === id && board.difficulty === difficulty;
    });

    return selectedBoard.length === 1 ? selectedBoard[0] : undefined;
  };

  /**
   * Returns a randomly selected chess board configuration.
   *
   * This function retrieves a board using predefined parameters:
   * - The board number is set to 2.
   * - The difficulty level is set to 'intermediate'.
   *
   * @returns {Board} The randomly selected board configuration.
   */
  const getRandomBoard = () => {
    return getBoard(2, "intermediate");
  };

  return { boards, getBoard, getRandomBoard };
});
