import { calculator } from "./calculatorObj.js";
import { performCalculation } from "./math.js";

export function handleOperator(nextOperator) {
  // The function handle with arithmetic
  const { firstOperand, displayValue, operator } = calculator;

  const inputValue = parseFloat(displayValue); //get the result with float

  if (operator && calculator.waitingForSecondOperand) {
    calculator.operator = nextOperator;
    return;
  }

  if (firstOperand == null) {
    calculator.firstOperand = inputValue;
  } else if (operator) {
    const currentValue = firstOperand || 0;
    const result = performCalculation[operator](currentValue, inputValue);

    calculator.displayValue = String(result);
    calculator.firstOperand = result;
  }

  calculator.waitingForSecondOperand = true;
  calculator.operator = nextOperator;
}
