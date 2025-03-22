// Navbar Scroll Effect
window.addEventListener("scroll", function() {
    let header = document.querySelector("header");
    if (window.scrollY > 50) {
        header.style.background = "rgba(255, 255, 255, 0.9)";
    } else {
        header.style.background = "white";
    }
});
