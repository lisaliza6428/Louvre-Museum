import './sass/style.scss'
import './js_modules/video_section'
import './js_modules/gallery_section'
import './js_modules/buy_tickets'
import './js_modules/interactive_map'


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



console.log(`Самооценка: 91 балл

1. Вёрстка соответствует макету. Ширина экрана 1024px 
•	Блок header +4
•	Секция Welcome +4 
•	Секция Visiting +4
•	Секция Explore +2 (частично, т.к. вставлена 1 картинка вместо трех составных элементов)
•	Секция Video +2 (частично)
•	Секция Gallery +4
•	Секция Tickets +4 проверить картинку
•	Форма покупки билетов 0 (не выполнено)
•	Секция Contacts +2 (частично)
•	Блок footer +4
2.	Вёрстка соответствует макету. Ширина экрана 768px 
•	Блок header +4
•	Секция Welcome +4
•	Секция Visiting +4
•	Секция Explore +2 (частично)
•	Секция Video +2 (частично)
•	Секция Gallery +4
•	Секция Tickets +4
•	Форма покупки билетов +0 (не выполнено)
•	Секция Contacts +2 (частично)
•	Блок footer +4

3.	Вёрстка соответствует макету. Ширина экрана 420px 
•	Блок header +4
•	Секция Welcome +4
•	Секция Visiting +4
•	Секция Explore +2 (частично) 
•	Секция Video 0 (не выполнено)
•	Секция Gallery +4
•	Секция Tickets +2 (частично)
•	Форма покупки билетов 0 (не выполнено)
•	Секция Contacts +2 (частично)
•	Блок footer 0 (не выполнено)

4.	Не выполнено: Ни на одном из разрешений до 320px включительно не появляется горизонтальная полоса прокрутки 0
5.	Частично выполнено: Совмещается адаптивная и респонсивная (резиновая) вёрстка При изменении ширины экрана плавно изменяются размеры:
•	слайдера в секции Welcome +2
•	слайдера сравнения изображений в секции Explore 0 (не выполнено)
•	кастомного видеоплеера в секции Video 0 (не выполнено)
•	слайдера в секции Video 0 (не выполнено)
•	YouTube-видео в плейлисте в секции Video, маленькие видео выровнены по краям большого 0 (не выполнено)
•	галереи изображений и изображений в ней +2
•	карты 0 (не выполнено)
8.	На ширине экрана 1024рх и меньше реализовано адаптивное меню 
o	при нажатии на бургер-иконку меню появляется, плавно выдвигаясь слева, бургер-иконка изменяется на крестик. При нажатии на крестик меню исчезает, плавно возвращаясь назад, иконка крестика превращается в бургер-иконку +1 (частично выполнено, нет плавной анимации)
o	ссылки в меню работают, обеспечивая плавную прокрутку по якорям +2
o	при клике по ссылке в адаптивном меню, или при клике по любому месту сайта, кроме самого адаптивного меню, меню закрывается 0 (не выполнено)
o	вёрстка меню соответствует макету на всех проверяемых разрешениях (соответсвует только на 1024px) +2 балла
9.	Не выполнено. Оптимизация скорости загрузки страницы +8 Оптимизация скорости загрузки страницы определяется при помощи сервиса https://developers.google.com/speed/pagespeed/insights/. Результат проверки скорости сайта для мобильных устройств:
`)
