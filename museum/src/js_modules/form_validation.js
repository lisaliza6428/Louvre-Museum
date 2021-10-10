
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