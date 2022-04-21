const btn = document.querySelector('.button-book--ripple');
const ripple = document.querySelector('.ripple');

const pointerdown = ({ clientX, clientY }) => {
  const rect = btn.getBoundingClientRect();
  ripple.style.top = `${clientY - rect.top - 150}px`;
  ripple.style.left = `${clientX - rect.left - 150}px`;
  ripple.classList.add('ripple--active');
};

const pointerup = () => {
  setTimeout(() => {
    ripple.classList.remove('ripple--active');
  }, 500);
};

btn.addEventListener('mousedown', pointerdown);
btn.addEventListener('touchstart', pointerdown);
btn.addEventListener('mouseup', pointerup);
btn.addEventListener('touchend', pointerup);
