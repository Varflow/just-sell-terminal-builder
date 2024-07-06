import { createPreviewPanel } from "../managers/preview";
import { createVisiblityPanel } from "../managers/visibility";
import { createExportAction } from "../managers/export";

export const createActionsSwitcher = () => {
  return {
    id: "basic-actions",
    el: ".panel__basic-actions",
    buttons: [
      createVisiblityPanel(),
      createPreviewPanel(),
      createExportAction(),
    ],
  };
};
