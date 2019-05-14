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
copyPaste.style = `width: 10rem; 
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

const onlineOffline = document.createElement("div");
body.appendChild(onlineOffline);
let netStatus = document.createElement("span");
netStatus.innerText = "Offline";

let offlineCSS = `width: 10rem; 
height: 4rem; 
border-radius: 5px; 
background-color: red; 
color: black; 
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

let onlineCSS = `width: 10rem; 
height: 4rem; 
border-radius: 5px; 
background-color: green; 
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

onlineOffline.style = offlineCSS;
onlineOffline.classList.add("hidden");
onlineOffline.appendChild(netStatus);

function copyAnim(e){
    copyPaste.classList.replace("hidden", "fadeIn");
    setTimeout(() => copyPaste.classList.replace("fadeIn", "hidden"), 1000);
}

const images = document.querySelectorAll("img");
function scaleImage(e){
    e.target.style = "transform: scale(1.1);";
}
function unScaleImage(e){
    e.target.style = "";
}
images.forEach((item) => {
    item.addEventListener("mouseover", scaleImage);
    item.addEventListener("mouseout", unScaleImage);
});

const contextMenu = document.querySelector("#context-menu");
function showContextMenu(e){
    e.preventDefault();
    contextMenu.classList.remove("hidden");
    console.log(e);
    contextMenu.style = `top: ${e.clientY}px; left: ${e.clientX}px;`;
}

function closeContextMenu(e){
    contextMenu.classList.add("hidden");
}

function changeToOffline(e){
    onlineOffline.stlye = offlineCSS;
    netStatus.innerText = "Offline!";
    onlineOffline.classList.replace("hidden", "fadeIn");
    setTimeout(() => onlineOffline.classList.replace("fadeIn", "hidden"), 1000);
}

function changeToOnline(e){
    onlineOffline.style = onlineCSS;
    netStatus.innerText = "Online!";
    onlineOffline.classList.replace("hidden", "fadeIn");
    setTimeout(() => onlineOffline.classList.replace("fadeIn", "hidden"), 1000);
}
window.addEventListener("click", closeContextMenu);

window.addEventListener("contextmenu", showContextMenu);

window.addEventListener("copy", copyAnim);

window.addEventListener("load", event => body.classList.replace("hidden", "fadeIn"));

window.addEventListener("online", changeToOnline);
window.addEventListener("offline", changeToOffline);
