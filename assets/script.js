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


const container = document.querySelector('.second-section')
const sections = gsap.utils.toArray('.second-content')
const content = document.querySelector('.second-content')
gsap.registerPlugin(ScrollTrigger); 


let contentWidth = 0;
// Iterate over each section to calculate the total width
sections.forEach(section => {
  contentWidth += section.offsetWidth;
});

// Calculate the amount to scroll horizontally
let amountToScroll = contentWidth - window.innerWidth;



const tween = gsap.to(content,{
  x : -amountToScroll - 400,
  duration : 3,
  ease : "none"
})

ScrollTrigger.create({
  trigger : ".second-section",
  start : "top",
  end : "+=" + amountToScroll,
  pin : true,
  animation : tween,
  scrub : 1,
  // markers : true
})
