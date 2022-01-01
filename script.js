let startContainer = document.querySelector('#w11-start-section');
let startBtn = document.querySelector('#windows-div');

let widgetContainer = document.querySelector('#widget-section');
let widgetBtn = document.querySelector('#widget-div');

let spegniContainer = document.querySelector('#spegni-section');
let spegniBtn = document.querySelector('.spegni-pc-start-section');

let paddingContainer = document.querySelector('.padding-start');
let searchBtn = document.querySelector('#search-div');

let searchContainer = document.querySelector("#search-content");
let footerStartContainer = document.querySelector('#footer-start-section');

let windowsTab = document.querySelector('.windows-tab');

let topPartTab = document.querySelector('.topnavbar-tab');

let closeBtn = document.querySelector("#close-icon");
let MaxBtn = document.querySelector("#max-icon");
let minBtn = document.querySelector("#min-icon");

let heightTab = document.querySelector('.coming-soon-tab');

let appIcon = document.querySelectorAll('.app-icon');
let nomeTab = document.querySelector('.nome-tab');
let tabImage = document.querySelector('#tab-image');
let spanComingSoon = document.querySelector('.coming-soon-span');

let nav = document.querySelector('nav');
let iconNav = document.querySelector("#first-container");

let notifBtns = document.querySelector('#second-container');
let notifContainer = document.querySelector("#notification-section");

var vh = window.innerHeight / 100;
var vw = window.innerWidth / 100;

let isTopBarClicked = false;

let div = document.querySelector("#div");

let firstPositionX;
let firstPositionY;

let lastPositionX;
let lastPositionY;

// from bottom to top WINDOWS START animation 
startBtn.addEventListener("click", function() {
    searchContainer.style.display = "none";
    paddingContainer.style.display = "grid";
    footerStartContainer.style.display = "flex";
    openOneWinCloseOther();
});

// from bottom to top WINDOWS START animation
widgetBtn.addEventListener("click", function() {
    if (startContainer.classList.contains("on-visible-start")) {
        startContainer.classList.toggle("on-visible-start");
        widgetContainer.classList.toggle("on-visible-widget");
    } else {
        widgetContainer.classList.toggle("on-visible-widget");
    }
});

// turn off computer (graficamente e virtualmente) 
spegniBtn.addEventListener("click", function() {
    spegniContainer.classList.toggle("pc-off");
    alert("adesso, windows 11 (web edition) \nsi spegnerà virtualmente, \n \nper ritornare alla homepage, \ncliccare qualsiasi punto sullo schermo!");
});

spegniContainer.addEventListener("click", function() {
    spegniContainer.classList.toggle("pc-off");
});

// SEARCH function in beta 
searchBtn.addEventListener("click", function() {
    paddingContainer.style.display = "none";
    footerStartContainer.style.display = "none";
    searchContainer.style.display = "grid";
    openOneWinCloseOther();
});

// windows moving tab 
topPartTab.addEventListener("mousedown", function() {

    isTopBarClicked = true;
    console.log("mousedown");
    document.onmousemove = function(e) {
        var x = e.clientX;
        var y = e.clientY;
        var MaxWidth = document.documentElement.scrollWidth;
        var MaxX = MaxWidth - windowsTab.offsetWidth;

        if (x <= 0) {
            leftTab();
        } else if (y <= 0) {
            topTab();
        } else if (x >= MaxX) {
            rightTab();
        } else {
            windowsTab.style.transitionDuration = "0s";
            windowsTab.style.left = x + "px";
            windowsTab.style.top = y + "px";
            if (windowsTab.offsetHeight > 90 * vh) {
                windowsTab.style.height = "70vh";
            }
            windowsTab.style.removeProperty("transform");
        }
    }

});

// non mouve più la tab, quando non è necessario
document.addEventListener("mouseup", function() {
    document.onmousemove = null;
});


for (let i = 0; i < appIcon.length; i++) {
    spanComingSoon.style.display = "grid";
    tabImage.style.display = "none";
    appIcon[i].addEventListener("click", function() {
        windowsTab.style.display = "grid";
        spanComingSoon.style.display = "none";
        tabImage.style.display = "grid";
        let appName = appIcon[i].querySelector("span").textContent;
        nomeTab.textContent = appName;
        /* get the image from the app icon */
        let appImage = appIcon[i].querySelector("img").src;
        tabImage.src = appImage;
    });
}

// buttone per cancellare la tab (nascondere la tab)
closeBtn.addEventListener("click", function() {
    windowsTab.style.display = "none";
});


// crea un icona nella nav, e nasconde la tab
minBtn.addEventListener("click", function() {
    windowsTab.style.display = "none";
    /*add element div with img to iconNav*/
    let newDivNav = document.createElement("div");
    let newImageIconNav = document.createElement("img");
    newImageIconNav.src = tabImage.src;
    newDivNav.appendChild(newImageIconNav);
    iconNav.appendChild(newDivNav);
    console.log("MINIMIZED TAB");
});

// ingrandisce la tab a seconda delle dimensioni dello schermo
MaxBtn.addEventListener("click", function() {
    topTab();
});

// per aprire le notifiche
notifBtns.addEventListener("click", function() {
    notifContainer.classList.toggle("notification-on");
});


function leftTab() {
    windowsTab.style.left = 0 + "px";
    windowsTab.style.top = 0 + "px";
    windowsTab.style.removeProperty("right");
    windowsTab.style.removeProperty("transform");
    windowsTab.style.width = "50vw";
    windowsTab.style.height = "calc(100vh - var(--nav-height))";
    windowsTab.style.transitionDuration = "0.5s";
    console.log("LEFT TAB");
}

function topTab() {
    windowsTab.style.left = 0 + "px";
    windowsTab.style.top = 0 + "px";
    windowsTab.style.removeProperty("right");
    windowsTab.style.removeProperty("transform");
    windowsTab.style.width = "100vw";
    windowsTab.style.height = "calc(100vh - var(--nav-height))";
    windowsTab.style.transitionDuration = "0.5s";
    console.log("TOP TAB");
}

function rightTab() {
    windowsTab.style.transform = "translateX(99%)";
    windowsTab.style.left = 0 + "px";
    windowsTab.style.top = 0 + "px";
    windowsTab.style.removeProperty("right");
    windowsTab.style.width = "50vw";
    windowsTab.style.height = "calc(100vh - var(--nav-height))";
    windowsTab.style.transitionDuration = "0.5s";
    console.log("RIGHT TAB");
}


// funzione per aprire una finestra e chiuderne l'altra (se c'è)
function openOneWinCloseOther() {
    if (widgetContainer.classList.contains("on-visible-widget")) {
        widgetContainer.classList.toggle("on-visible-widget");
        startContainer.classList.toggle("on-visible-start");
    } else {
        startContainer.classList.toggle("on-visible-start");
    }
}

// crea un selezionatore provissorio a seconda della tua posizione del mouse
function dragSelectorLogic() {

    // tutta la funzione inizia dopo il mouse è cliccato
    document.addEventListener("mousedown", function(e1) {

        if (windowsTab.style.display == "grid") {
            // se la tab è visibile, allora la funzione NON è attiva
        } else {
            // se START è visibile, allora si chiude in automatico
            if (e1.target.closest("#w11-start-section") != startContainer && startContainer.classList.contains("on-visible-start") && e1.target.closest("nav") != nav) {
                startContainer.classList.remove("on-visible-start");
                dragSelectorCode();
            } // se WIDGET è visibile, allora si chiude in automatico
            else if (e1.target.closest("#widget-section") != widgetContainer && widgetContainer.classList.contains("on-visible-widget") && e1.target.closest("nav") != nav) {
                widgetContainer.classList.remove("on-visible-widget");
                dragSelectorCode();
            } // se NOTIFICHE è visibile, allora si chiude in automatico 
            else if (e1.target.closest("#notification-section") != notifContainer && notifContainer.classList.contains("notification-on") && e1.target.closest("nav") != nav) {
                notifContainer.classList.remove("notification-on");
                dragSelectorCode();
            } // se si usa il Drag dentro START, WIDGET o NOTIFICHE, allora la funzione NON è attiva.
            else if (e1.target.closest("#w11-start-section") == startContainer || e1.target.closest("#notification-section") == notifContainer || e1.target.closest("#widget-section") == widgetContainer) {
                console.log("You can't drag the tab here!");
            } // altrimenti, la funzione è attiva
            else {
                dragSelectorCode();
            }
        }

        function dragSelectorCode() {
            // preseting del selezionatore
            div.style.display = "block";

            div.style.width = 0 + "px";
            div.style.height = 0 + "px";

            firstPositionX = e1.clientX;
            firstPositionY = e1.clientY;

            div.style.top = firstPositionY + "px";
            div.style.left = firstPositionX + "px";

            div.style.transition = "none";

            document.addEventListener("mousemove", function(e2) {
                lastPositionX = e2.clientX;
                lastPositionY = e2.clientY;

                // se la posizione X del mouse è cambiata, allora si aggiorna la posizione del selezionatore
                // ingrandisce il selezionatore
                if ((firstPositionX - lastPositionX) < 0) {
                    div.style.width = Math.round(lastPositionX - firstPositionX) + "px";
                } // sposta il selezionatore, ma visivamente lo ingrandisce a sinistra (è un trick interressante)
                else {
                    div.style.width = Math.round(firstPositionX - lastPositionX) + "px";
                    div.style.left = lastPositionX + "px";
                }

                // se la posizione Y del mouse è cambiata, allora si aggiorna la posizione del selezionatore
                // ingrandisce il selezionatore
                if ((firstPositionY - lastPositionY) < 0) {
                    div.style.height = Math.round(lastPositionY - firstPositionY) + "px";
                } // sposta il selezionatore, ma visivamente lo ingrandisce in alto (è un trick interressante)
                else {
                    div.style.height = Math.round(firstPositionY - lastPositionY) + "px";
                    div.style.top = lastPositionY + "px";
                }
            });

            // una volta che non si clicca più, si chiude il selezionatore
            // resettando prima con un'animazione
            // poi togliendo il selezionatore (che è un div invisibile)
            document.addEventListener("mouseup", function() {
                div.style.width = "0px";
                div.style.height = "0px";
                div.style.transition = "all 0.3s";

                // aspetta che prima finisca l'animazione poi rimuove il selezionatore
                setTimeout(function() {
                    div.style.display = "none";
                }, 300);
            });
        }
    });
}


// ottenere l'ora corrente
function getDate() {
    let DataAttuale = new Date();

    let giorno = DataAttuale.getDate();
    let mese = DataAttuale.getMonth() + 1; // mese parte da 0
    let anno = DataAttuale.getFullYear();

    let ora = DataAttuale.getHours();
    let minuti = DataAttuale.getMinutes();

    let orarioContainer = document.getElementById("orario-data");
    let calendarioContainer = document.getElementById("calendario-data");

    // se l'ora/minuti è meno di 10, allora si aggiunge uno 0 prima
    if (ora < 10 && minuti < 10) {
        orarioContainer.innerHTML = "0" + ora + ":" + "0" + minuti;
    } else
    if (ora < 10) {
        orarioContainer.innerHTML = "0" + ora + ":" + minuti;
    } else
    if (minuti < 10) {
        orarioContainer.innerHTML = ora + ":" + "0" + minuti;
    } else {
        orarioContainer.innerHTML = ora + ":" + minuti;
    }

    // se il giorno/mese è meno di 10, allora si aggiunge uno 0 prima
    if (giorno < 10 && mese < 10) {
        calendarioContainer.innerHTML = "0" + giorno + "/" + "0" + mese + "/" + anno;
    } else
    if (giorno < 10) {
        calendarioContainer.innerHTML = "0" + giorno + "/" + mese + "/" + anno;
    } else
    if (mese < 10) {
        calendarioContainer.innerHTML = giorno + "/" + "0" + mese + "/" + anno;
    } else {
        calendarioContainer.innerHTML = giorno + "/" + mese + "/" + anno;
    }

    document.getElementById('sistema-data').title = orarioContainer.innerHTML + "  " + calendarioContainer.innerHTML;

    // ogni minuto si aggiunge l'ora 
    // 1000 = 1 secondo... 1000 * 60 = 60000... 60000 = 1 minuto
    setTimeout(function() {
        getDate();
    }, 60000); // 60 secondi
}

// le funzione chiamate sono inizializzate in queste funzioni
dragSelectorLogic();
getDate();


function DispositivoNonSupportato() {
    let AttualeWidthContainer = document.getElementById("width-attuale");
    let AttualeHeightContainer = document.getElementById("height-attuale");

    let widthSpiegazione = document.getElementById("width-spiegazione");
    let heightSpiegazione = document.getElementById("height-spiegazione");

    checkSopporto();

    window.addEventListener("resize", function() {
        checkSopporto();
    });

    function checkSopporto() {
        // se la larghezza è inferiore a 800px, allora si mostra la spiegazione
        if (window.innerWidth < 800) {
            widthSpiegazione.innerHTML = "ERRORE LARGHEZZA: ti serve <b>800px</b>" + "   " + "per visualizzare questa pagina";
            AttualeWidthContainer.innerHTML = window.innerWidth + "px";
            widthSpiegazione.style.color = "rgb(255, 0, 47)";
        } else {
            widthSpiegazione.innerHTML = "Larghezza del tuo Schermo Giusta!";
            AttualeWidthContainer.innerHTML = "";
            widthSpiegazione.style.color = "rgb(0, 255, 157)";
        }

        // se l'altezza è inferiore a 600px, allora si mostra la spiegazione
        if (window.innerHeight < 600) {
            heightSpiegazione.innerHTML = "ERRORE ALTEZZA: ti serve <b>600px</b>" + "   " + "per visualizzare questa pagina";
            AttualeHeightContainer.innerHTML = window.innerHeight + "px";
            heightSpiegazione.style.color = "rgb(255, 0, 47)";
        } else {
            heightSpiegazione.innerHTML = "Altezza del tuo Schermo Giusta!";
            AttualeHeightContainer.innerHTML = "";
            heightSpiegazione.style.color = "rgb(0, 255, 157)";
        }
    }
}

DispositivoNonSupportato();