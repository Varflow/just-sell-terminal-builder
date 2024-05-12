export const createButton = () => {
  return {
    id: "button",
    label: "Button",
    media: `
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-rectangle-horizontal"><rect width="20" height="12" x="2" y="6" rx="2"/></svg>
    `,
    content: `
        <button class="button">Text</button>
        <style>
            .button {
                display: flex;
                align-items: center;
                justify-content: center;
    
                width: 100%;
                padding: 8px 0;
                background-color: #ff7a2e;
                
                font-size: 16px;
                color: #fff;
    
                border-radius: 8px;
                border: none;
            }
        </style>
      `,
    category: "Базові",
  };
};
