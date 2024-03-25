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

let scrollTween = gsap.to(sections,{
  xPercent : -100 *(sections.length - 1),
  ease:"none",
  scrollTrigger:{
    trigger: ".second-section",
    pin: true,
    scrub: 1,
    end:'+=3000'
  }
})