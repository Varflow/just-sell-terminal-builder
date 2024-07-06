import type { Editor } from "grapesjs";
import { Logo } from "../../../images";
import Texts from "../../../../locale/ua.json";

export const logo = "logo";

export const createLogoComponent = (editor: Editor) => {
  editor.Components.addType(logo, {
    isComponent: (el) =>
      el.tagName == "div" && el.classList.contains("logo-container"),

    model: {
      defaults: {
        tagName: "div",
        attributes: { class: "logo-container" },
        droppable: true,
        highlightable: true,
        components: `
            <div class="logo-image">${Logo()}</div>
            <p class="logo-title">${Texts.logoText}</p>
        `,
        styles: styles,
      },
    },
  });
};

const styles = `
  .logo-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    row-gap: 10px;
  }

  .logo-image {
    width: 100px;
    
  }

  .logo-image svg {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .logo-title {
    font-size: 12px;
    color: #000;
  }
`;
