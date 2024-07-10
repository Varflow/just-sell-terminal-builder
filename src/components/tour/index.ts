import { TourGuideClient } from "@sjmc11/tourguidejs/src/Tour";
import { TourGuideStep } from "@sjmc11/tourguidejs/src/types/TourGuideStep";
import { Editor } from "grapesjs";
import { button } from "../blocks/button/component";
import { pageContainer } from "../blocks/layout/components/page-container";
import { StylesCommands } from "../managers/styles";
import { BlocksCommands } from "../managers/blocks";

export const initTour = (editor: Editor) => {
  const tour = new TourGuideClient({
    autoScrollOffset: -50,
  });

  const step1: TourGuideStep = {
    title: "Добро пожаловать в конструктор терминала!",
    content: "Этот тур поможет вам освоиться в новом окружении.",
  };

  const step2: TourGuideStep = {
    title: "Панель инструментов",
    content: "Здесь находятся инструменты для управления вашим проектом.",
    target: ".gjs-block-category.gjs-open",
  };

  const step3: TourGuideStep = {
    title: "Элемент Кнопка",
    content:
      "Перетяните кнопку на рабочую область для добавления ее на экран терминала.",
    target: ".gjs-block.gjs-one-bg.gjs-four-color-h",
  };

  const step4: TourGuideStep = {
    title: "Рабочая область",
    content:
      "Это эмуляция экрана терминала, на который выможете добавлять элементы для создания интерфейса.",
    target: ".gjs-frame",
    beforeEnter: () => {
      editor.setComponents({ type: button });
    },
  };

  const step5: TourGuideStep = {
    title: "Изменение визуальных настроек",
    content:
      "Выбрав элемент на рабочей области, вы можете изменить его визуальные настройки на Панеле настроек.",
    beforeEnter: () => {
      editor.stopCommand(BlocksCommands.ShowBlocks);
      editor.runCommand(StylesCommands.ShowStyles);
    },
  };

  const step6: TourGuideStep = {
    title: "Визуальные настройки",
    content: "Изменяйте внешний вид элемента, используя нужные настройки",
    target: ".gjs-sm-sectors.gjs-one-bg.gjs-two-color",
  };

  const step7: TourGuideStep = {
    title: "Больше настроек",
    content: "Гибко настраивайте ваше приложение используя панель настроек",
    target:
      ".panel__switcher.gjs-pn-panel.gjs-pn-panel-switcher.gjs-one-bg.gjs-two-color",
  };

  const step8: TourGuideStep = {
    title: "Сохраняйте получившийся результат",
    content:
      "Сохраните готовый код проекта, который можно установить на ваш терминал!",
    target: ".gjs-pn-btn.btn-export",
  };

  const step9: TourGuideStep = {
    title: "Получайте крутой результат 👍",
    content:
      "Используйте наш конструктор для создания качетсвенных интерфейсов для вашего терминала!. Если у вас есть вопросы, вы всегда можете перейти в раздел Помощи.",
    beforeEnter: () => {
      editor.setComponents({ type: pageContainer });
      editor.runCommand(BlocksCommands.ShowBlocks);
      editor.stopCommand(StylesCommands.ShowStyles);
    },
  };

  tour.addSteps([
    step1,
    step2,
    step3,
    step4,
    step5,
    step6,
    step7,
    step8,
    step9,
  ]);

  return tour;
};
