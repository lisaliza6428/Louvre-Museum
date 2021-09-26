const btn = document.querySelector(".btn_ripple");
const ripple = document.querySelector(".ripple");

const pointerdown = ({ clientX, clientY }) => {
  const rect = btn.getBoundingClientRect();

  ripple.style.top = `${clientY - rect.top - 150}px`;
  ripple.style.left = `${clientX - rect.left - 150}px`;
  ripple.classList.add("ripple-active");
};
const pointerup = () => {
  setTimeout(() => {
    ripple.classList.remove("ripple-active");
  }, 500);
};

btn.addEventListener("mousedown", pointerdown);
btn.addEventListener("touchstart", pointerdown);
btn.addEventListener("mouseup", pointerup);
btn.addEventListener("touchend", pointerup);



/* FORM */
let overlay = document.querySelector('.overlay');
let form = document.querySelector('.form');
let open = document.querySelectorAll('.open-form');
let close = document.querySelector('.close-form');

open.forEach((button) => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        overlay.classList.add('active');
        form.classList.add('active');
    })
});

close.addEventListener('click',() => {
    overlay.classList.remove('active');
    form.classList.remove('active');
});

document.addEventListener('click', (e) => {
    if(e.target === overlay) {
        overlay.classList.remove('active');
        form.classList.remove('active');
    }
});


