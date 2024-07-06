import { createApp, h } from "vue";

export const renderComponentToHTMLElement = (Component: any, props?: any) => {
  // Создаем контейнер для компонента
  const container = document.createElement("div");

  // Создаем приложение Vue и монтируем его в контейнер
  const app = createApp({
    render: () => h(Component, props),
  });

  // Монтируем приложение в контейнер
  app.mount(container);

  // Возвращаем первый дочерний элемент контейнера, который будет HTMLElement
  return container.innerHTML;
};
