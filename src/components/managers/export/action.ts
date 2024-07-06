export const createExportAction = () => {
  return {
    id: "export",
    active: false, // active by default
    className: "btn-export",
    label: "Зберегти",
    command: "export", // Built-in command
  };
};
