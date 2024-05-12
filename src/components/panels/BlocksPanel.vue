<template>
  <div class="blocks-container">
    <h4 class="blocks-container__title">Перетяніть элемент на термінал</h4>
  </div>
</template>

<script setup lang="ts">
import { Editor } from "grapesjs";

const { editor } = defineProps<{ editor: Editor }>();

editor.Commands.add("show-blocks", {
  getRowEl(editor) {
    return editor.getContainer().closest(".editor-row");
  },
  getStyleEl(row) {
    return row.querySelector(".blocks-container");
  },

  run(editor) {
    const smEl = this.getStyleEl(this.getRowEl(editor));
    smEl.style.display = "";
  },
  stop(editor) {
    const smEl = this.getStyleEl(this.getRowEl(editor));
    smEl.style.display = "none";
  },
});
</script>

<style lang="scss" scoped></style>
