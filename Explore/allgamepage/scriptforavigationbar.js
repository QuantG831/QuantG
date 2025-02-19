//script for navigaion bar
let lastScrollPosition = 0;
const navbar = document.querySelector('.navigation-bar');

window.addEventListener('scroll', () => {
    const currentScrollPosition = window.pageYOffset;

    if (currentScrollPosition > lastScrollPosition) {
        // Scrolling down: hide the navbar
        navbar.style.top = '-100px';
    } else {
        // Scrolling up: show the navbar
        navbar.style.top = '0';
    }

    lastScrollPosition = currentScrollPosition;
});

