import { Editor } from "grapesjs";

export const button = "button";

export const createButtonComponent = (editor: Editor) => {
  editor.Components.addType(button, {
    isComponent: (el) => el.tagName == "BUTTON",

    model: {
      updated(property, value, prevValue) {
        if (property === "attributes" && value.value !== prevValue.value) {
          this.set("content", value.value);
        }
      },

      defaults: {
        tagName: "button",
        attributes: { class: "button" },
        content: "Text",
        traits: [{ type: "translation" }],
        styles: `
            .button {
                display: flex;
                align-items: center;
                justify-content: center;
    
                width: 100%;
                padding: 8px 0;
                background-color: #ff7a2e;
                
                font-size: 16px;
                color: #fff;
    
                border-radius: 8px;
                border: none;
            }`,
      },
    },
  });
};
