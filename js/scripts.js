const header = document.querySelector('header');
const toggleMenu = document.getElementById('menuToggle');
const navbar = document.querySelector('.navbar ul')
const navLinks = document.querySelectorAll('.navbar li');

window.addEventListener('scroll', () => {
    header.classList.toggle('sticky', window.scrollY > 0);
    banner.classList.toggle('sticky', window.scrollY > 0);
});


toggleMenu.addEventListener('click', () => {
    navbar.classList.toggle('active');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navbar.classList.remove('active');
        toggleMenu.classList.remove('active');
    })
});

