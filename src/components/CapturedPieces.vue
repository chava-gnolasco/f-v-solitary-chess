<script setup lang="ts">
import { useCapturedPieces } from '@/composables/useCapturedPieces';

const { capturedPieces, addCapturedPiece } = useCapturedPieces();

const action = () => {
  addCapturedPiece('pawn')
}

</script>

<template>
  <div>
    <component v-for="(component, index) in capturedPieces" :is="component" :index="index" />
  </div>
</template>