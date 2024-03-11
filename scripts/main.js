let navbarItems = document.querySelectorAll(".navbar__item");
let logo = document.querySelector(".header__logo");

let currentSection = logo.children[0];

const test = new Map();

function getKey(elem) {
    return elem.href.split("#")[1];
}

test[getKey(currentSection)] = currentSection;

navbarItems.forEach((item) => {
    test[getKey(item.children[0])] = item;
});

navbarItems.forEach((navbarItem) => {
    navbarItem.addEventListener("click", (event) => {
        let _elem = event.target.parentElement;

        changeActiveMenuItem(_elem);
    });
});

logo.addEventListener("click", (event) => {
    currentSection.classList.remove("navbar__item_active");
    currentSection = null;
});

// #region Проверка элемента на экране
let aboutMe = document.querySelector("#about-me");
let skills = document.querySelector("#skills");
let projects = document.querySelector("#projects");
let welcomeSection = document.querySelector("#welcome-page");

function changeActiveMenuItem(_elem) {
    if (currentSection !== _elem) {
        currentSection.classList.remove("navbar__item_active");
        currentSection = _elem;
    }

    _elem.classList.add("navbar__item_active");
}

function isVisible(target) {
    let targetPosition = {
        top: window.scrollY + target.getBoundingClientRect().top,
        left: window.scrollX + target.getBoundingClientRect().left,
        right: window.scrollX + target.getBoundingClientRect().right / 2,
        bottom: window.scrollY + target.getBoundingClientRect().bottom / 2,
    };

    let windowPosition = {
        top: window.scrollY,
        left: window.scrollX,
        right: window.scrollX + document.documentElement.clientWidth / 2,
        bottom: window.scrollY + document.documentElement.clientHeight / 2,
    };

    if (
        targetPosition.bottom > windowPosition.top &&
        targetPosition.top < windowPosition.bottom &&
        targetPosition.right > windowPosition.left &&
        targetPosition.left < windowPosition.right
    ) {
        changeActiveMenuItem(test[target.id]);
    }
}

window.addEventListener("scroll", function () {
    isVisible(welcomeSection);
    isVisible(aboutMe);
    isVisible(skills);
    isVisible(projects);
});

// #endregion
