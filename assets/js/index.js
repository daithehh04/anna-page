const leftElement = document.querySelectorAll("[data-left]");
const rightElement = document.querySelectorAll("[data-right]");
const upElement = document.querySelectorAll("[data-up]");
const downElement = document.querySelectorAll("[data-down]");

// ScrollLeft Animation
function scrollLeft() {
    leftElement.forEach((section) => {
        section.style.transform = "translateX(-120%)";
        section.style.opacity = "0";
        if (
            section.getBoundingClientRect().top <
            window.innerHeight / 2 + 150
        ) {
            section.classList.add("animate__fadeInLeft");
        }
    });
}
window.addEventListener("scroll", scrollLeft);
scrollLeft();

// ScrollRight Animation
function scrollRight() {
    rightElement.forEach((section) => {
        section.style.transform = "translateX(120%)";
        section.style.opacity = "0";

        if (
            section.getBoundingClientRect().top <
            window.innerHeight / 2 + 150
        ) {
            section.classList.add("animate__fadeInRight");
        }
    });
}
window.addEventListener("scroll", scrollRight);
scrollRight();
// ScrollUp Animation
function scrollUp() {
    upElement.forEach((section) => {
        section.style.transform = "translateY(150px)";
        section.style.opacity = "0";
        if (
            section.getBoundingClientRect().top <
            window.innerHeight / 2 + 150
        ) {
            section.classList.add("animate__fadeInUp");
        }
    });
}
window.addEventListener("scroll", scrollUp);
scrollUp();

// ScrollDown Animation
function scrollDown() {
    downElement.forEach((section) => {
        section.style.opacity = "0";
        if (
            section.getBoundingClientRect().top <
            window.innerHeight / 2 + 150
        ) {
            section.classList.add("animate__fadeInDown");
        }
    });
}
window.addEventListener("scroll", scrollDown);
scrollDown();

// Counter animation
const count_1 = document.querySelector(".count-1");
const count_2 = document.querySelector(".count-2");

const count1 = +count_1.getAttribute("data-target");
const count2 = +count_2.getAttribute("data-target");

const count = document.querySelector(".customer-right");

function animateValue(obj, start, end, duration) {
    let startTimestamp = null;
    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        obj.innerHTML = Math.floor(progress * (end - start) + start);
        if (progress < 1) {
            window.requestAnimationFrame(step);
        }
    };
    window.requestAnimationFrame(step);
}

let executed = true;
function counterUp() {
    if (executed) {
        if (count.getBoundingClientRect().top < window.innerHeight / 2 + 150) {
            animateValue(count_1, 0, count1, 2000);
            animateValue(count_2, 0, count2, 2000);
            executed = false;
        }
    }
}
window.addEventListener("scroll", counterUp);

// Letter-by-letter text appearance animation
const text = $("[data-text]").text();

var length = text.length;
var timeOut;
var character = 0;

function typeWriter() {
    timeOut = setTimeout(function () {
        character++;
        var type = text.substring(0, character);
        $("[data-text]").text(type);
        typeWriter();

        if (character == length) {
            clearTimeout(timeOut);
        }
    }, 150);
}

let run = true;
const textElement = document.querySelector("[data-text]");
function letterRun() {
    if (run) {
        if (
            textElement.getBoundingClientRect().top <
            window.innerHeight / 2 + 300
        ) {
            typeWriter();
            run = false;
        }
    }
}
window.addEventListener("scroll", letterRun);
