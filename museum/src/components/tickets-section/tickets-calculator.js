
const ticketType = document.getElementsByName("ticket-type");
const ticketBasic = document.getElementsByName("ticket-basic");
const ticketSenior = document.getElementsByName("ticket-senior");
const totalPrice = document.getElementById('ticket-amount__total');
const selectForm = document.getElementById('form__select');

const MAX_TICKETS_COUNT = 20;
const PRICE_TICKET_PERMANENT = 20;
const PRICE_TICKETS_TEMPORARY = 25;
const PRICE_TICKETS_COMBINED = 40;

function setTicketType() {
  for (let i = 0; i < ticketType.length; i++) {
    if (ticketType[i].checked) {
      localStorage.setItem('ticketTypeValue', `${+ticketType[i].value}`);
    }
  }
}

ticketType.forEach(type => type.addEventListener('click', () => {
  if (type.checked) {
    localStorage.setItem('ticketTypeValue', `${+type.value}`);
  }
  countTotalPrice();
}))

function getTicketType() {
  const type = localStorage.getItem('ticketTypeValue');
  if (!type) {
    localStorage.setItem('ticketTypeValue', `${PRICE_TICKET_PERMANENT}`);
    return PRICE_TICKET_PERMANENT;
  }
  if (+type === PRICE_TICKET_PERMANENT) {
    ticketType[0].checked = true;
    selectForm[0].selected = true;
    document.getElementById('typeExhibition').innerText = `${selectForm[0].innerText}`;
  }
  if (+type === PRICE_TICKETS_TEMPORARY) {
    ticketType[1].checked = true;
    selectForm[1].selected = true;
    document.getElementById('typeExhibition').innerText = `${selectForm[1].innerText}`;
  }
  if (+type === PRICE_TICKETS_COMBINED) {
    ticketType[2].checked = true;
    selectForm[2].selected = true;
    document.getElementById('typeExhibition').innerText = `${selectForm[2].innerText}`;
  }
  return +type;
}
getTicketType()


function countTotalPrice() {
  const ticketBasicValue = getBasicValue();
  const ticketSeniorValue = getSeniorValue();
  const TicketPrice = getTicketType();
  const totalPrice = TicketPrice * ticketBasicValue + TicketPrice / 2 * ticketSeniorValue;

  document.querySelector('.ticket-amount__total').innerHTML = `Total €${totalPrice}`;
  document.querySelector('.cart-total__count').innerHTML = `€${totalPrice}`;

  document.querySelector('#cart-item__info-basic').innerText = `Basic +18 (${TicketPrice}€)`;
  document.querySelector('#item__info-entry-basic').innerText = `Basic +18 (${TicketPrice}€)`;
  document.querySelector('#cart-item__info-basic-total').innerText = `${TicketPrice * ticketBasicValue}€`;

  document.querySelector('#cart-item__info-senior').innerText = `Senior +65 (${TicketPrice / 2}€)`;
  document.querySelector('#item__info-entry-senior').innerText = `Senior +65 (${TicketPrice / 2}€)`;
  document.querySelector('#cart-item__info-senior-total').innerText = `${TicketPrice / 2 * ticketSeniorValue}€`;

  document.getElementById('ticket-basic').value = ticketBasicValue;
  document.getElementById('form-ticket-basic').value = ticketBasicValue;
  document.getElementById('form-basic').value = ticketBasicValue;

  document.getElementById('ticket-senior').value = ticketSeniorValue;
  document.getElementById('form-ticket-senior').value = ticketSeniorValue;
  document.getElementById('form-senior').value = ticketSeniorValue;
}
countTotalPrice()

function getBasicValue() {
  const ticketBasicValue = localStorage.getItem('ticketBasicValue');
  if (!ticketBasicValue) {
    localStorage.setItem('ticketBasicValue', '1');
  }
  return +ticketBasicValue
}
getBasicValue();

document.getElementById('minus-basic').addEventListener('click', event => {
  event.preventDefault();
  let ticketBasicValue = getBasicValue();
  if (ticketBasicValue > 0) {
    localStorage.setItem('ticketBasicValue', `${ticketBasicValue - 1}`);
    countTotalPrice();
  }
});

document.getElementById('plus-basic').addEventListener('click', event => {
  event.preventDefault();
  let ticketBasicValue = getBasicValue();
  if (ticketBasicValue < MAX_TICKETS_COUNT) {
    localStorage.setItem('ticketBasicValue', `${ticketBasicValue + 1}`);
    countTotalPrice();
  }
});

function getSeniorValue() {
  const ticketSeniorValue = localStorage.getItem('ticketSeniorValue');
  if (!ticketSeniorValue) {
    localStorage.setItem('ticketSeniorValue', '1');
  }
  return +ticketSeniorValue
}
getSeniorValue()

document.getElementById('minus-senior').addEventListener('click', event => {
  event.preventDefault();
  let ticketSeniorValue = getSeniorValue();
  if (ticketSeniorValue > 0) {
    localStorage.setItem('ticketSeniorValue', `${ticketSeniorValue - 1}`);
    countTotalPrice();
  }
});

document.getElementById('plus-senior').addEventListener('click', event => {
  event.preventDefault();
  let ticketSeniorValue = getSeniorValue();
  if (ticketSeniorValue < MAX_TICKETS_COUNT) {
    localStorage.setItem('ticketSeniorValue', `${ticketSeniorValue + 1}`);
    countTotalPrice();
  }
});

document.getElementById('form-minus-basic').addEventListener('click', event => {
  event.preventDefault();
  let ticketBasicValue = getBasicValue();
  if (ticketBasicValue > 0) {
    localStorage.setItem('ticketBasicValue', `${ticketBasicValue - 1}`);
    countTotalPrice();
  }
});

document.getElementById('form-plus-basic').addEventListener('click', event => {
  event.preventDefault();
  let ticketBasicValue = getBasicValue();
  if (ticketBasicValue < MAX_TICKETS_COUNT) {
    localStorage.setItem('ticketBasicValue', `${ticketBasicValue + 1}`);
    countTotalPrice();
  }
});

document.getElementById('form-minus-senior').addEventListener('click', event => {
  event.preventDefault();
  let ticketSeniorValue = getSeniorValue();
  if (ticketSeniorValue > 0) {
    localStorage.setItem('ticketSeniorValue', `${ticketSeniorValue - 1}`);
    countTotalPrice();
  }
});

document.getElementById('form-plus-senior').addEventListener('click', event => {
  event.preventDefault();
  let ticketSeniorValue = getSeniorValue();
  if (ticketSeniorValue < MAX_TICKETS_COUNT) {
    localStorage.setItem('ticketSeniorValue', `${ticketSeniorValue + 1}`);
    countTotalPrice();
  }
});