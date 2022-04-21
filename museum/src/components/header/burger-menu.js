import './header.scss';

const menuIcon = document.querySelector('.nav__burger');
const menuIconClose = document.querySelector('.nav__burger-close');
const menuNav = document.querySelector('.nav__items');
const welcomeContent = document.querySelector('.welcome__content');

function toggleMenu() {
  menuNav.classList.toggle('nav__burger--open');
  menuIcon.classList.toggle('nav__burger--none');
  menuIconClose.classList.toggle('nav__burger-close--active');
  welcomeContent.classList.toggle('welcome__content--invisible');
}

menuIcon.addEventListener('click', toggleMenu);
menuIconClose.addEventListener('click', toggleMenu);
