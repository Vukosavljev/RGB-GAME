/****************Declare Variables */
var randomNumber,
    rightColor;

var displayColor = document.getElementById('color');
var displayColorDiv = document.querySelectorAll('.div-row div');
var stringColors = "";
var divHeader = document.querySelector('.header');
var message = document.getElementById('message');
var paragrafLevels = document.querySelectorAll('.levels span');
var easy = document.getElementById('easy');
var hard = document.getElementById('hard');
var pro = document.getElementById('pro');


reload();
/*********** NEW COLORS EVENT  *************** */
document.getElementById('newColors').addEventListener('click', function () {
    reload();
    divHeader.setAttribute('style', 'background-color:rgb(11, 76, 78)');
    message.textContent = "";
})

/********** Reload all colors ********************* */
function reload() {
    /************Declare color********* */
    Array.from(displayColorDiv).forEach(function (el, index) {
        el.setAttribute('style', `background-color: rgb${randomCol()}`);
        var allCol = displayColorDiv[index].getAttribute('style').slice(21);
        stringColors += allCol;
    });


    /***************Right color ************************/
    randomNumber = Math.floor((Math.random() * displayColorDiv.length));
    rightColor = (displayColorDiv[randomNumber].getAttribute('style'));
    displayColor.textContent = rightColor.slice(21);
}



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
            message.textContent = "Congratulations !"
            for (let j = 0; j < displayColorDiv.length; j++) {
                displayColorDiv[j].setAttribute('style', rightColor);
            }
        } else {
            displayColorDiv[i].removeAttribute('style');
            message.textContent = "Try again";
        }
    })
}

/********************LEVELS***************** */
/*Array.from(paragrafLevels).forEach(function(el, index){
    
    
    el.addEventListener('click', function(e){
        if (e.target.classList !== "selected"){
            e.target.classList.add("selected"); 
        }   
        
    }) 
    
}) */




console.log(stringColors);
console.log(rightColor);
console.log(displayColorDiv);
