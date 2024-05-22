document.querySelector(".loader-wrapper").innerHTML = `       
<div class="loader">
<div style="display: flex;height: 100%;width: 100%;justify-content: space-between;">
  <h1 style="font-size: 6rem;" id="DOM">0%</h1>
  <h1 style="font-size: 6rem; margin-top: auto;">ZULL</h1>
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
</div>`

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
      document.querySelector(".loader-wrapper").removeChild(document.querySelector(".loader"));
    }, 2500);

    setTimeout(() => {
      document.body.removeChild(document.querySelector(".loader-wrapper"));
    }, 6000);
  }, 1000);
});