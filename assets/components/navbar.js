const nav = document.querySelector("#navbox");
nav.innerHTML = `
<div class="burger-body">
<svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="none">
  <path d="M0 0H6.5H13V6.5V13C13 3.25 9.75 0 0 0Z" fill="#fff" />
</svg>
<svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="none">
  <path d="M0 0H6.5H13V6.5V13C13 3.25 9.75 0 0 0Z" fill="#fff" />
</svg>
<ul>
  <li class="mb-2">
    <a href="#" class="pointer-none" id="toHome">Home</a>
    <div></div>
  </li>
  <li class="mb-2">
    <p class="m-0" id="toAbout">About</p>
    <div></div>
  </li>
  <li class="mb-2">
    <p class="m-0" id="toEdu">Education</p>
    <div></div>
  </li>
  <li class="mb-2">
    <p class="m-0" id="toPro">Projects</p>
    <div></div>
  </li>
  <li class="mb-2">
    <p class="m-0" id="toSkill">Skill</p>
    <div></div>
  </li>
  <li>
    <p class="m-0" id="toCont">Contact</p>
    <div></div>
  </li>
</ul>
</div>

<nav id="nav">
<svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="none">
  <path d="M0 0H6.5H13V6.5V13C13 3.25 9.75 0 0 0Z" fill="#fff" />
</svg>
<svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="none">
  <path d="M0 0H6.5H13V6.5V13C13 3.25 9.75 0 0 0Z" fill="#fff" />
</svg>
<div class="burger">
  <div></div>
  <div></div>
  <div></div>
</div>
<div class="frame"></div>
<div class="frame-r"></div>
<div class="frame-b"></div>
<div class="frame-l"></div>
<svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="none" class="frame-svg">
  <path d="M0 0H6.5H13V6.5V13C13 3.25 9.75 0 0 0Z" fill="#fff" />
</svg>
<svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="none"
  class="frame-svg-r">
  <path d="M0 0H6.5H13V6.5V13C13 3.25 9.75 0 0 0Z" fill="#fff" />
</svg>
<svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="none"
  class="frame-svg-b">
  <path d="M0 0H6.5H13V6.5V13C13 3.25 9.75 0 0 0Z" fill="#fff" />
</svg>

<div class="logo logo-active d-none d-md-flex">
  <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="none">
    <path d="M0 0H6.5H13V6.5V13C13 3.25 9.75 0 0 0Z" fill="#999" />
  </svg>
  <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="none">
    <path d="M0 0H6.5H13V6.5V13C13 3.25 9.75 0 0 0Z" fill="#fff" />
  </svg>
  <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="none">
    <path d="M0 0H6.5H13V6.5V13C13 3.25 9.75 0 0 0Z" fill="#fff" />
  </svg>
  <a href="#" class="logo-zull m-auto">
    <span>ke</span><br/><span>nn</span>
  </a>
</div>
</nav>

<div class="sound-bar-wrapper active off">
<div></div>
<div></div>
<div></div>
<div></div>
<svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="none">
  <path d="M0 0H6.5H13V6.5V13C13 3.25 9.75 0 0 0Z" fill="#fff" />
</svg>
<svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="none">
  <path d="M0 0H6.5H13V6.5V13C13 3.25 9.75 0 0 0Z" fill="#fff" />
</svg>
<p id="soundOnText">On</p>
<p id="soundOffText">Off</p>
</div>`


// BURGER TOGGLE
let ac = document.querySelector(".burger");
let bc = document.querySelector(".burger-body");

  ac.addEventListener("click", () => {
    bc.classList.toggle("active");
  });

  document.addEventListener("click", function (e) {
    if (!ac.contains(e.target) && !bc.contains(e.target)) {
      bc.classList.remove("active");
    }
  });

  // SOUND

  let sound = new Audio("assets/audio/sound1.mp3");
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
  
let lastScrollTop = 0;

  window.addEventListener("scroll", function () {
    let currentScroll = window.scrollY || document.documentElement.scrollTop;
  
    // if (currentScroll > lastScrollTop) {
    if (document.querySelector(".sound-bar-wrapper").classList.contains("on") == false && currentScroll > lastScrollTop) {
      // Scrolling down
      document.querySelector(".logo").classList.remove("logo-active")
      document.querySelector(".sound-bar-wrapper").classList.remove("active");
    } else {
      // Scrolling up
      document.querySelector(".logo").classList.add("logo-active");
      document.querySelector(".sound-bar-wrapper").classList.add("active");
    }
  
    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
  });
  