<script lang="ts" setup>
import { useGameEngine } from '@/composables/useGameEngine';
const { difficulty, boardNumber } = useGameEngine();
</script>


<template>
  <div class="score-history">
    <p><strong>{{ difficulty.toUpperCase() }}</strong></p>
    <p><strong style="font-size: 2rem;">{{ boardNumber }}</strong></p>
    <div>
      <h3>Score</h3>
      <div class="score-item">
        <header>#1 - Salvador</header>
        <footer>00:15 hrs</footer>
      </div>
    </div>
  </div>
</template>