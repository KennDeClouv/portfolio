import "./00.js";
import "./01.js";
import "./02.js";
import "./03.js";
import "./04.js";
import "./05.js";
import "./06.js";
import "./07.js";
import "./navbar.js";
import "./footer.js";
import "./loader.js";
import "./cursor.js";

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

const targets = document.querySelectorAll("#S3,#S4,#S5,#S6,#S7");
const targetsM = document.querySelectorAll("#S3-m,#S4-m,#S5-m,#S6-m,#S7");
const navigates = document.querySelectorAll("#toEdu,#toAbout,#toPro,#toSkill,#toCont");

navigates.forEach((navigate, index) => {
    navigate.addEventListener("click", () => {
        if (window.innerWidth > 768) {
            smoother.scrollTo(targets[index], true, "top top");
        } else {
            smoother.scrollTo(targetsM[index], true, "top top");
        }
    });
});

// console.clear()
console.log(
    "%cLook at my github profile",
    "font-size: 15px; color: #151515; font-weight: bold; background-color: #fff; padding: 5px 20px;border-radius:10px",
    "https://github.com/zulldevv"
);