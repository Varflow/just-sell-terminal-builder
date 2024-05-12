<template>
  <!-- <div class="h-screen flex">
    <div class="w-[20%] bg-slate-50 px-2 py-6">
      <div class="flex justify-center">
        <img src="/images/logo.svg" alt="" class="w-[100px]" />
      </div>

      <div class="flex flex-col gap-y-2 mt-6">
        <h4 class="text-xs text-slate-400 text-center">
          Перетягнять елемент на екран темірналу
        </h4>
        <VElements />
      </div>
    </div>
    <div class="p-6">
      <div class="flex flex-auto">
        <h2 class="text-xl font-medium">First screen</h2>
      </div>

      <div class="mt-6">
        <VTerminal />
      </div>
    </div>
  </div> -->

  <div class="panel__top">
    <div class="panel__switcher"></div>
    <div class="panel__basic-actions"></div>
  </div>
  <div class="editor-row">
    <div class="panel__right">
      <div class="layers-container"></div>
      <div class="styles-container"></div>
      <div class="blocks-container">
        <h4 class="blocks-container__title">Перетяніть элемент на термінал</h4>
      </div>
      <div class="pages-container">
        <VPages :editor="editor" v-if="editor" />
      </div>
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

import { createImage } from "./components/blocks/image";
import { createButton } from "./components/blocks/button";
import { createText } from "./components/blocks/text";
import { createContainer } from "./components/blocks/layout";

const editor = ref<any>(null);

onMounted(() => {
  const instance = grapesjs.init({
    container: "#gjs",
    fromElement: true,
    height: "650px",
    width: "450px",
    storageManager: false,
    pageManager: {
      appendTo: ".pages-container",
      pages: [
        {
          id: "start-screen",
          name: "Start screen",
          styles:
            ".my-page1-el { padding: 20px; height: 100vh; } * {font-family: sans-serif;}",
          component: '<div class="my-page1-el"></div>',
        },
        {
          id: "second-screen",
          name: "Second screen",
          styles: ".my-page2-el { color: blue }",
          component: '<div class="my-page2-el">Page 2</div>',
        },
      ],
    },
    panels: {
      defaults: [
        {
          id: "layers",
          el: ".panel__right",
          resizable: {
            maxDim: 350,
            minDim: 200,
            tc: false, // Top handler
            cl: true, // Left handler
            cr: false, // Right handler
            bc: false, // Bottom handler
            keyWidth: "flex-basis",
          },
        },
        {
          id: "panel-switcher",
          el: ".panel__switcher",
          buttons: [
            {
              id: "show-blocks",
              active: true,
              label: "Елементи",
              command: "show-blocks",
              togglable: false,
            },
            {
              id: "show-style",
              active: true,
              label: "Стилі",
              command: "show-styles",
              togglable: false,
            },
            {
              id: "show-layers",
              active: true,
              label: "Слої",
              command: "show-layers",
              // Once activated disable the possibility to turn it off
              togglable: false,
            },
            {
              id: "show-pages",
              active: true,
              label: "Экрани",
              command: "show-pages",
              // Once activated disable the possibility to turn it off
              togglable: false,
            },
          ],
        },
      ],
    },
    blockManager: {
      appendTo: ".blocks-container",
      blocks: [createText(), createImage(), createButton()],
    },
    layerManager: {
      appendTo: ".layers-container",
    },
    selectorManager: {
      appendTo: ".styles-container",
    },
    styleManager: {
      appendTo: ".styles-container",
      sectors: [
        {
          name: "Розмір",
          open: false,
          buildProps: [
            "width",
            "min-width",
            "min-height",
            "max-height",
            "max-width",
            "height",
            "padding",
            "margin",
          ],
        },
        {
          name: "Текст",
          open: false,
          buildProps: ["font-size", "font-weight", "font-family", "color"],
        },
        {
          name: "Фон",
          open: false,
          buildProps: ["background-color", "box-shadow"],
        },
      ],
    },
  });

  instance.Panels.addPanel({
    id: "panel-top",
    el: ".panel__top",
  });

  instance.Commands.add("show-layers", {
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
  instance.Commands.add("show-styles", {
    getRowEl(editor) {
      return editor.getContainer().closest(".editor-row");
    },
    getStyleEl(row) {
      return row.querySelector(".styles-container");
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
  instance.Commands.add("show-blocks", {
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
  instance.Commands.add("show-pages", {
    getRowEl(editor) {
      return editor.getContainer().closest(".editor-row");
    },
    getStyleEl(row) {
      return row.querySelector(".pages-container");
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

  editor.value = instance;
});
</script>
