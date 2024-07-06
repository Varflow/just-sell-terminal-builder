import type { Editor } from "grapesjs";
import { localeSwitcher } from "../../locale/component";
import { logo } from "./logo";

export const pageContainer = "page-container";

export const createPageContainerComponent = (editor: Editor) => {
  editor.Components.addType(pageContainer, {
    isComponent: (el) =>
      el.tagName == "div" && el.classList.contains("page-container"),

    model: {
      defaults: {
        tagName: "div",
        attributes: { class: "container page-container" },
        droppable: true,
        highlightable: true,
        components: [
          {
            type: localeSwitcher,
          },
          {
            type: logo,
          },
        ],
      },
    },
  });
};
