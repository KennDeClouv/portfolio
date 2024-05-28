const Sec = document.querySelector("#S6");
Sec.classList.add('sixth-section', 'py-5', 'd-none', 'd-md-block');
Sec.innerHTML = `
<div class="container-xxl">
<h1 class="text-center mb-5" data-speed="1.2">SKILL</h1>
<div class="slider-container pt-5">
  <div class="skill-slider">
    <h2 style="font-size: 3rem; padding-right: 15rem">
      What can i do?
    </h2>
    <div class="skill">
      <div class="pb-5 mb-5">
        <div class=" d-flex gap-5">
          <img src="assets/img/c.png" alt="" />
          <p>
            My design are focused &emsp;&emsp;&emsp;on web design
            and graphic design, i make &emsp;design as
            communication between designer &emsp;&emsp;to others
          </p>
        </div>
      </div>
      <div class="pt-5">
        <div class="d-flex justify-content-between">
          <h2>DESIGN</h2>
          <h2 class="opacity-50">01</h2>
        </div>
      </div>
    </div>
    <div class="skill">
      <div class="pb-5 mb-5">
        <div class=" d-flex gap-5">
          <img src="assets/img/b.png" alt="" />
          <p>
            Expert at web programming turn design to real website
            isn't easy at the moment, but its really fun
          </p>
        </div>
      </div>
      <div class="row pt-5">
        <div class="col-12 d-flex justify-content-between">
          <h2>PROGRAM</h2>
          <h2 class="opacity-50">02</h2>
        </div>
      </div>
    </div>
    <div class="skill">
      <div class="row pb-5 mb-5">
        <div class="col-12 d-flex gap-5">
          <img src="assets/img/a.png" alt="" />
          <p>
            turning local websites into real and useful websites
            with optimal SEO for the easiest searches
          </p>
        </div>
      </div>
      <div class="row pt-5">
        <div class="col-12 d-flex justify-content-between">
          <h2>DEVELOPMENT</h2>
          <h2 class="opacity-50">03</h2>
        </div>
      </div>
    </div>
  </div>
</div>
</div>`

let mobile = document.querySelector("#S6-m")
mobile.classList.add("d-md-none")
mobile.innerHTML = `
<div class="container mt-7 mb-6" >
<h1 class="m-0 ms-2 fs-18" data-speed="1.09">SKILL</h1>
<h1 class="m-0 ms-2 fs-10 opacity-50" data-speed="1.12">what can i do </h1>
<div class="rounded-4 p-3 mt-4 text-light" style="background-color: #222831;">
  <div class="row w-100">
    <div class="col-3">
      <img src="assets/img/a.png" alt="" class="rounded-circle w-100">
    </div>
    <div class="col-9">
      <p class="text-uppercase">
        My design are focused &emsp;&emsp;&emsp;on web design
        and graphic design, i make &emsp;design as
        communication between designer &emsp;&emsp;to others
      </p>
    </div>
  </div>
  <div class="d-flex justify-content-between mt-3">
    <h1>DESIGN</h1>
    <h1 class="opacity-50">01</h1>
  </div>
</div>
<div class="rounded-4 p-3 mt-2 text-light" style="background-color: #6b9a9c;">
  <div class="row w-100">
    <div class="col-3">
      <img src="assets/img/b.png" alt="" class="rounded-circle w-100">
    </div>
    <div class="col-9">
      <p class="text-uppercase">
        Expert at web programming turn design to real website
        isn't easy at the moment, but its really fun
      </p>
    </div>
  </div>
  <div class="d-flex justify-content-between mt-3">
    <h1>PROGRAM</h1>
    <h1 class="opacity-50">02</h1>
  </div>
</div>
<div class="rounded-4 p-3 mt-2" style="background-color: #dcdcdc;">
  <div class="row w-100">
    <div class="col-3">
      <img src="assets/img/c.png" alt="" class="rounded-circle w-100">
    </div>
    <div class="col-9">
      <p class="text-uppercase">
        turning local websites into real and useful websites
        with optimal SEO for the easiest searches
      </p>
    </div>
  </div>
  <div class="d-flex justify-content-between mt-3">
    <h1>DEVELOPMENT</h1>
    <h1 class="opacity-50">03</h1>
  </div>
</div>
</div>`

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

  if (window.innerWidth > 768) {
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

handleHorizontalScroll(".slider-container", ".skill-slider", "400");
