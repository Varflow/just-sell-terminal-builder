import { Editor } from "grapesjs";
import { useTranslationsStore } from "../../../store/translations.store";
import { createBaseHTMLTemplate } from "./templates/base";

export const createExportStructure = async (editor: Editor) => {
  const translationsStore = useTranslationsStore();

  const allPages = editor.Pages.getAll();
  const pages = {};

  allPages.map((page) => {
    const component = page.getMainComponent();
    const htmlContent = editor.getHtml({ component });

    const pageFileName = `${page.id}.html`;

    pages[pageFileName] = createBaseHTMLTemplate(htmlContent);
  });

  return {
    css: {
      "style.css": (editor: Editor) => editor.getCss(),
    },
    locale: {
      "ua.json": translationsStore.toJSON("ua"),
      "en.json": translationsStore.toJSON("en"),
    },
    pages,
  };
};
