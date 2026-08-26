// scroll navigation bar
const navigation = document.querySelector('#navigation');
const navLinks = document.querySelectorAll('.nLink');

window.addEventListener("scroll", () => {
    // if
    if (window.scrollY > 300) {
        navigation.classList.add("scroll");
        navLinks.forEach(navLink => {
            navLink.classList.add("color");
        });
    } else {
        navigation.classList.remove("scroll");
        navLinks.forEach(navLink => {
            navLink.classList.remove("color");
        });
    }
});