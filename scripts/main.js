let navbarItems = document.querySelectorAll(".navbar__item");

let currentPage = navbarItems[0];

navbarItems.forEach((navbarItem) => {
    navbarItem.addEventListener("click", (event) => {
        let _elem = event.target.parentElement;

        if (currentPage !== _elem) {
            currentPage.classList.remove("navbar__item_active");
            currentPage = _elem;
        }

        _elem.classList.add("navbar__item_active");
    });
});
