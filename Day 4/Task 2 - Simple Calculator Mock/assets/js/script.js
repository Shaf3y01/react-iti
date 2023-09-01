// Calculator three objects functionality
const calculator = {
  currentInput: "",
  currentOperator: "",
  previousInput: "",

  clearResult() {
    this.currentInput = "";
    this.updateResult();
  },

  backSpace() {
    this.currentInput = this.currentInput.slice(0, -1);
    this.updateResult();
  },

  appendNumber(number) {
    this.currentInput += number;
    this.updateResult();
  },

  appendOperator(operator) {
    if (this.currentInput !== "") {
      this.currentOperator = operator;
      this.previousInput = this.currentInput;
      this.currentInput = "";
    }
  },

  calculate() {
    if (this.currentInput !== "") {
      const num1 = parseFloat(this.previousInput);
      const num2 = parseFloat(this.currentInput);

      switch (this.currentOperator) {
        case "+":
          this.currentInput = (num1 + num2).toString();
          break;
        case "-":
          this.currentInput = (num1 - num2).toString();
          break;
        case "*":
          this.currentInput = (num1 * num2).toString();
          break;
        case "/":
          this.currentInput = (num1 / num2).toString();
          break;
      }

      this.currentOperator = "";
      this.previousInput = "";
      this.updateResult();
    }
  },

  updateResult() {
    document.getElementById("result").value = this.currentInput;
  },

  // Initialize the calculator with event listeners
  init() {
    const buttons = document.querySelectorAll(
      '.calculator input[type="button"]'
    );
    buttons.forEach((button) => {
      button.addEventListener("click", () => {
        const value = button.value;
        switch (value) {
          case "C":
            this.clearResult();
            break;
          case "DEL":
            this.backSpace();
            break;
          case "=":
            this.calculate();
            break;
          case "+":
          case "-":
          case "*":
          case "/":
            this.appendOperator(value);
            break;
          default:
            this.appendNumber(value);
            break;
        }
      });
    });
  },
};

// Initialize the calculator when the DOM is ready
document.addEventListener("DOMContentLoaded", () => {
  calculator.init();
});
