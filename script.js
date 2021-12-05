let startContainer = document.querySelector('#w11-start-section');
let startBtn = document.querySelector('#windows-div');

let widgetContainer = document.querySelector('#widget-section');
let widgetBtn = document.querySelector('#widget-div');

let spegniContainer = document.querySelector('#spegni-section');
let spegniBtn = document.querySelector('.spegni-pc-start-section');

let paddingContainer = document.querySelector('.padding-start');
let searchBtn = document.querySelector('#search-div');

let searchContainer = document.querySelector("#search-content");

let windowsTab = document.querySelector('#windows-tab');

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


/* set display none in the paddingContainer, from clicking the paddingbtn */
searchBtn.addEventListener("click", function() {
    paddingContainer.classList.toggle("not-visible");
    searchContainer.classList.toggle("not-visible");
});

windowsTab.addEventListener("mousedown", function() {
    if (event.ctrlKey) {
        console.log("ctrl key is pressed");
        document.onmousemove = function(e) {
            var x = e.clientX;
            var y = e.clientY;
            windowsTab.style.left = x + "px";
            windowsTab.style.top = y + "px";
            console.log("x:" + x + " y:" + y);
        }
    } else {
        document.onmousemove = null;
        console.log("ctrl key is not pressed");
    }
    console.log("mousedown");
});
windowsTab.addEventListener("mouseup", function() {
    document.onmousemove = null;
    console.log("mouseup");
});