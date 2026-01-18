const tabs = document.querySelectorAll(".nav__link");
const panels = document.querySelectorAll(".panel");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    tabs.forEach((button) => button.classList.remove("is-active"));
    panels.forEach((panel) => panel.classList.remove("is-active"));

    tab.classList.add("is-active");
    const target = document.getElementById(tab.dataset.tab);
    if (target) {
      target.classList.add("is-active");
    }
  });
});
