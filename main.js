// ELEMENTS
const btnNavToggle = document.getElementById("nav-toggle");
const hambTop = document.getElementById("hamb-top");
const hambMid = document.getElementById("hamb-mid");
const hambBtm = document.getElementById("hamb-btm");
const crossLR = document.getElementById("cross-lr");
const crossRL = document.getElementById("cross-rl");
const header = document.getElementById("header");

// Hamburger button's lines
const lines = Array(hambTop, hambMid, hambBtm, crossLR, crossRL);

// Make it work
function toggleNavMenu() {
    
    // Toggle button: hamburger - cross 
    for (let line of lines) {
        if (line.getAttribute("on-screen") === "initial") {
            if (line.className[0] === "h") {
                line.setAttribute("on-screen", "false");
            } else if (line.className[0] === "c") {
                line.setAttribute("on-screen", "true");
            }

        } else if (line.getAttribute("on-screen") === "true") {
            line.setAttribute("on-screen", "false");
            if (line.className[0] === "c") {
                setTimeout(() => {
                    line.setAttribute("on-screen", "initial")
                }, 500);
            }

        } else if (line.getAttribute("on-screen") === "false") {
            line.setAttribute("on-screen", "true");
        }
    }


    // Toggle header: partial - full 
    if (header.getAttribute("on-screen") === "partial" || header.getAttribute("on-screen") === "initial") {
        header.setAttribute("on-screen", "full"); 
    } else if (header.getAttribute("on-screen") === "full") {
        header.setAttribute("on-screen", "partial"); 
    }
}


btnNavToggle.addEventListener("click", toggleNavMenu);

document.addEventListener("click", (e) => {
    const navbarIds = ["nav-toggle", "hamburger-btn", "hamb-top", "hamb-mid", "hamb-btm", "cross-lr", "cross-rl", "header", "nav__list"];

   if (navbarIds.every(idName => e.target.id !== idName)) {
        header.setAttribute("on-screen", "partial");
        for (let line of lines) {
            if (line.className[0] === "h") {
                line.setAttribute("on-screen", "true");
            } else if (line.className[0] === "c") {
                line.setAttribute("on-screen", "false");
                setTimeout(() => {
                    line.setAttribute("on-screen", "initial")
                }, 500);
            }
        }
   }
})



