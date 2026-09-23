// responsive navigation bar
const navLinks = document.querySelector('#nav-links ul');
const hamburger = document.querySelector('#navigation-hamburger');
const body = document.body;

hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");

    // if
    if (navLinks.classList.contains("active")) {
        hamburger.className = "fa-solid fa-xmark";
    } else {
        hamburger.classList = "fa-solid fa-bars";
    }

    // apply no-scroll when the navbar is active on mobile !
    body.classList.toggle("no-scroll");
});

// navigation scroll > 300
const navigationScroll = document.querySelector('#navigation-scroll');
const links = document.querySelectorAll('.nav-link');

window.addEventListener("scroll", () => {
    // if
    if (window.scrollY > 100) {
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

        // remove no-scroll effect
        body.classList.remove("no-scroll");
    });
});

// cta services
const ctaServices = document.querySelector('#cta-services');
const services = document.querySelector('#services');

ctaServices.addEventListener("click", () => {
    services.scrollIntoView({
        behavior: "smooth"
    })
});

// inquire now
const inquireCta = document.querySelector('#inquire-now');

inquireCta.addEventListener("click", () => {
    window.location.href = "https://viber.me/639177387172";
});