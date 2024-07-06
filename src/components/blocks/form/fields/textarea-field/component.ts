import type { Editor } from "grapesjs";
import { nameTrait, placeholderTrait, requiredTrait } from "../traits";
import { createFieldStyles } from "../styles";

export const typeTextarea = "textarea";

export const createTexteareaComponent = (editor: Editor) => {
  editor.Components.addType(typeTextarea, {
    extend: typeTextarea,
    isComponent: (el) => el.tagName == "TEXTAREA",

    model: {
      defaults: {
        tagName: "textarea",
        attributes: { class: "form-field-input" },
        traits: [nameTrait, placeholderTrait, requiredTrait],
        styles: createFieldStyles(),
      },
    },
  });
};
