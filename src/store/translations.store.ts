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
      { label: "Текст кнопки", value: "Начать", locale: "ua" },
      { label: "Текст кнопки", value: "Start", locale: "en" },
    ],
  }),

  getters: {
    toJSON: (state) => {
      return (locale: "ua" | "en") => {
        const translations = state.translations.filter(
          (tr) => tr.locale === locale
        );

        const translationsToJSONFormat = translations.reduce((acc, tr) => {
          acc[`${tr.label}`] = tr.value;

          return acc;
        }, {});

        return JSON.stringify(translationsToJSONFormat);
      };
    },
  },

  actions: {
    setTranslations(translations: Translation[]) {
      this.translations = translations;
    },
    addTranslation(currentLocale: string) {
      this.translations.push({
        label: `new_${this.translations.length + 1}`,
        value: `new_${this.translations.length + 1}`,
        locale: currentLocale,
      });
    },
  },
});
