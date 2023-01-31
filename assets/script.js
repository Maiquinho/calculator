class Calculator {
    constructor(prevOper, nextOper){
        this.value = prevOper + nextOper;
    }
}



const screen = document.querySelector('.calculator__result'); // get screen element
const allButtons = document.querySelectorAll('.calculator__button'); // get all buttons: NodeList


// const calculator = new Calculator(56, 89);