import { Editor } from "grapesjs";

export enum PagesCommands {
  ShowPages = "show-pages",
}

export const createPagesCommands = (app: Editor) => {
  app.Commands.add(PagesCommands.ShowPages, {
    getRowEl(editor) {
      return editor.getContainer().closest(".editor-row");
    },
    getStyleEl(row) {
      return row.querySelector(".pages-container");
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
