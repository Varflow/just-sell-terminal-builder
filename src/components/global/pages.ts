import { createLocale, createLogo, createPageLayout } from "../blocks";

export const createPageContainer = () => {
  return createPageLayout();
  //   return `
  //         <div class="container">
  //             ${createLogo().content}
  //             ${createLocale().content}
  //         </div>
  //     `;
};
