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

export const loadComponents = (app: Editor) => {
  createFormComponent(app);
  createFieldLabel(app);
  createFormField(app);
  createInputComponent(app);
  createTexteareaComponent(app);
  createButtonComponent(app);
  createTextComponent(app);
};
