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

const copyPaste = document.createElement("div");
body.appendChild(copyPaste);
let cpSpan = document.createElement("span");
cpSpan.innerText = "Copied!";
copyPaste.style = `width: 10%; 
height: 4rem; 
border-radius: 5px; 
background-color: lightgreen; 
color: white; 
position: fixed; 
margin: 0 auto; 
z-index: 99999; 
top: 4%;
left: 50%;
transform: translate(-50%, 0);
display: flex;
justify-content: center;
align-items: center;
font-size: 2rem`;
copyPaste.classList.add("hidden");
copyPaste.appendChild(cpSpan);

window.addEventListener("load", event => body.classList.replace("hidden", "fadeIn"));