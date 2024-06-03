import type { Editor } from "grapesjs";
import { createFieldStyles } from "../styles";

export const formField = "formField";

export const createFormField = (editor: Editor) => {
  editor.Components.addType(formField, {
    isComponent: (el) =>
      el.tagName == "div" && el.classList.contains("form-field-container"),

    model: {
      defaults: {
        tagName: "div",
        droppable: false,
        highlightable: false,
        attributes: { class: "form-field-container" },
        styles: createFieldStyles(),
      },
    },
  });
};
