function busTicketInput(inputNo, buttonpressedId) {
    let inputData = parseInt(document.getElementsByClassName("inputData")[inputNo].value);
    if ( buttonpressedId== "plusButton") {
        inputData++;
    }
    else if (buttonpressedId== "minusButton") {
        if (inputData > 0) {
            inputData--;
        }
    }
    document.getElementsByClassName("inputData")[inputNo].value = inputData;
}
function negativeNumberChecking(value){
    if (value < 0){
        value = 0; 
    }
    return value;
}
function totalCost() {
    const firstClassPrice = 150;
    const economyClassPrice = 100;
    const firstClassItemValue = document.getElementById('firstClassInfo').value;
    const firstClassItemNo = negativeNumberChecking(firstClassItemValue);
    document.getElementById('firstClassInfo').value = firstClassItemNo;
    const economyClassItemValue = document.getElementById('economyClassInfo').value;
    const economyClassItemNo = negativeNumberChecking(economyClassItemValue);
    document.getElementById('economyClassInfo').value = economyClassItemNo;
    const subtotal = firstClassPrice * firstClassItemNo + economyClassPrice * economyClassItemNo;
    const tax = subtotal * 0.10;
    const total = subtotal + tax;
    document.getElementById('subtotal').innerText = subtotal.toFixed(2);
    document.getElementById('tax').innerText = tax.toFixed(2);
    document.getElementById('total').innerText = total.toFixed(2);
}
function displayBlock(portion, displayProperty){
    const portionNumber = document.getElementsByClassName(portion);
    for (let i = 0; i < portionNumber.length; i++) {
        const portionElement = portionNumber[i];
        portionElement.style.display = displayProperty;
    }
}


var inputGroups = document.getElementsByClassName("input-number-group"); //for +/- input
for (let inputNo = 0; inputNo < inputGroups.length; inputNo++) {
    const inputGroup = inputGroups[inputNo];
    var buttons = inputGroup.getElementsByTagName('button');
    for (let btn = 0; btn < buttons.length; btn++) {
        const btnItem = buttons[btn]; 
        btnItem.addEventListener('click', function () {
            if (btnItem.id == "plusButton") {
                busTicketInput(inputNo, "plusButton");
                totalCost();
            }
            else if (btnItem.id == "minusButton") {
                busTicketInput(inputNo, "minusButton");
                totalCost();
            }
        })
    }
   //for manual input
    inputGroup.addEventListener('change', function () {
        totalCost();
    })
}
//booking area
const bookNowBtn = document.getElementById("bookingClicked");
bookNowBtn.addEventListener('click', function(){
    const bookingArea=document.getElementById("booking-area");
    bookingArea.style.display= "none";
    const thankingArea=document.getElementById("thanking-area");
    thankingArea.style.display=block;
   

})