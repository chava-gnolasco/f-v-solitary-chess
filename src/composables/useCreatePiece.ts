import { markRaw, type Component } from "vue";

import BishopIcon from "@/components/icons/BishopIcon.vue";
import KingIcon from "@/components/icons/KingIcon.vue";
import KnightIcon from "@/components/icons/KnightIcon.vue";
import PawIcon from "@/components/icons/PawIcon.vue";
import QueenIcon from "@/components/icons/QueenIcon.vue";
import RockIcon from "@/components/icons/RockIcon.vue";

/**
 * Composable function that provides a utility to retrieve the corresponding chess piece icon component
 * based on a given piece name.
 *
 * @returns An object containing the `createPiece` function.
 *
 * @example
 * ```ts
 * const { createPiece } = useCreatePiece();
 * const KingIconComponent = createPiece('king');
 * ```
 *
 * @remarks
 * The `createPiece` function returns a Vue component for the specified chess piece name.
 * If the provided name does not match any known piece, the pawn icon component is returned by default.
 */
export const useCreatePiece = () => {
  /**
   * Returns the corresponding chess piece icon component based on the given piece name.
   *
   * @param pieceName - The name of the chess piece (e.g., 'bishop', 'knight', 'rock', 'king', 'queen').
   * @returns The Vue component representing the chess piece icon. If the piece name does not match any known piece,
   * returns the pawn icon component by default.
   */
  const createPiece = (pieceName: string | undefined): Component | undefined => {
      switch (pieceName) {
        case "bishop":
          return markRaw(BishopIcon);
        case "knight":
          return markRaw(KnightIcon);
        case "rock":
          return markRaw(RockIcon);
        case "king":
          return markRaw(KingIcon);
        case "queen":
          return markRaw(QueenIcon);
        case 'pawn':
          return markRaw(PawIcon);
        default:
          return undefined;
      }
  };
  
  return { createPiece }
}