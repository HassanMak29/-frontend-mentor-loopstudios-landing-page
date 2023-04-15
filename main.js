const menuBtn = document.querySelector(".hamburger");
const closeBtn = document.querySelector(".close-icon");
const menu = document.querySelector(".nav-ul");

menuBtn.addEventListener("click", () => {
  menu.classList.add("open");
  menuBtn.classList.add("open");
  closeBtn.classList.add("open");
});

closeBtn.addEventListener("click", () => {
  menu.classList.remove("open");
  menuBtn.classList.remove("open");
  closeBtn.classList.remove("open");
});
