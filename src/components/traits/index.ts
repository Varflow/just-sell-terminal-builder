import { Editor } from "grapesjs";
import { createButtonTrait } from "./button";
import { createTranslationTrait } from "../managers/translations";

export const loadTraits = (app: Editor) => {
  createButtonTrait(app);
  createTranslationTrait(app);
};
