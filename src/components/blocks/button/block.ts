import { button } from "./component";

export const createButton = () => {
  return {
    id: "button",
    label: "Кнопка",
    media: `
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-rectangle-horizontal"><rect width="20" height="12" x="2" y="6" rx="2"/></svg>
    `,
    content: { type: button },
    category: "Базові",
  };
};
