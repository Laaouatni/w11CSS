let startContainer = document.querySelector('#w11-start-section');
let startBtn = document.querySelector('#windows-div');

let widgetContainer = document.querySelector('#widget-section');
let widgetBtn = document.querySelector('#widget-div');

let spegniContainer = document.querySelector('#spegni-section');
let spegniBtn = document.querySelector('.spegni-pc-start-section');

let paddingContainer = document.querySelector('.padding-start');
let searchBtn = document.querySelector('#search-div');

let searchContainer = document.querySelector("#search-content");

let windowsTab = document.querySelector('.windows-tab');

let topPartTab = document.querySelector('.topnavbar-tab');

let heightTab = document.querySelector('.coming-soon-tab');

let appIcon = document.querySelector('.app-icon');


/* from bottom to top WINDOWS START animation */
startBtn.addEventListener("click", function() {
    if (widgetContainer.classList.contains("on-visible-widget")) {
        widgetContainer.classList.toggle("on-visible-widget");
        startContainer.classList.toggle("on-visible-start");
    } else {
        startContainer.classList.toggle("on-visible-start");
    }
});

/* from bottom to top WINDOWS START animation */
widgetBtn.addEventListener("click", function() {
    if (startContainer.classList.contains("on-visible-start")) {
        startContainer.classList.toggle("on-visible-start");
        widgetContainer.classList.toggle("on-visible-widget");
    } else {
        widgetContainer.classList.toggle("on-visible-widget");
    }
});

/* turn off computer (graficamente e virtualmente) */
spegniBtn.addEventListener("click", function() {
    spegniContainer.classList.toggle("pc-off")
    alert("adesso, windows 11 (web edition) \nsi spegnerà virtualmente, \n \nper ritornare alla homepage, \ncliccare qualsiasi punto sullo schermo!");
});

spegniContainer.addEventListener("click", function() {
    spegniContainer.classList.toggle("pc-off");
});

/* SEARCH function in beta */
searchBtn.addEventListener("click", function() {
    paddingContainer.classList.toggle("not-visible");
    searchContainer.classList.toggle("not-visible");
});

/* windows moving tab */
topPartTab.addEventListener("mousedown", function() {
    console.log("mousedown");
    document.onmousemove = function(e) {
        var x = e.clientX;
        var y = e.clientY;
        var MaxX = window.screen.width;
        /*         switch (x) {
                    case 0:
                        rightTab();
                        break;
                    case 1:

                    default:
                        break;
                } */
        if (x <= 0) {
            leftTab();
        } else if (y <= 2) {
            topTab();
        } else if (x >= MaxX) {
            rightTab();
        } else {
            windowsTab.style.transitionDuration = "0s";
            windowsTab.style.left = x + "px";
            windowsTab.style.top = y + "px";
        }
        console.log("onmousemove\n" + "x:" + x + " y:" + y + "\n" + "MaxX:" + MaxX);
    }
});

document.addEventListener("mouseup", function() {
    document.onmousemove = null;
});

/*beta */
appIcon.addEventListenerAll("onclick", function() {
    windowsTab.cloneNode(true);
});

function leftTab() {
    windowsTab.style.left = 0 + "px";
    windowsTab.style.top = 0 + "px";
    windowsTab.style.width = "50vw";
    windowsTab.style.height = "calc(100vh - var(--nav-height))";
    windowsTab.style.transitionDuration = "0.5s";
    console.log("LEFT TAB");
}

function topTab() {
    windowsTab.style.left = 0 + "px";
    windowsTab.style.top = 0 + "px";
    windowsTab.style.width = "100vw";
    windowsTab.style.height = "calc(100vh - var(--nav-height))";
    console.log("TOP TAB");
}

function rightTab() {
    windowsTab.style.right = 0 + "px";
    windowsTab.style.top = 0 + "px";
    windowsTab.style.width = "50vw";
    windowsTab.style.height = "calc(100vh - var(--nav-height))";
    console.log("RIGHT TAB");
}