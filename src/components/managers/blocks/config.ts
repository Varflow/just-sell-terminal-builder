import { loadBlocks } from "../../blocks";

export const createBlocksManager = () => {
  return {
    appendTo: ".blocks-container",
    blocks: loadBlocks(),
  };
};
