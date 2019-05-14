// Your code goes here
const body = document.body;
const navHeader = body.querySelector(".main-navigation");

let topScroll = window.scrollY;
let lastTime = new Date().getTime();
window.addEventListener("scroll", e => {
    let timeDelta = e.timeStamp - lastTime;
    let scrollDelta = window.scrollY - topScroll;
    let speed = (scrollDelta/timeDelta) * (10 ** 12);
    topScroll = window.scrollY;
    if (window.scrollY > navHeader.clientHeight){
        if (speed < -40){
            navHeader.classList.remove("fadeIn");
            navHeader.classList.add("hidden");
        }
        if (speed > 30){
            navHeader.classList.replace("hidden", "fadeIn");
        }
    } else {
        navHeader.classList.replace("hidden", "fadeIn");
    }
})

window.addEventListener("load", event => body.classList.replace("hidden", "fadeIn"));