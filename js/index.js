// Your code goes here
const body = document.body;
const navHeader = body.querySelector(".main-navigation");

let topScroll = window.scrollY;
let lastTime = new Date().getTime();
window.addEventListener("scroll", e => {
    let timeDelta = e.timeStamp - lastTime;
    let scrollDelta = window.scrollY - topScroll;
    let speed = scrollDelta/timeDelta;
    console.log("Scroll speed:", speed * (10 ** 12));
    topScroll = window.scrollY;
})

window.addEventListener("load", event => body.classList.replace("hidden", "fadeIn"));