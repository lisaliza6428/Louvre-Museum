import './form.scss'
////////////////Past Date Restricted///////////////////////////////////////
let today = new Date().toISOString().split('T')[0];
document.getElementsByName("date")[0].setAttribute('min', today);


//////////////Get Date///////////////////
document.getElementById("date").addEventListener("change", function() {
    const dateField = document.getElementById("dateText")
    let dateEntered = new Date(this.value);
    let options = { weekday: 'long', month: 'long', day: 'numeric' }; 
    let dateEnteredText = dateEntered.toLocaleDateString("en-US", options)   
    dateField.innerHTML = dateEnteredText;
});

//////////////Get Time///////////////////
document.getElementById("time").addEventListener("change", function() {
    const timeField = document.getElementById("timeEntered")
    let timeEntered = this.value;
    timeField.innerHTML = timeEntered;  
});



//////////////Name Validation/////////////////////////

  



document.getElementById("name_input").addEventListener("keyup", function(e) {
    ///////e.stopPropagation();
    let name = document.getElementById('name_input').value;
    let errorMessage = document.getElementById('nameError');
    let regName = /^[a-zа-яё\s]+$/iu;
    
    if(!regName.test(name) || name.length < 3 || name.length > 15 ){
        errorMessage.innerHTML =
                'Only English and Russian alphabet, from 3 to 15 letters';
        document.getElementById('name_input').style.borderColor = "red"
        return false;
    }
    else{
        errorMessage.innerHTML = '';
        document.getElementById('name_input').style.borderColor = "black"
        return true;
    } 
});


document.getElementById("email_input").addEventListener("keyup", function(e) {
    ////////e.stopPropagation();
    let email = document.getElementById('email_input').value;
    let errorMessage = document.getElementById('emailError');
    let regEmail = /^[a-zA-Z0-9_-]{3,15}@[a-zA-Z]{4,}\.[a-zA-Z]{2,}$/gm;

    
    if(!regEmail.test(email) ){
        errorMessage.innerHTML =
                'Email is uncorrect';
        document.getElementById('email_input').style.borderColor = "red"
        return false;
    }
    else{
        errorMessage.innerHTML = '';
        document.getElementById('email_input').style.borderColor = "black"
        return true;
    } 
});

document.getElementById('name_input').addEventListener('keyup', function (e) {

    e.stopPropagation();
  
  }, false);
  document.getElementById('name_input').addEventListener('keydown', function (e) {
  
    e.stopPropagation();
  
  }, false);


  document.getElementById('email_input').addEventListener('keyup', function (e) {

    e.stopPropagation();
  
  }, false);
  document.getElementById('email_input').addEventListener('keydown', function (e) {
  
    e.stopPropagation();
  
  }, false);

  document.getElementById('tel').addEventListener('keyup', function (e) {

    e.stopPropagation();
  
  }, false);
  document.getElementById('tel').addEventListener('keydown', function (e) {
  
    e.stopPropagation();
  
  }, false);