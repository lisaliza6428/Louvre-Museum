
let ticketType = document.getElementsByName("ticket_type");
let ticketBasic = document.getElementsByName("ticket_basic");
let ticketSenior = document.getElementsByName("ticket_senior");
const totalPrice = document.getElementById('total_amount');
let ticketTypeValue;
let ticketBasicValue = 1;
let ticketSeniorValue = 1;

function getTicketType() {
  for (let i = 0; i < ticketType.length; i++) {
    ticketType[i].addEventListener('click', getTicketType)
    if (ticketType[i].checked) {
      ticketTypeValue = Number(ticketType[i].value);
    }

  }
  getTicketPrice()
}
getTicketType()

/////////////////GETticketBasicValue/////////////////////////////////// 
const minusButton_basic = document.getElementById('minus_basic');
const plusButton_basic = document.getElementById('plus_basic');
const inputField_basic = document.getElementById('ticket_basic');
const inputField_basic_form = document.getElementById('form_basic');

minusButton_basic.addEventListener('click', event => {
  event.preventDefault();
  const currentValue_basic = Number(inputField_basic.value);
  if (currentValue_basic > 0) {
    inputField_basic.value = currentValue_basic - 1;
    ticketBasicValue = Number(inputField_basic.value);
    inputField_basic_form.value = ticketBasicValue;
  }
  getTicketPrice()
});

plusButton_basic.addEventListener('click', event => {
  event.preventDefault();
  const currentValue_basic = Number(inputField_basic.value);
  if (currentValue_basic < 20) {
    inputField_basic.value = currentValue_basic + 1;
    ticketBasicValue = Number(inputField_basic.value);
    inputField_basic_form.value = ticketBasicValue;
  }
  getTicketPrice()
});

/////////////////GETticketSeniorValue/////////////////////////////////// 
const minusButton_senior = document.getElementById('minus_senior');
const plusButton_senior = document.getElementById('plus_senior');
const inputField_senior = document.getElementById('ticket_senior');
const inputField_senior_form = document.getElementById('form_senior');

minusButton_senior.addEventListener('click', event => {
  event.preventDefault();
  const currentValue_senior = Number(inputField_senior.value);
  if (currentValue_senior > 0) {
    inputField_senior.value = currentValue_senior - 1;
    ticketSeniorValue = Number(inputField_senior.value);
    inputField_senior_form.value = ticketSeniorValue;
  }
  getTicketPrice()
});

plusButton_senior.addEventListener('click', event => {
  event.preventDefault();
  const currentValue_senior = Number(inputField_senior.value);
  if (currentValue_senior < 20) {
    inputField_senior.value = currentValue_senior + 1;
    ticketSeniorValue = Number(inputField_senior.value);
    inputField_senior_form.value = ticketSeniorValue;
  }
  getTicketPrice()
});

///////////////GETprice//////////////////////////
function getTicketPrice() {
  ticketPrice = Number(ticketTypeValue * ticketBasicValue + ticketTypeValue / 2 * ticketSeniorValue);
  totalPrice.innerHTML = `Total €${ticketPrice}`;
  putValuesToForm()
}

function putValuesToForm() {
  if (ticketTypeValue == 20) {
    document.getElementById('typeExhibition').innerHTML = 'Permanent exhibition';
    document.getElementById('selectTypeTicket').options[0].selected = true;
    document.getElementById('age_wrapper_tic_basic').innerHTML = 'Basic 18+ (20 €)';
    document.getElementById('basket_descr_basic').innerHTML = 'Basic (20 €)';
    document.getElementById('age_wrapper_tic_senior').innerHTML = 'Senior 65+ (10 €)';
    document.getElementById('basket_descr_senior').innerHTML = 'Senior (10 €)';
    document.getElementById('basket_amount_basic').innerHTML = `${20 * ticketBasicValue} €`;
    document.getElementById('basket_amount_senior').innerHTML = `${10 * ticketSeniorValue} €`;
  }
  else if (ticketTypeValue == 25) {
    document.getElementById('typeExhibition').innerHTML = 'Temporary exhibition';
    document.getElementById('selectTypeTicket').options[1].selected = true;
    document.getElementById('age_wrapper_tic_basic').innerHTML = 'Basic 18+ (25 €)';
    document.getElementById('basket_descr_basic').innerHTML = 'Basic (25 €)';
    document.getElementById('age_wrapper_tic_senior').innerHTML = 'Senior 65+ (12.5 €)';
    document.getElementById('basket_descr_senior').innerHTML = 'Senior (12.5 €)';
    document.getElementById('basket_amount_basic').innerHTML = `${25 * ticketBasicValue} €`;
    document.getElementById('basket_amount_senior').innerHTML = `${12.5 * ticketSeniorValue} €`;
  }
  else {
    document.getElementById('typeExhibition').innerHTML = 'Combined Admission';
    document.getElementById('selectTypeTicket').options[2].selected = true;
    document.getElementById('age_wrapper_tic_basic').innerHTML = 'Basic 18+ (40 €)';
    document.getElementById('basket_descr_basic').innerHTML = 'Basic (40 €)';
    document.getElementById('age_wrapper_tic_senior').innerHTML = 'Senior 65+ (20 €)';
    document.getElementById('basket_descr_senior').innerHTML = 'Senior (20 €)';
    document.getElementById('basket_amount_basic').innerHTML = `${40 * ticketBasicValue} €`;
    document.getElementById('basket_amount_senior').innerHTML = `${20 * ticketSeniorValue} €`;
  }

  let formTicketBasicValue = ticketBasicValue;
  document.getElementById('form_ticket_basic').value = formTicketBasicValue;
  let formTicketSeniorValue = ticketSeniorValue;
  document.getElementById('form_ticket_senior').value = formTicketSeniorValue;
  let totalTicketPrice = ticketPrice;
  document.getElementById('total_sum').innerHTML = `€${totalTicketPrice}`;
}

