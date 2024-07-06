<template>
  <!-- <input type="text" v-model="value" /> -->
  <div class="">
    <input type="text" />
    <div class="">
      <div
        v-for="translation in searchedTranslations"
        :key="translation.label"
        @click="
          () => {
            value = translation.value;
            props.trait.set('value', translation.value);
          }
        "
      >
        {{ translation.label }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from "vue";
import { Trait } from "grapesjs";
import { useTranslationsStore } from "../../../../store/translations.store";

type TranslationFieldProps = {
  trait: Trait;
};

const props = defineProps<TranslationFieldProps>();
const value = ref(props.trait.get("value"));
const query = ref("");

const translationsStore = useTranslationsStore();
let searchedTranslations = reactive([]);

const searchTranslations = (value) => {
  console.log(value);
  searchedTranslations = translationsStore.translations.filter((translation) =>
    translation.label.toLowerCase().includes(value)
  );
};
</script>

<style lang="scss" scoped></style>
