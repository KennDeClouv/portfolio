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
  <section id="main-section"></section>
  <section id="second-section"></section>
  <div id="black-section">
    <section id="third-section"></section>
    <section id="third-section-m"></section>
    <section id="education-section"></section>
    <section id="edu-m"></section>
    <section id="fifth-section"></section>
    <section id="fifth-section-m"></section>
  </div>
  <section id="sixth-section"></section>
  <section id="sixth-section-m"></section>
  <section id="contact-section"></section>
  <footer></footer>
</main>
</div>
`
document.body.appendChild(smoothWrapper);

const nav = document.createElement('div');
nav.id = 'navbox'
nav.classList.add('top');
document.body.appendChild(nav);
