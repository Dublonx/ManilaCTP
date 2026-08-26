// scroll navigation bar
const navigation = document.querySelector('#navigation');

window.addEventListener("scroll", () => {
    // if
    if (window.scrollY > 300) {
        navigation.classList.add("scroll");
    } else {
        navigation.classList.remove("scroll");
    }
});