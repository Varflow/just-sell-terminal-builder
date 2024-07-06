import { Editor } from "grapesjs";
import GrapesjsPluginExport from "grapesjs-plugin-export";
import { createExportPluginsOptions } from "./options";

export const createExportPlugin = (editor: Editor) => {
  return GrapesjsPluginExport(editor, createExportPluginsOptions());
};
