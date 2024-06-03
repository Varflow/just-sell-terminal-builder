import type { Editor } from "grapesjs";
import { nameTrait, placeholderTrait, requiredTrait } from "../traits";
import { createFieldStyles } from "../styles";

export const typeInput = "input";

export const createInputComponent = (editor: Editor) => {
  editor.Components.addType(typeInput, {
    isComponent: (el) => el.tagName == "INPUT",

    model: {
      defaults: {
        tagName: "input",
        droppable: false,
        highlightable: false,
        attributes: { type: "text", class: "form-field-input" },
        traits: [
          nameTrait,
          placeholderTrait,
          {
            type: "select",
            name: "type",
            options: [
              { value: "text", id: "text" },
              { value: "email", id: "email" },
              { value: "password", id: "password" },
              { value: "number", id: "number" },
            ],
          },
          requiredTrait,
        ],
        style: createFieldStyles(),
      },
    },

    extendFnView: ["updateAttributes"],
    view: {
      updateAttributes() {
        this.el.setAttribute("autocomplete", "off");
      },
    },
  });
};
