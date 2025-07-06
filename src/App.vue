<script setup lang="ts">
import ChessBoard from '@/components/ChessBoard.vue';
import DebugLog from '@/components/DebugLog.vue';
import CapturedPieces from './components/CapturedPieces.vue';
import ScoreHistory from './components/ScoreHistory.vue';

</script>

<template>
  <div class="chessboard-layout">
    <ChessBoard/>
    <CapturedPieces class="captured-pieces"/>
    <ScoreHistory/>
  </div>
  
  <DebugLog/>
</template>