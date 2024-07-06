import { createExportStructure } from "./structure";
import { PluginOptions } from "grapesjs-plugin-export";

export const createExportPluginsOptions = (): PluginOptions => {
  return {
    isBinary: () => false,
    root: createExportStructure,
  };
};
