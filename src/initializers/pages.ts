import { Editor } from "grapesjs";
import { DefaultPages } from "../config";
import { pageContainer } from "../components/blocks/layout/components/page-container";

export const initializePages = (editor: Editor) => {
  try {
    const pagesManager = editor.Pages;

    const pages = DefaultPages.map((page) => {
      return pagesManager.add(page);
    });

    editor.onReady(() => {
      pagesManager.select(pages[0].getId());
    });

    editor.on("page", () => {
      editor.setComponents({ type: pageContainer });
    });
  } catch (e) {
    console.error("Pages not initlized! Error: ", e);
  }
};
