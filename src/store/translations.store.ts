import { defineStore } from "pinia";

export type Translation = {
  label: string;
  value: string;
  locale: string;
};

type TranslationsState = {
  translations: Translation[];
};

export const useTranslationsStore = defineStore("translations", {
  state: (): TranslationsState => ({
    translations: [
      { label: "sound", value: "звук", locale: "ua" },
      { label: "sound", value: "звук", locale: "ua" },
      { label: "sound", value: "звук", locale: "ua" },
      { label: "sound", value: "sound", locale: "en" },
      { label: "sound", value: "sound", locale: "en" },
      { label: "sound", value: "sound", locale: "en" },
    ],
  }),

  actions: {
    setTranslations(translations: Translation[]) {
      this.translations = translations;
    },
  },
});
