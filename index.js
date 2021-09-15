const hamburger = document.getElementById("hamburger");
const navUL = document.getElementById("nav-ul");
const header = document.getElementById("header");
const navText = document.getElementById("nav-text");
hamburger.addEventListener("click", () => {
  navUL.classList.toggle("show");
  header.classList.toggle("toggleMenu");
  navText.classList.toggle("testoDisplay");
});
