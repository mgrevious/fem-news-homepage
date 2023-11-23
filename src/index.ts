import "./style.css";

(() => {
  const menuIconBtn = document.getElementById(
    "icon-menu-btn"
  ) as HTMLButtonElement;
  const closeBtn = document.getElementById("close-btn") as HTMLButtonElement;
  const menuBg = document.getElementById("menu-bg") as HTMLButtonElement;
  const menu = document.querySelector("#menu > nav") as HTMLButtonElement;

  menuIconBtn.addEventListener("click", (e) => {
    e.preventDefault();
    menu.classList.remove("-right-2/3");
    menu.classList.add("right-0");
    menuBg.classList.remove("hidden");
    menuBg.classList.add("block");
  });

  closeBtn.addEventListener("click", (e) => {
    e.preventDefault();
    menu.classList.add("-right-2/3");
    menu.classList.remove("right-0");
    menuBg.classList.remove("block");
    menuBg.classList.add("hidden");
  });
})();
