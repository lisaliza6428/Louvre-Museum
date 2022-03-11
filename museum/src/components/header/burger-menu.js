import './header.scss'
const menuIcon = document.querySelector('.burger-menu');
const menuIconClose = document.querySelector('.burger-close');
const menuNav = document.querySelector('.header-nav');
const welcomeContent = document.querySelector('.welcome-content');


function toggleMenu() {
  menuNav.classList.toggle('burger_open');
  menuIcon.classList.toggle('burger_none');
  menuIconClose.classList.toggle('burger_close_active');
  welcomeContent.classList.toggle('welcome_invisible')
}

menuIcon.addEventListener('click', toggleMenu);
menuIconClose.addEventListener('click', toggleMenu);