export const createLocaleSwitcherScripts = () => {
  const containerEl = document.querySelector('[data-el="locale-el"]');
  const flagEls = containerEl?.querySelectorAll(".flag-image");

  if (!flagEls) {
    return;
  }

  flagEls.forEach((flagEl) => {
    flagEl.addEventListener("click", () => {
      containerEl.classList.toggle("locale-container--active");
    });
  });
};
