import type { Editor } from "grapesjs";
import { createFieldStyles } from "../styles";

export const formFieldLabel = "formFieldLabel";

export const createFieldLabel = (editor: Editor) => {
  editor.Components.addType(formFieldLabel, {
    isComponent: (el) =>
      el.tagName == "label" && el.classList.contains("form-field-label"),

    model: {
      defaults: {
        tagName: "label",
        droppable: false,
        highlightable: false,
        attributes: { class: "form-field-label" },
        styles: createFieldStyles(),
        components: `<label>Label</label>`,
      },
    },
  });
};
