import { Editor } from "grapesjs";

export enum BlocksCommands {
  ShowBlocks = "show-blocks",
}

export const createBlocksCommands = (app: Editor) => {
  app.Commands.add(BlocksCommands.ShowBlocks, {
    getRowEl(editor) {
      return editor.getContainer().closest(".editor-row");
    },
    getStyleEl(row) {
      return row.querySelector(".blocks-container");
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
