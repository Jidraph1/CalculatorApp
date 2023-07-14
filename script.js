const numberButtons = document.querySelectorAll("[data-number]");
const operationButtons = document.querySelectorAll("[data-operation]");
const equalsButton = document.querySelector("[data-equals]");
const deleteButton = document.querySelector("[data-delete]");
const allClearButton = document.querySelector("[data-all-clear]");
const previousOperandTextElement = document.querySelector(
  "[data-previous-operand]"
);
const currentOperandTextElement = document.querySelector(
  "[data-current-operand]"
);

const calculator = new Calculator(
  previousOperandTextElement,
  currentOperandTextElement
);

class Calculator {
  constructor(previousOperandTextElement, currentOperandTextElement) {
    this.previousOperandTextElement = previousOperandTextElement;
    this.currentOperandTextElement = currentOperandTextElement;
    this.clear();
  }
}
  
  function updateDisplay() {
    previousOperandTextElement.innerText = previousOperand;
    currentOperandTextElement.innerText = currentOperand;
  }
  

  numberButtons.forEach((button) => {
    button.addEventListener('click', () => {
      currentOperand += button.innerText;
      updateDisplay();
    });
  });
  

  operationButtons.forEach((button) => {
    button.addEventListener('click', () => {
      operation = button.innerText;
      previousOperand = currentOperand;
      currentOperand = '';
      updateDisplay();
    });
  });
  

  equalsButton.addEventListener('click', () => {
    let computation;
    const prev = parseFloat(previousOperand);
    const current = parseFloat(currentOperand);
    if (isNaN(prev) || isNaN(current)) return;
  
    switch (operation) {
      case '+':
        computation = prev + current;
        break;
      case '-':
        computation = prev - current;
        break;
      case '*':
        computation = prev * current;
        break;
      case '÷':
        computation = prev / current;
        break;
      default:
        return;
    }
  
    currentOperand = computation;
    operation = '';
    previousOperand = '';
    updateDisplay();
  });
  
 
  allClearButton.addEventListener('click', () => {
    previousOperand = '';
    currentOperand = '';
    operation = '';
    updateDisplay();
  });
  

  deleteButton.addEventListener('click', () => {
    currentOperand = currentOperand.slice(0, -1);
    updateDisplay();
  });