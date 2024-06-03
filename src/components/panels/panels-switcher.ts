import { createBlocksPanel } from "../managers/blocks";
import { createLayersPanel } from "../managers/layers";
import { createPagesPanel } from "../managers/pages";
import { createStylesPanel } from "../managers/styles";
import { createTraitPanel } from "../managers/trait";
import { createTerminalSettingsPanel } from "../managers/terminal-settings";
import { createTranslationsPanel } from "../managers/translations";

export const createPanelsSwitcher = () => {
  return {
    id: "panel-switcher",
    el: ".panel__switcher",
    buttons: [
      createBlocksPanel(),
      createStylesPanel(),
      createTraitPanel(),
      createLayersPanel(),
      createPagesPanel(),
      createTerminalSettingsPanel(),
      createTranslationsPanel(),
    ],
  };
};
