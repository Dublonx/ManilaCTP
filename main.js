// responsive navigation bar
const navLinks = document.querySelector('#nav-links ul');
const hamburger = document.querySelector('#navigation-hamburger');

hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");

    // if
    if (navLinks.classList.contains("active")) {
        hamburger.className = "fa-solid fa-xmark";
    } else {
        hamburger.classList = "fa-solid fa-bars";
    }
});

// navigation scroll > 300
const navigationScroll = document.querySelector('#navigation-scroll');
const links = document.querySelectorAll('.nav-link');

window.addEventListener("scroll", () => {
    // if
    if (window.scrollY > 300) {
        navigationScroll.classList.add("scroll");
    } else {
        navigationScroll.classList.remove("scroll");
    }
});

links.forEach(navLink => {
    navLink.addEventListener("click", () => {
        navLinks.classList.remove("active");

        // changed icon
        hamburger.className = "fa-solid fa-bars";
    });
});