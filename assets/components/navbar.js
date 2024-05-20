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
  <li class="mb-3">
    <a href="#" class="pointer-none" id="toHome">Home</a>
    <div></div>
  </li>
  <li class="mb-3">
    <p class="m-0" id="toEdu">Education</p>
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
  <!-- <h1>HIRE</h1> -->
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
    <span>zu</span><br /><span>ll</span>
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