import { Editor } from "grapesjs";

export enum TerminalSettingsCommands {
  ShowTerminalSettings = "show-terminal-settings",
}

export const createTerminalSettingsCommands = (app: Editor) => {
  app.Commands.add(TerminalSettingsCommands.ShowTerminalSettings, {
    getRowEl(editor) {
      return editor.getContainer().closest(".editor-row");
    },
    getStyleEl(row) {
      return row.querySelector(".terminal-settings-container");
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
