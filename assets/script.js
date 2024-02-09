const a = document.querySelector(".burger");
const b = document.querySelector(".burger-body");

a.addEventListener("click", () => {
  b.classList.toggle("active");
});

document.addEventListener("click", function (e) {
  if (!a.contains(e.target) && !b.contains(e.target)) {
    b.classList.remove("active");
  }
});
