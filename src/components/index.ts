import { Editor } from "grapesjs";
import { createFormComponent } from "./blocks/form/component";
import {
  createFieldLabel,
  createFormField,
  createInputComponent,
  createTexteareaComponent,
} from "./blocks/form/fields";
import { createButtonComponent } from "./blocks/button/component";
import { createTextComponent } from "./blocks/text";
import { createLocaleSwitcherComponent } from "./blocks/locale";
import {
  createLogoComponent,
  createPageContainerComponent,
} from "./blocks/layout";

const creators = [
  createLocaleSwitcherComponent,
  createFormComponent,
  createFieldLabel,
  createFormField,
  createInputComponent,
  createTexteareaComponent,
  createButtonComponent,
  createTextComponent,
  createPageContainerComponent,
  createLogoComponent,
];

export const loadComponents = (app: Editor) => {
  creators.forEach((creator) => creator(app));
};
