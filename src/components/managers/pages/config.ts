import { createGlobalStyles, createPageContainer } from "../../global";

export const createPagesManager = () => {
  return {
    appendTo: ".pages-container",
    pages: [
      {
        id: "start-screen",
        name: "Start screen",
        styles: createGlobalStyles(),
        component: createPageContainer(),
      },
      {
        id: "second-screen",
        name: "Second screen",
        styles: createGlobalStyles(),
        component: createPageContainer(),
      },
    ],
  };
};
