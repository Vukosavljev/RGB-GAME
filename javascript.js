/****************Declare Variables */
var displayColor = document.getElementById('color');
var displayColorDiv = document.querySelectorAll('.squares div');
var stringColors = "";
var divHeader = document.querySelector('.header');


/************Declare color********* */
Array.from(displayColorDiv).forEach(function (el, index) {
    var arrayColors = [];
    el.setAttribute('style', `background-color: rgb${randomCol()}`);
    var allCol = displayColorDiv[index].getAttribute('style').slice(21);
    stringColors += allCol;
});


/***************Right color ************************/
var randomNumber = Math.floor((Math.random() * displayColorDiv.length));
var rightColor = (displayColorDiv[randomNumber].getAttribute('style'));
displayColor.textContent = rightColor.slice(21);



/*******************Random functiona **********/
function randomCol() {
    return `(${randomNum()}, ${randomNum()}, ${randomNum()})`;
}
function randomNum() {
    return Math.floor((Math.random() * 256));
}



/***************Click Event *************/
for (let i = 0; i < displayColorDiv.length; i++) {
    displayColorDiv[i].addEventListener('click', function () {
        if (displayColorDiv[i].getAttribute('style').indexOf(rightColor.slice(21)) !== -1) {
            divHeader.setAttribute('style', rightColor);
            for (let j = 0; j < displayColorDiv.length; j++) {
                displayColorDiv[j].setAttribute('style', rightColor);
            }
        } else {
            displayColorDiv[i].removeAttribute('style');
        }
    })
}
console.log(stringColors);
console.log(rightColor);
console.log(displayColorDiv);