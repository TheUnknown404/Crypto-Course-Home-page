const hamburgerClosed = document.querySelector('.hamburger-menu-closed');
const navbarLinks = document.querySelectorAll('.navbar a');
const navbarList = document.querySelector('.navbar ul');
const navbar = document.querySelector('.navbar');

hamburgerClosed.addEventListener('click', () => {
    hamburgerClosed.style.display = "none";
    navbar.classList.add("show-menu");
    navbarList.classList.add("show-menu-ul")
    navbarLinks.forEach(link => {
        link.style.display = "flex";
    })
    
    navbar.classList.remove("navbar");
})