import { createButton } from "./button/block";
import { createImage } from "./image";
import { createContainer } from "./layout";
import { createLogo } from "./logo";
import { createTextBlock } from "./text";
import { createLocale } from "./locale";
import { createFormBlock } from "./form";
import { createTextInputBlock, createTextareaFieldBlock } from "./form/fields";
import { createReceiveCardBlock, createOwnAnimationBlock } from "./animations";
import { createPageLayout } from "./layout";

export {
  createButton,
  createImage,
  createContainer,
  createLogo,
  createTextBlock,
  createLocale,
  createFormBlock,
  createTextInputBlock,
  createTextareaFieldBlock,
  createPageLayout,
};

const blocks = [
  createButton,
  createImage,
  createContainer,
  createLogo,
  createTextBlock,
  createLocale,
  createReceiveCardBlock,
  createOwnAnimationBlock,
  createFormBlock,
  createTextInputBlock,
  createTextareaFieldBlock,
  createPageLayout,
];

export const loadBlocks = () => {
  return blocks.map((block) => block());
};
