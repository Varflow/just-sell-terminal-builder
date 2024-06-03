import { Editor } from "grapesjs";

export enum LayersCommands {
  ShowLayers = "show-layers",
}

export const createLayersCommands = (app: Editor) => {
  app.Commands.add(LayersCommands.ShowLayers, {
    getRowEl(editor) {
      return editor.getContainer().closest(".editor-row");
    },
    getLayersEl(row) {
      return row.querySelector(".layers-container");
    },

    run(editor, sender) {
      const lmEl = this.getLayersEl(this.getRowEl(editor));
      lmEl.style.display = "";
    },
    stop(editor, sender) {
      const lmEl = this.getLayersEl(this.getRowEl(editor));
      lmEl.style.display = "none";
    },
  });
};
