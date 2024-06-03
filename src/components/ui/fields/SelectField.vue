<template>
  <div class="form-field">
    <label for="sound" class="form-field__label">{{ label }}</label>
    <select
      type="number"
      class="form-field__input"
      :placeholder="placeholder"
      v-model="model"
    >
      <option
        v-for="option in options"
        :value="option.value"
        :key="option.value"
      >
        {{ option.label }}
      </option>
    </select>
  </div>
</template>

<script setup lang="ts">
type Option = {
  value: string;
  label: string;
};

type SelectFieldProps = {
  label?: string;
  placeholder?: string;
  options: Option[];
};

defineProps<SelectFieldProps>();
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
  position: relative;

  background-color: #fff;
  border-radius: 8px;
  border: 1px solid #e5e7eb;
  font-size: 14px;
  font-weight: 400;
  color: #000;
  padding: 6px 14px;

  border-right: 14px solid transparent;
}
</style>
