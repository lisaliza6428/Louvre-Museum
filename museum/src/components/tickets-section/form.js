import './form.scss'

import './tickets.scss'

//RIPPLE-effect for button
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

//FORM
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

close.addEventListener('click', () => {
  overlay.classList.remove('active');
  form.classList.remove('active');
});

document.addEventListener('click', (e) => {
  if (e.target === overlay) {
    overlay.classList.remove('active');
    form.classList.remove('active');
  }
});
//Past Date Restricted
let today = new Date().toISOString().split('T')[0];
document.getElementsByName("date")[0].setAttribute('min', today);


//Get Date
document.getElementById("date").addEventListener("change", function () {
  const dateField = document.getElementById("dateText")
  let dateEntered = new Date(this.value);
  let options = { weekday: 'long', month: 'long', day: 'numeric' };
  let dateEnteredText = dateEntered.toLocaleDateString("en-US", options)
  dateField.innerHTML = dateEnteredText;
});

//Get Time
document.getElementById("time").addEventListener("change", function () {
  const timeField = document.getElementById("timeEntered")
  let timeEntered = this.value;
  timeField.innerHTML = timeEntered;
});

//Name Validation
document.getElementById("form__name-input").addEventListener("keyup", function (e) {
  let name = document.getElementById('form__name-input').value;
  let errorMessage = document.getElementById('nameError');
  let regName = /^[a-zа-яё\s]+$/iu;

  if (!regName.test(name) || name.length < 3 || name.length > 15) {
    errorMessage.innerHTML =
      'Only English and Russian alphabet, from 3 to 15 letters';
    document.getElementById('form__name-input').style.borderColor = "red"
    return false;
  }
  else {
    errorMessage.innerHTML = '';
    document.getElementById('form__name-input').style.borderColor = "black"
    return true;
  }
});

document.getElementById("form__email-input").addEventListener("keyup", function (e) {
  let email = document.getElementById('form__email-input').value;
  let errorMessage = document.getElementById('emailError');
  let regEmail = /^[a-zA-Z0-9_-]{3,15}@[a-zA-Z]{4,}\.[a-zA-Z]{2,}$/gm;

  if (!regEmail.test(email)) {
    errorMessage.innerHTML =
      'Email is uncorrect';
    document.getElementById('form__email-input').style.borderColor = "red"
    return false;
  }
  else {
    errorMessage.innerHTML = '';
    document.getElementById('form__email-input').style.borderColor = "black"
    return true;
  }
});

document.getElementById('form__name-input').addEventListener('keyup', function (e) {
  e.stopPropagation();
}, false);

document.getElementById('form__name-input').addEventListener('keydown', function (e) {
  e.stopPropagation();
}, false);


document.getElementById('form__email-input').addEventListener('keyup', function (e) {
  e.stopPropagation();
}, false);

document.getElementById('form__email-input').addEventListener('keydown', function (e) {
  e.stopPropagation();
}, false);

document.getElementById('tel').addEventListener('keyup', function (e) {
  e.stopPropagation();
}, false);

document.getElementById('tel').addEventListener('keydown', function (e) {
  e.stopPropagation();
}, false);
