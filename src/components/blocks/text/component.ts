import { Editor } from "grapesjs";

export const text = "text";

export const createTextComponent = (editor: Editor) => {
  editor.Components.addType(text, {
    isComponent: (el) => el.tagName == "P",

    model: {
      updated(property, value, prevValue) {
        if (property === "attributes" && value.value !== prevValue.value) {
          this.set("content", value.value);
        }
      },

      defaults: {
        tagName: "p",
        content: "Insert text here",
        traits: [{ type: "translation" }],
      },
    },
  });
};
