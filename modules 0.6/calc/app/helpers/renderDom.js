import { calculator } from "./calculatorObj.js";
export function updateDisplay() {
  //update the content of the input
  const display = document.querySelector(".calculator-screen");
  display.value = calculator.displayValue;
}

export function resetCalculator() {
  //reset the calculator-screen
  calculator.displayValue = "0";
  calculator.firstOperand = null;
  calculator.waitingForSecondOperand = false;
  calculator.operator = null;
}
