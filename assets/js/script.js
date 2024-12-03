const hamburgerMenu = document.querySelector('.hamburger-menu');
const menu = document.querySelector('.menu');

hamburgerMenu.addEventListener('click', () => {
    if (menu.style.display === 'flex') {
        menu.style.display = 'none'; 
    } else {
        menu.style.display = 'flex';
    }
});
