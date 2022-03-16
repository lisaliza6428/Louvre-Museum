import './components/basic-styles/style.scss'

import './components/header/burger-menu';
import './components/welcome-section/welcome-slider'
import './components/explore-section/slider'
import './components/video-section/video-player';
import './components/gallery-section/gallery';
import './components/tickets-section/tickets-calculator'
import './components/tickets-section/form'
import './components/contacts-section/interactive-map'

window.onload = function () {
  document.body.classList.add('loaded_hiding');
  window.setTimeout(function () {
    document.body.classList.add('loaded');
    document.body.classList.remove('loaded_hiding');
  }, 500);
};