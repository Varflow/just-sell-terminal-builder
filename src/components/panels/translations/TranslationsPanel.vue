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
  </div>
</template>

<script setup lang="ts">
import { computed, reactive, ref, watch } from "vue";
import { SelectField } from "../../ui";
import TranslationField from "./TranslationField.vue";
import { useTranslationsStore } from "../../../store/translations.store";

const locales = [
  { value: "ua", label: "UA" },
  { value: "en", label: "EN" },
];

const translationsStore = useTranslationsStore();
const locale = ref("ua");

const allTranslations = reactive(translationsStore.translations);

const translations = computed(() =>
  allTranslations.filter((translation) => translation.locale === locale.value)
);

watch(translations, (translations) => {
  translationsStore.setTranslations(translations);
});
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
