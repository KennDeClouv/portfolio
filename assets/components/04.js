const eduSec = document.querySelector("#education-section")
eduSec.classList.add('fourth-section', 'd-none', 'd-md-flex', 'flex-column', 'pb-5');
eduSec.innerHTML = `
<h1 class="fs_title">
EDUCATION
<svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="none">
  <path d="M0 0H6.5H13V6.5V13C13 3.25 9.75 0 0 0Z" fill="#fff" />
</svg>
<svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="none">
  <path d="M0 0H6.5H13V6.5V13C13 3.25 9.75 0 0 0Z" fill="#fff" />
</svg>
<svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="none">
  <path d="M0 0H6.5H13V6.5V13C13 3.25 9.75 0 0 0Z" fill="#fff" />
</svg>
<svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="none">
  <path d="M0 0H6.5H13V6.5V13C13 3.25 9.75 0 0 0Z" fill="#fff" />
</svg>
</h1>
<div class="fs-main" style="padding-top: 10vh;">
<div class="row px-4 pt-2 justify-content-between mx-3" id="pin-scrub">
  <div class="col-3 d-none d-md-flex px-3 fs-main-hover" id="fs-main-gsap">
    <!-- <svg xmlns="http://www.w3.org/2000/svg" width="217" height="79" viewBox="0 0 217 79" fill="none" id="fs-main-svg"
        class="m-auto">
        <path
          d="M31.1383 0L73.1751 6.91808L75.603 24.7504L100.271 0L142.307 6.91808L144.735 24.7504L169.403 0L211.44 6.91808L217 47.7571L185.862 79L144.047 74.5367L141.345 54.3022L116.729 79L74.9151 74.5367L72.2123 54.3022L47.5972 79L5.78283 74.5367L0 31.2429L31.1383 0Z"
          fill="white" />
      </svg> -->
    <svg xmlns="http://www.w3.org/2000/svg" width="170" height="118" viewBox="0 0 170 118" fill="none"
      id="fs-main-svg" class="m-auto">
      <path fill-rule="evenodd" clip-rule="evenodd"
        d="M98.2812 1.53043C94.0145 0.529284 89.5685 0 85 0C80.4315 0 75.9855 0.529284 71.7188 1.53043C67.452 0.529284 63.006 0 58.4375 0C26.1634 0 0 26.4152 0 59C0 91.5848 26.1634 118 58.4375 118C63.006 118 67.452 117.471 71.7188 116.47C75.9855 117.471 80.4315 118 85 118C89.5685 118 94.0145 117.471 98.2812 116.47C102.548 117.471 106.994 118 111.562 118C143.837 118 170 91.5848 170 59C170 26.4152 143.837 0 111.562 0C106.994 0 102.548 0.529284 98.2812 1.53043ZM85 111.567C84.3093 111.923 83.6107 112.266 82.9045 112.595C83.5996 112.623 84.2982 112.636 85 112.636C85.7018 112.636 86.4004 112.623 87.0955 112.595C86.3893 112.266 85.6907 111.923 85 111.567ZM90.5717 108.287C93.0498 109.364 95.6253 110.256 98.2812 110.947C121.194 104.992 138.125 83.9924 138.125 59C138.125 34.0076 121.194 13.0076 98.2812 7.05342C95.6253 7.74358 93.0498 8.6359 90.5717 9.71315C106.418 20.2661 116.875 38.4001 116.875 59C116.875 79.5999 106.418 97.734 90.5717 108.287ZM85 6.43325C84.3093 6.07678 83.6107 5.73379 82.9045 5.4046C83.5996 5.37737 84.2982 5.36364 85 5.36364C85.7018 5.36364 86.4004 5.37737 87.0955 5.4046C86.3893 5.73379 85.6907 6.07678 85 6.43325ZM109.467 5.4046C129.521 14.7521 143.438 35.2352 143.438 59C143.438 82.7648 129.521 103.248 109.467 112.595C110.162 112.623 110.861 112.636 111.562 112.636C140.903 112.636 164.688 88.6225 164.688 59C164.688 29.3775 140.903 5.36364 111.562 5.36364C110.861 5.36364 110.162 5.37737 109.467 5.4046ZM79.4283 9.71315C76.9502 8.6359 74.3747 7.74358 71.7188 7.05342C48.8056 13.0076 31.875 34.0076 31.875 59C31.875 83.9924 48.8056 104.992 71.7188 110.947C74.3747 110.256 76.9502 109.364 79.4283 108.287C63.5816 97.734 53.125 79.5999 53.125 59C53.125 38.4001 63.5816 20.2661 79.4283 9.71315ZM85 12.5392C69.1209 21.8132 58.4375 39.147 58.4375 59C58.4375 78.853 69.1209 96.1868 85 105.461C100.879 96.1868 111.562 78.853 111.562 59C111.562 39.147 100.879 21.8132 85 12.5392ZM58.4375 112.636C59.1393 112.636 59.8379 112.623 60.533 112.595C40.479 103.248 26.5625 82.7648 26.5625 59C26.5625 35.2352 40.479 14.7521 60.533 5.4046C59.8379 5.37737 59.1393 5.36364 58.4375 5.36364C29.0974 5.36364 5.3125 29.3775 5.3125 59C5.3125 88.6225 29.0974 112.636 58.4375 112.636Z"
        fill="white" />
    </svg>
  </div>
  <div class="col-12 col-md-8">
    <div class="fs-main-content">
      <h1>KINDERGARTEN</h1>
      <div class="hr"></div>
      <div class="row mt-4">
        <div class="col-12 col-md-2 ms-md-2">
          <h5>
            TK DHARMA WANITA
          </h5>
        </div>
        <div class="col-12 col-md-3">
          <p>First time ever going to school and start learning reading and playing with my friends and
            teachers</p>
        </div>
        <div class="col-12 col-md-1"></div>
        <div class="col-12 col-md-2">
          <h5>SURABAYA</h5>
        </div>
        <div class="col-2">
          <p>-7.297359999708036, 112.74471821565001</p>
        </div>
      </div>
    </div>

    <div class="fs-main-content mt-3">
      <h1>ELEMENTARY</h1>
      <div class="hr"></div>
      <div class="row mt-4">
        <div class="col-2 ms-2">
          <h5>
            SDN PERCOBAAN
          </h5>
        </div>
        <div class="col-3">
          <p>Start to learn deeper for better life and found some problem with each others.</p>
        </div>
        <div class="col-1"></div>
        <div class="col-2">
          <h5>MALANG</h5>
        </div>
        <div class="col-2">
          <p>-7.972384, 112.612908</p>
        </div>
      </div>
    </div>
    <div class="fs-main-content mt-3">
      <h1>JUNIOR HIGH</h1>
      <div class="hr"></div>
      <div class="row mt-4">
        <div class="col-2 ms-2">
          <h5>
            SMP PARAMITHA
          </h5>
        </div>
        <div class="col-3">
          <p>start the stage of looking for interests and talents then deepen them.</p>
        </div>
        <div class="col-1"></div>
        <div class="col-2">
          <h5>MALANG</h5>
        </div>
        <div class="col-2">
          <p>-7.948096470818341, 112.65804376666391</p>
        </div>
      </div>
    </div>
    <div class="fs-main-content mt-3">
      <h1>HIGH SCHOOL</h1>
      <div class="hr"></div>
      <div class="row mt-4">
        <div class="col-2 ms-2">
          <h5>
            SMK AVERROES
          </h5>
        </div>
        <div class="col-3">
          <p>Team work and real projects started, trying to enjoy my life. and i find my soul.</p>
        </div>
        <div class="col-1"></div>
        <div class="col-2">
          <h5>MALANG</h5>
        </div>
        <div class="col-2">
          <p>-7.928816087913843, 112.61740935100647</p>
        </div>
      </div>
    </div>
  </div>
</div>
</div>
<div style="margin-top: 15vh;">
<h3 style="text-transform: uppercase;"><span
    style="background-color: #fff;color: #212121;border-radius: 10px;padding: 4px 10px;margin-left: 30px;">10
    Years</span></span>
  &nbsp;education &nbsp;<span
    style="border-radius: 10px;padding: 4px 10px;background-color: #c9c9c9;color: #212121;">20+</span>&nbsp;
  <span
    style="border-radius: 10px;border: 1px #fff solid;padding: 4px 10px;position: relative;">achievment
    <span
      style="border-radius: 100%;background-color: #fff;position: absolute;top: -15px;right: -15px;color: #212121; font-size: 1rem;width: 30px;height: 30px;display: flex; justify-content: center;align-items: center;">31+</span></span>
</h3>
</div>`

let mobile = document.querySelector("#edu-m")
mobile.classList.add("d-md-none")
mobile.innerHTML = `
<div class="container text-light">
<h1 class=" fs-12 mt-20">EDUCATION</h1>
<div class="mt-5">
  <div class="border-start border-3 border-light ps-3">
    <h1>KINDERGARTEN</h1>
    <p class="fs-3 opacity-50">TK Dharma Wanita</p>
    <p class="fs-3 mt-3">First time ever going to school and start learning reading and playing with my
      friends and
      teachers</p>
    <p class="fs-2 opacity-25 mt-5">SURABAYA <br>-7.297359999708036, 112.74471821565001</p>
  </div>
</div>
<div class="mt-5 text-end">
  <div class="border-3 border-end border-light pe-3">
    <h1>ELEMENTARY</h1>
    <p class="fs-3 opacity-50">SDN Percobaan 2</p>
    <p class="fs-3 mt-3">Start to learn deeper for better life and found some problem with each others.
    </p>
    <p class="fs-2 opacity-25 mt-5">MALANG <br>-7.297359999708036, 112.74471821565001</p>
  </div>
</div>
<div class="mt-5">
  <div class=" border-start border-3 border-light ps-3">
    <h1>JUNIOR HIGH</h1>
    <p class="fs-3 opacity-50">SMP Paramitha</p>
    <p class="fs-3 mt-3">start the stage of looking for interests and talents then deepen them.</p>
    <p class="fs-2 opacity-25 mt-5">MALANG <br>-7.948096470818341, 112.65804376666391</p>
  </div>
</div>
<div class="mt-5 text-end">
  <div class=" border-end border-3 border-light pe-3">
    <h1>HIGH SCHOOL</h1>
    <p class="fs-3 opacity-50">SMK AVERROES</p>
    <p class="fs-3 mt-3">Team work and real projects started, trying to enjoy my life. and i find my soul.
    </p>
    <p class="fs-2 opacity-25 mt-5">MALANG <br>-7.928816087913843, 112.61740935100647 </p>
  </div>
</div>
</div>`


gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

ScrollTrigger.normalizeScroll(true);

let smoother = ScrollSmoother.create({
  wrapper: "#smooth-wrapper",
  content: "#smooth-content",
  smooth: 2,
  normalizeScroll: true,
  effects: true,
  smoothTouch: 2,
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