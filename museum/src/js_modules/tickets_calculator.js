
let ticketType = document.getElementsByName("ticket_type");
let ticketBasic = document.getElementsByName("ticket_basic");
let ticketSenior = document.getElementsByName("ticket_senior");
const totalPrice = document.getElementById('total_amount');
console.log(totalPrice)

let ticketTypeValue;
let ticketBasicValue = 1;
let ticketSeniorValue = 1;

function getTicketType(){
    for (let i = 0; i < ticketType.length; i++){
        ticketType[i].addEventListener('click', getTicketType)
		if (ticketType[i].checked){
            ticketTypeValue = ticketType[i].value;
            }

}
console.log(`Type:${ticketTypeValue}
  Basic:${ticketBasicValue}
  Senior:${ticketSeniorValue}
  `);
  getTicketPrice()
}
getTicketType()

/////////////////GETticketBasicValue/////////////////////////////////// 
const minusButton_basic = document.getElementById('minus_basic');
const plusButton_basic = document.getElementById('plus_basic');
const inputField_basic = document.getElementById('ticket_basic');

minusButton_basic.addEventListener('click', event => {
  event.preventDefault();
  const currentValue_basic = Number(inputField_basic.value);
  if (currentValue_basic > 0){
  inputField_basic.value = currentValue_basic - 1;
  ticketBasicValue = inputField_basic.value;
  console.log(`Type:${ticketTypeValue}
  Basic:${ticketBasicValue}
  Senior:${ticketSeniorValue}
  `);
  
}
getTicketPrice()
});

plusButton_basic.addEventListener('click', event => {
  event.preventDefault();
  const currentValue_basic = Number(inputField_basic.value);
  if (currentValue_basic < 20){
  inputField_basic.value = currentValue_basic + 1;
  ticketBasicValue = inputField_basic.value;
  console.log(`Type:${ticketTypeValue}
  Basic:${ticketBasicValue}
  Senior:${ticketSeniorValue}
  `);
  }
  getTicketPrice()
});



 /////////////////GETticketSeniorValue/////////////////////////////////// 
  const minusButton_senior = document.getElementById('minus_senior');
  const plusButton_senior = document.getElementById('plus_senior');
  const inputField_senior = document.getElementById('ticket_senior');
  
  minusButton_senior.addEventListener('click', event => {
    event.preventDefault();
    const currentValue_senior = Number(inputField_senior.value);
    if (currentValue_senior > 0){
    inputField_senior.value = currentValue_senior - 1;
    ticketSeniorValue = inputField_senior.value;
    console.log(ticketSeniorValue)
    console.log(`Type:${ticketTypeValue}
    Basic:${ticketBasicValue}
    Senior:${ticketSeniorValue}
    `);}
    getTicketPrice()
  });
  
  plusButton_senior.addEventListener('click', event => {
    event.preventDefault();
    const currentValue_senior = Number(inputField_senior.value);
    if (currentValue_senior < 20){
    inputField_senior.value = currentValue_senior + 1;
    ticketSeniorValue = inputField_senior.value;
    console.log(`Type:${ticketTypeValue}
  Basic:${ticketBasicValue}
  Senior:${ticketSeniorValue}
  `);
    }
    getTicketPrice()
  });


  ///////////////GETprice//////////////////////////
  function getTicketPrice () {
    let ticketPrice = ticketTypeValue * ticketBasicValue + ticketTypeValue / 2 * ticketSeniorValue;
    totalPrice.innerHTML = `Total €${ticketPrice}`;


  }
  
  


  