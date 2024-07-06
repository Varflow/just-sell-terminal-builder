<template>
  <SelectField :options="locales" v-model="locale" label="Language" />
  <p class="help">
    Змінити назву змінної перекладу можно натиснувши на неї два рази
  </p>
  <div class="translations-list">
    <TranslationField
      v-for="translation of translations"
      v-model:label="translation.label"
      v-model:translation="translation.value"
    />
    <button
      @click="translationsStore.addTranslation(locale)"
      class="bg-slate-200 py-2 rounded-lg"
    >
      Добавить перевод
    </button>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";
import { SelectField } from "../../ui";
import { useTranslationsStore } from "../../../store/translations.store";
import TranslationField from "./TranslationField.vue";

const locales = [
  { value: "ua", label: "UA" },
  { value: "en", label: "EN" },
];

const translationsStore = useTranslationsStore();
const locale = ref("ua");

const allTranslations = computed(() => translationsStore.translations);

const translations = computed(() =>
  allTranslations.value.filter(
    (translation) => translation.locale === locale.value
  )
);
</script>

<style scoped lang="scss">
.translations-list {
  display: flex;
  flex-direction: column;
  row-gap: 20px;
}

.help {
  font-size: 14px;
  font-weight: 500;
  color: #909090;

  margin-top: 24px;
  margin-bottom: 8px;
}
</style>
