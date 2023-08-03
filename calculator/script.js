
function updateDisplay(value) {
    const display = document.getElementById("display");
    display.textContent = value;
  }
  
 
  function handleNumberClick(event) {
    const value = event.target.value;
    const currentInput = document.getElementById("display").textContent;
  
    
    if (currentInput === "0") {
      updateDisplay(value);
    } else {
      updateDisplay(currentInput + value);
    }
  }
  
  function handleOperatorClick(event) {
    const operator = event.target.value;
    const currentInput = document.getElementById("display").textContent;
  
   
    if (currentInput !== "0") {
      document.getElementById("display").dataset.savedValue = currentInput;
      document.getElementById("display").dataset.operator = operator;
    }

    updateDisplay(operator);
  }
  

  function handleClearClick() {
    updateDisplay("0");
    delete document.getElementById("display").dataset.savedValue;
    delete document.getElementById("display").dataset.operator;
  }
  

  function handleCalculateClick() {
    const savedValue = parseFloat(document.getElementById("display").dataset.savedValue);
    const operator = document.getElementById("display").dataset.operator;
    const currentValue = parseFloat(document.getElementById("display").textContent);
  
    if (operator && !isNaN(savedValue) && !isNaN(currentValue)) {
     
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
  

      updateDisplay(result);
    }
  }
  

  const numberButtons = document.querySelectorAll(".number");
  numberButtons.forEach(button => button.addEventListener("click", handleNumberClick));
  
  
  const operatorButtons = document.querySelectorAll(".operator");
  operatorButtons.forEach(button => button.addEventListener("click", handleOperatorClick));
  
  
  const clearButton = document.getElementById("clear");
  clearButton.addEventListener("click", handleClearClick);
 
  const calculateButton = document.getElementById("calculate");
  calculateButton.addEventListener("click", handleCalculateClick);
  
