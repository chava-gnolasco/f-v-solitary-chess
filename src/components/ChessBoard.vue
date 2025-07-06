<script lang="ts" setup>
import { computed, onMounted, ref, type Component, type Ref } from 'vue';
import { useCapturedPieces } from '@/composables/useCapturedPieces';
import { useCreatePiece } from '@/composables/useCreatePiece';
import { useGameEngine } from '@/composables/useGameEngine';
import { useLog } from '@/composables/useLog';


const { addCapturedPiece, resetCapturedPieces } = useCapturedPieces();
const { log, resetLog } = useLog();
const { createPiece } = useCreatePiece();
const { currentGame, getPieceNameByPosition, setInitialBoard, setNextBoard } = useGameEngine();


const squards: Ref<Array<{ row: number; column: number; name?: string; piece?: Component; style: string; }>> = ref([]);
const selectedSquard = ref({ row: 0, column: 0 });


/**
 * Lifecycle hook that runs when the component is mounted.
 * - Resets the list of captured chess pieces.
 * - Clears the move log.
 * - Initializes the chessboard squares to an empty array.
 */
onMounted(() => {
  resetCapturedPieces();
  setInitialBoard();
  generateSquards();
  resetLog();
})

/**
 * Generates the chessboard squares and assigns them to `squards.value`.
 * Each square includes its row and column, an optional piece name, a Vue component for the piece,
 * and a style indicating whether the square is 'dark' or 'light'.
 * The board is generated from row 4 down to 1 and column 1 up to 4.
 * Uses `getPieceNameByPosition` to determine the piece name for each square,
 * and `createPiece` to instantiate the piece component.
 */

function generateSquards() {
  const newSquards: Array<{ row: number; column: number; name?: string; piece?: Component; style: string }> = [];
  for (let row = 4; row > 0; row--) {
    for (let column = 1; column < 5; column++) {
      const pieceName = getPieceNameByPosition(row, column);
      newSquards.push({
        row,
        column,
        name: pieceName,
        piece: createPiece(pieceName),
        style: (row + column) % 2 === 0 ? 'dark' : 'light'
      });
    }
  }
  squards.value = newSquards;
}

/**
 * Handles the selection of a square on the chessboard.
 *
 * @param {number} row - The row index of the selected square.
 * @param {number} column - The column index of the selected square.
 * @param {string} [name] - Optional name or identifier for the square or piece.
 *
 * The function manages the selection state:
 * - If no square is currently selected, it sets the selected square and logs the selection.
 * - If a different square is selected, it logs the action as a piece being in play.
 * - When square is currently selected, it resets the selection and logs the square as released.
 */
const onSquardSelected = (row: number, column: number, name?: string) => {

  if (selectedSquard.value.column === 0) {
    selectedSquard.value = { row, column };
    log(JSON.stringify({ row, column, name, nota: 'Casilla seleccionada' }))
    return;
  } else if (selectedSquard.value.row !== row || selectedSquard.value.column !== column) {
    log(JSON.stringify({ row, column, name, nota: 'Pieza en juego' }))
  }

  selectedSquard.value = { row: 0, column: 0 };
  log(JSON.stringify({ row, column, name, nota: 'Casilla liberada' }))
}

// function capturePiece(row: number, column: number) {
//   const squard = squards.value.find(s => s.row === row && s.column === column);
//   if (squard && squard.piece) {
//     addCapturedPiece(squard.name!); // o el nombre de la pieza
//     squard.piece = undefined; // Elimina la pieza de la casilla
//   }
// }

const onNextBoard = () => {
  setNextBoard();
  generateSquards();
}

</script>


<template>
  <div class="chess-board">
    <div 
      class="chess-board-square" 
      :class="item.style" 
      @click="onSquardSelected(item.row, item.column, item.name)"
      v-for="item in squards">
      <component v-if="item.piece" :is="item.piece"></component>
    </div>
    <button @click="onNextBoard">Next board</button>
  </div>
</template>