
const ticketType = document.getElementsByName("ticket-type");
console.log(ticketType)
const ticketBasic = document.getElementsByName("ticket-basic");
const ticketSenior = document.getElementsByName("ticket-senior");
const totalPrice = document.getElementById('ticket-amount__total');

function getTicketType() {
  for (let i = 0; i < ticketType.length; i++) {
    if (ticketType[i].checked) {
      return +ticketType[i].value;
    }
  }
}

function listenRadioButtons() {
  for (let i = 0; i < ticketType.length; i++) {
    ticketType[i].addEventListener('click', countTotalPrice)
  }
}
listenRadioButtons();

function countTotalPrice() {
  const ticketBasicValue = getBasicValue();
  const ticketSeniorValue = getSeniorValue();
  const TicketPrice = getTicketType();
  const totalPrice = TicketPrice * ticketBasicValue + TicketPrice / 2 * ticketSeniorValue;
  document.querySelector('.ticket-amount__total').innerHTML = `Total €${totalPrice}`;
  document.querySelector('.cart-total__count').innerHTML = `€${totalPrice}`
}
countTotalPrice()

/////////////////GETticketBasicValue/////////////////////////////////// 
function getBasicValue() {
  const ticketBasicValue = localStorage.getItem('ticketBasicValue');
  if (!ticketBasicValue) {
    localStorage.setItem('ticketBasicValue', '1');
  }
  return +ticketBasicValue
}
getBasicValue();

const minusButtonBasic = document.getElementById('minus-basic');
const plusButtonBasic = document.getElementById('plus-basic');
const inputFieldBasic = document.getElementById('ticket-basic');
inputFieldBasic.value = getBasicValue();
const inputFieldBasic_form = document.getElementById('form-ticket-basic');
inputFieldBasic_form.value = getBasicValue();
const fieldBasic_form = document.getElementById('form-basic');
fieldBasic_form.value = getBasicValue();

minusButtonBasic.addEventListener('click', event => {
  event.preventDefault();
  let ticketBasicValue = getBasicValue();
  if (ticketBasicValue > 0) {
    localStorage.setItem('ticketBasicValue', `${ticketBasicValue - 1}`);
    inputFieldBasic.value = getBasicValue();
    inputFieldBasic_form.value = getBasicValue();
    fieldBasic_form.value = getBasicValue();
    countTotalPrice();
  }
});

plusButtonBasic.addEventListener('click', event => {
  event.preventDefault();
  let ticketBasicValue = getBasicValue();
  if (ticketBasicValue < 20) {
    localStorage.setItem('ticketBasicValue', `${ticketBasicValue + 1}`);
    inputFieldBasic.value = getBasicValue();
    inputFieldBasic_form.value = getBasicValue();
    fieldBasic_form.value = getBasicValue();
    countTotalPrice();
  }
});

/////////////////GETticketBasicValue/////////////////////////////////// 
function getSeniorValue() {
  const ticketSeniorValue = localStorage.getItem('ticketSeniorValue');
  if (!ticketSeniorValue) {
    localStorage.setItem('ticketSeniorValue', '1');
  }
  return +ticketSeniorValue
}
getSeniorValue()

const minusButtonSenior = document.getElementById('minus-senior');
const plusButtonSenior = document.getElementById('plus-senior');
const inputFieldSenior = document.getElementById('ticket-senior');
inputFieldSenior.value = getSeniorValue();
const inputFieldSenior_form = document.getElementById('form-ticket-senior');
inputFieldSenior_form.value = getSeniorValue();
const fieldSenior_form = document.getElementById('form-senior');
fieldSenior_form.value = getSeniorValue();

minusButtonSenior.addEventListener('click', event => {
  event.preventDefault();
  let ticketSeniorValue = getSeniorValue();
  if (ticketSeniorValue > 0) {
    localStorage.setItem('ticketSeniorValue', `${ticketSeniorValue - 1}`);
    inputFieldSenior.value = getSeniorValue();
    inputFieldSenior_form.value = getSeniorValue();
    fieldSenior_form.value = getSeniorValue();
    countTotalPrice();
  }
});

plusButtonSenior.addEventListener('click', event => {
  event.preventDefault();
  let ticketSeniorValue = getSeniorValue();
  if (ticketSeniorValue < 20) {
    localStorage.setItem('ticketSeniorValue', `${ticketSeniorValue + 1}`);
    inputFieldSenior.value = getSeniorValue();
    inputFieldSenior_form.value = getSeniorValue();
    fieldSenior_form.value = getSeniorValue();
    countTotalPrice();
  }
});

document.getElementById('form-minus-basic').addEventListener('click', event => {
  event.preventDefault();
  let ticketBasicValue = getBasicValue();
  if (ticketBasicValue > 0) {
    localStorage.setItem('ticketBasicValue', `${ticketBasicValue - 1}`);
    inputFieldBasic.value = getBasicValue();
    inputFieldBasic_form.value = getBasicValue();
    fieldBasic_form.value = getBasicValue();
    countTotalPrice();
  }
});

document.getElementById('form-plus-basic').addEventListener('click', event => {
  event.preventDefault();
  let ticketBasicValue = getBasicValue();
  if (ticketBasicValue < 20) {
    localStorage.setItem('ticketBasicValue', `${ticketBasicValue + 1}`);
    inputFieldBasic.value = getBasicValue();
    inputFieldBasic_form.value = getBasicValue();
    fieldBasic_form.value = getBasicValue();
    countTotalPrice();
  }
});

document.getElementById('form-minus-senior').addEventListener('click', event => {
  event.preventDefault();
  let ticketSeniorValue = getSeniorValue();
  if (ticketSeniorValue > 0) {
    localStorage.setItem('ticketSeniorValue', `${ticketSeniorValue - 1}`);
    inputFieldSenior.value = getSeniorValue();
    inputFieldSenior_form.value = getSeniorValue();
    fieldSenior_form.value = getSeniorValue();
    countTotalPrice();
  }
});

document.getElementById('form-plus-senior').addEventListener('click', event => {
  event.preventDefault();
  let ticketSeniorValue = getSeniorValue();
  if (ticketSeniorValue < 20) {
    localStorage.setItem('ticketSeniorValue', `${ticketSeniorValue + 1}`);
    inputFieldSenior.value = getSeniorValue();
    inputFieldSenior_form.value = getSeniorValue();
    fieldSenior_form.value = getSeniorValue();
    countTotalPrice();
  }
});