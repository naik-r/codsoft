// Function to update the display with the current input
function updateDisplay(value) {
    const display = document.getElementById("display");
    display.textContent = value;
  }
  
  // Function to handle number button click
  function handleNumberClick(event) {
    const value = event.target.value;
    const currentInput = document.getElementById("display").textContent;
  
    // Don't allow leading zeros
    if (currentInput === "0") {
      updateDisplay(value);
    } else {
      updateDisplay(currentInput + value);
    }
  }
  
  // Function to handle operator button click
  function handleOperatorClick(event) {
    const operator = event.target.value;
    const currentInput = document.getElementById("display").textContent;
  
    // Save the current input and operator in variables
    // to be used in the calculation later
    if (currentInput !== "0") {
      document.getElementById("display").dataset.savedValue = currentInput;
      document.getElementById("display").dataset.operator = operator;
    }
  
    // Display the operator in the display tab
    updateDisplay(operator);
  }
  
  
  // Function to handle the "Clear" button click
  function handleClearClick() {
    updateDisplay("0");
    delete document.getElementById("display").dataset.savedValue;
    delete document.getElementById("display").dataset.operator;
  }
  
  // Function to handle the "=" button click
  function handleCalculateClick() {
    const savedValue = parseFloat(document.getElementById("display").dataset.savedValue);
    const operator = document.getElementById("display").dataset.operator;
    const currentValue = parseFloat(document.getElementById("display").textContent);
  
    if (operator && !isNaN(savedValue) && !isNaN(currentValue)) {
      // Perform the calculation based on the saved operator
      let result;
      switch (operator) {
        case "+":
          result = savedValue + currentValue;
          break;
        case "-":
          result = savedValue - currentValue;
          break;
        case "*":
          result = savedValue * currentValue;
          break;
        case "/":
          result = savedValue / currentValue;
          break;
        default:
          break;
      }
  
      // Display the result
      updateDisplay(result);
    }
  }
  
  // Add event listeners to the number buttons
  const numberButtons = document.querySelectorAll(".number");
  numberButtons.forEach(button => button.addEventListener("click", handleNumberClick));
  
  // Add event listeners to the operator buttons
  const operatorButtons = document.querySelectorAll(".operator");
  operatorButtons.forEach(button => button.addEventListener("click", handleOperatorClick));
  
  // Add event listener to the "Clear" button
  const clearButton = document.getElementById("clear");
  clearButton.addEventListener("click", handleClearClick);
  
  // Add event listener to the "=" button
  const calculateButton = document.getElementById("calculate");
  calculateButton.addEventListener("click", handleCalculateClick);
  