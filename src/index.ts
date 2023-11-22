import "./style.css";

(() => {
  const menuIconBtn = document.getElementById(
    "icon-menu-btn"
  ) as HTMLButtonElement;
  const closeBtn = document.getElementById("close-btn") as HTMLButtonElement;
  const mobileMenu = document.getElementById("menu") as HTMLButtonElement;

  menuIconBtn.addEventListener("click", (e) => {
    e.preventDefault();
    mobileMenu.className = "block";
  });

  closeBtn.addEventListener("click", (e) => {
    e.preventDefault();
    mobileMenu.className = "hidden";
  });
})();
