const resultScreen = document.querySelector('.calculator__result'); // get result screen
const allButtons = document.querySelectorAll('.calculator__button'); // get all buttons: NodeList
const allButtonsArr = Array.from(allButtons); // convert buttons NodeList into an Array



/**
 * Filter numeric buttons
 */
function numberButtonsFilter(btn){
    if(!btn.classList.contains("calculator__button--orange") && !btn.classList.contains("calculator__button--light-medium") && !btn.classList.contains("calculator__button--comma")){
        return btn;
    }
}

const numberButtons = allButtonsArr.filter(numberButtonsFilter);

const addNumber = numberButtons.forEach(function(numberButton){
    numberButton.addEventListener('click', () => {
        if(resultScreen.textContent){
            resultScreen.innerHTML += numberButton.textContent;
        }
    })
});



/**
 * Clear Screen Value (Reset to 0)
 */
function clearScreen(){
    resultScreen.innerHTML = "";
}

const clearBtn = document.querySelector('.calculator__button--clear');

clearBtn.addEventListener('click', clearScreen);

clearScreen();





