import type { Editor } from "grapesjs";
import { EnFlag, UaFlag } from "../../images";
import { createLocaleSwitcherStyles } from "./styles";
import { createLocaleSwitcherScripts } from "./script";

export const localeSwitcher = "locale-switcher";

export const createLocaleSwitcherComponent = (editor: Editor) => {
  editor.Components.addType(localeSwitcher, {
    isComponent: (el) =>
      el.tagName == "div" && el.classList.contains("locale-container"),

    model: {
      defaults: {
        tagName: "div",
        attributes: { class: "locale-container", "data-el": "locale-el" },
        droppable: true,
        highlightable: true,
        components: `
            <div class="flag-image">${UaFlag()}</div>
            <div class="flag-image">${EnFlag()}</div>
        `,
        styles: createLocaleSwitcherStyles(),
        script: createLocaleSwitcherScripts,
      },
    },
  });
};
