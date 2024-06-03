<template>
  <div class="form-field">
    <label for="sound" class="form-field__label">{{ label }}</label>
    <input
      type="number"
      class="form-field__input"
      :placeholder="placeholder"
      v-model="model"
    />
  </div>
</template>

<script setup lang="ts">
type TextFieldProps = {
  label?: string;
  placeholder?: string;
};

defineProps<TextFieldProps>();
const model = defineModel();
</script>

<style scoped>
.form-field {
  display: flex;
  flex-direction: column;
  row-gap: 6px;
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
