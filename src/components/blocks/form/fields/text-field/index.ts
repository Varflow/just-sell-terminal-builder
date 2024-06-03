import { formField } from "../form-field/component";
import { typeInput } from "../input/component";
import { formFieldLabel } from "../label/component";

export const createTextInputBlock = () => {
  return {
    id: "text-input",
    label: "Input",
    category: "Форми",
    media:
      '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-text-cursor-input"><path d="M5 4h1a3 3 0 0 1 3 3 3 3 0 0 1 3-3h1"/><path d="M13 20h-1a3 3 0 0 1-3-3 3 3 0 0 1-3 3H5"/><path d="M5 16H4a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h1"/><path d="M13 8h7a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-7"/><path d="M9 7v10"/></svg>',
    content: {
      type: formField,
      components: [{ type: formFieldLabel }, { type: typeInput }],
    },
  };
};
