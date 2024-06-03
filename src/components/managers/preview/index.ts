export const createPreviewPanel = () => {
  return {
    id: "preview",
    active: false, // active by default
    className: "btn-toggle-borders",
    label: "Перегляд",
    command: "preview", // Built-in command
  };
};
