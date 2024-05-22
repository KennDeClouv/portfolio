const cursorWrapper = document.querySelector("#cursor-wrapper").innerHTML = `
<div class="cursor d-none d-md-flex">
<p class="opacity-0 m-auto" id="link-click">CLICK</p>
</div>
<div class="cursor-outline d-none d-md-block"></div>`

//CURSOR
let links = document.querySelectorAll("a");
let texts = document.querySelectorAll("p,h1,h2,h3,h4,h5,h6");
let cursor = document.querySelector(".cursor");
let cursorO = document.querySelector(".cursor-outline");
let linkClick = document.querySelectorAll("#link-click-hover");

window.addEventListener("mousemove", (e) => {
  const posX = e.clientX;
  const posY = e.clientY;

  cursor.style.left = `${posX}px`;
  cursor.style.top = `${posY}px`;

  cursorO.animate(
    {
      left: `${posX}px`,
      top: `${posY}px`,
    },
    { duration: 1000, fill: "forwards" }
  );

  linkClick.forEach((link) => {
    link.addEventListener("mouseenter", () => {
      cursor.classList.add("hover-link");
      cursorO.classList.add("hoverO-link");
      document.querySelector("#link-click").classList.remove("opacity-0");
    });
    link.addEventListener("mouseleave", () => {
      cursor.classList.remove("hover-link");
      cursorO.classList.remove("hoverO-link");
      document.querySelector("#link-click").classList.add("opacity-0");
    });
  });
});

function addHoverListeners(elements, ccursor, ccursorO) {
  elements.forEach((element) => {
    element.addEventListener("mouseenter", () => {
      cursor.classList.add(ccursor);
      cursorO.classList.add(ccursorO);
    });
    element.addEventListener("mouseleave", () => {
      cursor.classList.remove(ccursor);
      cursorO.classList.remove(ccursorO);
    });
  });
}

addHoverListeners(links, "hover-link", "hoverO-link");
addHoverListeners(texts, "hover-text", "hoverO-link");

window.addEventListener("mousedown", () => {
  cursor.classList.add("hover");
  cursorO.classList.add("hoverO");
});
window.addEventListener("mouseup", () => {
  cursor.classList.remove("hover");
  cursorO.classList.remove("hoverO");
});
