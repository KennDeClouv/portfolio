document.querySelector(".loader-wrapper").innerHTML = `       
<div class="loader">
<div style="display: flex;height: 100%;width: 100%;justify-content: space-between;">
  <h1 style="font-size: 6rem;" id="DOM">0%</h1>
  <h1 style="font-size: 6rem; margin-top: auto;" id="MEH">ZULL</h1>
</div>
<div class="loader-bar">
  <div class="loader-bar-inner"></div>
</div>


</div>

<div class="transition">
<div></div>
<div></div>
<div></div>
<div>
  <h1>Welcome.</h1>
</div>
<div></div>
<div></div>
<div></div>
</div>`;

let images = document.images;
let loaded = 0;
let filesLength = images.length;



let loaderHTML = document.querySelector(".loader");

let percentHTML = document.querySelector("#DOM");
let progressHTML = document.querySelector(".loader-bar-inner");

gsap.set("#MEH", { yPercent: 110 });
gsap.set("#DOM", { yPercent: 110 });

const getFiles = () => {
  gsap.to("#MEH", { yPercent: 0 }, "<50%");
  gsap.to("#DOM", { yPercent: 0 }, "<25%");
  for (let i = 0; i < filesLength; i++) {
    let tImg = new Image();
    tImg.onload = filesLoading;
    tImg.onerror = filesLoading;
    tImg.src = images[i].src;
  }
};

const filesLoading =  () => {
  loaded += 1;
  let percentage = `${((100 / filesLength) * loaded) << 0}%`;
  if (loaded === filesLength) doneLoading();
};

const doneLoading = () => {
  let loaderTimeLine = gsap.timeline();

  loaderTimeLine.to(progressHTML, {
    width: "100%",
    duration: 1.5,
    ease: Power1.easeIn,
  });
  loaderTimeLine.fromTo(
    percentHTML,
    { textContent: "0%" },
    {
      textContent: "100%",
      snap: { textContent: 1 },
      duration: 2,
      ease: Power1.easeIn,
    },
    "<"
  );
    
  setTimeout(() => {
    let transitionElement = document.querySelector(".transition");
    if (transitionElement) {
      transitionElement.classList.add("loaded");
    }

    setTimeout(() => {
      let loaderElement = document.querySelector(".loader");
      let loaderWrapper = document.querySelector(".loader-wrapper");
      if (loaderElement && loaderWrapper) {
        loaderWrapper.removeChild(loaderElement);
      }

      setTimeout(() => {
        let transitionElement = document.querySelector(".transition");
        let loaderWrapper = document.querySelector(".loader-wrapper");
        if (transitionElement && loaderWrapper) {
          loaderWrapper.removeChild(transitionElement);
        }
      }, 5000);
    }, 2100);
  }, 3000);
};
getFiles();
