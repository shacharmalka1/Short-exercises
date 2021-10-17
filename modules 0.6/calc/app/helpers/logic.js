import { updateDisplay, resetCalculator } from "./renderDom.js";
import { handleOperator } from "./arithmetic.js";
import { inputDecimal, inputDigit } from "./inputVallidation.js";

updateDisplay();

document
  .querySelector(".calculator-keys")
  .addEventListener("click", (event) => {
    const { target } = event;
    if (!target.matches("button")) {
      //If there isn't some clicked button, return
      return;
    }

    if (target.classList.contains("operator")) {
      //handle the case of press on some operator
      handleOperator(target.value);
      updateDisplay();
      return;
    }

    if (target.classList.contains("decimal")) {
      //make sure we use the decimal dot when needed
      inputDecimal(target.value);
      updateDisplay();
      return;
    }

    if (target.classList.contains("all-clear")) {
      //clear the input
      resetCalculator();
      updateDisplay();
      return;
    }

    inputDigit(target.value);
    updateDisplay();
  });
