import { Editor } from "grapesjs";

export enum TraitCommands {
  ShowTraits = "show-traits",
}

export const createTraitCommands = (app: Editor) => {
  app.Commands.add(TraitCommands.ShowTraits, {
    getTraitsEl(editor) {
      const row = editor.getContainer().closest(".editor-row");
      return row.querySelector(".traits-container");
    },
    run(editor, sender) {
      this.getTraitsEl(editor).style.display = "";
    },
    stop(editor, sender) {
      this.getTraitsEl(editor).style.display = "none";
    },
  });
};
