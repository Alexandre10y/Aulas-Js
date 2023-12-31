document.addEventListener("DOMContentLoaded", function () {
    const calculateButton = document.getElementById("calculateButton");
    
    calculateButton.addEventListener("click", calculate);
  
    function calculate() {
      const num1 = parseFloat(document.getElementById("num1").value);
      const num2 = parseFloat(document.getElementById("num2").value);
      const operator = document.getElementById("operator").value;
  
      let result;
  
      switch (operator) {
        case "add":
          result = num1 + num2;
          break;
        case "subtract":
          result = num1 - num2;
          break;
        case "multiply":
          result = num1 * num2;
          break;
        case "divide":
          result = num1 / num2;
          break;
      }
  
      alert("Resultado: " + result);
    }
  });
  