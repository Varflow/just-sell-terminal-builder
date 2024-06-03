import { Editor } from "grapesjs";

export const createPagesEvents = (app: Editor) => {
  app.on("page:update", ({ event, model }) => {
    console.log("Page event:", event, model);
  });
};
