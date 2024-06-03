import { Editor } from "grapesjs";
import { createButtonTrait } from "./button";
import { createTranslationTrait } from "./translation";

export const loadTraits = (app: Editor) => {
  createButtonTrait(app);
  createTranslationTrait(app);
};
