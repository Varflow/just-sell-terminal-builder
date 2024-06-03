import { createPreviewPanel } from "../managers/preview";
import { createVisiblityPanel } from "../managers/visibility";

export const createActionsSwitcher = () => {
  return {
    id: "basic-actions",
    el: ".panel__basic-actions",
    buttons: [createVisiblityPanel(), createPreviewPanel()],
  };
};
