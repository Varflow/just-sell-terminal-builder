import { Editor } from "grapesjs";

export enum TranslationsCommands {
  ShowTranslations = "show-translations",
}

export const createTranslationsCommands = (app: Editor) => {
  app.Commands.add(TranslationsCommands.ShowTranslations, {
    getRowEl(editor) {
      return editor.getContainer().closest(".editor-row");
    },
    getStyleEl(row) {
      return row.querySelector(".translations-container");
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
