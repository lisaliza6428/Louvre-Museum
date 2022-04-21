import './form.scss';
import './tickets.scss';
import './book-button-ripple-effect';

// Open Form
const overlay = document.querySelector('.overlay');
const form = document.querySelector('.form');
const open = document.querySelectorAll('.open-form');
const close = document.querySelector('.close-form');

open.forEach((button) => {
  button.addEventListener('click', (e) => {
    e.preventDefault();
    overlay.classList.add('active');
    form.classList.add('active');
  });
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

// Past Date Restricted in Date input
const today = new Date().toISOString().split('T')[0];
document.getElementsByName('date')[0].setAttribute('min', today);

// Get Date
document.getElementById('date').addEventListener('change', function anon() {
  const dateField = document.getElementById('dateText');
  const dateEntered = new Date(this.value);
  const options = { weekday: 'long', month: 'long', day: 'numeric' };
  const dateEnteredText = dateEntered.toLocaleDateString('en-US', options);
  dateField.innerHTML = dateEnteredText;
});

// Get Time
document.getElementById('time').addEventListener('change', () => {
  const timeField = document.getElementById('timeEntered');
  const timeEntered = this.value;
  timeField.innerHTML = timeEntered;
});

// Name Validation
document.getElementById('form__name-input').addEventListener('keyup', function anon() {
  const name = this.value;
  const errorMessage = document.getElementById('nameError');
  const regName = /^[a-zа-яё\s]+$/iu;

  if (!regName.test(name) || name.length < 3 || name.length > 15) {
    errorMessage.innerHTML = 'Only English and Russian alphabet, from 3 to 15 letters';
    this.style.borderColor = 'red';
    return false;
  }

  errorMessage.innerHTML = '';
  this.style.borderColor = 'black';
  return true;
});

// Email Validation
document.getElementById('form__email-input').addEventListener('keyup', function anon() {
  const email = this.value;
  const errorMessage = document.getElementById('emailError');
  const regEmail = /^[a-zA-Z0-9_-]{3,15}@[a-zA-Z]{4,}\.[a-zA-Z]{2,}$/gm;

  if (!regEmail.test(email)) {
    errorMessage.innerHTML = 'Email is invalid';
    this.style.borderColor = 'red';
    return false;
  }

  errorMessage.innerHTML = '';
  this.style.borderColor = 'black';
  return true;
});

// Phone Validation
document.getElementById('form__tel-input').addEventListener('keyup', function anon() {
  const tel = this.value;
  const errorMessage = document.getElementById('telError');
  const regEmail = /^(\+7|7|8)?[\s-]?\(?[489][0-9]{2}\)?[\s-]?[0-9]{3}[\s-]?[0-9]{2}[\s-]?[0-9]{2}$/;

  if (!regEmail.test(tel)) {
    errorMessage.innerHTML = 'Phone number is invalid. Example: +7 *** *** ** **';
    this.style.borderColor = 'red';
    return false;
  }

  errorMessage.innerHTML = '';
  this.style.borderColor = 'black';
  return true;
});

document.getElementById('form__name-input').addEventListener('keyup', (e) => {
  e.stopPropagation();
}, false);

document.getElementById('form__name-input').addEventListener('keydown', (e) => {
  e.stopPropagation();
}, false);

document.getElementById('form__email-input').addEventListener('keyup', (e) => {
  e.stopPropagation();
}, false);

document.getElementById('form__email-input').addEventListener('keydown', (e) => {
  e.stopPropagation();
}, false);

document.getElementById('form__tel-input').addEventListener('keyup', (e) => {
  e.stopPropagation();
}, false);

document.getElementById('form__tel-input').addEventListener('keydown', (e) => {
  e.stopPropagation();
}, false);
