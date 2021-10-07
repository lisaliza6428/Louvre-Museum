/* BURGER */



const menuIcon = document.querySelector('.burger');
const menuIconClose = document.querySelector('.burger_close');
const menuNav = document.querySelector('.header_navigation');
const welcomeContent = document.querySelector('.welcome_content');


function toggleMenu() {
  menuNav.classList.toggle('burger_open');
  menuIcon.classList.toggle('burger_none');
  menuIconClose.classList.toggle('burger_close_active');
  welcomeContent.classList.toggle('welcome_invisible')
}

menuIcon.addEventListener('click', toggleMenu);
menuIconClose.addEventListener('click', toggleMenu);