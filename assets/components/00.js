document.body.classList.add("overflow-x-hidden")

const cursorWrapper = document.createElement("div");
cursorWrapper.id = "cursor-wrapper";
document.body.appendChild(cursorWrapper);

const loaderWrapper = document.createElement('div');
loaderWrapper.classList.add('loader-wrapper');
document.body.appendChild(loaderWrapper);

const smoothWrapper = document.createElement('div');
smoothWrapper.id = 'smooth-wrapper';
smoothWrapper.innerHTML = `
<div id="smooth-content">
<main class="main">
  <section id="S1"></section>
  <section id="S2"></section>
  <div id="black-section">
    <section id="S3"></section>
    <section id="S3-m"></section>
    <section id="S4"></section>
    <section id="S4-m"></section>
    <section id="S5"></section>
    <section id="S5-m"></section>
  </div>
  <section id="S6"></section>
  <section id="S6-m"></section>
  <section id="S7"></section>
  <footer></footer>
</main>
</div>
`
document.body.appendChild(smoothWrapper);

const nav = document.createElement('div');
nav.id = 'navbox'
nav.classList.add('top');
document.body.appendChild(nav);

