export const createContainer = () => {
  return {
    id: "container",
    label: "Container",
    content: `
              <section style="font-family: sans-serif; padding: 20px; display: flex; flex-direction: column; flex: 1; min-height: 100%;">
                <h1>Перетащите блоки сюда</h1>
                <p>Это общий контейнер для страницы</p>
              </section>
          `,
  };
};
