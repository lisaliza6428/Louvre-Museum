import './explore.scss';

const slider = document.querySelector('.explore-slider');
const before = document.querySelector('.explore-slider__img--before');
const beforeImage = before.querySelector('img');
const change = document.querySelector('.explore-slider__control');
const { body } = document;

let isActive = false;

document.addEventListener('DOMContentLoaded', () => {
  const width = slider.offsetWidth;
  beforeImage.style.width = `${width}px`;
});

change.addEventListener('mousedown', () => {
  isActive = true;
});

body.addEventListener('mouseup', () => {
  isActive = false;
});

body.addEventListener('mouseleave', () => {
  isActive = false;
});

const beforeAfterSlider = (x) => {
  const shift = Math.max(0, Math.min(x, slider.offsetWidth));
  before.style.width = `${shift}px`;
  change.style.left = `${shift}px`;
};

const pauseEvents = (e) => {
  e.stopPropagation();
  e.preventDefault();
  return false;
};

body.addEventListener('mousemove', (e) => {
  if (!isActive) {
    return;
  }

  let x = e.pageX;
  x -= slider.getBoundingClientRect().left;
  beforeAfterSlider(x);
  pauseEvents(e);
});

change.addEventListener('touchstart', () => {
  isActive = true;
});

body.addEventListener('touchend', () => {
  isActive = false;
});

body.addEventListener('touchcancel', () => {
  isActive = false;
});

body.addEventListener('touchmove', (e) => {
  if (!isActive) return;

  let x;
  let i;

  for (i = 0; i < e.changedTouches.length; i += 1) {
    x = e.changedTouches[i].pageX;
  }

  x -= slider.getBoundingClientRect().left;

  beforeAfterSlider(x);
  pauseEvents(e);
});
