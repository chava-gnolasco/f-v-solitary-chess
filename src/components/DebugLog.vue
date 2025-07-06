<script lang="ts" setup>
import { useLog } from '@/composables/useLog';

const { logMessages } = useLog();

</script>

<template>
  <div class="log-view">
    <h3>Log de la partida</h3>
    <hr />
    <div v-for="message, index in logMessages">
      {{ index + 1 }} - {{ message }}
    </div>
  </div>
</template>

<style scoped>
.log-view {
  margin-top: 2rem;
  margin-left: auto;
  margin-right: auto;
  width: 80%;
  height: 400px;
  background-color: black;
  color: greenyellow;
  font-family: 'Courier New', Courier, monospace;
  padding: 0.5rem;
}
</style>