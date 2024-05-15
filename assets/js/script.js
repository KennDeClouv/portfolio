let gsapOn = true;
let loaderOn = false;
let navOn = true;

// BURGER TOGGLE
const a = document.querySelector("#nav");
const b = document.querySelector(".burger-body");
if (navOn == true) {
  a.addEventListener("click", () => {
    b.classList.toggle("active");
  });
  
  document.addEventListener("click", function (e) {
    if (!a.contains(e.target) && !b.contains(e.target)) {
      b.classList.remove("active");
    }
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
    document.querySelector(".main-content").classList.remove("d-none");
  } else {
    soundButton.classList.add("on");
    soundButton.classList.remove("off");
    sound.play();
    document.querySelector(".main-content").classList.add("d-none");
  }
});

}
  
//CURSOR
let links = document.querySelectorAll("a");
let texts = document.querySelectorAll("p,h1,h2,h3,h4,h5,h6");
let cursor = document.querySelector(".cursor");
let cursorO = document.querySelector(".cursor-outline");
let linkClick = document.querySelectorAll("#link-click-hover")

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

//LOADER
if (loaderOn == true) {
  document.addEventListener("DOMContentLoaded", () => {
    function calculatePercentage() {
      const totalElements = document.getElementsByTagName("*").length;
      const loadedElements = document.querySelectorAll("*").length; 

      return Math.floor((loadedElements / totalElements) * 100); 
    }


    function updatePercentage() {
      const percentage = calculatePercentage();
      document.querySelector("#DOM").textContent = `${percentage}%`;
      document.querySelector(
        ".loader-bar-inner"
      ).style = `width:${percentage}%`;

      console.log(percentage);
    }

    updatePercentage();
    window.addEventListener("load", updatePercentage);

    setTimeout(() => {
      document.querySelector(".transition").classList.add("loaded");

      setTimeout(() => {
        document.body.removeChild(document.querySelector(".loader"));
      }, 2500);

      setTimeout(() => {
        document.body.removeChild(document.querySelector(".transition"));
      }, 6000);
    }, 1000);
  });
}


// Define a function to handle horizontal scrolling with ScrollTrigger
function handleHorizontalScroll(containerSelector, sectionSelector, offset) {
  const container = document.querySelector(containerSelector);
  const sections = gsap.utils.toArray(sectionSelector);
  const content = document.querySelector(sectionSelector);

  let contentWidth = 0;
  // Iterate over each section to calculate the total width
  sections.forEach((section) => {
    contentWidth += section.offsetWidth;
  });

  // Calculate the amount to scroll horizontally
  let amountToScroll = contentWidth - window.innerWidth;

  if (gsapOn && window.innerWidth > 768) {
    const tween = gsap.to(content, {
      x: -amountToScroll - offset,
      duration: 1,
      ease: "none",
    });

    ScrollTrigger.create({
      trigger: containerSelector,
      start: "top",
      end: `+=${amountToScroll}`,
      pin: true,
      animation: tween,
      scrub: 1,
    });
  }
}


handleHorizontalScroll(".second-section", "#ss_main-content", "400");
handleHorizontalScroll(".slider-container", ".skill-slider", "400");

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


const tl = gsap.timeline({
  scrollTrigger: {
    scrub: 1,
    pin: true,
    trigger: "#fs-main-gsap",
    start: "50% 50%",
    endTrigger: "#pin-scrub",
    end: "100% 72%",
    // ease: "power2.inOut",
    // markers:true
  },
});

tl.to("#fs-main-svg", {
  rotateZ: 720,
});

const msHoverDiv = document.querySelectorAll(".ms-hoverable div");
msHoverDiv.forEach((div) => {
  div.addEventListener("mousedown", () => {
    div.classList.toggle("opacity-100");
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const textElement = document.getElementById("scramble");
  const originalText = textElement.innerText;
  const characters = originalText.split("");

  let scrambleInterval;
  const scrambleFrequency = 50; // Scramble text every 50ms

  // Function to scramble text
  function scrambleText() {
    let newText = "";
    for (let i = 0; i < characters.length; i++) {
      if (characters[i] === " ") {
        newText += " ";
      } else {
        newText += String.fromCharCode(Math.random() * (126 - 33) + 33);
      }
    }
    textElement.innerText = newText;
  }

  // Start scrambling text when scrolling
  window.addEventListener("scroll", function () {
    if (!scrambleInterval) {
      scrambleInterval = setInterval(scrambleText, scrambleFrequency);
    }
  });

  // Stop scrambling and clear interval when scrolling stops
  let scrollTimeout;
  window.addEventListener("scroll", function () {
    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(function () {
      clearInterval(scrambleInterval);
      scrambleInterval = null;
      textElement.innerText = originalText; // Reset to original text
    }, 1000);
  });
});

const inputField = document.querySelectorAll("input, textarea");

inputField.forEach((e) => {
  e.addEventListener("input", () => {
    if (e.value.length > 0) {
      e.parentElement.classList.remove("opacity-50");
    } else {
      e.parentElement.classList.add("opacity-50");
      
    }
  });
});

// LINK TO NAVIGATE
const home = document.querySelector("#toHome");
const edu = document.querySelector("#toEdu");
const contact = document.querySelector("#toCont");

function navigation(e,f) {
  e.addEventListener("click",() =>{
    smoother.scrollTo(f, true, "top top");
  })
}

navigation(home,".main-section");
navigation(edu,"#education-section");
navigation(contact,"#contact-section");

ScrollTrigger.refresh()