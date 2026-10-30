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

// navigation cta dropdown
const navigationCtaDropdown = document.querySelector('#navigation-cta-dropdown');
const navigationDropdownClicked = document.querySelector('#navigation-dropdown-clicked');

navigationCtaDropdown.addEventListener("click", () => {
    navigationDropdownClicked.classList.toggle("clicked");
});

// home cta dropdown
const homeCtaDropdown = document.querySelector('#home-cta-dropdown');
const homeDropdownClicked = document.querySelector('#home-dropdown-clicked');

homeCtaDropdown.addEventListener("click", () => {
    homeDropdownClicked.classList.toggle("clicked");
});

// contact
const ctaContact = document.querySelector('#cta-contact');
const contact = document.querySelector('#contact');

ctaContact.addEventListener("click", () => {
    contact.scrollIntoView({
        behavior: "smooth"
    })
});

// footer nav links

// home
const fHome = document.querySelector('#f-home');
const navHome = document.querySelector('#home');

fHome.addEventListener("click", () => {
    navHome.scrollIntoView({
        behavior: "smooth"
    });
});

// about
const fAbout = document.querySelector('#f-about');
const navAbout = document.querySelector('#about');

fAbout.addEventListener("click", () => {
    navAbout.scrollIntoView({
        behavior: "smooth"
    });
});

// services
const fServices = document.querySelector('#f-services');
const navServices = document.querySelector('#services');

fServices.addEventListener("click", () => {
    navServices.scrollIntoView({
        behavior: "smooth"
    });
});

// contact
const fContact = document.querySelector('#f-contact');
const navContact = document.querySelector('#contact');

fContact.addEventListener("click", () => {
    navContact.scrollIntoView({
        behavior: "smooth"
    });
});