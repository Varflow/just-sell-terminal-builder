<template>
  <div class="terminal-settings-list">
    <TextField label="Рівень яскравість" />
    <TextField label="Рівень гучності" />
  </div>
</template>

<script setup lang="ts">
import { TextField } from "../../ui";
</script>

<style scoped lang="scss">
.terminal-settings-list {
  display: flex;
  flex-direction: column;
  row-gap: 20px;

  padding-top: 12px;
}
</style>
