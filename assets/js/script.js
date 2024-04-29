let gsapOn = false;
let loaderOn = false;

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

//CURSOR
let links = document.querySelectorAll("a");
let cursor = document.querySelector(".cursor");
let cursorO = document.querySelector(".cursor-outline");

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

  links.forEach((link) => {
    link.addEventListener("mouseenter", () => {
      cursor.classList.add("hover-link");
      cursorO.classList.add("hoverO-link");
    });
    link.addEventListener("mouseleave", () => {
      cursor.classList.remove("hover-link");
      cursorO.classList.remove("hoverO-link");
    });
  });
});

window.addEventListener("mousedown", () => {
  cursor.classList.add("hover");
  cursorO.classList.add("hoverO");
});
window.addEventListener("mouseup", () => {
  cursor.classList.remove("hover");
  cursorO.classList.remove("hoverO");
});

// 
// const bodySmooth = document.querySelector("body");
// gsap.to(bodySmooth, {
//   scrollTop: 1, // Example scroll position
//   duration: 2, // Duration of the animation
//   ease: "power4.inOut" // Easing function for smooth scrolling
// });

// SMOOTH SCROLL
// Scrollbar.init(document.querySelector('#my-scrollbar'))

//LOADER
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
//     document.querySelector(".loader-bar div").style = `width:${percentage}%`
//   }

//   // Call the updatePercentage function initially and attach it to the window's load event
//   updatePercentage();
//   window.addEventListener("load", updatePercentage);
//   setTimeout(() => {
//     document.querySelector(".transition").classList.add("loaded");
//     setTimeout(() => {
//       document.body.removeChild(document.querySelector(".loader"));

//     }, 2000)
//     setTimeout(() => {
//       document.body.removeChild(document.querySelector(".transition"));
//     }, 6000);
//   }, 1000);
// });

// const container = document.querySelector(".second-section");
// const sections = gsap.utils.toArray(".second-content");
// const content = document.querySelector(".second-content");
// gsap.registerPlugin(ScrollTrigger);

// let contentWidth = 0;
// // Iterate over each section to calculate the total width
// // sections.forEach((section) => {
//   contentWidth += sections.offsetWidth;
// // });

// // Calculate the amount to scroll horizontally
// let amountToScroll = contentWidth - window.innerWidth;

// if (window.innerWidth > 768) {
//   const tween = gsap.to(content, {
//     x: -amountToScroll - 400,
//     duration: 3,
//     ease: "none",
//   });

//   ScrollTrigger.create({
//     trigger: ".second-section",
//     start: "top",
//     end: "+=" + amountToScroll,
//     pin: true,
//     animation: tween,
//     scrub: 1,
//     // markers : true
//   });
// }

const container = document.querySelector(".second-section");
const sections = gsap.utils.toArray("#ss_main-content");
const content = document.querySelector("#ss_main-content");
// gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
gsap.registerPlugin(ScrollTrigger);

let contentWidth = 0;
// Iterate over each section to calculate the total width
sections.forEach((section) => {
  contentWidth += section.offsetWidth;
});

// Calculate the amount to scroll horizontally
let amountToScroll = contentWidth - window.innerWidth;
let secondSectionOn = false;


if (gsapOn == true && window.innerWidth > 768) {
  const tween = gsap.to(content, {
    x: -amountToScroll - 400,
    duration: 1,
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

// const secondSectionsL = gsap.utils.toArray(".third-section_left");
// const secondSectionsR = gsap.utils.toArray(".third-section_right");

// if (window.innerWidth > 768) {
//   const tween = gsap.to(secondSectionsR, {
//     x: window.innerWidth / 2,
//     duration: 5,
//     ease: "none",
//   });

//   ScrollTrigger.create({
//     trigger: ".third-section",
//     start: "-8px top",
//     end: "+=" + window.innerWidth / 2,
//     pin: true,
//     animation: tween,
//     scrub: 1,
//     // markers : true
//   });
// }



const container2 = document.querySelector(".slider-container");
const sections2 = gsap.utils.toArray(".skill-slider");
const content2 = document.querySelector(".skill-slider");

let contentWidth2 = 0;
// Iterate over each section to calculate the total width
sections2.forEach((section2) => {
  contentWidth2 += section2.offsetWidth;
});

// Calculate the amount to scroll horizontally
let amountToScroll2 = contentWidth2 - window.innerWidth;

if (gsapOn == true && window.innerWidth > 768) {
  const tween = gsap.to(content2, {
    x: -amountToScroll2 - 400,
    duration: 1,
    ease: "none",
  });

  ScrollTrigger.create({
    trigger: ".slider-container",
    start: "top",
    end: "+=" + amountToScroll2,
    pin: true,
    animation: tween,
    scrub: 1,
    // markers : true
  });
}


gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

ScrollTrigger.normalizeScroll(true)

let smoother = ScrollSmoother.create({
  wrapper: '#smooth-wrapper',
  content: '#smooth-content',
  smooth: 2,
  normalizeScroll: true,
  effects: true,
  smoothTouch: 0.1,
});



// document.querySelector('#scroll-container').addEventListener('scroll', () => {
//   smoothScroll(this);
// });

// function smoothScroll(element) {
//   let targetY = 0; // Target Y position (scroll position)
//   const scrollSpeed = 0.1; // Scroll speed
//   const easeAmount = 0.01; // Ease amount (lower value for smoother scrolling)

//   // Calculate the distance to scroll
//   const distance = targetY - element.scrollTop;

//   // Apply easing to the scroll position
//   element.scrollTop += distance * easeAmount;

//   // Request another frame until target position is reached
//   if (Math.abs(distance) > 1) {
//     requestAnimationFrame(function() {
//       smoothScroll(element);
//     });
//   }
// }

let lastScrollTop = 0;

window.addEventListener('scroll', function () {
  let currentScroll = window.scrollY || document.documentElement.scrollTop;

  if (currentScroll > lastScrollTop) {
    // Scrolling down
    document.querySelector(".logo").classList.remove("logo-active")
  } else {
    // Scrolling up
    document.querySelector(".logo").classList.add("logo-active")
  }

  lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
});


// const body = document.body,
//   scrollWrap = document.querySelector("#my-scrollbar")

// height = scrollWrap.getBoundingClientRect().height - 1,
//   speed = 0.01;

// var offset = 0;

// body.style.height = Math.floor(height) + "px";

// function smoothScroll() {

//   offset += (window.scrollY - offset) * speed;

//   var scroll = "translateY(-" + offset + "px) translateZ(0)";

//   scrollWrap.style.transform = scroll;

//   callScroll = requestAnimationFrame(smoothScroll);
// }

// smoothScroll();

