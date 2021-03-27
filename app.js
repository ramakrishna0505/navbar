const burgerMenu = document.querySelector('.lines');
const navItems = document.querySelector('.nav-items');
burgerMenu.addEventListener('click', ()=> {
    burgerMenu.classList.toggle('toggle');
    navItems.classList.toggle('toggle-bar');
});