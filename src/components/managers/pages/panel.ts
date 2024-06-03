import { PagesCommands } from "./commands";

export const createPagesPanel = () => {
  return {
    id: "show-pages",
    active: true,
    // label: "Экрани",
    label: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-columns-2"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M12 3v18"/></svg>`,
    command: PagesCommands.ShowPages,
    togglable: false,
  };
};
