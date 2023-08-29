const allLinks = document.querySelectorAll("a"),
    inputSearch = document.querySelector("#searchInput"),
    searchIconOnFocus = document.querySelector(".search__icon-on-focus"),
    searchIcon = document.querySelector("#open__search-btn"),
    form = document.querySelector("form"),
    backArrow = document.querySelector("#back__arrow"),
    menuBtn = document.querySelector("#menu__btn"),
    aside = document.querySelector("aside"),
    section = document.querySelector("section"),
    asideResponsive = document.querySelector("#aside_responsive-container"),
    menuBtnResponsive = document.querySelector(".menuBtnResponsive"),
    notificationBtn = document.querySelector("#notificationIcon"),
    panelNotification = document.querySelector(".notification__panel-container"),
    profilBtn = document.querySelector("#profilBtn"),
    panelProfil = document.querySelector(".profil__panel-container"),
    panelProfilBtn = document.querySelector("#close__profil-panel"),
    themeBtn = document.querySelector("#theme"),
    themeBox = document.querySelector(".theme__box"),
    themeBackArrow = document.querySelector("#themeBackArrow"),
    notificationBox = document.querySelector(".notification__box"),
    closeNotifBtn = document.querySelector("#close__notification-panel"),

    // FILTRE & THEME
    buttonsFilterContainer = document.querySelector(".filter__buttons-container"),
    buttons = buttonsFilterContainer.children,
    totalButtons = buttons.length,
    cards = document.querySelectorAll("figure"),
    totalCards = cards.length,
    toggleThemeBtns = document.querySelectorAll(".themeBtn"),
    lengthThemeBtn = toggleThemeBtns.length,
    HTML = document.documentElement,
    chekTheme = window.matchMedia("(prefers-color-scheme: dark)").matches;


allLinks.forEach(link => {
    link.onclick = (e) => {
        e.preventDefault();
    }
});


inputSearch.onfocus = () => {
    searchIconOnFocus.classList.add("active");
}

inputSearch.onblur = () => {
    searchIconOnFocus.classList.remove("active");
    form.classList.remove("active");
}

searchIcon.onclick = (e) => {
    e.preventDefault();
    form.classList.add("active");
}

backArrow.onclick = () => {
    form.classList.remove("active");
}

menuBtn.onclick = () => {
    aside.classList.toggle("active");
    section.classList.toggle("active");
    asideResponsive.classList.add("active");
    document.querySelector("body").classList.add("active");

}

asideResponsive.onclick = (e) => {
    if (e.target === menuBtnResponsive || e.target === document.querySelector("#aside_responsive-container")) {
        asideResponsive.classList.remove("active");
        document.querySelector("body").classList.remove("active");
    }
}

notificationBtn.onclick = () => {
    panelNotification.classList.toggle("active");
    panelProfil.classList.remove("active");
    panelProfil.classList.remove("timeOut");
    themeBox.classList.remove("active");
}

closeNotifBtn.onclick = () => {
    panelNotification.classList.remove("active");
}

profilBtn.onclick = () => {
    panelNotification.classList.remove("active");
    themeBox.classList.remove("active");
    panelProfil.classList.toggle("active");
    setTimeout(() => {
        panelProfil.classList.toggle("timeOut");
    }, 500);
}

panelProfil.onclick = () => {
    panelProfil.classList.remove("active");
    panelProfil.classList.remove("timeOut");
}

window.onscroll = () => {
    panelProfil.classList.remove("active");
    panelProfil.classList.remove("timeOut");
    panelNotification.classList.remove("active");
    panelProfil.classList.remove("active");
}

themeBtn.onclick = () => {
    themeBox.classList.add("active");
}

themeBackArrow.onclick = () => {
    panelProfil.classList.add("active");
    panelProfil.classList.add("timeOut");
    themeBox.classList.remove("active");
}

notificationBox.onclick = () => {
    document.querySelector("#video").play();
}

let noteInfo = document.querySelector(".note"),
    closeNote = document.querySelector("#close__note");
window.addEventListener("DOMContentLoaded", () => {
    setTimeout(() => {
        noteInfo.classList.add("active");
    }, 2500);
})


closeNote.onclick = () => { noteInfo.classList.remove("active") };


// Filtre
for (let i = 0; i < totalButtons; i++) {
    buttons[i].onclick = () => {
        buttonsFilterContainer.querySelector(".btnFilterActive").classList.remove("btnFilterActive");
        buttons[i].classList.add("btnFilterActive");

        let buttonsDataValue = buttons[i].getAttribute("data-filter");

        for (let j = 0; j < totalCards; j++) {
            let cardsDataValue = cards[j].getAttribute("data-category");
            if (!buttonsDataValue) {
                alert("vide");
            }

            if (buttonsDataValue === cardsDataValue) {
                cards[j].classList.remove("hide");
                cards[j].classList.add("show");
            } else if (buttonsDataValue === "all") {
                cards[j].classList.remove("hide");
                cards[j].classList.add("show");
            } else {
                cards[j].classList.remove("show");
                cards[j].classList.add("hide");
            }

        }
    }
}


// Theme
window.onload = () => {
    let defaultTheme = function () {
        if (chekTheme) {
            HTML.dataset.theme = "dark";
        } else {
            HTML.dataset.theme = "light";
        }
    }

    for (let i = 0; i < lengthThemeBtn; i++) {
        toggleThemeBtns[0].onclick = () => {
            defaultTheme();
            document.querySelector("#current-theme-text").textContent = "de l'appareil";
        }
        toggleThemeBtns[1].onclick = () => {
            if (HTML.dataset.theme == "light") {
                HTML.dataset.theme = "dark";
                document.querySelector("#current-theme-text").textContent = document.querySelector("#dark-theme-text").textContent;
            }
        }
        toggleThemeBtns[2].onclick = () => {
            if (HTML.dataset.theme == "dark") {
                HTML.dataset.theme = "light";
                document.querySelector("#current-theme-text").textContent = document.querySelector("#light-theme-text").textContent;
            }
        }
    }

}