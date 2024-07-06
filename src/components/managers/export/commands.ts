import { Editor } from "grapesjs";

export enum ExportCommands {
  Export = "export",
}

export const createExportCommands = (app: Editor) => {
  app.Commands.add(ExportCommands.Export, {
    run(editor) {
      editor.runCommand("gjs-export-zip");
    },
  });
};
