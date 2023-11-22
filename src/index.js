import "./style.css";

(() => {
  const menuIconBtn = document.getElementById("icon-menu-btn");
  const closeBtn = document.getElementById("close-btn");
  const mobileMenu = document.getElementById("mobile-menu");

  menuIconBtn.addEventListener("click", (e) => {
    e.preventDefault();
    mobileMenu.className = "block";
  });

  closeBtn.addEventListener("click", (e) => {
    e.preventDefault();
    mobileMenu.className = "hidden";
  });
})();
