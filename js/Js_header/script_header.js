let burgerMenu = document.querySelector(".navigation_burger");
let navMenu = document.querySelector(".navigation_menu");

burgerMenu.addEventListener("click", function () {
  burgerMenu.classList.toggle("active");
  navMenu.classList.toggle("active");
});

function setTheme(themeName) {
  localStorage.setItem("theme", themeName);
  document.documentElement.className = themeName;
}

function toggleTheme() {
  if (localStorage.getItem("theme") === "theme-dark") {
    setTheme("theme-light");
  } else {
    setTheme("theme-dark");
  }
}

(function () {
  if (localStorage.getItem("theme") === "theme-dark") {
    setTheme("theme-dark");
  } else {
    setTheme("theme-light");
  }
})();
