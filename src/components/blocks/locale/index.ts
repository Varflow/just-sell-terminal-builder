import UaFlag from "../../../assets/ua-flag.svg";
import EnFlag from "../../../assets/en-flag.svg";

import Texts from "../../../locale/ua.json";

export const createLocale = () => {
  return {
    id: "locale",
    label: "Languages",
    category: "Базові",
    media: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-earth"><path d="M21.54 15H17a2 2 0 0 0-2 2v4.54"/><path d="M7 3.34V5a3 3 0 0 0 3 3v0a2 2 0 0 1 2 2v0c0 1.1.9 2 2 2v0a2 2 0 0 0 2-2v0c0-1.1.9-2 2-2h3.17"/><path d="M11 21.95V18a2 2 0 0 0-2-2v0a2 2 0 0 1-2-2v-1a2 2 0 0 0-2-2H2.05"/><circle cx="12" cy="12" r="10"/></svg>`,
    content: `
          <div class="locale-container">
            <img class="flag-image" src="${UaFlag}"/>
            <img class="flag-image" src="${EnFlag}"/>
          </div>
          <style>
              .locale-container {
                position: absolute;
                top: 10px;
                left: -62px;

                display: flex;
                justify-content: center;
                align-items: center;
                column-gap: 10px;

                width: max-content;
                padding: 4px 12px;
                
                border-radius: 8px;
                background-color: rgb(229 231 235);


              }

              .flag-image {
                width: 50px;
                height: 50px;
                cursor: pointer;
              }
          </style>
        `,
  };
};
