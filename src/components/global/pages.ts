import { createLocale, createLogo } from "../blocks";

export const createPageContainer = () => {
  return `
        <div class="container">
            ${createLogo().content}
            ${createLocale().content}
        </div>
    `;
};
