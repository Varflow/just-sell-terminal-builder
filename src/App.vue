<template>
  <div class="panel__top">
    <div class="panel__basic-actions"></div>
  </div>
  <div class="editor-row">
    <div class="panel__switcher-row">
      <div class="panel__switcher"></div>
    </div>
    <div class="panel__right">
      <div class="layers-container panel-container"></div>
      <div class="styles-container panel-container"></div>
      <div class="blocks-container panel-container">
        <h4 class="blocks-container__title">Перетяніть элемент на термінал</h4>
      </div>
      <div class="pages-container panel-container">
        <VPages :editor="editor" v-if="editor" />
      </div>
      <div class="terminal-settings-container panel-container">
        <TerminalSettingsPanel />
      </div>
      <div class="translations-container panel-container">
        <TranslationsPanel />
      </div>
      <div class="traits-container panel-container"></div>
    </div>
    <div class="editor-canvas">
      <div id="gjs"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import grapesjs from "grapesjs";
import { onMounted, ref } from "vue";

import VPages from "./components/pages/VPages.vue";

import { ViewportConfig } from "./config";
import { createPanelsSwitcher } from "./components/panels/panels-switcher";
import { createActionsSwitcher } from "./components/panels/actions-switcher";

import {
  createStylesManager,
  createStylesCommands,
} from "./components/managers/styles";

import {
  createBlocksManager,
  createBlocksCommands,
} from "./components/managers/blocks";

import {
  createLayersManager,
  createLayersCommands,
} from "./components/managers/layers";

import {
  createPagesCommands,
  createPagesManager,
  createPagesEvents,
} from "./components/managers/pages";

import { createSelectorManager } from "./components/managers/selector";
import { createAssetsManager } from "./components/managers/assets";
import {
  createTraitManager,
  createTraitCommands,
} from "./components/managers/trait";

import { createTerminalSettingsCommands } from "./components/managers/terminal-settings";
import { createTranslationsCommands } from "./components/managers/translations";

import { loadComponents } from "./components";
import { loadTraits } from "./components/traits";

import { TerminalSettingsPanel } from "./components/panels/terminal-settings";
import { TranslationsPanel } from "./components/panels/translations";

const editor = ref<any>(null);

onMounted(() => {
  const instance = grapesjs.init({
    container: "#gjs",
    fromElement: true,
    width: ViewportConfig.width,
    height: ViewportConfig.height,
    panels: {
      defaults: [createPanelsSwitcher(), createActionsSwitcher()],
    },
    storageManager: false,
    traitManager: createTraitManager(),
    assetManager: createAssetsManager(),
    pageManager: createPagesManager(),
    blockManager: createBlocksManager(),
    layerManager: createLayersManager(),
    selectorManager: createSelectorManager(),
    styleManager: createStylesManager(),
  });

  instance.Panels.addPanel({
    id: "panel-top",
    el: ".panel__top",
  });

  instance.Panels.addPanel({
    id: "panel-switcher-row",
    el: ".panel__switcher-row",
  });

  instance.Panels.addPanel({
    id: "basic-actions",
    el: ".panel__basic-actions",
  });

  createLayersCommands(instance);
  createStylesCommands(instance);
  createBlocksCommands(instance);
  createPagesCommands(instance);
  createTraitCommands(instance);
  createTerminalSettingsCommands(instance);
  createTranslationsCommands(instance);

  createPagesEvents(instance);

  loadComponents(instance);
  loadTraits(instance);

  editor.value = instance;
});
</script>
