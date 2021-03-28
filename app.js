const burgerMenu = document.querySelector('.lines');
const navItems = document.querySelector('.nav-items');
burgerMenu.addEventListener('click', ()=> {
    burgerMenu.classList.toggle('toggle');
    navItems.classList.toggle('toggle-bar');
});

const navbarListItems = document.querySelectorAll('.navbar-list-item');

navbarListItems.forEach((item) => {
    item.addEventListener('click', (e) => {
            navbarListItems.forEach((listItem) => {
                if(e.currentTarget.getAttribute('name') === listItem.getAttribute('name')){
                    listItem.classList.add('active');
                } else {
                    listItem.classList.remove('active');
                } 
            });
    });
});


