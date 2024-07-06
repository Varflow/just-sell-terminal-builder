export const createBaseHTMLTemplate = (body: string) => {
  return `
        <!doctype html>
        <html lang="en">
            <head>
                <meta charset="utf-8">
                <link rel="stylesheet" href="/css/style.css">
            </head>
            <body>
                ${body}
            </body>
        </html>      
    `;
};
