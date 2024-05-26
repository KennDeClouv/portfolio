const thirdSec = document.querySelector("#S3")
thirdSec.classList.add('third-section','d-none','d-md-block')
thirdSec.innerHTML = `
<div class="container">
<h1 class="ms-1 ms-md-0 pb-0 pb-md-6">
  ABOUT <br />
  <span class="ps-3">
    <span>B</span>
    <span>I</span>
    <span>O</span>
    <span>G</span>
    <span>R</span>
    <span>A</span>
    <span>P</span>
    <span>H</span>
    <span>Y</span>
    <span>.</span>
  </span>
</h1>

</div>
<h1 class="d-none d-md-inline mb-10">
take closer
<svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 34 34" fill="none"
  class="mb-1">
  <path
    d="M29.1429 0C28.0697 0 27.2 0.869827 27.2 1.94286C27.2 5.35272 26.3041 6.47119 23.8353 6.73331C21.0288 6.43258 20.4 5.07903 20.4 1.94286C20.4 0.869827 19.5303 0 18.4571 0H8.74286C7.66973 0 6.8 0.869827 6.8 1.94286V4.85714C6.8 5.93017 7.66973 6.8 8.74286 6.8H15.5429C18.9527 6.8 20.071 7.6962 20.3332 10.1647C20.0327 12.9711 18.6791 13.6 15.5429 13.6C14.4697 13.6 13.6 14.4698 13.6 15.5429C13.6 19.5675 12.3516 20.3999 8.74286 20.4C7.66973 20.4 6.8 21.2698 6.8 22.3429C6.8 26.3675 5.55156 27.1999 1.94286 27.2C0.869732 27.2 0 28.0698 0 29.1429V32.0571C0 33.1302 0.869732 34 1.94286 34H4.85714C5.93027 34 6.8 33.1302 6.8 32.0571C6.8 28.0325 8.04844 27.2001 11.6571 27.2C12.7303 27.2 13.6 26.3302 13.6 25.2571C13.6 21.2325 14.8484 20.4001 18.4571 20.4C19.5303 20.4 20.4 19.5302 20.4 18.4571C20.4 15.0473 21.2959 13.9288 23.7647 13.6667C26.5712 13.9674 27.2 15.321 27.2 18.4571V25.2571C27.2 26.3302 28.0697 27.2 29.1429 27.2H32.0571C33.1303 27.2 34 26.3302 34 25.2571V15.5429C34 14.4698 33.1303 13.6 32.0571 13.6C28.6473 13.6 27.529 12.7038 27.2668 10.2353C27.5673 7.42887 28.9209 6.8 32.0571 6.8C33.1303 6.8 34 5.93017 34 4.85714V1.94286C34 0.869827 33.1303 0 32.0571 0H29.1429Z"
    fill="#121212" />
</svg>
<svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="none">
  <path d="M0 0H6.5H13V6.5V13C13 3.25 9.75 0 0 0Z" fill="#fff" />
</svg>
<svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="none">
  <path d="M0 0H6.5H13V6.5V13C13 3.25 9.75 0 0 0Z" fill="#fff" />
</svg>
</h1>
<!-- <div class="ps-0 ps-md-4"> -->
<div class="mt-5 ts_main-content ps-3 ps-md-8">
<p>Full name</p>
<h2>Muhammad Ken Izzulhaq</h2>
</div>
<div class="ts_main-content ps-3 ps-md-8">
<p>Ages</p>
<h2>17 Years old</h2>
</div>
<div class="ts_main-content ps-3 ps-md-8">
<p>Highest scholl</p>
<h2>High school</h2>
</div>
<div class="ts_main-content ps-3 ps-md-8">
<p>Nationality</p>
<h2>Indonesian</h2>
</div>
<div class="ts_main-content ps-3 ps-md-8">
<p>Speak language</p>
<h2>English, Bahasa, Arabic</h2>
</div>
<!-- </div> -->

<div class="container" style="margin-top: 20vh">
<!-- <div class="plus-play"></div> -->
</div>
<div class="container plus-play" style="margin-top: 30vh;">
<!-- <p>lorem20</p> -->
<div class="row text-center">
  <div class="col-3">
    <svg xmlns="http://www.w3.org/2000/svg" width="72" height="50" viewBox="0 0 72 50" fill="none">
      <path fill-rule="evenodd" clip-rule="evenodd"
        d="M41.625 0.648487C39.8179 0.224273 37.9349 0 36 0C34.0651 0 32.1821 0.224273 30.375 0.648487C28.5679 0.224273 26.6849 0 24.75 0C11.081 0 0 11.1929 0 25C0 38.8071 11.081 50 24.75 50C26.6849 50 28.5679 49.7757 30.375 49.3515C32.1821 49.7757 34.0651 50 36 50C37.9349 50 39.8179 49.7757 41.625 49.3515C43.4321 49.7757 45.3151 50 47.25 50C60.9191 50 72 38.8071 72 25C72 11.1929 60.9191 0 47.25 0C45.3151 0 43.4321 0.224273 41.625 0.648487ZM36 47.274C35.7075 47.4251 35.4116 47.5704 35.1125 47.7099C35.4069 47.7215 35.7028 47.7273 36 47.7273C36.2972 47.7273 36.5931 47.7215 36.8875 47.7099C36.5884 47.5704 36.2925 47.4251 36 47.274ZM38.3598 45.8843C39.4093 46.3407 40.5001 46.7188 41.625 47.0113C51.3294 44.4883 58.5 35.59 58.5 25C58.5 14.41 51.3294 5.51171 41.625 2.98874C40.5001 3.28118 39.4093 3.65928 38.3598 4.11574C45.0713 8.58731 49.5 16.2712 49.5 25C49.5 33.7288 45.0713 41.4127 38.3598 45.8843ZM36 2.72595C35.7075 2.57491 35.4116 2.42957 35.1125 2.29008C35.4069 2.27855 35.7028 2.27273 36 2.27273C36.2972 2.27273 36.5931 2.27855 36.8875 2.29008C36.5884 2.42957 36.2925 2.57491 36 2.72595ZM46.3625 2.29008C54.8559 6.2509 60.75 14.9302 60.75 25C60.75 35.0698 54.8559 43.7491 46.3625 47.7099C46.6569 47.7215 46.9528 47.7273 47.25 47.7273C59.6764 47.7273 69.75 37.5519 69.75 25C69.75 12.4481 59.6764 2.27273 47.25 2.27273C46.9528 2.27273 46.6569 2.27855 46.3625 2.29008ZM33.6402 4.11574C32.5907 3.65928 31.4999 3.28118 30.375 2.98874C20.6706 5.51171 13.5 14.41 13.5 25C13.5 35.59 20.6706 44.4883 30.375 47.0113C31.4999 46.7188 32.5907 46.3407 33.6402 45.8843C26.9287 41.4127 22.5 33.7288 22.5 25C22.5 16.2712 26.9287 8.58731 33.6402 4.11574ZM36 5.31323C29.2747 9.24289 24.75 16.5877 24.75 25C24.75 33.4123 29.2747 40.7571 36 44.6868C42.7253 40.7571 47.25 33.4123 47.25 25C47.25 16.5877 42.7253 9.24289 36 5.31323ZM24.75 47.7273C25.0472 47.7273 25.3431 47.7215 25.6375 47.7099C17.1441 43.7491 11.25 35.0698 11.25 25C11.25 14.9302 17.1441 6.2509 25.6375 2.29008C25.3431 2.27855 25.0472 2.27273 24.75 2.27273C12.3236 2.27273 2.25 12.4481 2.25 25C2.25 37.5519 12.3236 47.7273 24.75 47.7273Z"
        fill="white" />
    </svg>
  </div>
  <div class="col-3">
    <svg xmlns="http://www.w3.org/2000/svg" width="29" height="28" viewBox="0 0 29 28" fill="none">
      <path d="M14.5 1V27M1 14H28" stroke="#ffffff50" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
  </div>
  <div class="col-3">
    <svg xmlns="http://www.w3.org/2000/svg" width="29" height="28" viewBox="0 0 29 28" fill="none">
      <path d="M14.5 1V27M1 14H28" stroke="#ffffff50" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
  </div>
  <div class="col-3">
    <svg xmlns="http://www.w3.org/2000/svg" width="29" height="28" viewBox="0 0 29 28" fill="none">
      <path d="M14.5 1V27M1 14H28" stroke="#ffffff50" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
  </div>
</div>
<div class="row text-center" style="padding-top: 30vh;">
  <div class="col-md-3">
  </div>
  <div class="col-6 col-md-3 text-start">
    <p>Experienced in programming since 2023. And have done many projects</p>
  </div>
  <div class="col-3">
    <svg xmlns="http://www.w3.org/2000/svg" width="29" height="28" viewBox="0 0 29 28" fill="none">
      <path d="M14.5 1V27M1 14H28" stroke="#ffffff50" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
  </div>
  <div class="col-3">
    <svg xmlns="http://www.w3.org/2000/svg" width="29" height="28" viewBox="0 0 29 28" fill="none">
      <path d="M14.5 1V27M1 14H28" stroke="#ffffff50" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
  </div>
</div>
<div class="row text-center" style="padding-top: 30vh;">
  <div class="col-3">
    <svg xmlns="http://www.w3.org/2000/svg" width="29" height="28" viewBox="0 0 29 28" fill="none">
      <path d="M14.5 1V27M1 14H28" stroke="#ffffff50" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
  </div>
  <div class="col-3">
    <svg xmlns="http://www.w3.org/2000/svg" width="29" height="28" viewBox="0 0 29 28" fill="none">
      <path d="M14.5 1V27M1 14H28" stroke="#ffffff50" stroke-linecap="round" stroke-linejoin="round" />
    </svg>

  </div>
  <div class="col-3">
    <svg xmlns="http://www.w3.org/2000/svg" width="29" height="28" viewBox="0 0 29 28" fill="none">
      <path d="M14.5 1V27M1 14H28" stroke="#ffffff50" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
  </div>
  <div class="col-3">
    <h1>27</h1>
  </div>
</div>
</div>`
let mobile = document.querySelector("#S3-m")
mobile.classList.add('third-section', 'd-md-none')
mobile.innerHTML = `
<div class="container">
<h3 class="fs-4 opacity-50">about</h3>
<h2 class="fs-12">BIOGRAPHY</h2>
<div class="mt-8 border-start border-2 border-light ps-3 border-opacity-50">
  <p class="fs-4 m-0 opacity-50">Name</p>
  <p class="fs-6 m-0 text-uppercase">Muhammad Ken Izzulhaq</p>
</div>
<div class="mt-3 border-start border-2 border-light ps-3 border-opacity-50">
  <p class="fs-4 m-0 opacity-50">Age</p>
  <p class="fs-6 m-0 text-uppercase">18 Years old</p>
</div>
<div class="mt-3 border-start border-2 border-light ps-3 border-opacity-50">
  <p class="fs-4 m-0 opacity-50">Highest school</p>
  <p class="fs-6 m-0 text-uppercase">High scholl</p>
</div>
<div class="mt-3 border-start border-2 border-light ps-3 border-opacity-50">
  <p class="fs-4 m-0 opacity-50">Nationality</p>
  <p class="fs-6 m-0 text-uppercase">Indonesian</p>
</div>
<div class="mt-3 border-start border-2 border-light ps-3 border-opacity-50">
  <p class="fs-4 m-0 opacity-50">Speak language</p>
  <p class="fs-6 m-0 text-uppercase">English, Bahasa, Arabic</p>
</div>
<div class="mt-10">
  <svg xmlns="http://www.w3.org/2000/svg" width="72" height="50" viewBox="0 0 72 50" fill="none">
    <path fill-rule="evenodd" clip-rule="evenodd"
      d="M41.625 0.648487C39.8179 0.224273 37.9349 0 36 0C34.0651 0 32.1821 0.224273 30.375 0.648487C28.5679 0.224273 26.6849 0 24.75 0C11.081 0 0 11.1929 0 25C0 38.8071 11.081 50 24.75 50C26.6849 50 28.5679 49.7757 30.375 49.3515C32.1821 49.7757 34.0651 50 36 50C37.9349 50 39.8179 49.7757 41.625 49.3515C43.4321 49.7757 45.3151 50 47.25 50C60.9191 50 72 38.8071 72 25C72 11.1929 60.9191 0 47.25 0C45.3151 0 43.4321 0.224273 41.625 0.648487ZM36 47.274C35.7075 47.4251 35.4116 47.5704 35.1125 47.7099C35.4069 47.7215 35.7028 47.7273 36 47.7273C36.2972 47.7273 36.5931 47.7215 36.8875 47.7099C36.5884 47.5704 36.2925 47.4251 36 47.274ZM38.3598 45.8843C39.4093 46.3407 40.5001 46.7188 41.625 47.0113C51.3294 44.4883 58.5 35.59 58.5 25C58.5 14.41 51.3294 5.51171 41.625 2.98874C40.5001 3.28118 39.4093 3.65928 38.3598 4.11574C45.0713 8.58731 49.5 16.2712 49.5 25C49.5 33.7288 45.0713 41.4127 38.3598 45.8843ZM36 2.72595C35.7075 2.57491 35.4116 2.42957 35.1125 2.29008C35.4069 2.27855 35.7028 2.27273 36 2.27273C36.2972 2.27273 36.5931 2.27855 36.8875 2.29008C36.5884 2.42957 36.2925 2.57491 36 2.72595ZM46.3625 2.29008C54.8559 6.2509 60.75 14.9302 60.75 25C60.75 35.0698 54.8559 43.7491 46.3625 47.7099C46.6569 47.7215 46.9528 47.7273 47.25 47.7273C59.6764 47.7273 69.75 37.5519 69.75 25C69.75 12.4481 59.6764 2.27273 47.25 2.27273C46.9528 2.27273 46.6569 2.27855 46.3625 2.29008ZM33.6402 4.11574C32.5907 3.65928 31.4999 3.28118 30.375 2.98874C20.6706 5.51171 13.5 14.41 13.5 25C13.5 35.59 20.6706 44.4883 30.375 47.0113C31.4999 46.7188 32.5907 46.3407 33.6402 45.8843C26.9287 41.4127 22.5 33.7288 22.5 25C22.5 16.2712 26.9287 8.58731 33.6402 4.11574ZM36 5.31323C29.2747 9.24289 24.75 16.5877 24.75 25C24.75 33.4123 29.2747 40.7571 36 44.6868C42.7253 40.7571 47.25 33.4123 47.25 25C47.25 16.5877 42.7253 9.24289 36 5.31323ZM24.75 47.7273C25.0472 47.7273 25.3431 47.7215 25.6375 47.7099C17.1441 43.7491 11.25 35.0698 11.25 25C11.25 14.9302 17.1441 6.2509 25.6375 2.29008C25.3431 2.27855 25.0472 2.27273 24.75 2.27273C12.3236 2.27273 2.25 12.4481 2.25 25C2.25 37.5519 12.3236 47.7273 24.75 47.7273Z"
      fill="white" />
  </svg>
</div>
</div>`