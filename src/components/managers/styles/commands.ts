import { Editor } from "grapesjs";

export enum StylesCommands {
  ShowStyles = "show-styles",
}

export const createStylesCommands = (app: Editor) => {
  app.Commands.add(StylesCommands.ShowStyles, {
    getRowEl(editor) {
      return editor.getContainer().closest(".editor-row");
    },
    getStyleEl(row) {
      return row.querySelector(".styles-container");
    },

    run(editor, sender) {
      const smEl = this.getStyleEl(this.getRowEl(editor));
      smEl.style.display = "";
    },
    stop(editor, sender) {
      const smEl = this.getStyleEl(this.getRowEl(editor));
      smEl.style.display = "none";
    },
  });
};
