import { ref, type Component, type Ref } from "vue";
import { useLog } from "./useLog";
import { useCreatePiece } from "./useCreatePiece";


const capturedPieces: Ref<Array<Component>> = ref([]);
const { createPiece}  = useCreatePiece();
const { log } = useLog();

/**
 * Exports the capturedPieces state, addPiece function, and resetCapturedPieces function
 * from the useCapturedPieces composable.
 *
 * @module useCapturedPieces
 * @exports
 * @property {Ref<Array<Piece>>} capturedPieces - Reactive reference to the list of captured chess pieces.
 * @function addPiece - Adds a captured piece to the list.
 * @function resetCapturedPieces - Resets the list of captured pieces to its initial state.
 */
export const useCapturedPieces = () => {


  /**
   * Adds a captured chess piece to the list of captured pieces.
   *
   * @param pieceName - The name of the chess piece to add (e.g., "pawn", "rook").
   */
  const addCapturedPiece = (pieceName: string) => {
    log(`Pieza capturada: ${pieceName}`);
    capturedPieces.value.push(createPiece(pieceName));
  };

  /**
   * Resets the list of captured pieces to an empty array.
   *
   * This function clears the `capturedPieces` reactive variable,
   * effectively removing all previously captured pieces from the state.
   */
  const resetCapturedPieces = () => {
    capturedPieces.value = [];
  };

  return { capturedPieces, addCapturedPiece, resetCapturedPieces };
};
