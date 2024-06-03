export const createGlobalStyles = () => {
  return `
        * {
            padding: 0;
            margin: 0;
            box-sizing: border-box;
            outline: none;

            font-family: sans-serif;
        }

        .container {
            padding: 20px; height: 100vh;
            max-height: 100vh;
        }
    `;
};
