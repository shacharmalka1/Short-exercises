export const performCalculation = {
  //Do all the needed calculation
  "/": function divide(n1, n2) {
    return n1 / n2;
  },

  "*": function multiply(n1, n2) {
    return n1 * n2;
  },

  "+": function add(n1, n2) {
    return n1 + n2;
  },

  "-": function sub(n1, n2) {
    return n1 - n2;
  },

  "=": function equals(n1, n2) {
    return n2;
  },
};
