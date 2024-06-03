<template>
  <div class="form-field">
    <label
      for="sound"
      class="form-field__label"
      v-if="!isLabelEditing"
      @dblclick="isLabelEditing = true"
      >{{ label }}</label
    >
    <input
      type="text"
      class="form-field__input"
      v-model="label"
      @blur="isLabelEditing = false"
      v-if="isLabelEditing"
    />
    <textarea
      class="form-field__input"
      :placeholder="placeholder"
      v-model="translation"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

type TranslationFieldProps = {
  placeholder?: string;
};

const isLabelEditing = ref(false);

defineProps<TranslationFieldProps>();

const label = defineModel("label");
const translation = defineModel("translation");
</script>

<style scoped>
.form-field {
  display: flex;
  flex-direction: column;
  row-gap: 10px;
}

.form-field__label {
  font-size: 14px;
  font-weight: 500;
}

.form-field__input {
  background-color: #fff;
  border-radius: 8px;
  border: 1px solid #e5e7eb;
  font-size: 14px;
  font-weight: 400;
  color: #000;
  padding: 6px 14px;
}
</style>
