import { Editor } from "grapesjs";
import { useTranslationsStore } from "../../store/translations.store";

export const createTranslationTrait = (editor: Editor) => {
  editor.Traits.addType("translation", {
    // eventCapture: ["focus"],
    createLabel() {
      return "Translation name:";
    },
    createInput({ trait }) {
      const input = document.createElement("input");
      input.type = "text";
      input.value = trait.get("value");
      return input;
    },
    onEvent({ elInput, component, event }) {
      const value = elInput.value;
      const translationsStore = useTranslationsStore();
      const translation = translationsStore.translations.find(
        (translation) => translation.label === value
      );
      component.setAttributes({ value: translation?.value || value });
      console.log("onEvent", event, value, translation);
    },
  });
};
