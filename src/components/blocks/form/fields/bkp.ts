import type { Editor } from "grapesjs";

export const typeSelect = "select";
export const typeCheckbox = "checkbox";
export const typeRadio = "radio";
export const typeButton = "button";
export const typeLabel = "label";
export const typeOption = "option";

export default function (editor: Editor) {
  const { Components } = editor;

  const createOption = (value: string, content: string) => {
    return { type: typeOption, content, attributes: { value } };
  };

  const checkIfInPreview = (ev: Event) => {
    if (!editor.Commands.isActive("preview")) {
      ev.preventDefault();
    }
  };

  // TEXTAREA

  // OPTION
  Components.addType(typeOption, {
    isComponent: (el) => el.tagName == "OPTION",

    model: {
      defaults: {
        tagName: "option",
        layerable: false,
        droppable: false,
        draggable: false,
        highlightable: false,
      },
    },
  });

  // SELECT
  Components.addType(typeSelect, {
    isComponent: (el) => el.tagName == "SELECT",

    model: {
      defaults: {
        tagName: "select",
        droppable: false,
        highlightable: false,
        components: [
          createOption("opt1", "Option 1"),
          createOption("opt2", "Option 2"),
        ],
        traits: [
          nameTrait,
          {
            name: "options",
            type: "select-options",
          },
          requiredTrait,
        ],
      },
    },

    view: {
      events: {
        mousedown: checkIfInPreview,
      } as any,
    },
  });

  // CHECKBOX
  Components.addType(typeCheckbox, {
    extend: typeInput,
    isComponent: (el) =>
      el.tagName == "INPUT" && (el as HTMLInputElement).type == "checkbox",

    model: {
      defaults: {
        copyable: false,
        attributes: { type: "checkbox" },
        traits: [idTrait, nameTrait, valueTrait, requiredTrait, checkedTrait],
      },
    },

    view: {
      events: {
        click: checkIfInPreview,
      } as any,

      init() {
        this.listenTo(
          this.model,
          "change:attributes:checked",
          this.handleChecked
        );
      },

      handleChecked() {
        (this.el as any).checked = !!this.model.get("attributes")?.checked;
      },
    },
  });

  // RADIO
  Components.addType(typeRadio, {
    extend: typeCheckbox,
    isComponent: (el) =>
      el.tagName == "INPUT" && (el as HTMLInputElement).type == "radio",

    model: {
      defaults: {
        attributes: { type: "radio" },
      },
    },
  });

  Components.addType(typeButton, {
    extend: typeInput,
    isComponent: (el) => el.tagName == "BUTTON",

    model: {
      defaults: {
        tagName: "button",
        attributes: { type: "button" },
        text: "Send",
        traits: [
          {
            name: "text",
            changeProp: true,
          },
          {
            type: "select",
            name: "type",
            options: [
              { value: "button" },
              { value: "submit" },
              { value: "reset" },
            ],
          },
        ],
      },

      init() {
        const comps = this.components();
        const tChild = comps.length === 1 && comps.models[0];
        const chCnt =
          (tChild && tChild.is("textnode") && tChild.get("content")) || "";
        const text = chCnt || this.get("text");
        this.set("text", text);
        this.on("change:text", this.__onTextChange);
        text !== chCnt && this.__onTextChange();
      },

      __onTextChange() {
        this.components(this.get("text"));
      },
    },

    view: {
      events: {
        click: checkIfInPreview,
      } as any,
    },
  });

  // LABEL
  Components.addType(typeLabel, {
    extend: "text",
    isComponent: (el) => el.tagName == "LABEL",

    model: {
      defaults: {
        tagName: "label",
        components: "Label" as any,
        traits: [forTrait],
      },
    },
  });
}
