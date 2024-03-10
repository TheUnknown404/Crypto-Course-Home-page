const hamburgerClosed = document.querySelector('.hamburger-menu-closed');
const hamburgerOpened = document.querySelector('.hamburger-menu-opened');
const navbar = document.querySelector('.navbar');
const navText = document.querySelectorAll('.navbar li a');
const navItems = document.querySelector('.navbar ul');

const openMenu = () => {
    hamburgerClosed.style.display = "none";
    hamburgerOpened.style.display = "block";

    navItems.classList.toggle("navItemsActive");
    navbar.classList.toggle("navbarActive");
    navText.forEach(text => {
        text.classList.toggle('textActive');
    })
}

const closeMenu = () => {
    hamburgerClosed.style.display = "block";
    hamburgerOpened.style.display = "none";

    navItems.classList.toggle("navItemsActive");
    navbar.classList.toggle("navbarActive");
    navText.forEach(text => {
        text.classList.toggle('textActive');
    })
}

hamburgerClosed.addEventListener('click', openMenu);
hamburgerOpened.addEventListener('click', closeMenu);

window.addEventListener('resize', () => {
    const screenWidth = window.innerWidth;
    if (screenWidth > 900) {
        hamburgerClosed.style.display = "none";
    } else {
        hamburgerClosed.style.display = "block";
    }
})