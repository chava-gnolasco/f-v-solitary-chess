import { useBoardStore } from "@/stores/boardStores";
import type { Game } from "@/types/board";
import { ref, type Ref } from "vue";

const boardNumber = ref(1);
const difficulty = ref("intermediate");

export const useGameEngine = () => {
  const { boards, getBoard, getRandomBoard } = useBoardStore();

  const currentGame: Ref<Game | undefined> = ref();

  const setInitialBoard = () => {
    currentGame.value = getBoard(boardNumber.value, difficulty.value);
  };

  const setNextBoard = () => {
    boardNumber.value = 2;
    currentGame.value = getBoard(boardNumber.value, difficulty.value);
  };

  const getPieceNameByPosition = (
    row: number,
    column: number
  ): string | undefined => {
    const pieces = currentGame.value?.board.filter(
      (position) => position.row === row && position.column === column
    );

    return pieces?.length === 1 ? pieces[0].pieceName : undefined;
  };

  return {
    currentGame,
    boardNumber,
    difficulty,
    setInitialBoard,
    getPieceNameByPosition,
    setNextBoard,
  };
};
