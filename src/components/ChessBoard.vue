<script lang="ts" setup>
import BishopIcon from './icons/BishopIcon.vue';
import KingIcon from './icons/KingIcon.vue';
import KnightIcon from './icons/KnightIcon.vue';
import PawIcon from './icons/PawIcon.vue';
import QueenIcon from './icons/QueenIcon.vue';
import RockIcon from './icons/RockIcon.vue';

</script>
<template>
  <div class="chess-board">
    <!-- Row 1 -->
    <div class="chess-board-square light">
      <RockIcon></RockIcon>
    </div>
    <div class="chess-board-square dark">
      <KnightIcon></KnightIcon>
    </div>
    <div class="chess-board-square light">
      <BishopIcon></BishopIcon>
    </div>
    <div class="chess-board-square dark">
      <QueenIcon></QueenIcon>
    </div>

    <!-- Row 2 -->
    <div class="chess-board-square dark">
      <KingIcon></KingIcon>
    </div>
    <div class="chess-board-square light">
      <PawIcon></PawIcon>
    </div>
    <div class="chess-board-square dark"></div>
    <div class="chess-board-square light"></div>

    <!-- Row 3 -->
    <div class="chess-board-square light"></div>
    <div class="chess-board-square dark"></div>
    <div class="chess-board-square light"></div>
    <div class="chess-board-square dark"></div>

    <!-- Row 4 -->
    <div class="chess-board-square dark"></div>
    <div class="chess-board-square light"></div>
    <div class="chess-board-square dark"></div>
    <div class="chess-board-square light"></div>
  </div>
</template>