const mainSec = document.querySelector("#S1");
mainSec.classList.add("main-section")
mainSec.innerHTML = `
<div class="container-">
<div class="main-content text-center">
  <h1 data-speed="1.1">
    Kenn<br class="d-block d-lg-none">DeClouv
    <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100" fill="none" class="d-none d-md-inline">
      <path
        d="M0 5.0505C0 2.26138 2.26089 0 5.0505 0H28.2828C31.0724 0 33.3333 2.26138 33.3333 5.0505V18.1818C33.3333 28.2868 37.3737 33.3333 48.4848 33.3333H51.5151C61.6201 33.3333 66.6667 29.2929 66.6667 18.1818V5.0505C66.6667 2.26138 68.9276 0 71.7172 0H94.9495C97.7391 0 100 2.26138 100 5.0505V28.2828C100 31.0719 97.7391 33.3333 94.9495 33.3333H81.8182C71.7132 33.3333 66.6667 37.3737 66.6667 48.4848V51.5151C66.6667 61.6201 70.7071 66.6667 81.8182 66.6667H94.9495C97.7391 66.6667 100 68.928 100 71.7172V94.9495C100 97.7386 97.7391 100 94.9495 100H71.7172C68.9276 100 66.6667 97.7386 66.6667 94.9495V81.8182C66.6667 71.7132 62.6263 66.6667 51.5151 66.6667H48.4848C38.3799 66.6667 33.3333 70.7071 33.3333 81.8182V94.9495C33.3333 97.7386 31.0724 100 28.2828 100H5.0505C2.26089 100 0 97.7386 0 94.9495V71.7172C0 68.928 2.26089 66.6667 5.0505 66.6667H18.1818C28.2868 66.6667 33.3333 62.6263 33.3333 51.5151V48.4848C33.3333 38.3799 29.2929 33.3333 18.1818 33.3333H5.0505C2.26089 33.3333 0 31.0719 0 28.2828V5.0505Z"
        fill="white" />
    </svg>
  </h1>
</div>
</div>
<div class="ms-hoverable d-none d-md-grid" id="main-hoverr">

</div>`



let block = document.createElement("div")

let mainWorkBlockLength = 38 * 18;
const mainn = document.querySelector("#main-hoverr")
mainn.appendChild(block)

for (let i = 0; i < mainWorkBlockLength; i++) {
  let newBlock = block.cloneNode(true);
  mainn.appendChild(newBlock);
}

const msHoverDiv = document.querySelectorAll(".ms-hoverable div");
msHoverDiv.forEach((div) => {
  div.addEventListener("mousedown", () => {
    div.classList.toggle("opacity-100");
  });
});
