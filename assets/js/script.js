let gsapOn = false;
let loaderOn = false;

// BURGER TOGGLE
const a = document.querySelector("#nav");
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

// SOUND

let sound = new Audio("assets/audio/sound.mp3");
sound.loop = true;
const soundButton = document.querySelector(".sound-bar-wrapper");

soundButton.addEventListener("click", () => {
  if (soundButton.classList.contains("on")) {
    soundButton.classList.remove("on");
    soundButton.classList.add("off");
    sound.pause();
  } else {
    soundButton.classList.add("on");
    soundButton.classList.remove("off");
    sound.play();
  }
});


//LOADER
if (loaderOn == true) {
  document.addEventListener("DOMContentLoaded", () => {
    function calculatePercentage() {
      const totalElements = document.getElementsByTagName("*").length; // Total number of elements
      const loadedElements = document.querySelectorAll(
        "*"
      ).length; // Number of loaded elements

      return Math.floor((loadedElements / totalElements) * 100); // Calculate percentage
    }

    // Update the <h1> element with the loading percentage
    function updatePercentage() {
      const percentage = calculatePercentage();
      document.querySelector("#DOM").textContent = `${percentage}%`;
      document.querySelector(".loader-bar-inner").style = `width:${percentage}%`;
      // document.querySelector(".loader-bar div").style = ``
      console.log(percentage)
    }

    // Call the updatePercentage function initially and attach it to the window's load event
    updatePercentage();
    window.addEventListener("load", updatePercentage);

    setTimeout(() => {
      document.querySelector(".transition").classList.add("loaded");

      setTimeout(() => {
        document.body.removeChild(document.querySelector(".loader"));

      }, 2500)

      setTimeout(() => {
        document.body.removeChild(document.querySelector(".transition"));
      }, 6000);

    }, 1000);
  });

}

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

ScrollTrigger.normalizeScroll(true);

let smoother = ScrollSmoother.create({
  wrapper: "#smooth-wrapper",
  content: "#smooth-content",
  smooth: 2,
  normalizeScroll: true,
  effects: true,
  smoothTouch: 0.1,
});

let lastScrollTop = 0;

window.addEventListener("scroll", function () {
  let currentScroll = window.scrollY || document.documentElement.scrollTop;

  if (currentScroll > lastScrollTop) {
    // Scrolling down
    document.querySelector(".logo").classList.remove("logo-active");
    soundButton.classList.remove("active")
  } else {
    // Scrolling up
    document.querySelector(".logo").classList.add("logo-active");
    soundButton.classList.add("active")
  }

  lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
});


// const fsMainHover = document.querySelector("#fs-main-hover")

// fsMainHover.addEventListener("mouseover", () => {
// document.querySelector(".fs-main-hover").style.opacity = "1";
// })
// fsMainHover.addEventListener("mouseleave", () => {
// document.querySelector(".fs-main-hover").style.opacity = "0";
// })



const tl = gsap.timeline({
  scrollTrigger: {
    scrub: 1,
    pin: true,
    trigger: "#fs-main-gsap",
    start: "50% 50%",
    endTrigger: "#pin-scrub",
    end: "bottom 75%",
    ease: "power2.inOut",
    // markers:true
  },
});

tl.to("#fs-main-svg", {
  rotateZ: 720,
})