let burgerMenu = document.querySelector(".navigation_burger");
let navMenu = document.querySelector(".navigation_menu");

burgerMenu.addEventListener("click", function () {
  burgerMenu.classList.toggle("active");
  navMenu.classList.toggle("active");
});
