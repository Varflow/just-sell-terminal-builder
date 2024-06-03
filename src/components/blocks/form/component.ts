import { Editor } from "grapesjs";
import { createFieldStyles } from "./fields/styles";

export const typeForm = "form";

export const createFormComponent = (editor: Editor) => {
  editor.Components.addType(typeForm, {
    isComponent: (el) => el.tagName == "FORM",

    model: {
      defaults: {
        tagName: "form",
        droppable: true,
        draggable: true,
        highlightable: true,
        attributes: {
          method: "get",
          class: "form-container",
          style: "min-height: 200px",
        },
        traits: [
          {
            type: "select",
            name: "method",
            options: [
              { value: "get", name: "GET", id: "action" },
              { value: "post", name: "POST", id: "action" },
            ],
          },
          {
            name: "action",
          },
        ],
        style: createFieldStyles(),
      },
    },
  });
};
