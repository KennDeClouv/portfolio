const fifSec = document.querySelector("#S5")
fifSec.classList.add('fifth-section', 'd-none', 'd-md-block')
fifSec.innerHTML = `
<div class="container d-none d-md-block">
<h1>WORKS <br>
  <span class="ms-3">
    <span>P</span>
    <span>R</span>
    <span>O</span>
    <span>J</span>
    <span>E</span>
    <span>C</span>
    <span>T</span>
    <span>.</span>
  </span>
</h1>
</div>
<div class="container">
<a href="https://github.com" target="_blank" class="mt-5 main-work" id="link-click-hover">
  <div class="work-hover-wrapper d-none d-md-grid" id="main-hover-wrapper">
  </div>
  <img src="./assets/img/main-work.png" alt="" data-speed="0.9" style="height:115%" />
</a>
<div class="work-des mt-3 d-flex justify-content-between">
<a href="https://sisdps.com">Main work<span></span></a>
<h6>2024</h6>
</div>
<div class="mt-4 row">
  <div class="col-12 col-md-6 mt-1">
    <a href="https://sisdps.com" target="_blank" class="side-work" id="link-click-hover">
      <div class="work-hover-wrapper d-none d-md-grid" id="side-hover-wrapper">
      </div>
      <img src="./assets/img/medina-work.png" alt="" class="mb-5" data-speed="0.9" style="height:110%"/>
    </a>
    <div class="work-des mt-3 d-flex justify-content-between">
      <a href="https://sisdps.com">Medina residence web project <span></span></a>
      <h6>2023</h6>
    </div>
  </div>
  <div class="col-12 col-md-6 mt-1">
    <a href="https://pioneercnc.id" target="_blank" class="side-work" id="link-click-hover">
      <div class="work-hover-wrapper d-none d-md-grid" id="side-hover-wrapper">
      </div>
      <img src="./assets/img/pioneer-work.png" alt="" class="mb-5" data-speed="0.9" style="height:110%"/>
    </a>
    <div class="work-des mt-3 d-flex justify-content-between">
      <a href="https://pioneercnc.id" target="_blank">Pioneer project<span></span></a>
      <h6>2023</h6>
    </div>
  </div>
</div>
<div class="mt-4 row">
  <div class="col-12 col-md-6 mt-1">
    <a href="https://instagram.com/@averroes.is" target="_blank" class="side-work" id="link-click-hover">
      <div class="work-hover-wrapper d-none d-md-grid" id="side-hover-wrapper">
      </div>
      <img src="./assets/img/media-work.png" alt="" class="mb-5" data-speed="0.9" style="height:110%"/>
    </a>
    <div class="work-des mt-3 d-flex justify-content-between">
      <a href="https://instagram.com/@averroes.is">School media admin<span></span></a>
      <h6>2023</h6>
    </div>
  </div>
  <div class="col-12 col-md-6 mt-1">
    <div class="side-work more-work" id="link-click-hover">
      <div class="m-auto d-flex flex-column">
        <svg xmlns="http://www.w3.org/2000/svg" width="91" height="91" viewBox="0 0 91 91" fill="none"
          class="m-auto">
          <path d="M45.5 4V87M4 45.5H87" stroke="#ffffff" stroke-width="8" stroke-linecap="round"
            stroke-linejoin="round" />
        </svg>
        <p class="mt-3">MORE WORKS</p>
      </div>
    </div>
  </div>
</div>
</div>`

let mobile = document.querySelector("#S5-m")
mobile.classList.add('d-md-none')
mobile.innerHTML = `
<div class="container mt-15 text-light">
<h3 class="fs-4 opacity-50">works</h3>
<h2 class="fs-12">PROJECTS</h2>
<a href="https://" class="text-light mb-3 mt-6">
  <img src="assets/img/main-work.png" alt="" class="w-100 rounded-4">
  <div class="d-flex justify-content-between mt-1">
    <p>Main work</p>
    <p>2024</p>
  </div>
</a>

<a href="https://sisdps.com" class="text-light mb-3">
  <img src="assets/img/medina-work.png" alt="" class="w-100 rounded-4 mb-3">
  <div class="d-flex justify-content-between mt-1">
    <p>Medina residence</p>
    <p>2023</p>
  </div>
</a>
<a href="https://pioneercnc.id" class="text-light mb-3">
  <img src="assets/img/pioneer-work.png" alt="" class="w-100 rounded-4 mb-3">
  <div class="d-flex justify-content-between mt-1">
    <p>Pioneer cnc</p>
    <p>2023</p>
  </div>
</a>
<a href="https://instagram.com/@averroes.is" class="text-light mb-3">
  <img src="assets/img/media-work.png" alt="" class="w-100 rounded-4 mb-3">
  <div class="d-flex justify-content-between mt-1">
    <p>School content</p>
    <p>2024</p>
  </div>
</a>
</div>
<div class="d-flex mb-4">
<div class="mx-auto plus-play">
  <svg xmlns="http://www.w3.org/2000/svg" width="29" height="28" viewBox="0 0 29 28" fill="none">
    <path d="M14.5 1V27M1 14H28" stroke="#ffffff95" stroke-linecap="round" stroke-linejoin="round" />
  </svg>
  <svg xmlns="http://www.w3.org/2000/svg" width="29" height="28" viewBox="0 0 29 28" fill="none"
    class="mx-4">
    <path d="M14.5 1V27M1 14H28" stroke="#ffffff95" stroke-linecap="round" stroke-linejoin="round" />
  </svg>
  <svg xmlns="http://www.w3.org/2000/svg" width="29" height="28" viewBox="0 0 29 28" fill="none">
    <path d="M14.5 1V27M1 14H28" stroke="#ffffff95" stroke-linecap="round" stroke-linejoin="round" />
  </svg>
</div>
</div>`

let block = document.createElement("div")
block.classList.add("work-hover")

let mainWorkBlockLength = 17 * 8;
let sideWorkBlockLength = 9 * 5;
const mainn = document.querySelector("#main-hover-wrapper")
const side = document.querySelectorAll("#side-hover-wrapper")

mainn.appendChild(block)

for (let i = 0; i < mainWorkBlockLength; i++) {
  let newBlock = block.cloneNode(true);
  mainn.appendChild(newBlock);
}

side.forEach(e => {
  for (let i = 0; i < sideWorkBlockLength; i++) {
    let newBlock = block.cloneNode(true);
    e.appendChild(newBlock);
  }
});
