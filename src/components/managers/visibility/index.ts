export const createVisiblityPanel = () => {
  return {
    id: "visibility",
    active: true, // active by default
    className: "btn-toggle-borders",
    label: "Показати межі блоків",
    command: "sw-visibility", // Built-in command
  };
};
