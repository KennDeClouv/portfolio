// BURGER TOGGLE
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

// LOADER
// document.addEventListener("DOMContentLoaded", () => {
//   function calculatePercentage() {
//     const totalElements = document.getElementsByTagName("*").length; // Total number of elements
//     const loadedElements = document.querySelectorAll(
//       "*"
//     ).length; // Number of loaded elements

//     return Math.floor((loadedElements / totalElements) * 100); // Calculate percentage
//   }

//   // Update the <h1> element with the loading percentage
//   function updatePercentage() {
//     const percentage = calculatePercentage();
//     document.querySelector("#DOM").textContent = `${percentage}%`;
//   }

//   // Call the updatePercentage function initially and attach it to the window's load event
//   updatePercentage();
//   window.addEventListener("load", updatePercentage);
//   setTimeout(() => {
//     document.querySelector(".transition").classList.add("loaded");
//     setTimeout(()=>{
//       document.body.removeChild(document.querySelector(".loader"));

//     },2000)
//     setTimeout(() => {
//       document.body.removeChild(document.querySelector(".transition"));
//     }, 6000);
//   }, 1000);
// });

const container = document.querySelector(".second-section");
const sections = gsap.utils.toArray(".second-content");
const content = document.querySelector(".second-content");
gsap.registerPlugin(ScrollTrigger);

let contentWidth = 0;
// Iterate over each section to calculate the total width
sections.forEach((section) => {
  contentWidth += section.offsetWidth;
});

// Calculate the amount to scroll horizontally
let amountToScroll = contentWidth - window.innerWidth;

if (window.innerWidth > 768) {
  const tween = gsap.to(content, {
    x: -amountToScroll - 400,
    duration: 3,
    ease: "none",
  });

  ScrollTrigger.create({
    trigger: ".second-section",
    start: "top",
    end: "+=" + amountToScroll,
    pin: true,
    animation: tween,
    scrub: 1,
    // markers : true
  });
}

const secondSectionsL = gsap.utils.toArray(".third-section_left");
const secondSectionsR = gsap.utils.toArray(".third-section_right");
