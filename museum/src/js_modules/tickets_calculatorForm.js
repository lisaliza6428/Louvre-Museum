/* 

let form_ticketType = document.getElementById("selectTypeTicket");
console.log(form_ticketType)
console.log(form_ticketType.length)
let ticketBasic = document.getElementsByName("ticket_basic");
let ticketSenior = document.getElementsByName("ticket_senior");
const totalPrice = document.getElementById('total_sum');


let form_ticketTypeValue;
let form_ticketBasicValue;
let form_ticketSeniorValue;
let form_ticketPrice;

function getFormTicketType(){
    for (let i = 0; i < form_ticketType.length; i++){
        form_ticketType.addEventListener('change', getFormTicketType)
		if (form_ticketType.options[i].selected == true){
            form_ticketTypeValue = form_ticketType.options[i].value;
            }

}
console.log(form_ticketTypeValue)
getFormTicketPrice()

}

getFormTicketType()


/////////////////GETticketBasicValue/////////////////////////////////// 
const form_minusButton_basic = document.getElementById('form_minus_basic');
const form_plusButton_basic = document.getElementById('form_plus_basic');
const form_inputField_basic = document.getElementById('form_ticket_basic');

form_minusButton_basic.addEventListener('click', event => {
  event.preventDefault();
  const form_currentValue_basic = Number(form_inputField_basic.value);
  if (form_currentValue_basic > 0){
    form_inputField_basic.value = form_currentValue_basic - 1;
    form_ticketBasicValue = form_inputField_basic.value;
}
getFormTicketPrice()


});

form_plusButton_basic.addEventListener('click', event => {
  event.preventDefault();
  const form_currentValue_basic = Number(form_inputField_basic.value);
  if (form_currentValue_basic < 20){
  form_inputField_basic.value = form_currentValue_basic + 1;
  form_ticketBasicValue = form_inputField_basic.value;
  }
  getFormTicketPrice()
  
  
});



 /////////////////GETticketSeniorValue/////////////////////////////////// 
  const form_minusButton_senior = document.getElementById('form_minus_senior');
  const form_plusButton_senior = document.getElementById('form_plus_senior');
  const form_inputField_senior = document.getElementById('form_ticket_senior');
  
  form_minusButton_senior.addEventListener('click', event => {
    event.preventDefault();
    const form_currentValue_senior = Number(form_inputField_senior.value);
    if (form_currentValue_senior > 0){
    form_inputField_senior.value = form_currentValue_senior - 1;
    form_ticketSeniorValue = form_inputField_senior.value;
    }
    getFormTicketPrice()
    
  });
  
  form_plusButton_senior.addEventListener('click', event => {
    event.preventDefault();
    const form_currentValue_senior = Number(form_inputField_senior.value);
    if (form_currentValue_senior < 20){
    form_inputField_senior.value = form_currentValue_senior + 1;
    form_ticketSeniorValue = form_inputField_senior.value;
     
    }
    getFormTicketPrice()
   
  });


  ///////////////GETprice//////////////////////////
  function getFormTicketPrice () {
    form_ticketPrice = form_ticketTypeValue * form_ticketBasicValue + form_ticketTypeValue / 2 * form_ticketSeniorValue;
  }

  function changeFormTotalPrice () {
    totalPrice.innerHTML = `€${form_ticketPrice}`;
  } */



 
  