import { Editor } from "grapesjs";

export const createButtonTrait = (editor: Editor) => {
  editor.Traits.addType("button", {
    createInput({ trait }) {
      const input = document.createElement("input");
      input.placeholder = "Text";
      input.value = "";
      return input;
    },
    createLabel() {
      return "Text:";
    },
  });
};
