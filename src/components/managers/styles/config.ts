export const createStylesManager = () => {
  return {
    appendTo: ".styles-container",
    sectors: [
      {
        name: "Загальні",
        open: false,
        properties: ["display", "position", "top", "right", "left", "bottom"],
      },
      {
        name: "Розмір",
        open: false,
        buildProps: [
          "width",
          "min-width",
          "min-height",
          "max-height",
          "max-width",
          "height",
          "padding",
          "margin",
        ],
      },
      {
        name: "Flex",
        open: false,
        properties: [
          "flex-direction",
          "flex-wrap",
          "justify-content",
          "align-items",
          "align-content",
          "order",
          "flex-basis",
          "flex-grow",
          "flex-shrink",
          "align-self",
        ],
      },
      {
        name: "Текст",
        open: false,
        buildProps: [
          "font-family",
          "font-size",
          "font-weight",
          "letter-spacing",
          "color",
          "line-height",
          "text-align",
        ],
      },
      {
        name: "Фон",
        open: false,
        buildProps: ["background-color", "box-shadow"],
      },
    ],
  };
};
