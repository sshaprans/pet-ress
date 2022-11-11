const burgerMenu = document.querySelector('#burger__menu');
const burgerMenuItem = document.querySelector('#burger__menu__item');

burgerMenu.addEventListener('click', () =>{
    burgerMenuItem.classList.toggle('hidden')
});